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
import {
	RegisterBody,
	RegisterBodyType,
} from "@/schemaValidations/auth.schema";
import envConfig from "@/app/config";

const RegisterForm = () => {
	const form = useForm<RegisterBodyType>({
		resolver: zodResolver(RegisterBody),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});
	async function onSubmit(values: RegisterBodyType) {
		const result = await fetch(
			`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/Account/Register`,
			{
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			}
		).then((res) => res.json());
		console.log(result);
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
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} className="w-full" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
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
					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Xác nhận mật khẩu</FormLabel>
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
					<Button type="submit">Đăng ký</Button>
				</form>
			</Form>
		</div>
	);
};

export default RegisterForm;
