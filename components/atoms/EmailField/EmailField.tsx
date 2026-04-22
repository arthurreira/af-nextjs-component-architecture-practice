import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { type EmailFieldProps } from "./EmailFieldProps"

export function EmailField({
  label = "Email",
  placeholder = "m@example.com",
  id = "email",
  required = false,
  value,
  onChange,
}: EmailFieldProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type="email"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </Field>
  )
}