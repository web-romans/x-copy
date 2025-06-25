import { PAGES } from "@/config/pages.config";

export interface IMenuItem {
    name: string,
    href: string,
}

export const MENU = [
    {
        name: 'SSR',
        href: PAGES.SSR,
    },
    {
        name: 'SSG',
        href: PAGES.SSG,
    },
    {
        name: 'ISR',
        href: PAGES.ISR,
    }
]