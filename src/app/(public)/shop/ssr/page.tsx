import { PageTitle } from "@/components/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SSR Page",
};

export default function SsrPage() {
    return (
        <div>
            <PageTitle title="Shop SSR" />
        </div>
    )
}
