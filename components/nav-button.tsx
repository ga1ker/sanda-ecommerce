import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
    href: string;
    label: string;
}

export const NavButton = ({
    label,
    href
}: Props) => {
    return ( 
        <Button
            className="hover:bg-white/20"
            variant="ghost"
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
}