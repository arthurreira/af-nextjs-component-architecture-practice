"use client"

import Link from "next/link"
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
  NavigationMenuIndicator, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavLoginButton } from "@/components/atoms/NavLoginButton"
import { NavLogo } from "@/components/atoms/NavLogo"
import { cn } from "@/lib/utils"
import { mainNav, type NavItem } from "@/config/nav"

type MainNavProps = {
  items?: NavItem[]
}

export function MainNav({ items = mainNav }: MainNavProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <div className="justify-self-start">
        <NavLogo />
      </div>

      <NavigationMenu className="justify-self-center">
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

      <div className="flex items-center justify-self-end gap-2">
        <NavLoginButton />
      </div>
    </div>
  )
}