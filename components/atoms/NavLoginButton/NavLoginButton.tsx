import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import type { NavLoginButtonProps } from "./NavLoginButtonProps"

export function NavLoginButton({
  href = "/login",
  label = "Login",
  className,
}: NavLoginButtonProps) {
  return (
    <Button asChild size="sm" className={cn("font-medium", className)}>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
