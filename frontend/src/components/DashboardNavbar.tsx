"use client";

import { useState } from "react";
import {
  FiBell,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
  FiSearch,
} from "react-icons/fi";

export default function DashboardNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-30
        flex h-16 items-center justify-between
        border-b border-slate-200
        bg-white px-4 lg:px-8
      "
    >
      {/* Search */}

      <div className="hidden md:flex items-center">
        <div className="relative">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search products, invoices, customers..."
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
        {/* Notifications */}

        <button
          className="
            relative
            rounded-xl
            p-2.5
            text-slate-600
            transition
            hover:bg-slate-100
          "
        >
          <FiBell size={20} />

          <span
            className="
              absolute right-2 top-2
              h-2 w-2 rounded-full bg-red-500
            "
          />
        </button>

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

              <p className="text-xs text-slate-500">
                My Business
              </p>
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
  );
}