import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { MDXContent } from "@/components/mdx-content"
import { FeatureDetailHeroTransition } from "@/components/features/FeatureDetailHeroTransition"
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
      <FeatureDetailHeroTransition
        slug={feature.slug}
        title={feature.title}
        summary={feature.summary}
      />

      <div className="mdx-content mt-10">
        <MDXContent code={feature.code} />
      </div>
    </article>
  )
}
