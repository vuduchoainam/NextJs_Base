"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema";
import envConfig from "@/app/config";

const LoginForm = () => {
	const form = useForm<LoginBodyType>({
		resolver: zodResolver(LoginBody),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	async function onSubmit(values: LoginBodyType) {
		console.log("Form values: ", values); // Kiểm tra giá trị form trước khi gửi
		try {
			const result = await fetch(
				`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/Account/Login`,
				{
					body: JSON.stringify(values),
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
				}
			).then((res) => res.json());
			console.log(result);
		} catch (error) {
			console.error("Error during login: ", error);
		}
	}

	return (
		<div className="w-full p-8 rounded-lg shadow-lg">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6 "
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="email"
										className="w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Mật khẩu</FormLabel>
								<FormControl>
									<Input
										{...field}
										type="password"
										className="w-full"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Đăng nhập</Button>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
