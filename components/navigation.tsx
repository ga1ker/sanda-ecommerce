'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMedia } from "react-use"
import { useRouter } from "next/navigation";

import { NavButton } from "./nav-button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "./ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import { Input } from "./ui/input";
import { InputSearch } from "./input-search";

const routes = [
    {
        href: "/",
        label: "Inicio"
    },
    {
        href: "/categorias",
        label: "Categorías"
    },
]

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()
    const pathname = usePathname()
    const isMobile = useMedia("(max-width: 1024px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false)
    }

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition"
                    >
                        <Menu className="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <SheetTitle>Navigation</SheetTitle>
                    <nav className="flex flex-col gap-y-2 pt-2">
                        {routes.map((route) => (
                            <Button
                                key={route.href}
                                variant={route.href == pathname ? "secondary" : "ghost"}
                                onClick={() => onClick(route.href)}
                                className="w-full justify-start"
                            >
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        )
    }


    return (
        <div className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
            {
            routes.map((route) => (
                <NavButton 
                    key={route.href}
                    label={route.label}
                    href={route.href}
                />
            ))
            }
            <InputSearch />
            <Button
                variant="ghost"
            >
                <ShoppingBag />
            </Button>
        </div>
    )
}