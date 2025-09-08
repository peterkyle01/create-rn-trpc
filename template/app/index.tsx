import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { THEME } from '@/lib/theme';
import { api } from '@/server/trpc/react';
import { Stack } from 'expo-router';
import { MoonStarIcon, RefreshCwIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { View } from 'react-native';

const SCREEN_OPTIONS = {
  light: {
    title: 'Expo + tRPC + Reusables',
    headerShadowVisible: false,
    headerStyle: { backgroundColor: THEME.light.background },
    headerRight: () => <ThemeToggle />,
  },
  dark: {
    title: 'Expo + tRPC + Reusables',
    headerShadowVisible: false,
    headerStyle: { backgroundColor: THEME.dark.background },
    headerRight: () => <ThemeToggle />,
  },
};

function Screen() {
  const { colorScheme } = useColorScheme();
  const [count, setCount] = React.useState(0);

  const { data, isLoading, error, refetch } = api.post.hello.useQuery(
    { text: `World! (Count: ${count})` },
    {
      // Optional: add some configuration
      refetchOnWindowFocus: false,
    }
  );

  const incrementMutation = api.post.increment.useMutation({
    onSuccess: () => {
      setCount((prev) => prev + 1);
    },
  });

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS[colorScheme ?? 'light']} />
      <View className="flex-1 items-center justify-center gap-6 p-6">
        {/* Header */}
        <View className="items-center gap-2">
          <Text className="text-3xl font-bold">Welcome!</Text>
          <Text className="text-center text-muted-foreground">
            A minimal template with Expo, tRPC, and React Native Reusables
          </Text>
        </View>

        {/* tRPC Query Example */}
        <View className="w-full max-w-md gap-4 rounded-lg border border-border bg-card p-4">
          <Text className="text-lg font-semibold">tRPC Query</Text>

          {isLoading && (
            <View className="items-center py-4">
              <View className="animate-spin">
                <Icon as={RefreshCwIcon} className="size-6 text-muted-foreground" />
              </View>
              <Text className="mt-2 text-sm text-muted-foreground">Loading...</Text>
            </View>
          )}

          {data && (
            <View className="gap-2">
              <Text className="text-sm font-medium">Response:</Text>
              <View className="rounded bg-muted p-3">
                <Text className="font-mono text-sm">{data.greeting}</Text>
              </View>
            </View>
          )}

          {error && (
            <View className="rounded bg-destructive/10 p-3">
              <Text className="text-sm text-destructive">Error: {error.message}</Text>
            </View>
          )}

          <Button onPress={() => refetch()} disabled={isLoading} size="sm">
            <Text>Refetch</Text>
          </Button>
        </View>

        {/* tRPC Mutation Example */}
        <View className="w-full max-w-md gap-4 rounded-lg border border-border bg-card p-4">
          <Text className="text-lg font-semibold">tRPC Mutation</Text>
          <Text className="text-sm text-muted-foreground">
            Count: <Text className="font-mono font-bold">{count}</Text>
          </Text>

          <Button
            onPress={() => incrementMutation.mutate()}
            disabled={incrementMutation.isPending}
            variant="outline"
            size="sm">
            <Text>{incrementMutation.isPending ? 'Incrementing...' : 'Increment'}</Text>
          </Button>
        </View>

        {/* Getting Started */}
        <View className="mt-4 gap-2">
          <Text className="text-center text-sm text-muted-foreground">
            Edit <Text className="font-mono font-medium">app/index.tsx</Text> to get started
          </Text>
          <Text className="text-center text-sm text-muted-foreground">
            Add more tRPC routes in{' '}
            <Text className="font-mono font-medium">server/api/routers/</Text>
          </Text>
        </View>
      </View>
    </>
  );
}

export default Screen;

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
