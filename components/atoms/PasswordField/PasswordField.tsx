import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { type PasswordFieldProps } from "./PasswordFieldProps"

export function PasswordField({
  label = "Password",
  forgotPasswordHref = "#",
  forgotPasswordText = "Forgot your password?",
  id = "password",
  required = false,
  value,
  onChange,
}: PasswordFieldProps) {
  return (
    <Field>
      <div className="flex items-center">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        <a href={forgotPasswordHref} className="ml-auto text-sm underline-offset-4 hover:underline">
          {forgotPasswordText}
        </a>
      </div>
      <Input
        id={id}
        type="password"
        required={required}
        value={value}
        onChange={onChange}
      />
    </Field>
  )
}