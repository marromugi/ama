import { UserSupabase } from "@/libs/supabase/user/client";
import { useFetch } from "@/libs/swr";

export const useUser = () => {
  const res = useFetch({
    key: "user",
    fetcher: async () => await UserSupabase.getUser(),
    config: {},
  });

  return res;
};
