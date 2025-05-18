"use client";

import { Modal } from "./Modals";
import { useModalStore } from "@/store/useModalStore";
import { Button } from "../ui/button";
import { useState } from "react";

export const SignupModal = () => {
    const { signupOpen, closeSignup } = useModalStore();
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
                <div className="flex justify-end">
                    <Button onClick={handleSignup} className="bg-[#26A69A] hover:bg-[#4DB6AC] cursor-pointer">Registrarse</Button>
                </div>
            }
        >
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Apellidos</label>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Correo electrónico</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-md border p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Día de nacimiento</label>
                    <input
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
