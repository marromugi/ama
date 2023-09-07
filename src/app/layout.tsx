"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { swrBaseConfig } from "@/libs/swr";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export const Layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SWRConfig value={swrBaseConfig?.value}>
      <html lang="ja">
        <body className={inter.className}>{children}</body>
      </html>
    </SWRConfig>
  );
};

export default Layout;
