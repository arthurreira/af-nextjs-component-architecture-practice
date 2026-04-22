"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import { buttonVariants } from "@/components/ui/button";

import { BackButtonProps } from "./ComponentProps";
import { cn } from "@/lib/utils";
export function BackButton({
  href = "/",
  label = "Back",
  className,
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "absolute left-4 top-4",
        className
      )}
    >
      <ArrowLeftIcon className="mr-2 size-4" />
      {label}
    </Link>
  );
}