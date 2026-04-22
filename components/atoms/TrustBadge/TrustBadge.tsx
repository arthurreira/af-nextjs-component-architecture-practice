import { TrustBadgeProps } from "./TrustBadgeProps"

export function TrustBadge({
	icon,
	title,
	description,
}: TrustBadgeProps) {
	return (
		<div className="flex items-start gap-3 text-left max-w-50">
			<div className="mt-0.5 shrink-0">{icon}</div>
			<div>
				<p className="text-sm font-semibold text-foreground">{title}</p>
				<p className="text-xs text-muted-foreground mt-0.5">{description}</p>
			</div>
		</div>
	)
}
