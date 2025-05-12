"use client";

import { useMedia } from "react-use";
import { Logo } from "./logo";
import { Navigation } from "./navigation";
import {  UserNav } from "./user";

export const Header = () => {
    const isMobile = useMedia("(max-width: 1024px)", false);

    if (isMobile) {
        return (
            <header className="flex justify-between w-screen bg-[#80cbc4] p-7">
                <Navigation />
                <Logo />
                <UserNav />
            </header>
        )
    }

    return ( 
        <header className="flex justify-between w-screen bg-[#80cbc4] p-7">
            <Logo />
            <Navigation />
            <UserNav />
        </header>
    );
}