"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UserSelectProps } from "./UserSelectProps"

    

export function UserSelect({ users, onSelect }: UserSelectProps) {
  return (
    <Select
      onValueChange={(id) => {
        const user = users.find((u) => u.id === id)
        if (user) onSelect(user.email, user.password)
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a test user..." />
      </SelectTrigger>
      <SelectContent>
        {users.map((user) => (
          <SelectItem key={user.id} value={user.id}>
            <span>{user.name}</span>
            <span className="ml-2 text-xs text-muted-foreground">— {user.role}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}