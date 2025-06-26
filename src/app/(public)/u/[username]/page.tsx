
import type { Metadata } from "next";
import { Profile } from "./Profile";

type Params = {
    username: string;
}

export async function generateMetadata({
    params
}: {
    params: Promise<Params>
}): Promise<Metadata> {
    const username = (await params).username;
    return {
        title: `Profile @${username}`,
    }
}

export default function ProfilePage() {
    return <Profile />
}
