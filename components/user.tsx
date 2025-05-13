import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { User } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Link from "next/link";

export const UserNav = () => {
    return ( 
        <div className="flex lg:space-x-3 space-x-0 text-white">
            <Popover>
                <PopoverTrigger className="hover:bg-white/20 transition p-2 rounded-md">
                    <User className="size-5" />
                </PopoverTrigger>
                <PopoverContent className="flex justify-between">
                    <Button>Iniciar sesión</Button>
                    <Button variant={"secondary"}>Registrarse</Button>
                </PopoverContent>
            </Popover>
            <Button
                variant="ghost"
                className="hover:bg-white/20 transition p-2 rounded-md"
            >
                <Link href={"carrito"}>
                    <ShoppingBag className="size-5" />
                </Link>
            </Button>
        </div>
    );
}