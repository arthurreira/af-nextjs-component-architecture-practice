import { type FormHeadingProps } from "@/components/atoms/FormHeading/FormHeadingProps"
import { type LoginFieldsProps } from "@/components/molecules/LoginFields/LoginFieldsProps"
import { type OAuthSectionProps } from "@/components/molecules/OAuthSection/OAuthSectionProps"


type LoginFormProps = React.ComponentProps<"form"> & {
  heading?: FormHeadingProps
  loginFields?: LoginFieldsProps
  submitText?: string
  oAuthSection?: OAuthSectionProps
}

export type { LoginFormProps }