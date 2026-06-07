"use client";

import DashboardNavbar from "@/src/components/DashboardNavbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  FiBell,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
  FiSearch,
} from "react-icons/fi";

const shops = [
  {
    _id: "shop_001",
    shopName: "ABC Super Store",
    ownerId: "user_001",
    logo: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1000",
    phone: "+92 300 1234567",
    address: "Blue Area, Islamabad, Pakistan",
    totalEmployees: "18",
    businessType: "Retail Store",
    subscriptionPlan: "Premium",
    subscriptionStatus: "Active",
    createdAt: "2026-06-07T10:00:00.000Z",
  },
  {
    _id: "shop_002",
    shopName: "Fresh Mart",
    ownerId: "user_001",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000",
    phone: "+92 321 7654321",
    address: "Saddar, Rawalpindi, Pakistan",
    totalEmployees: "10",
    businessType: "Grocery Store",
    subscriptionPlan: "Basic",
    subscriptionStatus: "Active",
    createdAt: "2026-06-05T10:00:00.000Z",
  },
  {
    _id: "shop_003",
    shopName: "Tech World",
    ownerId: "user_001",
    logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000",
    phone: "+92 333 9876543",
    address: "Main Boulevard, Lahore, Pakistan",
    totalEmployees: "25",
    businessType: "Electronics",
    subscriptionPlan: "Enterprise",
    subscriptionStatus: "Active",
    createdAt: "2026-06-01T10:00:00.000Z",
  },
];
export default function ShopsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-52 -left-52 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl opacity-70" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-100 blur-3xl opacity-60" />
      </div>

      <div className="">
        <div className="">
          <header
            className="
            sticky top-0 z-30
            flex h-16 items-center justify-between
            border-b border-slate-200
            bg-white px-4 lg:px-8
          "
          >
            <Image
              src="/assets/quantivo-logo.png"
              alt="Quantivo Logo"
              width={150}
              height={45}
              className="h-auto w-auto"
              priority
            />
            {/* Search */}

            <div className="hidden md:flex items-center">
              <div className="relative">
                <FiSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search for shopes"
                  className="
                  h-11 w-[320px]
                  rounded-xl
                  border border-slate-200
                  bg-[#F7F8FF]
                  pl-11 pr-4
                  text-sm
                  outline-none
                  transition-all
    
                  focus:border-blue-500
                  focus:bg-white
                  focus:ring-4
                  focus:ring-blue-100
                "
                />
              </div>
            </div>

            {/* Right Side */}

            <div className="flex items-center gap-5">
              {/* User Menu */}

              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="
                  flex items-center gap-3
                  rounded-xl
                  px-2 py-1.5
                  transition
                  hover:bg-slate-100
                "
                >
                  {/* Avatar */}

                  <div
                    className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-blue-600
                    text-sm font-semibold text-white
                  "
                  >
                    LC
                  </div>

                  {/* User Info */}

                  <div className="hidden text-left md:block">
                    <h4 className="text-sm font-semibold text-slate-800">
                      Late Commit
                    </h4>

                    <p className="text-xs text-slate-500">My Business</p>
                  </div>

                  <FiChevronDown
                    className={`transition duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}

                {open && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setOpen(false)}
                    />

                    <div
                      className="
                      absolute right-0 top-14 z-20
                      w-56
                      rounded-2xl
                      border border-slate-200
                      bg-white
                      p-2
                      shadow-xl
                    "
                    >
                      <button
                        className="
                        flex w-full items-center gap-3
                        rounded-xl px-4 py-3
                        text-sm text-slate-700
                        hover:bg-slate-100
                      "
                      >
                        <FiUser />
                        Profile
                      </button>

                      <button
                        className="
                        flex w-full items-center gap-3
                        rounded-xl px-4 py-3
                        text-sm text-slate-700
                        hover:bg-slate-100
                      "
                      >
                        <FiSettings />
                        Settings
                      </button>

                      <div className="my-2 border-t" />

                      <button
                        className="
                        flex w-full items-center gap-3
                        rounded-xl px-4 py-3
                        text-sm text-red-500
                        hover:bg-red-50
                      "
                      >
                        <FiLogOut />
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium border-0.5 border-blue-600 text-blue-600">
              Quantivo Workspace
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
              Select a Shop
            </h1>

            <p className="mt-2 text-lg text-slate-500">
              Choose a shop to continue to its dashboard. If you haven't created
              one yet, create a new shop.
            </p>
          </div>

          <Link
            href="/shops/create"
            className="
            flex
            h-12
            items-center
            justify-center
            border
            border-blue-600
bg-blue-50
 text-blue-600
rounded-md
            px-6

            font-semibold

            transition-all

            hover:bg-blue-700
            hover:text-white
          "
          >
            + Create New Shop
          </Link>
        </div>

        {/* Workspace Section */}

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Your Shops</h2>

            <p className="text-slate-500">Select a workspace to continue.</p>
          </div>
        </div>

        {/* Cards */}

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
  {shops.map((shop) => (
    <div
      key={shop._id}
      className="
        group

        rounded-3xl
        border
        border-slate-200

        bg-white

        p-6

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-600
        hover:shadow-lg
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              from-blue-600
              to-indigo-600

              text-lg
              font-bold
              text-white
            "
          >
            {shop.shopName.charAt(0)}
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              {shop.shopName}
            </h3>

            <p className="text-sm text-slate-500">
              {shop.businessType}
            </p>
          </div>
        </div>

        <span className="rounded-full border border-green-600 bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
          Active
        </span>
      </div>

      {/* Address */}
      <div className="mt-6 rounded-2xl bg-slate-50 p-4">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Address
        </p>

        <p className="mt-2 text-sm text-slate-600">
          {shop.address}
        </p>
      </div>

      {/* Info */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-slate-400">
            Employees
          </p>

          <p className="font-semibold text-slate-900">
            {shop.totalEmployees}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Plan
          </p>

          <p className="font-semibold text-slate-900">
            {shop.subscriptionPlan}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Phone
          </p>

          <p className="font-semibold text-slate-900">
            {shop.phone}
          </p>
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Created
          </p>

          <p className="font-semibold text-slate-900">
            {new Date(shop.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Button */}
      <Link
        href={`/shops/${shop._id}/dashboard`}
        className="
          mt-6

          flex
          h-12
          items-center
          justify-center

          rounded-md
          border
          border-blue-600

          bg-blue-50
          text-blue-600

          font-medium

          transition-all
          duration-300

          hover:bg-blue-600
          hover:text-white

          group-hover:bg-blue-600
          group-hover:text-white
          group-hover:border-blue-600
        "
      >
        Open Workspace →
      </Link>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}
