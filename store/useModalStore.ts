import { create } from 'zustand';

interface ModalState {
  loginOpen: boolean;
  signupOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  openSignup: () => void;
  closeSignup: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  loginOpen: false,
  signupOpen: false,
  openLogin: () => set({ loginOpen: true }),
  closeLogin: () => set({ loginOpen: false }),
  openSignup: () => set({ signupOpen: true }),
  closeSignup: () => set({ signupOpen: false })
}));
