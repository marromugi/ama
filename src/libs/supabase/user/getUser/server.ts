import { generateServerSupabase } from "../../server";

export const getUser = async () => {
  return await generateServerSupabase().auth.getUser();
};
