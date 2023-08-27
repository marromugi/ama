import { clientSupabase } from "../../client";

export const getUser = async () => {
  return await clientSupabase.auth.getUser();
};
