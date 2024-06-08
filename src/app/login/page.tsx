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
        <div className="min-h-screen flex justify-center items-center">
            <form action={loginWithGoogle}>
                <GoogleSignIn />
            </form>
        </div>
    );
}
