import { GoogleSignIn } from "@/components/GoogleSignIn";
import { loginWithGoogle } from "./actions";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const supabase = createClient();
    const { data } = await supabase.auth.getUser();

    if (data.user) {
        redirect("/");
    }

    return (
        <div className="min-h-screen flex flex-col gap-9 justify-center items-center">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-1">
                    DietBuilder AI
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                    Login to get started!
                </p>
            </div>

            <form action={loginWithGoogle}>
                <GoogleSignIn />
            </form>
        </div>
    );
}
