import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
    children: ReactNode;
    type?: "info" | "warning" | "danger";
}

export function Callout({
    children,
    type = "info",
    ...props
}: CalloutProps) {
    return (
        <div className={cn("my-6 items-start rounded-md border border-l-4 w-full dark:max-w-none",
            {
                "border-red-900 bg-red-50 dark:prose": type === "danger",
                "border-yellow-900 bg-yellow-50 dark:prose": type === "warning",
                "border-blue-900 bg-blue-50 dark:prose": type === "info",
            }
        )} {...props}>
            <div>
                {children}
            </div>
        </div>
    )
}

// this is an example of how to add a custom component in the mdx file 