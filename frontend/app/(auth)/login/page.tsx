"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { TbRocket } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { useLoginMutation } from "@/src/features/api/authApi";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();

      toast.success("Login successful!");

      console.log(response);
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="grid min-h-screen lg:grid-cols-[720px_1fr]">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#F8FAFC] to-[#EEF4FF] px-8 py-6">
          <div>
            <Image
              src="/assets/quantivo-logo.png"
              alt="Quantivo"
              width={170}
              height={45}
              priority
            />

            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              <LuShieldCheck size={16} />
              Smart Business Management
            </div>

            <h1 className="mt-8 text-[38px] font-bold leading-[1.1] text-[#0F172A]">
              Welcome Back!
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-500">
              Login to continue managing your business smarter and more
              efficiently with Quantivo.
            </p>

            <div className="mt-8 flex justify-center">
              <Image
                src="/assets/loginside.png"
                alt="Login"
                width={450}
                height={380}
                className="h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <FiShield
                  size={28}
                  className="text-[#2563EB]"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-900">
                  Secure & Reliable
                </h4>

                <p className="mt-1 text-base text-slate-500">
                  Your data is safe with enterprise-grade security.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <FiClock
                  size={28}
                  className="text-[#2563EB]"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-900">
                  Save Time
                </h4>

                <p className="mt-1 text-base text-slate-500">
                  Automate tasks and manage everything in one place.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                <TbRocket
                  size={28}
                  className="text-[#2563EB]"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-900">
                  Grow Faster
                </h4>

                <p className="mt-1 text-base text-slate-500">
                  Powerful insights to help your business scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center bg-white px-5 py-10 sm:px-8">
          <div className="w-full max-w-[500px]">
            <div className="mb-8 text-center sm:text-right">
              <p className="text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-blue-600"
                >
                  Create Account
                </Link>
              </p>
            </div>

            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Login to Your Account
              </h2>

              <p className="mt-3 text-base text-slate-500 sm:text-lg">
                Enter your details to access your account
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <FiMail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <FiLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-12 shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="h-14 w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Logging In..." : "Login"}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              By logging in, you agree to our{" "}
              <span className="font-medium text-blue-600">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="font-medium text-blue-600">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}