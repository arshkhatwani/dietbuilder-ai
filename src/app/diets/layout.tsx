import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { logoutUser } from "../page";
import { NavigationBar } from "@/components/NavigationBar";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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

            {children}
        </div>
    );
}
