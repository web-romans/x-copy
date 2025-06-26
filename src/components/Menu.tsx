'use client';

import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { MenuItem } from "./MenuItem";
import { MENU } from "../data/menu.data";
import { match } from "path-to-regexp";
import { PAGES } from "@/config/pages.config";

export function Menu() {
    const pathname = usePathname();
    const segment = useSelectedLayoutSegment();

    return (
        <nav className="flex gap-6 text-sm text-white/80">
            {MENU.map((menuItem, i) => (
                <MenuItem
                    key={i}
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathname) || (segment === 'shop' && menuItem.href === PAGES.SHOP)}
                />
            ))}
        </nav>
    )
}
