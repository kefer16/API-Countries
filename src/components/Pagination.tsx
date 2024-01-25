import "../styles/Pagination.scss";
import { ChevronLeft as ChevronLeftIcon } from "lucide-react";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface PaginationProps {
   numbersPage: number[];
   currentPage: number;
   funCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
   numbersPage,
   currentPage,
   funCurrentPage,
}: PaginationProps) {
   const [modifiedPagination, setModifiedPagination] = useState<number[]>([]);
   const [maxPagination] = useState<number>(5);
   const [saltPagination] = useState<number>(3);
   useEffect(() => {
      let numbersPages = numbersPage.slice(0, maxPagination);
      if (currentPage >= saltPagination && numbersPage.length > maxPagination) {
         numbersPages = numbersPage.slice(
            currentPage - saltPagination,
            maxPagination + (currentPage - saltPagination)
         );
      }
      if (
         currentPage + saltPagination > numbersPage.length &&
         numbersPage.length > maxPagination
      ) {
         numbersPages = numbersPage.slice(
            numbersPage.length - maxPagination,
            numbersPage.length
         );
      }
      setModifiedPagination(numbersPages);
   }, [numbersPage, currentPage, saltPagination, maxPagination]);

   return (
      <div className="background-body container">
         <div className="container-max">
            {numbersPage.length > 0 && (
               <ul className="pagination">
                  <li
                     className="pagination__item pagination__item-icon"
                     onClick={() => funCurrentPage(currentPage - 1)}
                  >
                     <ChevronLeftIcon size={20} />
                  </li>
                  {currentPage > saltPagination && (
                     <>
                        <li
                           className="pagination__item pagination__item-number"
                           onClick={() => funCurrentPage(1)}
                        >
                           1
                        </li>
                        <li className="pagination__item">...</li>
                     </>
                  )}

                  {modifiedPagination.map((item) => {
                     return (
                        <li
                           className={`pagination__item pagination__item-number ${
                              item === currentPage && "pagination__item-active"
                           }`}
                           onClick={() => funCurrentPage(item)}
                        >
                           {item}
                        </li>
                     );
                  })}
                  {numbersPage.length - currentPage >= saltPagination && (
                     <>
                        <li className="pagination__item">...</li>
                        <li
                           className="pagination__item pagination__item-number"
                           onClick={() => funCurrentPage(numbersPage.length)}
                        >
                           {numbersPage.length}
                        </li>
                     </>
                  )}
                  <li
                     className="pagination__item pagination__item-icon"
                     onClick={() => funCurrentPage(currentPage + 1)}
                  >
                     <ChevronRightIcon size={20} />
                  </li>
               </ul>
            )}
         </div>
      </div>
   );
}
