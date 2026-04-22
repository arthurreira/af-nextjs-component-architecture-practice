import { Field, FieldDescription, FieldSeparator } from "@/components/ui/field"
import { GithubButton } from "@/components/atoms"
import { type OAuthSectionProps } from "./OAuthSectionProps"

export function OAuthSection({
  separatorText = "Or continue with",
  signUpHref = "#",
  signUpText = "Sign up",
  footerText = "Don't have an account?",
  githubButtonText = "Login with GitHub",
  onGithubClick,
}: OAuthSectionProps) {
  return (
    <>
      <FieldSeparator>{separatorText}</FieldSeparator>
      <Field>
        <GithubButton text={githubButtonText} onClick={onGithubClick} />
        <FieldDescription className="text-center">
          {footerText}{" "}
          <a href={signUpHref} className="underline underline-offset-4">{signUpText}</a>
        </FieldDescription>
      </Field>
    </>
  )
}