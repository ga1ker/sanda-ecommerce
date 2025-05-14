import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export const Logo = () => {
    return ( 
        <div className="flex justify-center items-center space-x-2">
            <Image 
                src={"/sanda_logotipo.png"}
                alt="Sanda logo"
                width={120}
                height={50}
                priority
            />
        </div>
    );
}