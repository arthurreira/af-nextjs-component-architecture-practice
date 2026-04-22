import Link from "next/link"

import {
	FileText,
	CloudArrowUp,
	ChartBar,
	UsersThree,
	LockKey,
	ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr"
import type { Icon } from "@phosphor-icons/react"
import { FeatureCard } from "@/components/atoms/FeatureCard"
import { Badge } from "@/components/ui/badge"
import { DefaultCard, InteractiveBeamSurface } from "@/components/ui/beam-surface"
import { Button } from "@/components/ui/button"
import featuresData from "@/data/features.json"
import productsData from "@/data/products.json"

const iconMap: Record<string, Icon> = {
	FileText,
	CloudArrowUp,
	ChartBar,
	UsersThree,
	LockKey,
	ArrowsClockwise,
}

export default function AboutPage() {
	const highlightedFeatures = featuresData.slice(0, 4)
	const planNames = productsData.map((plan) => plan.name).join(" • ")

	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<div className="mx-auto max-w-3xl text-center">
				<Badge variant="outline" className="rounded-full px-4 py-1 text-xs tracking-widest uppercase">
					About AF Finance
				</Badge>
				<h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
					We built AF Finance so growing teams can run finance without the friction.
				</h1>
				<p className="mt-5 text-lg leading-relaxed text-muted-foreground">
					Our mission is simple: make finance operations feel clear, fast, and dependable.
					From first invoice to monthly reporting, AF Finance helps businesses move from manual busywork
					to confident decision-making.
				</p>
			</div>

			<div className="mt-14 grid gap-6 md:grid-cols-3">
				<InteractiveBeamSurface className="rounded-2xl" beamProps={{ size: 180, duration: 8, borderWidth: 2 }}>
					<DefaultCard className="rounded-2xl border border-border bg-card p-6">
						<p className="text-xs uppercase tracking-widest text-muted-foreground">Positioning</p>
						<h2 className="mt-2 text-xl font-semibold">Finance, simplified.</h2>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
							We keep the product focused on practical workflows that remove complexity instead of adding it.
						</p>
					</DefaultCard>
				</InteractiveBeamSurface>
				<InteractiveBeamSurface className="rounded-2xl" beamProps={{ size: 180, duration: 8, borderWidth: 2 }}>
					<DefaultCard className="rounded-2xl border border-border bg-card p-6">
						<p className="text-xs uppercase tracking-widest text-muted-foreground">Operating Model</p>
						<h2 className="mt-2 text-xl font-semibold">Cloud-first by design</h2>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
							Always-available systems, secure infrastructure, and live sync mean your numbers are where you are.
						</p>
					</DefaultCard>
				</InteractiveBeamSurface>
				<InteractiveBeamSurface className="rounded-2xl" beamProps={{ size: 180, duration: 8, borderWidth: 2 }}>
					<DefaultCard className="rounded-2xl border border-border bg-card p-6">
						<p className="text-xs uppercase tracking-widest text-muted-foreground">Trust</p>
						<h2 className="mt-2 text-xl font-semibold">Security as default</h2>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
							Encryption, compliance, and role-based collaboration are built in so teams can scale with confidence.
						</p>
					</DefaultCard>
				</InteractiveBeamSurface>
			</div>

			

			<div className="mt-14 rounded-2xl  p-8">
				<h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Built to grow with you</h2>
				<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
					Whether you are starting solo or scaling across teams, AF Finance supports clear progression:
					{" "}
					<span className="font-medium text-foreground">{planNames}</span>.
				</p>
				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<Button asChild>
						<Link href="/products">Explore plans</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/login">Start for free</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}


