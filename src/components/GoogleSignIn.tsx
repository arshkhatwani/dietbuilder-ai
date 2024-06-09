import { Button } from "@/components/ui/button";

export function GoogleSignIn() {
    return (
        <Button
            className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300"
            variant="outline"
            type="submit">
            <img
                alt="Google logo"
                className="mr-2"
                height={20}
                src="/google-logo.png"
                style={{
                    aspectRatio: "20/20",
                    objectFit: "cover",
                }}
                width={20}
            />
            Sign in with Google
        </Button>
    );
}
