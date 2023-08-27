import { cache } from "react";
import { getUser } from "./getUser/server";
import { generateServerSupabase } from "../server";

export const UserSupabase = cache(() => ({
  getUser,
}));
