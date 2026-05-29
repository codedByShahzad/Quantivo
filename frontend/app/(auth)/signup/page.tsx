"use client";

import { useState } from "react";
import Image from "next/image";
import { useSignupMutation } from "@/src/features/api/authApi";
import { LuShieldCheck } from "react-icons/lu";
import toast from "react-hot-toast";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signup, { isLoading }] = useSignupMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }).unwrap();

      toast.success("Account created successfully!");

      console.log("Signup Success:", response);
    } catch (err: any) {
      toast.error(
        err?.data?.message || "Failed to create account"
      );

      console.log("Signup Error:", err);
    }
  };

  return (
    <div className="h-[90vh] grid lg:grid-cols-[720px_1fr] bg-white">
      {/* LEFT SIDE */}
      <div className="hidden h-screen lg:flex flex-col justify-between bg-[#F9FAFE] px-8 pb-5 border-r border-gray-100">
        <div>
          <Image
            src="/assets/quantivo-logo.png"
            alt="Quantivo"
            width={180}
            height={50}
            priority
            className="h-auto"
          />

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-100 px-5 py-3 text-sm font-medium text-blue-600 shadow-sm">
            <LuShieldCheck size={20} />
            Smart Business Management
          </div>

          <h1 className="mt-8 text-[38px] font-bold leading-[1.1] text-[#0F172A]">
            Create Your Business Account
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            Join thousands of businesses growing with Quantivo.
          </p>

          <div className="relative mt-10 flex justify-center">
            <Image
              src="/assets/signup.png"
              alt="Signup Illustration"
              width={450}
              height={380}
              priority
              className="h-auto object-contain"
            />
          </div>

          <div className="w-md rounded-3xl border border-blue-100 bg-white p-5 shadow-md">
            <div className="mb-3 text-yellow-400">⭐⭐⭐⭐⭐</div>

            <p className="leading-relaxed text-gray-600">
              "Quantivo has simplified how we manage our store. Highly
              recommended!"
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                AR
              </div>

              <div>
                <h4 className="font-semibold">Ali Raza</h4>

                <p className="text-sm text-gray-500">
                  Super Store, Lahore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-12 flex flex-col gap-20 px-8 lg:px-16">
        <div className="mb-12 text-right">
          <p className="text-gray-500">
            Already have an account?{" "}
            <span className="cursor-pointer font-semibold text-blue-600">
              Login
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-[500px]">
            <div className="mb-10 text-center">
              <h2 className="text-4xl font-bold text-[#0F172A]">
                Create Account
              </h2>

              <p className="mt-3 text-lg text-gray-500">
                Enter your details to create your account
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="h-14 w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}