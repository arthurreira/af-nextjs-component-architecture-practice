// ComponentProps.ts
export type NavItem = {
  title: string
  href: string
  description?: string
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

export type MainNavProps = {
  groups?: NavGroup[]      // dropdown groups
  links?: NavItem[]        // simple flat links
}