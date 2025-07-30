'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'
import { Wallet, CreditCard, BarChart3 } from 'lucide-react'

export const ConnectToWallet = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 flex flex-col items-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* App Header */}
      <motion.div
        className="flex items-center gap-2 mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Wallet className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">SafeSpend</h1>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        className="text-center max-w-2xl mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Smarter Family Wallets.
        </h2>
        <p className="text-lg text-gray-600">
          SafeSpend empowers families or groups to manage shared finances with customizable spending caps,
          categorized budgets, and insightful monthly reports — built on secure blockchain infrastructure.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {[
          {
            title: 'Spending Limits',
            icon: <CreditCard className="text-blue-600 w-6 h-6" />,
            desc: 'Set custom spending limits per member to ensure control and avoid overuse.'
          },
          {
            title: 'Category Control',
            icon: <Wallet className="text-blue-600 w-6 h-6" />,
            desc: 'Restrict or monitor usage by categories like groceries, gaming, or subscriptions.'
          },
          {
            title: 'Monthly Reports',
            icon: <BarChart3 className="text-blue-600 w-6 h-6" />,
            desc: 'Visual summaries and analytics of how funds were used across the group.'
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:rotate-1 hover:scale-105 transition-transform ease-in-out"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Wallet Connect */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <ConnectButton />
      </motion.div>
    </motion.div>
  )
}
