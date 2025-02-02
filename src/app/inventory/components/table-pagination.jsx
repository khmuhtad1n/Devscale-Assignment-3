"use client";

import { Pagination } from "@heroui/react";

export function TablePagination({ data, itemsPerPage = 5 }) {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="flex justify-end mt-2 mr-2">
      <Pagination
        initialPage={1}
        total={totalPages}
        color="warning"
        onChange={(page) => {
          const start = (page - 1) * itemsPerPage;
          const end = start + itemsPerPage;
          return data.slice(start, end);
        }}
      />
    </div>
  );
}
