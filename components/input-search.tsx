import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const InputSearch = () => {
    return ( 
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button variant="ghost"><Search /></Button>
        </div>
    );
}