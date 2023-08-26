"use client";

import { useUser } from "@/hooks/user/client";

export const UserMenu = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { data } = useUser();
  return (
    <>
      <p>UserMenu: {data?.user?.email}</p>
      {children && <div>child: {children}</div>}
    </>
  );
};
