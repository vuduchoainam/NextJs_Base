import { z } from "zod";

// Schema cho đăng ký người dùng
export const RegisterBody = z
	.object({
		name: z.string().trim().min(2).max(256),
		email: z.string().email(),
		password: z.string().min(6).max(100),
		confirmPassword: z.string().min(6).max(100),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: "custom",
				message: "Password do not match!",
				path: ["confirmPassword"],
			});
		}
	});

export type RegisterBodyType = z.infer<typeof RegisterBody>;

// Schema cho đăng nhập
export const LoginBody = z.object({
	email: z.string().email(),
	password: z.string().min(6).max(100),
});

export type LoginBodyType = z.infer<typeof LoginBody>;
