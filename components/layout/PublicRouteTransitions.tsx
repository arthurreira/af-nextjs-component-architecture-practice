"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

type PublicRouteTransitionsProps = {
  children: ReactNode
}

export function PublicRouteTransitions({ children }: PublicRouteTransitionsProps) {
  const pathname = usePathname() ?? ""

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return <>{children}</>
}
