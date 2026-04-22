"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react"

type PublicRouteTransitionsProps = {
  children: ReactNode
}

export function PublicRouteTransitions({ children }: PublicRouteTransitionsProps) {
  const pathname = usePathname() ?? ""
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])

  const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
  const animate = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
  const exit = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
  const transition = shouldReduceMotion
    ? { duration: 0.12, ease: "linear" as const }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <LayoutGroup id="public-route-transitions">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={pathname}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className="h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  )
}
