"use client";

import { useState } from "react";
import { useSignupMutation } from "@/src/features/api/authApi";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    signup,
    { isLoading, error, isSuccess, data },
  ] = useSignupMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const response = await signup(formData).unwrap();

      console.log("Signup Success:", response);
    } catch (err) {
      console.log("Signup Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-3xl font-bold text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

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
          {isLoading ? "Loading..." : "Signup"}
        </button>

        {isSuccess && (
          <p className="text-green-600 text-center">
            Signup Successful
          </p>
        )}

        {error && (
          <p className="text-red-600 text-center">
            Signup Failed
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