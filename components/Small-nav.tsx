"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/helper/site";

export function SmallNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-10 px-0 sm:hidden">
                    <Menu className="h-5 w-5"/>
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </SheetTrigger>
            <SheetTitle></SheetTitle>
            <SheetContent side="right">
                <SmallNavItem onOpenChange={setOpen} href="/blog" className="flex items-center">
                    <Icons.logo className="mr-2 h-4 w-4"/>
                    <span className="font-bold">{siteConfig.name}</span>
                </SmallNavItem>
                <div className="flex flex-col gap-3 mt-3">
                    <SmallNavItem onOpenChange={setOpen} href="/blog" className="flex items-center">
                        Blog
                    </SmallNavItem>
                    <SmallNavItem onOpenChange={setOpen} href="/about" className="flex items-center">
                        About
                    </SmallNavItem>
                    <Link href={siteConfig.links.github} target="_blank" className="flex items-center">
                        <Icons.github className="mr-2 h-4 w-4"/><span>GitHub</span>
                    </Link>
                    <Link href={siteConfig.links.twitter} target="_blank" className="flex items-center">
                        <Icons.twitter className="mr-2 h-4 w-4"/><span>Twitter</span>
                    </Link>
                    <Link href={siteConfig.links.linkedin} target="_blank" className="flex items-center">
                        <Icons.linkedin className="mr-2 h-4 w-4"/><span>LinkedIn</span>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

interface SmallNavProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string
}

function SmallNavItem({ href, className, onOpenChange,children, ...props }: SmallNavProps) {
    const router = useRouter();
    return (
        <Link href={href} 
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={className}
            {...props}
        >
            {children}
        </Link>
    )
}