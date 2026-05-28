"use client";

import { useState } from "react";

import { useLoginMutation } from "@/src/features/api/authApi";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [
    login,
    { isLoading, error, isSuccess, data },
  ] = useLoginMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await login(formData).unwrap();

      console.log("Login Success:", response);
    } catch (err) {
      console.log("Login Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>

        {isSuccess && (
          <p className="text-green-600 text-center">
            Login Successful
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center">
            Login Failed
          </p>
        )}

        {data && (
          <pre className="text-xs bg-gray-100 p-2 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </form>
    </div>
  );
}