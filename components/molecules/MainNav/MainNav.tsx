"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, List, X } from "@phosphor-icons/react"
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  NavigationMenuIndicator, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { NavLoginButton } from "@/components/atoms/NavLoginButton"
import { NavLogo } from "@/components/atoms/NavLogo"
import { cn } from "@/lib/utils"
import { mainNav, type NavItem } from "@/config/nav"

type MainNavProps = {
  items?: NavItem[]
}

export function MainNav({ items = mainNav }: MainNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr] md:gap-4">
        <div className="justify-self-start">
          <NavLogo />
        </div>

        <NavigationMenu className="hidden justify-self-center md:flex">
          <NavigationMenuList>
            {items.map((item) =>
              item.type === "dropdown" ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-100 gap-3 p-4 md:grid-cols-2">
                      {item.items.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                              {link.description && (
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {link.description}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
          <NavigationMenuIndicator />
        </NavigationMenu>

        <div className="hidden items-center justify-self-end gap-2 md:flex">
          <NavLoginButton />
        </div>

        <div className="justify-self-end md:hidden">
          <Button
            variant="outline"
            size="icon"
            aria-controls="mobile-main-nav"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="rounded-full"
          >
            {isMobileMenuOpen ? <X className="size-4" aria-hidden /> : <List className="size-4" aria-hidden />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-main-nav"
          className={cn(
            "animate-in fade-in zoom-in-95 mt-3 space-y-2  ",
            "backdrop-blur-sm md:hidden"
          )}
        >
          <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Menu
          </p>

          {items.map((item) =>
            item.type === "dropdown" ? (
              <div key={item.label} className="space-y-1">
                <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  {item.label}
                </p>
                {item.items.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      "hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span>{link.title}</span>
                      <ArrowUpRight aria-hidden className="size-4 text-muted-foreground" />
                    </span>
                    {link.description && (
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {link.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                  "hover:bg-muted"
                )}
              >
                <span className="flex items-center justify-between gap-4">
                  <span>{item.title}</span>
                  <ArrowUpRight aria-hidden className="size-4 text-muted-foreground" />
                </span>
              </Link>
            )
          )}

          <div className="px-1 pt-3">
            <NavLoginButton className="w-full" />
          </div>
        </div>
      )}
    </div>
  )
}