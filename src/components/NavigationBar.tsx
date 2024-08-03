"use client";

import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenu,
} from "@/components/ui/dropdown-menu";

interface NavigationBarProps {
    logoutUser: () => void;
    userName: string;
}

export function NavigationBar({ logoutUser, userName }: NavigationBarProps) {
    return (
        <nav className="flex h-16 items-center justify-between bg-gray-900 px-6 text-gray-50 dark:bg-gray-950 mb-3">
            <Link className="flex items-center gap-2 font-semibold" href="/">
                <MountainIcon className="h-6 w-6" />
                <span className="text-lg">DietBuilder AI</span>
            </Link>
            <div className="flex flex-row items-center gap-4">
                <Link
                    className="flex items-center gap-2 font-medium hover:underline"
                    href="/diets/saved">
                    <span className="text-md">Saved Diets</span>
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="rounded-full"
                            size="icon"
                            variant="ghost">
                            <Avatar className="h-8 w-8">
                                <AvatarImage
                                    alt="@shadcn"
                                    src="/placeholder-user.jpg"
                                />
                                <AvatarFallback>SC</AvatarFallback>
                            </Avatar>
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => logoutUser()}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}
