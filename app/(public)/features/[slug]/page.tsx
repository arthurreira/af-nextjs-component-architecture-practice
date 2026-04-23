import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { MDXContent } from "@/components/mdx-content"
import { Badge } from "@/components/ui/badge"
import { getFeatureBySlug, getFeatureSlugs } from "@/lib/content/features"

type FeatureDetailPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getFeatureSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: FeatureDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const feature = getFeatureBySlug(slug)

  if (!feature) {
    return {
      title: "Feature not found | AF Finance",
      description: "The requested feature page could not be found.",
    }
  }

  return {
    title: feature.seoTitle,
    description: feature.seoDescription,
    alternates: {
      canonical: feature.permalink,
    },
  }
}

export default async function FeatureDetailPage({ params }: FeatureDetailPageProps) {
  const { slug } = await params
  const feature = getFeatureBySlug(slug)

  if (!feature) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <Badge variant="outline" className="rounded-full px-4 py-1 text-xs tracking-widest uppercase">
          Feature deep dive
        </Badge>
        <h1 className="mt-6 text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {feature.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{feature.summary}</p>
      </div>

      <div className="mdx-content mt-10">
        <MDXContent code={feature.code} />
      </div>
    </article>
  )
}
