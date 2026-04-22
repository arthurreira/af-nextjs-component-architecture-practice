import { DefaultCard } from "@/components/ui/beam-surface"
import { cn } from "@/lib/utils"
import { FeatureCardProps } from "./FeatureCardProps"

export function FeatureCard({
  icon: Icon,
  title,
  description,
  eyebrow,
  ctaText,
  className,
}: FeatureCardProps) {
  return (
    <DefaultCard
      className={cn(
        "flex h-full flex-col gap-4 rounded-xl border border-border bg-transparent p-6 transition-colors duration-200 hover:bg-muted/60 dark:hover:bg-zinc-900/60",
        className
      )}
    >
      {Icon && (
        <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background">
          <Icon weight="duotone" className="size-5 text-primary" />
        </div>
      )}
      <div className="flex flex-col gap-2">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">{eyebrow}</p>
        )}
        <h3 className="font-semibold text-base text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {ctaText && <p className="mt-3 text-sm font-semibold text-primary">{ctaText}</p>}
      </div>
    </DefaultCard>
  )
}