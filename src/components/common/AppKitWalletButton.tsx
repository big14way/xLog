"use client"

import { useAppKit } from "@reown/appkit/react"
import { Button } from "@mantine/core"

/**
 * Custom AppKit Connect Button with xLog styling
 * This provides an alternative to Crossbell Connect Kit with enhanced WalletConnect features
 */
export const AppKitWalletButton = () => {
  const { open } = useAppKit()

  return (
    <Button
      onClick={() => open()}
      variant="outline"
      size="sm"
      className="text-accent hover:bg-accent/10"
    >
      Connect with AppKit
    </Button>
  )
}

/**
 * Network Switcher Button using AppKit
 */
export const AppKitNetworkSwitcher = () => {
  const { open } = useAppKit()

  return (
    <Button
      onClick={() => open({ view: "Networks" })}
      variant="subtle"
      size="sm"
      className="text-accent hover:bg-accent/10"
    >
      Switch Network
    </Button>
  )
}
