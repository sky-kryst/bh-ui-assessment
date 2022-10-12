import create from "zustand";

interface ILoginDetailsStore {
  phoneNumber: string;
  modifyNumber: (number: string) => void;
  countryCode: string;
  modifyCode: (code: string) => void;
}

export const useLoginDetailsStore = create<ILoginDetailsStore>((set) => ({
  phoneNumber: "",
  modifyNumber: (number) => set(() => ({ phoneNumber: number })),
  modifyCode: (code) => set(() => ({ countryCode: code })),
  countryCode: "+91",
}));
