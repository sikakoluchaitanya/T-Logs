import * as React from "react";
import { cn } from "@/lib/utils";

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {}

const Pre = React.forwardRef<HTMLPreElement, PreProps>(
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