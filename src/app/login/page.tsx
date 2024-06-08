import { GoogleSignIn } from "@/components/google-sign-in";
import { loginWithGoogle } from "./actions";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <form action={loginWithGoogle}>
                <GoogleSignIn />
            </form>
        </div>
    );
}
