import "../styles/Pagination.scss";
import { ChevronLeft as ChevronLeftIcon } from "lucide-react";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface PaginationProps {
   numbersPage: number[];
   currentPage: number;
   funCurrentPage: (page: number) => void;
}

export default function Pagination({
   numbersPage,
   currentPage,
   funCurrentPage,
}: PaginationProps) {
   const [modifiedPagination, setModifiedPagination] = useState<number[]>([]);
   const [maxPagination] = useState<number>(3);
   const [saltPagination] = useState<number>(2);
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
      <div className="container">
         <div className="container-max">
            {numbersPage.length > 0 && (
               <ul className="pagination">
                  <li
                     className={`pagination__item pagination__item-icon ${
                        currentPage === 1 && "pagination__item-icon-inactive"
                     }`}
                     onClick={() =>
                        currentPage !== 1 && funCurrentPage(currentPage - 1)
                     }
                  >
                     <ChevronLeftIcon size={16} />
                  </li>
                  {currentPage > saltPagination &&
                     numbersPage.length > maxPagination && (
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

                  {modifiedPagination.map((item, index) => {
                     return (
                        <li
                           key={index}
                           className={`pagination__item pagination__item-number ${
                              item === currentPage && "pagination__item-active"
                           }`}
                           onClick={() => funCurrentPage(item)}
                        >
                           {item}
                        </li>
                     );
                  })}
                  {numbersPage.length - currentPage >= saltPagination &&
                     numbersPage.length > maxPagination && (
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
                     className={`pagination__item pagination__item-icon ${
                        currentPage === numbersPage.length &&
                        "pagination__item-icon-inactive"
                     }`}
                     onClick={() =>
                        currentPage !== numbersPage.length &&
                        funCurrentPage(currentPage + 1)
                     }
                  >
                     <ChevronRightIcon size={16} />
                  </li>
               </ul>
            )}
         </div>
      </div>
   );
}
