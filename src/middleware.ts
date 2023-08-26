import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/db/schema";
import { ROUTES } from "@/consts/route";

export const config = {
  matcher: ["/:path*"],
};

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Note: ログイン画面では redirect しない
  if (!session && !req.url.includes(ROUTES.login)) {
    return NextResponse.redirect(new URL(ROUTES.login, req.url));
  }

  return res;
}
