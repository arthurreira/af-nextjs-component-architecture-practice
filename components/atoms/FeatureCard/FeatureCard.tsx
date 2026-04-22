import { DefaultCard } from "@/components/ui/beam-surface"
import { FeatureCardProps } from "./FeatureCardProps"

// FeatureCard — hover effect via Tailwind, no AnimatedBackground needed
export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <DefaultCard className="flex h-full flex-col gap-4 rounded-xl border border-border bg-transparent p-6 transition-colors duration-200 hover:bg-muted/60 dark:hover:bg-zinc-900/60">
      <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background">
        <Icon weight="duotone" className="size-5 text-primary" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-base text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </DefaultCard>
  )
}