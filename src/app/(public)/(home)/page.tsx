import { TWETS } from "@/shared/data/tweets.data";
import Tweet from "./Tweet";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (

    <div className="w-full max-w-xl">
      <h1 className="mb-5 text-white font-bold text-2xl">Home</h1>
      {TWETS.map((tweet, i) => (
        <Tweet key={i} tweet={tweet} />
      ))}
    </div>

  );
}