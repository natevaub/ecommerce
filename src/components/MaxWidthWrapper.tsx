import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full max-w-screem-2xl px-2.5 px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
