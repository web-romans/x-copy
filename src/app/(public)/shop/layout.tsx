import type { PropsWithChildren } from "react";
import { Header } from "@/components/Header";
import { ShopMenu } from "@/components/ShopMenu";
import { PageTitle } from "@/components/PageTitle";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full max-w-xl mx-auto min-h-screen flex flex-col gap-6 px-4">
      <ShopMenu />
      {children}
    </div>
  );
}