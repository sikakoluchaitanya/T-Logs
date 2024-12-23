'use client';

import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/helper/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";



export function MainNav() {
    const pathname = usePathname()
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6 ml-2 mr-40">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Icons.logo className="h-10 w-10"/>
                <span className="font-bold text-2xl">{siteConfig.name}</span>
            </Link>
            <Link href="/blog" className={cn("text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block", pathname === "/blog" ? "text-foreground" : "text-foreground/60")}>
                Blog
            </Link>
            <Link href="/about" className={cn("text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block", pathname === "/blog" ? "text-foreground" : "text-foreground/60")}>
                About
            </Link>
        </nav>
    )
}