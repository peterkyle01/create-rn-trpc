# React Native + tRPC Template

A modern, full-stack React Native template featuring end-to-end type safety with tRPC, beautiful UI components, and cross-platform support.

<div align="center">

![React Native](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~53.0-000020.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-~5.8-blue.svg)
![tRPC](https://img.shields.io/badge/tRPC-11.5-2596be.svg)

</div>

## ✨ Features

- 🚀 **Full-Stack Type Safety** - End-to-end type safety with tRPC
- ⚛️ **Modern React Native** - Built with Expo Router and React 19
- 🎨 **Beautiful UI** - Styled with Tailwind CSS via NativeWind
- 📦 **Pre-built Components** - Powered by React Native Reusables
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Cross-Platform** - Runs on iOS, Android, and Web
- 🔧 **Developer Experience** - TypeScript, Prettier, and hot reload
- 🏗️ **New Architecture** - React Native's new architecture enabled
- 🌐 **Environment Management** - Type-safe environment variables with T3 Env

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Expo CLI (optional, but recommended)

### Installation

1. **Create a new project**

```bash
npx react-native-reusables/cli@latest init -t create-rn-trpc my-app
cd my-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your app**

- **iOS**: Press `i` in the terminal (Mac only)
- **Android**: Press `a` in the terminal
- **Web**: Press `w` in the terminal
- **Physical Device**: Scan the QR code with Expo Go app

## 📱 Platform Support

This template runs everywhere React Native does:

- **iOS** (Simulator & Device)
- **Android** (Emulator & Device)
- **Web** (Chrome, Firefox, Safari)
- **Expo Go** (For quick testing)

## 🛠️ Development

### Adding UI Components

Add more reusable components using the CLI:

```bash
npx react-native-reusables/cli@latest add [component-names]
```

**Examples:**

```bash
# Add specific components
npx react-native-reusables/cli@latest add input textarea card

# Interactive selection
npx react-native-reusables/cli@latest add

# Install all components
npx react-native-reusables/cli@latest add --all
```

### tRPC API Development

1. **Add new routes** in `server/api/routers/`
2. **Define procedures** using the tRPC router
3. **Use in components** with the React Query hooks

**Example:**

```typescript
// server/api/routers/user.ts
export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return { id: input.id, name: "John Doe" };
    }),
});

// In your component
const { data } = api.user.getById.useQuery({ id: "123" });
```

### Environment Variables

Configure environment variables in `.env` and update `env.js`:

```bash
# .env
EXPO_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
```

### Scripts

- `npm run dev` - Start development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on Web
- `npm run clean` - Clean cache and node_modules

### Development Logs & Debugging

The template includes helpful development logs:

**tRPC Timing Logs:**

```
[TRPC] post.hello took 1232ms to execute
```

These logs help identify slow API calls. To disable them, edit `server/api/trpc.ts` and remove the `console.log` in the timing middleware.

**TanStack Query Logs:**
The colorful query logs come from React Query's dev tools. To disable them, set `defaultOptions.queries.meta.logging = false` in your tRPC client configuration.

**Artificial Development Delay:**
The template adds 50-200ms delay to API calls in development to simulate network latency. You can remove this by modifying the timing middleware in `server/api/trpc.ts`.

## 🏗️ Project Structure

```
├── app/                           # Expo Router pages & API routes
│   ├── _layout.tsx               # Root layout with providers
│   ├── index.tsx                 # Home screen
│   ├── +html.tsx                 # Custom HTML document (web)
│   ├── +not-found.tsx           # 404 page
│   └── api/
│       └── trpc/
│           └── [trpc]+api.ts     # tRPC API handler
├── assets/
│   └── images/                   # Static images and icons
├── components/                   # Reusable UI components
│   └── ui/                      # Base UI components
│       ├── button.tsx           # Button component
│       ├── icon.tsx             # Icon wrapper
│       └── text.tsx             # Text component
├── lib/                         # Utilities and configurations
│   ├── theme.ts                 # Theme definitions
│   └── utils.ts                 # Utility functions
├── server/                      # tRPC server setup
│   ├── api/
│   │   ├── index.ts             # Main app router
│   │   ├── trpc.ts              # tRPC configuration
│   │   └── routers/
│   │       └── post.ts          # Example post router
│   └── trpc/
│       ├── query-client.ts      # React Query client config
│       └── react.tsx            # tRPC React provider
├── .env.example                 # Environment variables template
├── components.json              # shadcn/ui configuration
├── env.js                       # Type-safe environment config
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Styling

This template uses **Tailwind CSS** through **NativeWind** for styling:

```tsx
<View className="bg-background flex-1 items-center justify-center">
  <Text className="text-foreground text-2xl font-bold">Hello World</Text>
</View>
```

## 🚢 Deployment

Deploy your app using [Expo Application Services (EAS)](https://expo.dev/eas):

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure your project
eas build:configure

# Build for app stores
eas build --platform all

# Submit to app stores
eas submit
```

**Learn more:**

- [EAS Build](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)
- [EAS Update](https://docs.expo.dev/eas-update/introduction/)

## � Tech Stack

This template is built with amazing open-source technologies:

### Core Framework

- **[React Native](https://reactnative.dev/)** - The foundation for cross-platform mobile development
- **[Expo](https://expo.dev/)** - Platform for universal React applications
- **[Expo Router](https://expo.dev/router)** - File-based routing for React Native

### Type Safety & API

- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[tRPC](https://trpc.io/)** - End-to-end type safe APIs
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[T3 Env](https://env.t3.gg/)** - Type-safe environment variables

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native
- **[React Native Reusables](https://reactnativereusables.com/)** - Beautiful, accessible components
- **[Lucide React Native](https://lucide.dev/)** - Beautiful icons

### State Management & Data Fetching

- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **[Superjson](https://github.com/blitz-js/superjson)** - JSON serialization with type safety

### Development Tools

- **[Prettier](https://prettier.io/)** - Code formatting
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Smooth animations

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Special thanks to all the amazing open-source projects that make this template possible:

- The **React Native** team for the incredible framework
- **Expo** team for making React Native development delightful
- **tRPC** team for revolutionizing full-stack TypeScript development
- **Tailwind Labs** for the amazing CSS framework
- **NativeWind** team for bringing Tailwind to React Native
- **React Native Reusables** team for the beautiful component library
- The entire **React** ecosystem and community

---

<div align="center">

**[⭐ Star this project on GitHub](https://github.com/founded-labs/react-native-reusables)** if you find it helpful!

Made with ❤️ by the React Native community

</div>
