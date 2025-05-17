"use client";

import { usePathname } from "next/navigation";
import { useMedia } from "react-use";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { UserNav } from "./user";
import { InputSearch } from "./input-search";
import { useMemo } from "react";

export const Header = () => {
    const pathname = usePathname();
    const isHome = useMemo(() => pathname === "/", [pathname]);

    const isMobile = useMedia("(max-width: 1024px)", false);

    if (isMobile) {
        return (
            <>
                <header className="flex top-0 z-10 justify-between space-x-2 w-screen bg-[#80cbc4] p-7">
                    <Navigation />
                    <InputSearch />
                    <UserNav />
                </header>
            </>
        );
    }

    return (
        <>
            <header className="flex top-0 z-10 justify-between space-x-2 w-screen bg-[#80cbc4] p-7">
                <Logo />
                <div className="flex gap-3 w-full justify-center">
                    <Navigation />
                    <InputSearch />
                </div>
                <UserNav />
            </header>
        </>
    );
}