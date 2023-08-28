'use client';

import { Button } from "@/components";

import { PaginationProps } from "@/types";

const Pagination = ({nextPage, page = '1', previousPage, showNextPage = true}: PaginationProps) => {
  return (
    <div className="flex flex-row justify-center items-centers gap-3">
      {page !== '1' && (
        <Button
          containerStyles="custom-btn custom-btn text-primary-blue rounded-full"
          handleClick={previousPage}
          title="Página anterior"
        />
      )}
      <div className="flex flex-col justify-center items-center">{page}</div>
      {showNextPage && (
        <Button
          containerStyles="custom-btn custom-btn text-primary-blue rounded-full"
          handleClick={nextPage}
          title="Próxima página"
        />
      )}
    </div>
  )
}

export default Pagination;