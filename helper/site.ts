import { link } from "fs";

export const siteConfig = {
    name: "T-logs",
    description: "A blog powered by velite",
    url: "https://example.app",
    author: "cipherglider",
    links: {
        twitter: "https://twitter.com/cipherglider",
        github: "https://github.com/cipherglider",
        linkedin: "https://www.linkedin.com/in/cipherglider/"
    }
}

export type SiteConfig = typeof siteConfig