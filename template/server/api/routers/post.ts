import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const postRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(async ({ input }) => {
    // Simulate some async work
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      greeting: `Hello ${input.text}`,
      timestamp: new Date().toISOString(),
    };
  }),

  increment: publicProcedure.mutation(async () => {
    // Simulate some async work
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: 'Counter incremented successfully!',
    };
  }),
});
