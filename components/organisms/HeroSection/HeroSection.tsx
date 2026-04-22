import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShieldCheck, CloudCheck, ChartLine } from "@phosphor-icons/react/dist/ssr"
import { TrustBadge } from "@/components/atoms/TrustBadge"
import { TextEffect } from "@/components/TextEffect"
import { PremiumBeamSurface } from "@/components/ui/beam-surface"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-40 bg-[linear-gradient(to_bottom,transparent_60%,hsl(var(--background))_100%),repeating-linear-gradient(0deg,transparent,transparent_39px,hsl(var(--border))_39px,hsl(var(--border))_40px),repeating-linear-gradient(90deg,transparent,transparent_39px,hsl(var(--border))_39px,hsl(var(--border))_40px)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />

            <PremiumBeamSurface
                className="relative z-10 mx-auto max-w-5xl rounded-3xl px-6 pt-24 pb-20 text-center"
                beamProps={{
                    duration: 10,
                    size: 180,
                    borderWidth: 2,
                }}
            >

                {/* pill badge — wrap the non-string shell yourself */}
                <div className="mb-6 inline-flex">
                    <Badge variant="outline" className="rounded-full px-4 py-1 text-xs font-medium tracking-widest uppercase border-primary/30 text-primary bg-primary/5">
                        <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} delay={0} as="span">
                            Cloud Finance Platform
                        </TextEffect>
                    </Badge>
                </div>

                {/* headline — h1 owns the styling, TextEffect only animates the text */}
                <h1 className="font-heading font-semibold text-5xl leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} delay={0.1} as="span">
                        Finance, simplified.
                    </TextEffect>
                    <br />
                    <TextEffect preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} delay={0.2} as="span">
                        Business, accelerated.
                    </TextEffect>
                </h1>

                {/* subheadline */}
                <TextEffect
                    preset="fade-in-blur"
                    className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
                    speedReveal={1.1}
                    speedSegment={0.3}
                    delay={0.3}
                >
                    AF Finance brings invoicing, accounting, and financial reporting into one secure cloud platform — so you can focus on growing your business, not managing spreadsheets.
                </TextEffect>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="px-8 font-semibold tracking-wide" asChild>
                        <Link href="/login">
                            Start for free
                            <ArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 font-semibold tracking-wide" asChild>
                        <Link href="/products">See pricing</Link>
                    </Button>
                </div>

                {/* trust line */}
                <TextEffect
                    preset="fade-in-blur"
                    className="mt-6 text-xs text-muted-foreground tracking-wide"
                    speedReveal={1.1}
                    speedSegment={0.3}
                    delay={0.5}
                >
                    No credit card required · Free plan available · Cancel anytime
                </TextEffect>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 border-t border-border pt-10">
                    <TrustBadge icon={<ShieldCheck weight="duotone" className="size-5 text-primary" />} title="Bank-grade security" description="256-bit encryption, SOC 2 compliant" />
                    <div className="hidden sm:block w-px h-10 bg-border" />
                    <TrustBadge icon={<CloudCheck weight="duotone" className="size-5 text-primary" />} title="Always available" description="99.9% uptime SLA, global cloud infrastructure" />
                    <div className="hidden sm:block w-px h-10 bg-border" />
                    <TrustBadge icon={<ChartLine weight="duotone" className="size-5 text-primary" />} title="Real-time reporting" description="Live dashboards, instant PDF exports" />
                </div>

            </PremiumBeamSurface>
        </section>
    )
}