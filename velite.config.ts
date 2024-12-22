import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

const computedslugFields = <T extends { slug: string }>(data: T) => ({
    ...data, 
    slugAsParams: data.slug.split("/").slice(1).join("/"), 
})

const posts = defineCollection({
    name: "posts",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(100),
        description: s.string().max(1000).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx()
    })
    .transform(computedslugFields),
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [rehypeSlug, 
            [rehypePrettyCode, {
                theme: "github-dark",
            }], 
            [rehypeAutolinkHeadings, 
                { 
                    behavior: "wrap",
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    }
                }
            ]],
        remarkPlugins: [],
    },
})
