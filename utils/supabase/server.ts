
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    process.env.https://nyatadsfrhtbfxfnyldv.supabase.co!,
    process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55YXRhZHNmcmh0YmZ4Zm55bGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNjY2NzYsImV4cCI6MjA2MDY0MjY3Nn0.xzUU-pmZlrTO-6-TzQu6M3eM_SeSTdjDNIHEiRtPj3Y!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
