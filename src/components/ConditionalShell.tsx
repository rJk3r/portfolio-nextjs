"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { Header } from "./ui/common/Header"
import { Footer } from "./ui/common/Footer"

/**
 * ConditionalShell: client-side wrapper that hides Header/Footer when
 * on the root path ('/'). It also toggles a `no-ui` class on <body>
 * when on root so you can scope CSS (optional).
 */
export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isRoot = pathname === "/" || pathname === ""

  React.useEffect(() => {
    if (isRoot) {
      document.body.classList.add("no-ui")
    } else {
      document.body.classList.remove("no-ui")
    }
    return () => {
      document.body.classList.remove("no-ui")
    }
  }, [isRoot])

  return (
    <>
      {!isRoot && <Header />}
      {children}
      {!isRoot && <Footer />}
    </>
  )
}
