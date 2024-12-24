import * as React from "react";
import { cn } from "@/lib/utils";

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

const Code = React.forwardRef<HTMLElement, CodeProps>(
    ({ className, ...props }, ref) => {
        return (
            <code
                ref={ref}
                className={cn(
                    "font-mono text-sm",
                    className
                )}
                {...props}
            />
        );
    }
);
Code.displayName = "Code";

export { Code };