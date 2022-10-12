import create from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  authorizeUser: () => set(() => ({ isAuthenticated: true })),
  unAuthorizeUser: () => set(() => ({ isAuthenticated: false })),
}));
