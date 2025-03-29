import { posts } from "#site/content";
import { Posts_item } from "@/components/posts";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";

export const metadata = {
    title: "Blog",
    description: "Coming soon",
}
const POST_PER_PAGE = 5;

interface PaginationProps {
    searchParams: {
        page?: string
    }
}
export async function generateStaticParams() {
    return [{ page: "1" }]; // Pre-build the first page statically
}

export const revalidate = 60; // Rebuilds the page every 60 second

export default async function Blog({ searchParams }: PaginationProps) {
    const resolvedSearchParams = await searchParams; // Resolve the promise
    const pageParam = resolvedSearchParams?.page ? decodeURIComponent(resolvedSearchParams.page) : "1";
    const currentPage = Number(pageParam) || 1;

    // Your existing logic remains unchanged
    const sortedPosts = sortPosts(posts.filter(post => post.published === true));
    const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);
    const displayPosts = sortedPosts.slice(
        POST_PER_PAGE * (currentPage - 1),
        POST_PER_PAGE * currentPage
    );

    return (
        <div className="container max-w-4xl mx-auto py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        Blog
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Coming soon
                    </p>
                </div>
            </div>
            <hr className="mt-8"/>
            {displayPosts?.length > 0 ? (
                <ul className="flex flex-col">
                    {displayPosts.map(post => {
                        const { slug, title, description, date } = post;
                        return (    
                            <li key={slug}>
                                <Posts_item 
                                    slug={slug} 
                                    title={title} 
                                    description={description ?? ""} 
                                    date={date} 
                                />
                            </li>
                        )
                    })}
                </ul> 
            ) : (
                <p>No posts found</p>
            )}
            <QueryPagination totalPages={totalPages} className="justify-end mt-4"/>
        </div>
    );
}