"use client";

import { useMedia } from "react-use";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import {  UserNav } from "./user";
import { InputSearch } from "./input-search";

export const Header = () => {
    const isMobile = useMedia("(max-width: 1024px)", false);

    if (isMobile) {
        return (
            <header className="flex justify-between w-screen bg-[#80cbc4] p-7">
                <Navigation />
                <InputSearch />
                <UserNav />
            </header>
        )
    }

    return ( 
        <header className="flex justify-between items-center w-screen bg-[#80cbc4] p-7">
            <Logo />
            <div className="flex gap-3 w-full justify-center">
                <Navigation />
                <InputSearch />
            </div>
            <UserNav />
        </header>
    );
}