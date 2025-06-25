'use client';

import { usePathname } from "next/navigation";
import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.data";

export function Menu() {
    const pathname = usePathname();

    return <nav className="flex gap-6 text-sm text-white/80">
        {MENU.map((menuItem, i) => (
            <MenuItem
                key={i}
                menuItem={menuItem}
                isActive={pathname === menuItem.href}
            />
        ))}
    </nav>
}
