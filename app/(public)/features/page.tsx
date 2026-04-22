import Link from "next/link"
import { FileText, CloudArrowUp, ChartBar, UsersThree, LockKey, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr"
import type { Icon } from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "@/components/atoms/FeatureCard"
import { getAllPublishedFeatures } from "@/lib/content/features"

const iconMap: Record<string, Icon> = {
  FileText,
  CloudArrowUp,
  ChartBar,
  UsersThree,
  LockKey,
  ArrowsClockwise,
}

export const metadata = {
  title: "Features | AF Finance",
  description: "Explore AF Finance capabilities and deep-dive pages for each feature.",
}

export default function FeaturesPage() {
  const features = getAllPublishedFeatures()

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="outline" className="rounded-full px-4 py-1 text-xs tracking-widest uppercase">
          Feature Library
        </Badge>
        <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Deep dives for every AF Finance capability
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start with an overview, then open each feature page for implementation details and usage context.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <Link key={feature.slug} href={feature.permalink}>
            <FeatureCard
              icon={iconMap[feature.icon]}
              title={feature.title}
              description={feature.summary}
              eyebrow={`Feature ${String(feature.order).padStart(2, "0")}`}
              ctaText="Read feature page →"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
