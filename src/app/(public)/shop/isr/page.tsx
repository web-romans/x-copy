import { PageTitle } from "@/components/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISR Page",
};

export default function IsrPage() {
    return (
        <div>
            <PageTitle title="Shop ISR" />
        </div>
    )
}
