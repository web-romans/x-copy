'use client'

import { PageTitle } from "@/components/PageTitle";
import { useParams } from "next/navigation"

interface Props { }

export function Profile({ }: Props) {
    const params = useParams<{ username: string }>();
    const pageTitle = `Profile @${params.username}`

    return <PageTitle title={pageTitle} />
}
