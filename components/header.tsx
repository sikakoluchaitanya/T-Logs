import { siteConfig } from "@/helper/site";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { SmallNav } from "./Small-nav";
import { ModeToggle } from "./mode-toggle";

    export function Header() {
        return (
            <header className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                    {/* Main navigation */}
                    <MainNav />
    
                    {/* Right-side icons and actions */}
                    <div className=" flex items-center space-x-2">
                        {/* GitHub Link */}
                        <Link
                            rel="noreferrer"
                            href={siteConfig.links.github}
                            target="_blank"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0 hidden sm:inline-flex"
                                )}
                            >
                                <Icons.github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
    
                        {/* Twitter Link */}
                        <Link
                            rel="noreferrer"
                            href={siteConfig.links.twitter}
                            target="_blank"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0 hidden sm:inline-flex"
                                )}
                            >
                                <Icons.twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
    
                        {/* LinkedIn Link */}
                        <Link
                            rel="noreferrer"
                            href={siteConfig.links.linkedin}
                            target="_blank"
                        >
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: "ghost",
                                    }),
                                    "w-9 px-0 hidden sm:inline-flex"
                                )}
                            >
                                <Icons.linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </div>
                        </Link>
    
                        {/* Dark Mode Toggle */}
                        <ModeToggle />
    
                        {/* Small Navigation */}
                        <SmallNav />
                    </div>
                </div>
            </header>
    );}