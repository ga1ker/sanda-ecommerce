"use client";

import { ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Link from "next/link";
import { useModalStore } from "@/store/useModalStore";
import { LoginModal } from "./modals/LoginModal";
import { SignupModal } from "./modals/SignupModal";
import { isLoggedIn } from "@/lib/utils";

export const UserNav = () => {
    const { openLogin, openSignup } = useModalStore();
    const isLogged = isLoggedIn(); 

    return (
        <>
            <LoginModal />
            <SignupModal />

            <div className="flex lg:space-x-3 space-x-0 text-white">
                <Popover>
                    <PopoverTrigger className="hover:bg-white/20 transition p-2 rounded-md">
                        <User className="size-5" />
                    </PopoverTrigger>
                    {isLogged ? (
                        <PopoverContent className="flex justify-between gap-2 bg-[#80CBC4] border-none">
                            <Button onClick={() => {}} className="cursor-pointer bg-[#26A69A] hover:bg-[#26A69A]/80">Mis compras</Button>
                            <Button onClick={() => {}} className="cursor-pointer bg-[#26A69A] hover:bg-[#26A69A]/80">Ajustes</Button>
                            <Button onClick={() => {}} className="cursor-pointer bg-[#26A69A] hover:bg-[#26A69A]/80">Cerrar sesión</Button>
                        </PopoverContent>
                    ) : (
                        <PopoverContent className="flex justify-between gap-2 bg-[#80CBC4] border-none">
                            <Button onClick={openLogin} className="cursor-pointer bg-[#26A69A] hover:bg-[#26A69A]/80">Iniciar sesión</Button>
                            <Button variant="secondary" onClick={openSignup} className="cursor-pointer dark:bg-gray-700 bg-gray-200 hover:bg-gray-300">Registrarse</Button>
                        </PopoverContent>
                    )}
                </Popover>
                {isLogged && (
                <Link href="carrito">
                    <Button
                        variant="ghost"
                        className="hover:bg-white/20 transition rounded-md"
                    >
                        <ShoppingBag className="size-5" />
                    </Button>
                </Link>
                )}
            </div>
        </>
    );
};
