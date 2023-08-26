"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/db/schema";

export const clientSupabase = createClientComponentClient<Database>();
