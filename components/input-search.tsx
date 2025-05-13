import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const InputSearch = () => {
    return ( 
        <div className="flex w-full max-w-sm items-center space-x-0 border-1 rounded-md">
            <Input className="border-none placeholder:text-white/70" placeholder="Buscar..." />
            <Button variant="ghost"><Search className="text-white"/></Button>
        </div>
    );
}