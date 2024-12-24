import { siteConfig } from "@/helper/site";
import { MailIcon } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
    return (
        <footer>
            <div className="mb-6 mt-14 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <a target="_blank" rel="noreferer" href="mailto:hello@gmail.com">
                        <span className="sr-only">Mail</span>
                        <MailIcon className="w-6 h-6" />    
                    </a>
                    <a target="_blank" rel="noreferer" href={siteConfig.links.github}>
                        <span className="sr-only">Github</span>
                        <Icons.github className="w-6 h-6" />    
                    </a>
                    <a target="_blank" rel="noreferer" href={siteConfig.links.twitter}>
                        <span className="sr-only">Twitter</span>
                        <Icons.twitter className="w-6 h-6" />    
                    </a>
                    <a target="_blank" rel="noreferer" href={siteConfig.links.linkedin}>
                        <span className="sr-only">LinkedIn</span>
                        <Icons.linkedin className="w-6 h-6" />
                    </a>
                </div>
                {/* <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
                    <a href={siteConfig.links.}>Github</a>

                    </a>
                </div> */}
                {/* // link for personal website */}
                {siteConfig.author}
            </div>
        </footer>
    )
}