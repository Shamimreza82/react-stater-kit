import { z } from "zod";

const envSchema = z.object({
  VITE_API_BASE_URL: z.url().default("http://localhost:4000/api"),
  VITE_APP_NAME: z.string().default("Nova Starter"),
  VITE_SITE_URL: z.url().default("http://localhost:5173"),
  VITE_USE_AUTH_MOCK: z
    .string()
    .optional()
    .default("true")
    .transform((value) => value === "true"),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  console.error("Invalid environment configuration", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid .env configuration");
}

export const env = parsed.data;
