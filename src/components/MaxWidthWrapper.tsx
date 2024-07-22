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
        "h-full w-full px-[7.5rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
