import { type FormHeadingProps } from "./FormHeadingProps"

export function FormHeading({ title, description }: FormHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && (
        <p className="text-sm text-balance text-muted-foreground">{description}</p>
      )}
    </div>
  )
}