import React from 'react';
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/helper/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import { posts } from "#site/content";
import { Posts_item } from "@/components/posts";
import { ArrowRight } from 'lucide-react';
import { Icons } from '@/components/icons';
import AnimatedHeading from '@/components/AnimatedHeading';
import TypewriterText from '@/components/typinganimation';

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  
  return (
    <>
      <section className="relative space-y-6 mx-auto pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="container mx-auto flex flex-col items-center gap-8 px-4">
          {/* Hero Section */}
          <div className="text-center">
            <AnimatedHeading />
            <div className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance leading-relaxed">
                <TypewriterText 
                  text="Welcome to my blog, where I share my journey as a developer and insights on technology."
                  initialDelay={0}
                />
              </div>
              <div className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance leading-relaxed">
                <TypewriterText 
                  text="Built with tools like Next.js, Velite, and TailwindCSS, it reflects my passion for innovation."
                  initialDelay={5300}
                />
              </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 justify-center sm:flex-row w-full sm:w-auto">
            <Link 
              href="/blog" 
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-fit group relative overflow-hidden transition-all hover:shadow-lg hover:scale-105",
                "bg-primary hover:bg-primary/90"
              )}
            >
              <span className="relative flex items-center gap-2">
                Read my blog
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit group relative overflow-hidden transition-all hover:shadow-lg hover:scale-105",
                "hover:bg-secondary"
              )}
            >
              <span className="relative flex items-center gap-2">
                <Icons.github className="w-4 h-4" />
                Github
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="container max-w-4xl mx-auto py-6 lg:py-10 px-4 space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center bg-clip-text bg-gradient-to-r from-primary to-primary/50">
            Latest Posts
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>
        
        <ul className="grid gap-6 w-full">
          {latestPosts.map((post) => (
            <li 
              key={post.slug} 
              className="w-full transform transition-all hover:scale-[1.02] hover:shadow-lg rounded-lg"
            >
              <Posts_item
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}