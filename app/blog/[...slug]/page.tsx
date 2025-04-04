import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-component";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/helper/site";

interface PostsPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: PostsPageProps["params"]) {
    if (!params?.slug) {
        throw new Error("Params or slug is missing");
    }
    const slug = decodeURIComponent(params.slug.join("/"));
    const post = posts.find((post) => post.slugAsParams === slug);
    return post || null;    
}

export const revalidate = 60; // Rebuilds the page every 60 seconds

export async function generateMetadata({ params }: PostsPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params); 

    if (!post) {
        return {};
    }

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);

    return {
        title: post.title,
        description: post.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.slug,
            images: [
                {
                    url: `/api/OpenGraph?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [`/api/OpenGraph?${ogSearchParams.toString()}`]
        }
    };
}

export async function generateStaticParams(): Promise<PostsPageProps["params"][]> {
    return posts.map((post) => ({
        slug: post.slugAsParams.split("/"),
    }));
}

export default async function PostsPage({ params }: PostsPageProps) {
    const post = await getPostFromParams(params); 

    if (!post || !post.published) {
        return notFound();
    }

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2">{post.title}</h1>
            {post.description ? (
                <p className="text-xl mt-0 text-muted-foreground">
                    {post.description}
                </p>) : null}
            <hr className="mt-4" />
            <MDXContent code={post.body} />
        </article>
    );
}
