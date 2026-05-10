import React, { useState } from "react";
import SoftBackdrop from "./SoftBackdrop";

const Login = () => {
    const [state, setState] = useState("login");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleGoogleLogin = () => {
        const googleAuthUrl = import.meta.env.VITE_GOOGLE_AUTH_URL as string | undefined;

        if (!googleAuthUrl) {
            console.warn("Set VITE_GOOGLE_AUTH_URL to enable Google login.");
            return;
        }

        window.location.href = googleAuthUrl;
    };

    return (
        <>
        <SoftBackdrop/>
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl px-8"
            >
                <h1 className="text-white text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-2">Please sign in to continue</p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                        <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none" value={formData.name} onChange={handleChange} required />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-pink-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none" value={formData.password} onChange={handleChange} required />
                </div>

                <div className="mt-4 text-left">
                    <button className="text-sm text-pink-400 hover:underline" type="button">
                        Forget password?
                    </button>
                </div>

                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-pink-600 hover:bg-pink-500 transition">
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                <div className="mt-4 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-white/10" />
                </div>

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="mt-4 w-full h-11 rounded-full border border-pink-500/50 bg-pink-600 text-white hover:bg-pink-500 transition flex items-center justify-center gap-3"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-5" aria-hidden="true">
                        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4C12.9 4 4 12.9 4 24s8.9 20 20 20s20-8.9 20-20c0-1.3-0.1-2.3-0.4-3.5z" />
                        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.2 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4C16.3 4 9.6 8.3 6.3 14.7z" />
                        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.8-3.4-11.4-8.2l-6.5 5C9.3 39.4 16.1 44 24 44z" />
                        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-0.8 2.3-2.2 4.2-4.1 5.5l6.2 5.2C37 39 44 34 44 24c0-1.3-0.1-2.3-0.4-3.5z" />
                    </svg>
                    Continue with Google
                </button>

                <p onClick={() => setState((prev) => (prev === "login" ? "register" : "login"))} className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer">
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <span className="text-pink-400 hover:underline ml-1">click here</span>
                </p>
            </form>
        </div>
        </>
    );
};

export default Login;