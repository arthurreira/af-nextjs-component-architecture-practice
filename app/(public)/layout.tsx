import { MainNav } from "@/components/molecules/MainNav"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b px-6 py-3">
        <MainNav />
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}