import { PAGES } from "@/config/pages.config";
import type { ITweet } from "@/shared/types/tweet.interfase";
import Image from "next/image";
import Link from "next/link";

interface Props {
    tweet: ITweet
}

export default function Tweet({ tweet }: Props) {
    return (
        <div className="border-white/10 rounded-xl p-4 bg-black text-white shadow-md not-last:mb-5">
            <div className="flex items-center gap-3 mb-4">
                <Image
                    src="/x.svg"
                    width={16}
                    height={16}
                    alt="&"
                />
                <Link href={PAGES.PROFILE(tweet.author)} className="text-m font-medium">@{tweet.author}</Link>
            </div>

            <p className="text-white/90">{tweet.text}</p>
        </div>
    )
}
