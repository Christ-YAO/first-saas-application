'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};
