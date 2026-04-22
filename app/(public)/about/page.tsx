import Link from "next/link"
import { Sparkle, CloudCheck, ShieldCheck } from "@phosphor-icons/react/dist/ssr"

import { FeatureCard } from "@/components/atoms/FeatureCard"
import { Badge } from "@/components/ui/badge"
import { InteractiveBeamSurface } from "@/components/ui/beam-surface"
import { Button } from "@/components/ui/button"
import productsData from "@/data/products.json"

export default function AboutPage() {
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
					<FeatureCard
						icon={Sparkle}
						eyebrow="Positioning"
						title="Finance, simplified."
						description="We keep the product focused on practical workflows that remove complexity instead of adding it."
						className="rounded-2xl bg-card"
					/>
				</InteractiveBeamSurface>
				<InteractiveBeamSurface className="rounded-2xl" beamProps={{ size: 180, duration: 8, borderWidth: 2 }}>
					<FeatureCard
						icon={CloudCheck}
						eyebrow="Operating Model"
						title="Cloud-first by design"
						description="Always-available systems, secure infrastructure, and live sync mean your numbers are where you are."
						className="rounded-2xl bg-card"
					/>
				</InteractiveBeamSurface>
				<InteractiveBeamSurface className="rounded-2xl" beamProps={{ size: 180, duration: 8, borderWidth: 2 }}>
					<FeatureCard
						icon={ShieldCheck}
						eyebrow="Trust"
						title="Security as default"
						description="Encryption, compliance, and role-based collaboration are built in so teams can scale with confidence."
						className="rounded-2xl bg-card"
					/>
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
						<Link href="/pricing">Explore plans</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/login">Start for free</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}


