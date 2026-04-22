import features from "@/.velite/features.json"

export type FeatureContent = (typeof features)[number]

export function getAllPublishedFeatures(): FeatureContent[] {
  return features
    .filter((feature) => feature.published)
    .slice()
    .sort((a, b) => a.order - b.order)
}

export function getFeatureBySlug(slug: string): FeatureContent | null {
  const feature = getAllPublishedFeatures().find((item) => item.slug === slug)
  return feature ?? null
}

export function getFeatureSlugs(): string[] {
  return getAllPublishedFeatures().map((feature) => feature.slug)
}
