"use client";

import { Modal } from "./Modals";
import { useModalStore } from "@/store/useModalStore";
import { Button } from "../ui/button";

export const LoginModal = () => {
  const { loginOpen, closeLogin } = useModalStore();

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
        <div className="flex justify-end">
          <Button onClick={handleLogin} className="bg-[#26A69A] hover:bg-[#4DB6AC] cursor-pointer">Iniciar</Button>
        </div>
      }
    >
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Correo electrónico</label>
          <input type="email" className="w-full rounded-md border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Contraseña</label>
          <input type="password" className="w-full rounded-md border p-2" />
        </div>
      </form>
    </Modal>
  );
};
