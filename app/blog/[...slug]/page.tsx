import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-component";
import { notFound } from "next/navigation";

interface PostsPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(paramsPromise: Promise<PostsPageProps["params"]>) {
    // Await the params if needed
    const params = await paramsPromise;

    // console.log("Params received:", params);

    if (!params?.slug) {
        throw new Error("Params or slug is missing");
    }

    // Join the slug array into a string and decode URL-encoded characters
    const slug = decodeURIComponent(params.slug.join("/"));

    // console.log("Decoded slug:", slug);

    // Find the post based on the slug
    const post = posts.find((post) => post.slugAsParams === slug);

    return post;
}

export async function generateStaticParams(): Promise<PostsPageProps["params"][]> {
    // Map through posts and generate params
    return posts.map((post) => ({
        slug: post.slugAsParams.split("/"),
    }));
}

export default async function PostsPage({ params }: { params: PostsPageProps["params"] }) {
    // Wrap params in Promise.resolve to ensure it's treated as a promise
    const post = await getPostFromParams(Promise.resolve(params));

    if (!post || !post.published) {
        notFound(); // Handle 404
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
