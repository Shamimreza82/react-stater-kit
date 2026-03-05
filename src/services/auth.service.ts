import { env } from "../config/env";
import { http } from "./http";

type AuthPayload = {
  email: string;
  password: string;
};

type SignupPayload = AuthPayload & {
  name: string;
};

type AuthResponse = {
  accessToken: string;
};

export const authService = {
  async login(payload: AuthPayload) {
    if (env.VITE_USE_AUTH_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      return { accessToken: "mock-access-token" } satisfies AuthResponse;
    }

    const { data } = await http.post<AuthResponse>("/auth/login", payload);
    return data;
  },

  async signup(payload: SignupPayload) {
    if (env.VITE_USE_AUTH_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { accessToken: "mock-access-token" } satisfies AuthResponse;
    }

    const { data } = await http.post<AuthResponse>("/auth/signup", payload);
    return data;
  },
};

export type { AuthPayload, SignupPayload, AuthResponse };

