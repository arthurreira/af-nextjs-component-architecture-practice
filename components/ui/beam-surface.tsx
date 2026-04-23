"use client"

import { useState, type FocusEvent, type ReactNode } from "react"

import { BorderBeam, type BorderBeamProps } from "@/components/magicui/border-beam"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

type BeamConfig = Pick<BorderBeamProps, "size" | "duration" | "delay" | "colorFrom" | "colorTo" | "reverse" | "initialOffset" | "borderWidth">

type SurfaceProps = {
  children: ReactNode
  className?: string
  beamProps?: Partial<BeamConfig>
}

type InteractiveSurfaceProps = SurfaceProps & {
  defaultActive?: boolean
}

export function PremiumBeamSurface({ children, className, beamProps }: SurfaceProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-[inherit]", className)}>
      <div className="relative z-10">{children}</div>
      <div className="pointer-events-none absolute inset-0 z-20">
        <BorderBeam {...beamProps} />
      </div>
    </div>
  )
}

export function InteractiveBeamSurface({
  children,
  className,
  beamProps,
  defaultActive = false,
}: InteractiveSurfaceProps) {
  const [isActive, setIsActive] = useState(defaultActive)

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(false)
    }
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-[inherit]", className)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocusCapture={() => setIsActive(true)}
      onBlurCapture={handleBlurCapture}
    >
      <div className="relative z-10">{children}</div>
      {isActive && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <BorderBeam {...beamProps} />
        </div>
      )}
    </div>
  )
}

type DefaultCardProps = React.ComponentProps<typeof Card>

export function DefaultCard({ className, ...props }: DefaultCardProps) {
  return <Card className={cn("relative", className)} {...props} />
}
