'use client';

import { ReactNode } from "react";
import { WagmiProvider, http } from "wagmi";
import { sepolia, anvil } from "wagmi/chains";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { morphTestnet } from '@/lib/chains/morphTestnet';

const config = getDefaultConfig({
  appName: "Ledger Vote",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  chains: [sepolia, anvil, morphTestnet],
  ssr: true,
});

const queryClient = new QueryClient();

export default function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
