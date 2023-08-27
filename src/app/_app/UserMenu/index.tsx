"use client";

import { useUser } from "@/hooks/user";

export const UserMenu = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { result } = useUser();
  return (
    <>
      <p>UserMenu: {result?.data.user?.email}</p>
      {children && <div>child: {children}</div>}
    </>
  );
};
