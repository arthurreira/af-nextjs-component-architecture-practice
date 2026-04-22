export type NavLink = {
  title: string
  href: string
  description?: string
}

export type NavItem =
  | { type: "link"; title: string; href: string }
  | { type: "dropdown"; label: string; items: NavLink[] }

export const mainNav: NavItem[] = [
  {
    type: "link",
    title: "Home",
    href: "/",
  },
  {
    type: "link",
    title: "Features",
    href: "/#features",
  },
  {
    type: "link",
    title: "Pricing",
    href: "/products",
  },
  {
    type: "link",
    title: "About",
    href: "/about",
  },
]