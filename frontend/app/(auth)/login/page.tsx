"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

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

    // Navigate to Shops page after login
    router.push("/shops");
  } catch (err: any) {
    toast.error(err?.data?.message || "Login failed");
  }
};

return (
  <div className="relative min-h-screen overflow-hidden bg-slate-50">
    {/* Background */}
    

    <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8">
      <div className="grid w-full max-w-360 items-center gap-12 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center">
          <Image
            src="/assets/quantivo-logo.png"
            alt="Quantivo"
            width={180}
            height={50}
            priority
          />

          <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm">
            <LuShieldCheck size={16} />
            Smart Business Management
          </div>

          <h1 className="mt-8 max-w-xl text-5xl font-bold leading-tight text-slate-900">
            Manage Your Business
            <span className="block text-blue-600">
              Smarter Than Ever
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
            Manage inventory, sales, customers,
            suppliers and analytics from one
            powerful dashboard.
          </p>

          <div className="mt-10">
            <Image
              src="/assets/loginside.png"
              alt="Illustration"
              width={650}
              height={500}
              priority
              className="h-auto max-h-[500px] w-full max-w-[650px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              w-full
              max-w-[460px]

              rounded-[32px]

              border
              border-white/50

              bg-white/80

              p-8
              md:p-10

              backdrop-blur-xl

              shadow-[0_20px_80px_rgba(15,23,42,0.08)]
            "
          >
            {/* Mobile Logo */}
            <div className="mb-8 flex justify-center lg:hidden">
              <Image
                src="/assets/quantivo-logo.png"
                alt="logo"
                width={160}
                height={40}
              />
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-end">
                <p className="text-sm text-slate-500">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-2 text-slate-500">
                Sign in to continue to Quantivo
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleLogin}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
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
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-12
                      pr-4
                      text-slate-900
                      transition-all

                      focus:border-blue-500
                      focus:bg-white
                      focus:outline-none
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <FiLock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      pl-12
                      pr-12
                      text-slate-900
                      transition-all

                      focus:border-blue-500
                      focus:bg-white
                      focus:outline-none
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
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

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-slate-500 hover:text-blue-600"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                  h-14
                  w-full

                  rounded-2xl

                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600

                  font-semibold
                  text-white

                  shadow-lg
                  shadow-blue-200

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:shadow-xl

                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {isLoading
                  ? "Logging In..."
                  : "Login"}
              </button>
            </form>

            {/* Features */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <FiShield className="text-blue-600" />
                </div>

                <p className="text-xs font-medium text-slate-600">
                  Secure
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <FiClock className="text-blue-600" />
                </div>

                <p className="text-xs font-medium text-slate-600">
                  Fast
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <TbRocket className="text-blue-600" />
                </div>

                <p className="text-xs font-medium text-slate-600">
                  Smart
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center text-xs text-slate-500">
              By continuing, you agree to our{" "}
              <span className="font-medium text-blue-600">
                Terms
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
  </div>
);
}