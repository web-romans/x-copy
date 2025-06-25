'use client';

import { usePathname } from "next/navigation";
import { MenuItem } from "./MenuItem";
import { MENU } from "../data/ShopMenu.data";
import { match } from "path-to-regexp";

export function ShopMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-6 text-sm text-white/80">
            {MENU.map((menuItem, i) => (
                <MenuItem
                    key={i}
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathname)}
                />
            ))}
        </nav>
    )
}
