"use client";

import { useUser } from "@/hooks/user";
import clsx from "clsx";

export const UserMenu = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { result } = useUser();
  return (
    <>
      <p className={clsx("tw-text-bold")}>
        UserMenu: {result?.data.user?.email}
      </p>
      {children && <div>child: {children}</div>}
    </>
  );
};
