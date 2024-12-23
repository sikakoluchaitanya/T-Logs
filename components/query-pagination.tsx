'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { Pagination, PaginationLink, PaginationNext, PaginationPrevious, PaginationItem, PaginationContent } from "./ui/pagination";

interface QueryPaginationProps {
    totalPages: number
    className?: string
}

export function QueryPagination({ totalPages, className }: QueryPaginationProps) {
    const Pathname = usePathname();
    const SearchParams = useSearchParams();

    const currentpage = Number(SearchParams.get("page")) || 1;

    const prevpage = currentpage - 1;
    const nextpage = currentpage + 1;
    
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(SearchParams);
        params.set("page", pageNumber.toString());
        return `${Pathname}?${params.toString()}`;
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                {prevpage >=1 ? (
                    <PaginationItem>
                        <PaginationPrevious href={createPageURL(prevpage)}/>
                    </PaginationItem>
                ): null}

                {Array(totalPages).fill("").map((_, index) => 
                    <PaginationItem key={`page-button-${index}`} className="hidden sm:inline-block">
                        <PaginationLink isActive={index + 1 === currentpage} href={createPageURL(index + 1)}>
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                )}
                {nextpage <= totalPages ? (
                    <PaginationItem>
                        <PaginationNext href={createPageURL(nextpage)}/>
                    </PaginationItem>
                ): null}
            </PaginationContent>
        </Pagination>
    )
}