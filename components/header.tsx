import { siteConfig } from "@/helper/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { SmallNav } from "./Small-nav";
import { ModeToggle } from "./mode-toggle";

export function Header() {
    const socialLinks = [
        { href: siteConfig.links.github, icon: Icons.github, label: "GitHub" },
        { href: siteConfig.links.twitter, icon: Icons.twitter, label: "Twitter" },
        { href: siteConfig.links.linkedin, icon: Icons.linkedin, label: "LinkedIn" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                {/* Main navigation */}
                <MainNav />

                {/* Right-side icons and actions */}
                <div className="flex items-center space-x-2">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <Link key={label} rel="noreferrer" href={href} target="_blank">
                            <div
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "w-9 px-0 hidden sm:inline-flex"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="sr-only">{label}</span>
                            </div>
                        </Link>
                    ))}

                    {/* Dark Mode Toggle */}
                    <ModeToggle />

                    {/* Small Navigation */}
                    <SmallNav />
                </div>
            </div>
        </header>
    );
}
