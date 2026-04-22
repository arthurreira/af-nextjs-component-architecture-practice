 type EmailFieldProps = {
  label?: string
  placeholder?: string
  id?: string
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export type { EmailFieldProps }