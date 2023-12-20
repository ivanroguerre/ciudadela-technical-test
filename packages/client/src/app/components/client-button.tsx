"use client";

import Button, { ButtonProps } from "@mui/material/Button";
import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

const ClientButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...props
}) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push("/characters?page=1")} {...props}>
      {children}
    </Button>
  );
};

export default ClientButton;
