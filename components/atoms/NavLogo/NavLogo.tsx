import Image from "next/image"
import Link from "next/link"

import logoAF from "@/public/logoAF.png"
import { cn } from "@/lib/utils"

import type { NavLogoProps } from "./NavLogoProps"

export function NavLogo({ href = "/", className }: NavLogoProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center rounded-full border border-border p-1", className)}
      aria-label="AF Finance home"
    >
      <Image src={logoAF} alt="AF Finance" width={28} height={28} className="rounded-full" priority />
    </Link>
  )
}
