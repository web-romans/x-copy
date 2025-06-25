"use client";

import { postTweet } from "@/server-action/post-tweet/post-tweet";
import { useRef } from 'react';

export default function TweetForm() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFormClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <form
            action={postTweet}
            onClick={handleFormClick}
            className="border border-white/10  rounded-xl p-4 bg-transparent text-white space-y-3transition-colors not-last:mb-5 focus-within:border-white/30 cursor-text"
        >
            <input
                name="content"
                ref={inputRef}
                type="text"
                placeholder="What's happening?"
                className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
            />
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                    Tweet
                </button>
            </div>
        </form>
    )
}
