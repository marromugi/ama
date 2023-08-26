import { clientSupabase } from "@/libs/supabase/client";
import { useFetch } from "@/libs/swr";

const getUser = async () => {
  const res = await clientSupabase.auth.getUser();
  return res.data;
};

export const useUser = () => {
  const res = useFetch({
    key: "user",
    fetcher: async () => await getUser(),
    config: {},
  });

  return res;
};
