type User = {
  id: string
  name: string
  email: string
  password: string
  role: string
}

type UserSelectProps = {
  users: User[]
  onSelect: (email: string, password: string) => void
}

export type { User, UserSelectProps }