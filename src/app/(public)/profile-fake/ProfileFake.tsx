'use client'

import { PageTitle } from "@/components/PageTitle"
import { useRouter } from "next/navigation";
import { PAGES } from "@/config/pages.config";

export function ProfileFake() {
    const router = useRouter();

    return (
        <div className="w-full max-w-xl">
            <PageTitle title='ProfileFake' />

            <button onClick={() => router.push(PAGES.HOME)}>Go to home</button>
        </div>
    )
}
