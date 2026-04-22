import * as React from "react";

import { cn } from "@/lib/utils";

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-4", className)} {...props} />;
}

function Field({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
}

function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("text-sm font-medium", className)} {...props} />;
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("relative flex items-center text-sm text-muted-foreground", className)}
      {...props}
    >
      <div className="h-px flex-1 bg-border" />
      <span className="px-2">{children}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
};