"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function loginWithGoogle() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: process.env.NEXT_PUBLIC_AUTH_CALLBACK_URL,
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
