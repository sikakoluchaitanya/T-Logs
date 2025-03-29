import { link } from "fs";

export const siteConfig = {
    name: "T-logs",
    description: "A blog powered by velite",
    url: "https://example.app",
    author: "Chaitanya Sikakolu",
    links: {
        twitter: "https://x.com/Chaitany1904",
        github: "https://github.com/sikakoluchaitanya",
        linkedin: "https://www.linkedin.com/in/chaitanya-sikakolu/"
    }
}

export type SiteConfig = typeof siteConfig