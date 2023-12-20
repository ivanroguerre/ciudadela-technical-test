"use client";
import { FC } from "react";
import Pagination, { PaginationProps } from "@mui/material/Pagination";
import { useRouter } from "next/navigation";

const ClientPagination: FC<PaginationProps> = (props) => {
  const router = useRouter();

  return (
    <Pagination
      onChange={(_, value) => router.push(`/characters?page=${value}`)}
      {...props}
    />
  );
};

export default ClientPagination;
