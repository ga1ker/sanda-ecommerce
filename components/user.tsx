import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { User } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

export const UserNav = () => {
    return ( 
        <Popover>
            <PopoverTrigger className="hover:bg-white/20 transition p-2 rounded-md">
                <User className="size-5" />
            </PopoverTrigger>
            <PopoverContent>
                <Button>Iniciar sesión</Button>
                <Button variant={"secondary"}>Registrarse</Button>
            </PopoverContent>
        </Popover>
    );
}