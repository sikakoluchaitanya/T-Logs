import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/helper/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import { posts } from "#site/content";
import { Posts_item } from "@/components/posts";

export default function Home() {
  const latestpost = sortPosts(posts).slice(0,3);
  return (
    <><section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
      <div className="container flex flex-col items-center gap-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
          Hello, I&apos;m Chaitanya
        </h1>
        <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
          Welcome to my personal blog—a digital journal where I document my exploration of technology and share valuable insights from my journey as a developer.
          Crafted with cutting-edge tools like Next.js, Velite, Rehype, ShadCN, and TailwindCSS, this blog is a reflection of my passion for innovation and learning.
          Dive into tutorials, thoughts, and discoveries designed to inspire, inform, and empower your own creative ventures.
          Let’s grow and innovate together!
        </p>
        <div className="flex flex-col gap-4 justify-center sm:flex-row">
          <Link href="/blog" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}>
            Read my blog
          </Link>
          <Link href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-fit")}>
            Github
          </Link>
        </div>
      </div>
    </section>
    <section className="container max-w-4xl py-6 lg:py-10 flex flex-col spacey-y-6">
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
        Latest Posts
      </h2>
      <ul className="flex flex-col">
        {latestpost.map((post) => 
          <li key={post.slug} className="first:border-t first:border-border">
            <Posts_item
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          </li>
        )}
      </ul>
    </section>
  </>
  );
}
