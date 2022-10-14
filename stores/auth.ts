import create from "zustand";

interface IAuthStore {
  isAuthenticated: boolean
  authorizeUser: () => void
  unAuthorizeUser: () => void
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: true,
  authorizeUser: () => set(() => ({ isAuthenticated: true })),
  unAuthorizeUser: () => set(() => ({ isAuthenticated: false })),
}));
