"use client"

import { motion } from "motion/react"

import { Badge } from "@/components/ui/badge"
import { getFeatureCardTransitionId } from "@/lib/features/transition-ids"

type FeatureDetailHeroTransitionProps = {
  slug: string
  title: string
  summary: string
}

export function FeatureDetailHeroTransition({
  slug,
  title,
  summary,
}: FeatureDetailHeroTransitionProps) {
  return (
    <motion.div
      layoutId={getFeatureCardTransitionId(slug)}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
    >
      <Badge variant="outline" className="rounded-full px-4 py-1 text-xs tracking-widest uppercase">
        Feature deep dive
      </Badge>
      <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{summary}</p>
    </motion.div>
  )
}
