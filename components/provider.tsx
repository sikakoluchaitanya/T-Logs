"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useState, useEffect } from "react";

export function Providers({ children }: { children: ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    // as it was causing me an hydration error
    useEffect(() => {
        setIsMounted(true); // Set to true after the component has mounted
    }, []);

    // Only render children once the component has mounted
    if (!isMounted) {
        return null;
    }

    return (
        <ThemeProvider 
            attribute="class" 
            defaultTheme="system"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
