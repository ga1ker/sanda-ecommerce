"use client";

import { usePathname } from "next/navigation";
import { useMedia } from "react-use";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { UserNav } from "./user";
import { InputSearch } from "./input-search";
import { useMemo } from "react";
import {ThemeToggle} from "./theme-toggle";

export const Header = () => {
    const pathname = usePathname();
    const isHome = useMemo(() => pathname === "/", [pathname]);

    const isMobile = useMedia("(max-width: 1024px)", false);

    if (isMobile) {
        return (
            <>
                <header className="flex top-0 z-10 fixed justify-between space-x-2 w-screen bg-teal-400 transition dark:bg-gray-900 p-7">
                    <Navigation />
                    <InputSearch />
                    <UserNav />
                </header>
            </>
        );
    }

    return (
        <>
            <header className="flex top-0 z-50 fixed mb-48 justify-between space-x-2 w-screen transition dark:bg-gray-900 bg-blue-400 p-7">
                <Logo />
                <div className="flex gap-3 w-full justify-center">
                    <Navigation />
                    <InputSearch />
                    <ThemeToggle />
                </div>
                <UserNav />
            </header>
        </>
    );
}