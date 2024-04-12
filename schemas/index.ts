import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum password is 6 characters",
  }),
  firstname: z
    .string()
    .min(1, {
      message: "First name is required",
    })
    .regex(/^[A-Za-z]+$/, {
      message: "First name must contain only English letters and no spaces.",
    }),
  lastname: z
    .string()
    .min(1, {
      message: "Last name is required",
    })
    .regex(/^[A-Za-z]+$/, {
      message: "Last name must contain only English letters and no spaces.",
    }),
});
