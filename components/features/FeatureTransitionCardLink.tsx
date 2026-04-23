"use client"

import Link from "next/link"
import {
  ArrowsClockwise,
  ChartBar,
  CloudArrowUp,
  FileText,
  LockKey,
  UsersThree,
} from "@phosphor-icons/react"
import type { Icon } from "@phosphor-icons/react"
import { motion } from "motion/react"

import { FeatureCard } from "@/components/atoms/FeatureCard"
import { getFeatureCardTransitionId } from "@/lib/features/transition-ids"

type FeatureTransitionCardLinkProps = {
  slug: string
  permalink: string
  order: number
  title: string
  summary: string
  icon: string
}

const iconMap: Record<string, Icon> = {
  FileText,
  CloudArrowUp,
  ChartBar,
  UsersThree,
  LockKey,
  ArrowsClockwise,
}

export function FeatureTransitionCardLink({
  slug,
  permalink,
  order,
  title,
  summary,
  icon,
}: FeatureTransitionCardLinkProps) {
  return (
    <Link href={permalink} prefetch={false}>
      <motion.div layoutId={getFeatureCardTransitionId(slug)}>
        <FeatureCard
          icon={iconMap[icon]}
          title={title}
          description={summary}
          eyebrow={`Feature ${String(order).padStart(2, "0")}`}
          ctaText="Read feature page →"
        />
      </motion.div>
    </Link>
  )
}
