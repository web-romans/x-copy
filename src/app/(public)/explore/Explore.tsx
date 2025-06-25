'use client'

import { PageTitle } from "@/components/PageTitle";
import { useSearchParams } from "next/navigation"

//server component
/*type Params = { tag?: string }

export default async function ExploreServer({
    searchParams
}: {
    searchParams: Promise<Params>
}) {
    const tag = await searchParams;

    return <PageTitle title={`Explore${tag ? ` by #${tag}` : ''}`} />
}*/

export function Explore() {
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');

    return <PageTitle title={`Explore${tag ? ` by #${tag}` : ''}`} />
}
