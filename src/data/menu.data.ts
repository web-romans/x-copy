import { PAGES } from "@/config/pages.config";

export interface IMenuItem {
    name: string,
    href: string,
}

export const MENU = [
    {
        name: 'Home',
        href: PAGES.HOME,
    },
    {
        name: 'Explore',
        href: PAGES.EXPLORE,
    },
    {
        name: 'Profile',
        href: PAGES.PROFILE_FAKE,
    },
    {
        name: 'Shop',
        href: PAGES.SHOP,
    },
]