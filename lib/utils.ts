import { posts } from "#site/content"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number | Date) {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function sortPosts(posts: Array<posts>) {
  return posts.sort((a, b) => {
    if(a.date > b.date) return -1;
    if(a.date < b.date) return 1;
    return 0
  })
}