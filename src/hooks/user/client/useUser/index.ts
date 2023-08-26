import { clientSupabase } from "@/libs/supabase/client";
import useSWR from "swr";

const getUser = async () => {
  const res = await clientSupabase.auth.getUser();
  return res.data;
};

export const useUser = () => {
  const res = useSWR({
    key: "user",
    fetcher: async () => await getUser(),
    config: {},
  });

  return res;
};
