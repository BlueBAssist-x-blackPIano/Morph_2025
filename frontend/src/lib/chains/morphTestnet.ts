import { defineChain } from 'viem'

export const morphTestnet = defineChain({
  id: 2810,
  name: 'Morph Testnet',
  network: 'morph-testnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc-quicknode-holesky.morphl2.io'] },
    public: { http: ['https://rpc-quicknode-holesky.morphl2.io'] },
  },
  blockExplorers: {
    default: { name: 'Morph Explorer', url: 'https://explorer-holesky.morphl2.io' },
  },
  testnet: true,
} as const)
