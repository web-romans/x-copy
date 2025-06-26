import type { PropsWithChildren } from "react";
import { ShopMenu } from "@/app/(public)/shop/ShopMenu";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full max-w-xl mx-auto min-h-screen flex flex-col gap-6 px-4">
      <ShopMenu />
      {children}
    </div>
  );
}