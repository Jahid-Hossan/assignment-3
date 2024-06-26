import { z } from "zod";

const createUserSchemaValidation = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  role: z.enum(["admin", "user"]),
  address: z.string(),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }),
    password: z.string({ required_error: "Password is required" }),
  }),
});

export const userValidation = {
  createUserSchemaValidation,
  loginValidationSchema,
};
