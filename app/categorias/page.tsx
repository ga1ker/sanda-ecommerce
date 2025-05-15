import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Car, PcCase, Smartphone } from "lucide-react";

export default function Categorias () {
    return (
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 px-5 py-6">
            <Card>
                <CardHeader>
                    <Car className="size-8" />
                </CardHeader>
                <CardContent>
                    Coches
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Smartphone className="size-8" />
                </CardHeader>
                <CardContent>
                    Celulares
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <PcCase className="size-8" />
                </CardHeader>
                <CardContent>
                    Computación
                </CardContent>
            </Card>
        </div>
    )
}