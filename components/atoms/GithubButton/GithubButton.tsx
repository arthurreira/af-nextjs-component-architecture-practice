import { Button } from "@/components/ui/button"
import { type GithubButtonProps } from "./GithubButtonProps"

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385..."
      fill="currentColor"
    />
  </svg>
)
export function GithubButton({
  text = "Login with GitHub",
  onClick,
}: GithubButtonProps) {
  return (
    <Button variant="outline" type="button" onClick={onClick}>
      <GitHubIcon />
      {text}
    </Button>
  )
}