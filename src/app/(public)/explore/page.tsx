import type { Metadata } from "next";
import { Suspense } from "react";
import { Explore } from "./Explore";

export const metadata: Metadata = {
    title: "Explore",
};

export default function ExplorePage() {
    return (
        <div className="w-full max-w-xl">
            <Suspense>
                <Explore />
            </Suspense>
        </div >
    )
}
