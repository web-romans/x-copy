'use client';

import { usePathname } from "next/navigation";
import { MenuItem } from "../../../components/MenuItem";
import { SHOP_MENU } from "../../../data/menu.data";
import { match } from "path-to-regexp";

export function ShopMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-6 text-sm text-white/80">
            {SHOP_MENU.map((menuItem, i) => (
                <MenuItem
                    key={i}
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathname)}
                />
            ))}
        </nav>
    )
}
