"use client";

import { Button } from "./ui/button";

export default function LogoutBtn({ onClick }: { onClick: () => void }) {
    return <Button onClick={() => onClick()}>Logout</Button>;
}
