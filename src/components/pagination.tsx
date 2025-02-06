import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

type Props = {
    path: string;
    total: number;
    current: number;
};

const PaginationComponent = ({ current, total, path }: Props) => {
    // return (
    //     <div>
    //         <Pagination>
    //             <PaginationContent>
    //                 <PaginationItem>
    //                     <PaginationPrevious href="#" />
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">1</PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#" isActive>
    //                         2
    //                     </PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationLink href="#">3</PaginationLink>
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationEllipsis />
    //                 </PaginationItem>
    //                 <PaginationItem>
    //                     <PaginationNext href="#" />
    //                 </PaginationItem>
    //             </PaginationContent>
    //         </Pagination>
    //     </div>
    // );

    const nextPage = `${path}?page=${Math.min(current + 1, total)}`;
    const prevPage = `${path}?page=${Math.max(current - 1, 1)}`;

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem aria-disabled={current === 1}>
                    <PaginationPrevious href={prevPage} />
                </PaginationItem>

                {current > 3 && (
                    <PaginationItem className="max-md:hidden">
                        <PaginationLink href={`${path}?page=1`}>1</PaginationLink>
                    </PaginationItem>
                )}

                {current > 3 && (
                    <PaginationItem className="max-md:hidden">
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {current > 2 && (
                    <PaginationItem className="max-md:hidden">
                        <PaginationLink href={`${path}?page=${current - 2}`}>{current - 2}</PaginationLink>
                    </PaginationItem>
                )}

                {current > 1 && (
                    <PaginationItem>
                        <PaginationLink href={`${path}?page=${current - 1}`}>{current - 1}</PaginationLink>
                    </PaginationItem>
                )}

                {
                    <PaginationItem>
                        <PaginationLink href={`${path}?page=${current}`} isActive>
                            {current}
                        </PaginationLink>
                    </PaginationItem>
                }

                {current < total && (
                    <PaginationItem>
                        <PaginationLink href={`${path}?page=${current + 1}`}>{current + 1}</PaginationLink>
                    </PaginationItem>
                )}

                {current < total - 1 && (
                    <PaginationItem className="max-md:hidden">
                        <PaginationLink href={`${path}?page=${current + 2}`}>{current + 2}</PaginationLink>
                    </PaginationItem>
                )}

                {current < total - 2 && (
                    <PaginationItem className="max-md:hidden">
                        <PaginationEllipsis />
                    </PaginationItem>
                )}

                {current < total - 2 && (
                    <PaginationItem className="max-md:hidden">
                        <PaginationLink href={`${path}?page=${total}`}>{total}</PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem aria-disabled={current === total}>
                    <PaginationNext href={nextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
