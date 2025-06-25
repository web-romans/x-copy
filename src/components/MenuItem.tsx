import Link from "next/link";
import type { IMenuItem } from "./menu.data";

interface Props {
    menuItem: IMenuItem
    isActive: boolean
}

export function MenuItem({ menuItem, isActive }: Props) {
    return <Link
        href={menuItem.href}
        className={isActive ? "text-white" : ""}
    >
        {menuItem.name}
    </Link>
}
