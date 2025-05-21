"use client";

import { Modal } from "./Modals";
import { useModalStore } from "@/store/useModalStore";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const LoginModal = () => {
  const { loginOpen, closeLogin, openSignup } = useModalStore();

  const handleLogin = () => {
    // Simulación de q sirve we
    setTimeout(() => {
      closeLogin();
    }, 1000);
  };

  return (
    <Modal
      isOpen={loginOpen}
      onClose={closeLogin}
      title="Iniciar sesión"
      footer={
        <div className="flex justify-end space-x-2">
          <Button onClick={handleLogin} className="bg-[#26A69A] hover:bg-[#4DB6AC] cursor-pointer">Iniciar</Button>
        </div>
      }
    >
      <form className="space-y-4">
        <div>
          <Label htmlFor="email" className="block text-sm font-medium">Correo electrónico</Label>
          <Input type="email" id="email" className="w-full border rounded-md p-2" />
        </div>
        <div>
          <Label htmlFor="password" className="block text-sm font-medium">Contraseña</Label>
          <Input type="password" id="password" className="w-full border rounded-md p-2" />
        </div>
      </form>
    </Modal>
  );
};
