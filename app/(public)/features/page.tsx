import { Badge } from "@/components/ui/badge"
import { FeatureTransitionCardLink } from "@/components/features/FeatureTransitionCardLink"
import { getAllPublishedFeatures } from "@/lib/content/features"

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
          <FeatureTransitionCardLink
            key={feature.slug}
            slug={feature.slug}
            permalink={feature.permalink}
            order={feature.order}
            title={feature.title}
            summary={feature.summary}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  )
}
