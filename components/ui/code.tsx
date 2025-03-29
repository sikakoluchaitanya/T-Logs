import * as React from "react";
import { cn } from "@/lib/utils";

const Code = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => {
        return (
            <code
                ref={ref}
                className={cn("font-mono text-sm", className)}
                {...props}
            />
        );
    }
);
Code.displayName = "Code";

export { Code };

