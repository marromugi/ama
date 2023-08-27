import { clientSupabase } from "@/libs/supabase/client";
import {
  AuthChangeEvent,
  Session as SupabaseSession,
} from "@supabase/supabase-js";
import { useEffect, useState } from "react";

type Session = { event: AuthChangeEvent } & Partial<SupabaseSession>;

export const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    clientSupabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_OUT": {
          setSession(null);
        }
        case "SIGNED_IN": {
          setSession({ event, ...session });
        }
        case "USER_UPDATED": {
          setSession({ event, ...session });
        }
      }
    });
  }, []);

  return { session };
};
