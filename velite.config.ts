import { defineConfig, s } from "velite"

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    name: "index",
    clean: true,
  },
  collections: {
    features: {
      name: "Feature",
      pattern: "features/*.mdx",
      schema: s
        .object({
          title: s.string().max(80),
          slug: s.string().regex(/^[a-z0-9-]+$/),
          summary: s.string().max(220),
          icon: s.string(),
          order: s.number().int().nonnegative(),
          seoTitle: s.string().max(90),
          seoDescription: s.string().max(180),
          published: s.boolean().default(true),
          code: s.mdx(),
          excerpt: s.excerpt(),
          metadata: s.metadata(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/features/${data.slug}`,
        })),
    },
  },
})
