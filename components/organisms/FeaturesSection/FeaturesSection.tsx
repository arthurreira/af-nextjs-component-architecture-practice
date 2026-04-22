'use client'


import { Badge } from "@/components/ui/badge"
import {
  FileText, CloudArrowUp, ChartBar,
  UsersThree, LockKey, ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr"
import type { Icon } from "@phosphor-icons/react"
import { FeatureCard } from "@/components/atoms/FeatureCard"
import featuresData from "@/data/features.json"
import { TextEffect } from "@/components/TextEffect"
import { InteractiveBeamSurface } from "@/components/ui/beam-surface"


const iconMap: Record<string, Icon> = {
  FileText, CloudArrowUp, ChartBar,
  UsersThree, LockKey, ArrowsClockwise,
}

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-12">

      {/* heading */}
      <div className="mx-auto max-w-2xl text-center mb-16">
        <div className="mb-4 inline-flex">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-xs font-medium tracking-widest uppercase border-primary/30 text-primary bg-primary/5">
            <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} delay={0} as="span">
              Everything you need
            </TextEffect>
            
          </Badge>
        </div>
        <h5 className="font-heading font-semibold text-4xl tracking-tight text-foreground sm:text-5xl">
          <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} delay={0.1} as="span">
            Built for how modern businesses manage money
          </TextEffect>
        </h5>
        <TextEffect
          preset="fade-in-blur"
          className="mt-4 text-lg text-muted-foreground leading-relaxed"
          speedReveal={1.1}
          speedSegment={0.3}
          delay={0.2}
        >
          One platform. Every financial tool your business needs to stay organised, compliant and in control.
        </TextEffect>
      </div>


      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featuresData.map((feature) => (
          <div key={feature.title}>
            <InteractiveBeamSurface
              className="rounded-xl"
              beamProps={{
                duration: 8,
                size: 220,
                borderWidth: 2,
              }}
            >
              <FeatureCard
                icon={iconMap[feature.icon]}
                title={feature.title}
                description={feature.description}
              />
            </InteractiveBeamSurface>
          </div>
        ))}
      </div>
    </section>
  )
}