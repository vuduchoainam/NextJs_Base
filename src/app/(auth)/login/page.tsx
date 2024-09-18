"use Client";

import LoginForm from "./login-form";

const LoginPage = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="w-full max-w-2xl">
				<h1 className="mb-8 text-3xl font-semibold text-center">
					Đăng nhập
				</h1>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
