import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cache } from "react";

export const serverSupabase = cache(() => {
  return createServerComponentClient({
    cookies: () => cookies(),
  });
});
