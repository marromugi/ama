import { use } from "react";
import { UserMenu } from "./_app/UserMenu";
import { UserSupabase } from "@/libs/supabase/user/server";

export default async function Home() {
  const { data } = await UserSupabase().getUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.user && `userId: ${data.user?.id}`}
      <UserMenu />
    </main>
  );
}
