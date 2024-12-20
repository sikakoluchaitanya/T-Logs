import { Calendar} from "lucide-react"
import { buttonVariants } from "./ui/button"
import { cn, formatDate } from "@/lib/utils"
import Link from "next/link"


interface Props {
    slug: string
    title: string
    description?: string
    date: string
}

export function Posts_item ({ slug, title, description, date }: Props) {
    return (
        <article className="flex flex-col gap-2 border-border border-b py-3">
            <div>
                <h2 className="text-2xl font-hold">
                    <Link href={slug}>{title}</Link>
                </h2>
            </div>
            <div className="max-w-none text-muted-foreground">
                {description}
            </div>
            <div className="flex justify-between items-center">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                        <Calendar className="h-4 w-4"/>
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link href={slug} className={cn(buttonVariants({ variant: "link" }), "py-0")}>Read more 
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> </Link>
            </div>
        </article>
    )
}

function items(arg0: { slug: any; title: any; description: any; date: any }, Props: any) {
    throw new Error("Function not implemented.")
}