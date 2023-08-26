export const Layout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    // <SWRConfig value={swrBaseConfig?.value}>
    <html lang="ja">
      <body>{children}</body>
    </html>
    // </SWRConfig>
  );
};

export default Layout;
