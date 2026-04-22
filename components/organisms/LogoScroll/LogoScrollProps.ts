import type { ComponentType, SVGProps } from "react"

export type LogoEntry = {
  id: string
  component: ComponentType<SVGProps<SVGSVGElement>>
}

export type LogoScrollProps = {
  sideText?: string
  speed?: number
  imageLibrary?: LogoEntry[]
  logos: Array<{
    id: string
    width?: number
    height?: number
  }>
}