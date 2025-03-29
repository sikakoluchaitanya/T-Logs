import * as React from "react";
import { cn } from "@/lib/utils";

const Pre = React.forwardRef<HTMLPreElement, React.HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => {
        return (
            <pre
                ref={ref}
                className={cn(
                    "overflow-x-auto font-mono text-sm",
                    className
                )}
                {...props}
            />
        );
    }
);
Pre.displayName = "Pre";

export { Pre };