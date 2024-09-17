"use client";

import RegisterForm from "./register-form";

const RegisterPage = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="w-full max-w-2xl">
				<h1 className="mb-8 text-3xl font-semibold text-center">
					Đăng ký tài khoản
				</h1>
				<RegisterForm />
			</div>
		</div>
	);
};

export default RegisterPage;
