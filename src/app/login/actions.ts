"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { createClient } from "@/lib/supabase/server";

export async function loginWithGoogle() {
    const supabase = createClient();

    const headersList = headers();
    const origin = headersList.get("origin");

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${origin}/auth/callback`,
            queryParams: {
                prompt: "consent",
            },
        },
    });

    if (error) {
        redirect("/error");
    }

    if (data.url) {
        redirect(data.url);
    }

    revalidatePath("/", "layout");
    redirect("/");
}
