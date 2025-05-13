import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
}

export const NavButton = ({
    label,
    href,
    isActive
}: Props) => {
    return ( 
        <Button
            className={cn(
                "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
                isActive ? "bg-white/10" : "bg-transparent"
            )}
            variant="ghost"
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
}