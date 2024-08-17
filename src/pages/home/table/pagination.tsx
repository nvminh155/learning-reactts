import { PaginationProps } from "antd";
import React from "react";

type AppPaginationProps = {
  onPageChange?: (page: number) => void;
} & PaginationProps;

const AppPagination: React.FC<AppPaginationProps> = ({
  className,
  defaultCurrent = 1,
  defaultPageSize = 5,
  total,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    page = Math.max(1, page);
    page = Math.min(page, Math.ceil((total ?? 1) / defaultPageSize));
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div
      className={
        `AppPagination flex justify-between items-center py-3 px-3 ` + className
      }
    >
      <div className="text-[#344054]">
        Page {defaultCurrent} of {Math.ceil((total ?? 1) / defaultPageSize)}
      </div>
      <div className="flex gap-3">
        <button
          className="border-[#EEC5C7] border-[1px] px-3 py-2 font-semibold text-[#344054] rounded-[8px]"
          onClick={() => {
            handlePageChange(defaultCurrent - 1);
          }}
        >
          Previous
        </button>
        <button
          className="border-[#EEC5C7] border-[1px] px-3 py-2 font-semibold text-[#344054] rounded-[8px]"
          onClick={() => {
            handlePageChange(defaultCurrent + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AppPagination;
