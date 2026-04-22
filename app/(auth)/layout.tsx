
import { BackButton } from "@/components/atoms";
import Image from "next/image";
import { ReactNode } from "react";
import Logo from "@/public/logoAF.png"; 
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center px-4">
      {/* Back button */}
      <BackButton />

      {/* Auth card */}
      <div className="w-full max-w-md flex flex-col gap-6  p-6">
        
        <Link href="/" className="flex flex-col items-center gap-2">
          <Image
            width={48}
            height={48}
            src={Logo}
            alt="logo"
            className="rounded-full border "
            priority
          />
        </Link>
        {children}
      </div>

      {/* Terms */}
      <div className="mt-6 text-balance text-center text-xs text-muted-foreground max-w-sm">
        By clicking continue, you agree to our{" "}
        <span className="hover:text-primary hover:underline">Terms of Service</span>{" "}
        and{" "}
        <span className="hover:text-primary hover:underline">Privacy Policy</span>.
      </div>
    </div>
  );
}
