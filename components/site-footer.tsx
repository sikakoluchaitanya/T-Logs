import { siteConfig } from "@/helper/site";
import { MailIcon } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
    return (
        <footer>
            <div className="mb-6 mt-14 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <a href="mailto:chaitanya.dev04@gmail.com" rel="noopener noreferrer">
                        <MailIcon className="w-6 h-6" />
                    </a>
                    {siteConfig.links.github && (
                        <a target="_blank" rel="noopener noreferrer" href={siteConfig.links.github}>
                            <Icons.github className="w-6 h-6" />    
                        </a>
                    )}
                    {siteConfig.links.twitter && (
                        <a target="_blank" rel="noopener noreferrer" href={siteConfig.links.twitter}>
                            <Icons.twitter className="w-6 h-6" />    
                        </a>
                    )}
                    {siteConfig.links.linkedin && (
                        <a target="_blank" rel="noopener noreferrer" href={siteConfig.links.linkedin}>
                            <Icons.linkedin className="w-6 h-6" />
                        </a>
                    )}
                </div>

                {/* Personal Website Link (Uncomment and Modify if Needed) */}
                {/* <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
                    <a href={siteConfig.links.personalWebsite}>Personal Website</a>
                </div> */}

                {/* Display author name safely */}
                <p className="text-sm text-muted-foreground">
                    {siteConfig.author || "Unknown Author"}
                </p>
            </div>
        </footer>
    );
}
