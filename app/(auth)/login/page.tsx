
import { LoginForm } from "@/components/organisms";
import users from "@/data/users.json"
export default function LoginPage() {
  return <LoginForm users={users} />;
}
