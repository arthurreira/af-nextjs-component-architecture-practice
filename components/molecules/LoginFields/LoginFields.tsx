import { EmailField, PasswordField } from "@/components/atoms"
import { type LoginFieldsProps } from "./LoginFieldsProps"

export function LoginFields({ emailProps, passwordProps }: LoginFieldsProps) {
  return (
    <>
      <EmailField {...emailProps} />
      <PasswordField {...passwordProps} />
    </>
  )
}