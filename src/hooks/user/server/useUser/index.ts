import { serverSupabase } from "@/libs/supabase/server";
import { cache } from "react";

export const useUser = cache(async () => {
  const res = await serverSupabase().auth.getUser();
  return res.data;
});
