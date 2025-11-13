"use client"

import { createAppKit } from "@reown/appkit/react"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { crossbell } from "viem/chains"
import { APP_NAME, WALLET_CONNECT_V2_PROJECT_ID } from "~/lib/env"

// Metadata for AppKit
const metadata = {
  name: APP_NAME,
  description: "An open-source creative community written on the blockchain.",
  url: typeof window !== "undefined" ? window.location.origin : "https://xlog.app",
  icons: ["https://xlog.app/assets/logo.png"],
}

/**
 * Initialize AppKit with xLog/Crossbell configuration
 * This provides an enhanced WalletConnect modal alongside Crossbell Connect Kit
 */
export const initializeAppKit = () => {
  if (!WALLET_CONNECT_V2_PROJECT_ID) {
    console.warn("WalletConnect Project ID not set")
    return null
  }

  // Create WagmiAdapter for AppKit
  const wagmiAdapter = new WagmiAdapter({
    networks: [crossbell] as any,
    projectId: WALLET_CONNECT_V2_PROJECT_ID,
  })

  // Initialize AppKit with proper configuration
  if (typeof window !== "undefined") {
    try {
      createAppKit({
        adapters: [wagmiAdapter],
        networks: [crossbell] as any,
        projectId: WALLET_CONNECT_V2_PROJECT_ID,
        metadata,
        features: {
          analytics: true, // Enable analytics
          email: false, // Disable email login (xLog uses Crossbell auth)
          socials: [], // Disable social logins (xLog uses Crossbell auth)
          emailShowWallets: true,
        },
        themeMode: "dark",
        themeVariables: {
          "--w3m-accent": "rgb(var(--tw-color-accent))",
        },
      })
    } catch (error) {
      console.error("Failed to initialize AppKit:", error)
    }
  }

  return wagmiAdapter
}

/**
 * AppKit Button Component
 * Can be used as an alternative to Crossbell Connect Kit button
 */
export const AppKitButton = () => {
  return <appkit-button />
}

/**
 * AppKit Network Button Component
 */
export const AppKitNetworkButton = () => {
  return <appkit-network-button />
}
