import LogoutBtn from "@/components/LogoutBtn";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function logoutUser() {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    revalidatePath("/", "layout");
}

export default async function Home() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();

    if (!data.user) {
        redirect("/login");
    }

    if (error) {
        redirect("/error");
    }

    return (
        <div>
            <h1>Hello world</h1>

            <LogoutBtn onClick={logoutUser} />
        </div>
    );
}
