import { create } from "zustand";

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
};

const ACCESS_TOKEN_KEY = "accessToken";

const getInitialToken = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const useAuthStore = create<AuthState>((set) => {
  const initialToken = getInitialToken();

  return {
    token: initialToken,
    isAuthenticated: Boolean(initialToken),
    setToken: (token) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
      set({ token, isAuthenticated: true });
    },
    clearToken: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      set({ token: null, isAuthenticated: false });
    },
  };
});

