"use client";

import { Modal } from "./Modals";
import { useModalStore } from "@/store/useModalStore";
import { Button } from "../ui/button";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const SignupModal = () => {
    const { signupOpen, closeSignup, openLogin } = useModalStore();
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");

    const handleSignup = () => {
        if (!email || !password || !name || !lastname || !date) return alert("Completa todos los campos");
        // Simulación de q si jalo w
        setTimeout(() => {
            closeSignup();
        }, 1000);
    };

    return (
        <Modal
            isOpen={signupOpen}
            onClose={closeSignup}
            title="Crear cuenta"
            footer={
                <div className="flex justify-end space-x-2">
                    <Button onClick={() => {
                        closeSignup();
                        openLogin();
                    }}>Ya tengo cuenta</Button>
                    <Button onClick={handleSignup} className="bg-[#26A69A] hover:bg-[#4DB6AC] cursor-pointer">Registrarse</Button>
                </div>
            }
        >
            <form className="space-y-4">
                <div>
                    <Label htmlFor="name" className="block text-sm font-medium">Nombre</Label>
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <Label htmlFor="lastname" className="block text-sm font-medium">Apellidos</Label>
                    <Input
                        id="lastname"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <Label htmlFor="email" className="block text-sm font-medium">Correo electrónico</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <Label htmlFor="password" className="block text-sm font-medium">Contraseña</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <Label htmlFor="nacimiento" className="block text-sm font-medium">Día de nacimiento</Label>
                    <Input
                        id="nacimiento"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        max={new Date().toISOString().split('T')[0]}
                        className="w-full rounded-md border p-2"
                    />
                </div>
            </form>
        </Modal>
    );
};
