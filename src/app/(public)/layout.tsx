import type { PropsWithChildren } from "react";
import { Header } from "@/components/Header";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-3">
    <Header />
    <div className="min-h-screen flex justify-center px-4 py-8">
      {children}
    </div>
  </div>;
}