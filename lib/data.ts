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

export async function getProducts(filters?: { category?: string; status?: string }) {
  await delay()
  let result = [...products]
  if (filters?.category) result = result.filter((p) => p.category === filters.category)
  if (filters?.status) result = result.filter((p) => p.status === filters.status)
  return result
}

export async function getProductById(id: string) {
  await delay()
  return products.find((p) => p.id === id) ?? null
}