import { TWETS } from "@/shared/data/tweets.data";
import Tweet from "./Tweet";

import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import TweetForm from "./TweetForm";


export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="w-full max-w-xl">
      <PageTitle title='Home' />
      <TweetForm />
      {TWETS.map((tweet, i) => (
        <Tweet key={i} tweet={tweet} />
      ))}
    </div>
  );
}