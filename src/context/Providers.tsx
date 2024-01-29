"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());

  return (
    <UserProvider>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </AppRouterCacheProvider>
    </UserProvider>
  );
}
