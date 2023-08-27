import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cache } from "react";
import { Database } from "@/db/schema";

export const generateServerSupabase = cache(() => {
  return createServerComponentClient<Database>({
    cookies: () => cookies(),
  });
});
