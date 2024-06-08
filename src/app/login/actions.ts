"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function loginWithGoogle() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: "http://localhost:3000/auth/callback",
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
