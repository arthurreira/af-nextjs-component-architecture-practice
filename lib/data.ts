import users from "@/data/users.json"
import products from "@/data/products.json"

// Simulate network delay so loading states are visible
const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms))

export async function getUsers(filters?: { status?: string; role?: string; plan?: string }) {
  await delay()
  let result = [...users]
  if (filters?.status) result = result.filter((u) => u.status === filters.status)
  if (filters?.role) result = result.filter((u) => u.role === filters.role)
  if (filters?.plan) result = result.filter((u) => u.plan === filters.plan)
  return result
}

export async function getUserById(id: string) {
  await delay()
  return users.find((u) => u.id === id) ?? null
}

export async function getProducts(filters?: { badge?: string; isRecommended?: boolean }) {
  await delay()
  let result = [...products]
  if (filters?.badge) result = result.filter((p) => p.badge === filters.badge)
  if (typeof filters?.isRecommended === "boolean") {
    result = result.filter((p) => Boolean(p.isRecommended) === filters.isRecommended)
  }
  return result
}

export async function getProductById(id: string) {
  await delay()
  return products.find((p) => p.id === id) ?? null
}