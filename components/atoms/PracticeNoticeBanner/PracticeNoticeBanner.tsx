"use client"

import { useEffect, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import type { PracticeNoticeBannerProps } from "./PracticeNoticeBannerProps"

const DEFAULT_STORAGE_KEY = "af-practice-notice-dismissed:v1"

export function PracticeNoticeBanner({
  className,
  storageKey = DEFAULT_STORAGE_KEY,
}: PracticeNoticeBannerProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    try {
      const dismissed = window.localStorage.getItem(storageKey) === "true"
      setIsVisible(!dismissed)
    } catch {
      setIsVisible(true)
    }
  }, [storageKey])

  const dismissBanner = () => {
    try {
      window.localStorage.setItem(storageKey, "true")
    } catch {
      // If storage is blocked, hide for current session only.
    }
    setIsVisible(false)
  }

  if (!isMounted || !isVisible) {
    return null
  }

  return (
    <section
      role="region"
      aria-label="Practice project disclaimer"
      className={cn(
        "border-b border-primary/30 bg-primary/5 px-4 py-3",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <p className="text-sm leading-relaxed text-foreground">
          <span className="font-semibold">Practice project notice:</span>{" "}
          This website is a learning/demo build. Product names, users, and financial data shown here are sample content and not real customer data.
        </p>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-xs uppercase tracking-wider">
                Learn more
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Practice Environment Disclaimer</DialogTitle>
                <DialogDescription>
                  This project is published for portfolio and learning purposes.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>All displayed names, accounts, and metrics are fictional demo examples.</p>
                <p>No real customer information is stored or processed in this demo website.</p>
                <p>Do not use this project as a production financial system.</p>
              </div>
              <DialogFooter showCloseButton />
            </DialogContent>
          </Dialog>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={dismissBanner}
            aria-label="Dismiss practice notice"
            className="text-xs uppercase tracking-wider"
          >
            Dismiss
          </Button>
        </div>
      </div>
    </section>
  )
}
