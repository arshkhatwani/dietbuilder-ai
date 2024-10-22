import DietBuilder from "@/components/DietBuilder";
import { NavigationBar } from "@/components/NavigationBar";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logoutUser() {
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
            <NavigationBar
                userName={data.user.user_metadata.full_name}
                logoutUser={logoutUser}
            />

            <DietBuilder />
        </div>
    );
}
