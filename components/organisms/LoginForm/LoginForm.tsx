"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldSeparator, FieldDescription } from "@/components/ui/field"
import { FormHeading } from "@/components/atoms/FormHeading"
import { UserSelect } from "@/components/atoms/UserSelect"
import { EmailField } from "@/components/atoms/EmailField"
import { PasswordField } from "@/components/atoms/PasswordField"
import { GithubButton } from "@/components/atoms/GithubButton"
import { PremiumBeamSurface } from "@/components/ui/beam-surface"

type User = {
  id: string
  name: string
  email: string
  password: string
  role: string
}

type LoginFormProps = React.ComponentProps<"form"> & {
  users: User[]
}

export function LoginForm({ className, users, ...props }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <PremiumBeamSurface
        className="rounded-2xl border border-border/70 bg-card/60 p-6"
        beamProps={{ duration: 10, size: 150, borderWidth: 2 }}
      >
      <FieldGroup>
        <FormHeading
          title="Login to your account"
          description="Select a test user or enter credentials manually"
        />

        {/* User picker */}
        <Field className="w-full">
          <UserSelect
            users={users}
            onSelect={(e, p) => {
              setEmail(e)
              setPassword(p)
            }}
          />
        </Field>

        <EmailField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Field>
          <Button type="submit">Login</Button>
        </Field>

        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <GithubButton />
          <FieldDescription className="text-center">
            Contact admin to get an account
          </FieldDescription>
        </Field>
      </FieldGroup>
      </PremiumBeamSurface>
    </form>
  )
}