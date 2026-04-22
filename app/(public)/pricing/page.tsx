"use client"

import { Package, Diamond, UsersThree, Rocket, SealCheck } from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PremiumBeamSurface } from "@/components/ui/beam-surface"
import { cn } from "@/lib/utils"
import productsData from "@/data/products.json"

const iconMap = {
  Package,
  Diamond,
  UsersThree,
  Rocket,
} as const

type Product = {
  id: string
  name: string
  description: string
  price: number | null
  badge: string | null
  isRecommended: boolean
  icon: keyof typeof iconMap
  features: string[]
}

export default function PricingPage() {
  const products = productsData as Product[]

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-balance text-center font-semibold text-4xl tracking-[-0.035em] sm:text-5xl">
        Pick your plan
      </h2>
      <p className="mt-2 text-balance text-center text-lg text-muted-foreground sm:mt-4 sm:text-2xl">
        Flexible pricing designed to grow with you.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <PlanCard key={product.id} plan={product} />
        ))}
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Product }) {
  const Icon = iconMap[plan.icon]
  const cardContent = (
    <>
      <div className="relative overflow-hidden rounded-lg border bg-background px-6 pt-5 pb-4">
        {plan.badge && (
          <Badge className="absolute top-3 right-3 bg-primary/20 text-primary dark:bg-primary/30">
            {plan.badge}
          </Badge>
        )}

        {plan.isRecommended && (
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-50"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75,85,99,0.08) 19px, rgba(75,85,99,0.08) 20px),
                repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75,85,99,0.08) 19px, rgba(75,85,99,0.08) 20px),
                radial-gradient(circle at 20px 20px, rgba(55,65,81,0.12) 2px, transparent 2px),
                radial-gradient(circle at 40px 40px, rgba(55,65,81,0.12) 2px, transparent 2px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        )}

        <Icon weight="duotone" className="relative z-10 mb-5 text-primary" />
        <h3 className="relative z-10 font-medium text-2xl tracking-tight">{plan.name}</h3>
        <p className="relative z-10 mt-1 mb-2 text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mt-1 grow rounded-lg border bg-background px-6 pt-5 pb-10">
        <p className="mt-4 font-semibold text-4xl">{plan.price === null ? "Custom" : `$${plan.price}`}</p>
        <p className="mt-1 text-muted-foreground text-sm">
          {plan.price === null ? "contact us" : "one-time payment"}
        </p>

        <Button
          className="my-6 w-full"
          size="lg"
          variant={plan.isRecommended ? "default" : "outline"}
          asChild
        >
          <a href="#">{plan.price === null ? "Contact Us" : "Get Started"}</a>
        </Button>

        <ul className="mt-4 space-y-2">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <SealCheck weight="duotone" className="size-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </>
  )

  if (plan.isRecommended) {
    return (
      <PremiumBeamSurface
        className={cn("relative flex flex-col rounded-xl border bg-muted/50 p-1 shadow-lg dark:bg-muted/75")}
        beamProps={{ duration: 8, size: 150, borderWidth: 2 }}
      >
        {cardContent}
      </PremiumBeamSurface>
    )
  }

  return <div className={cn("relative flex flex-col rounded-xl border bg-muted/50 p-1 dark:bg-muted/75")}>{cardContent}</div>
}
