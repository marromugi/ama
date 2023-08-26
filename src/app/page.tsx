import { useUser } from "@/hooks/user/server";
import { UserMenu } from "./_app/UserMenu";

export default async function Home() {
  const { user } = await useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user && `userId: ${user?.id}`}
      <UserMenu />
    </main>
  );
}
