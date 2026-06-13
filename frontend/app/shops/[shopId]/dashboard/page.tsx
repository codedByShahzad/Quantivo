"use client";

import { useState } from "react";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FiShoppingBag, FiBox, FiShoppingCart } from "react-icons/fi";
import { HiOutlineWallet } from "react-icons/hi2";

import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import ProductCard from "@/src/components/ProductCard";

import { useRouter, useParams } from "next/navigation";

export const products = [
  {
    id: 1,
    name: "Dalda Cooking Oil 1L",
    price: 650,
    stock: 45,
    category: "Grocery & Staples",
    image: "/assets/dalda.webp",
  },
  {
    id: 2,
    name: "Lipton Green Tea 40 Bags",
    price: 850,
    stock: 32,
    category: "Beverages",
    image: "/assets/lipton.jpg",
  },
  {
    id: 4,
    name: "Surf Excel Detergent 1kg",
    price: 1180,
    stock: 27,
    category: "Household",
    image: "/assets/surf.jpg",
  },
  {
    id: 5,
    name: "Colgate Toothpaste 200g",
    price: 320,
    stock: 56,
    category: "Personal Care",
    image: "/assets/colgate.jpeg",
  },
  {
    id: 3,
    name: "Head & Shoulders Shampoo 185ml",
    price: 720,
    stock: 18,
    category: "Personal Care",
    image: "/assets/shampoo.webp",
  },
];

const stats = [
  {
    title: "Total Products",
    value: "0",
    subtitle: "All products in store",
    icon: <FiShoppingBag className="text-3xl text-blue-600" />,
    bg: "bg-blue-100",
  },
  {
    title: "Low Stock Items",
    value: "0",
    subtitle: "Products running low",
    icon: <FiBox className="text-3xl text-green-600" />,
    bg: "bg-green-100",
  },
  {
    title: "Total Sales",
    value: "Rs. 0",
    subtitle: "+0% from last month",
    icon: <FiShoppingCart className="text-3xl text-purple-600" />,
    bg: "bg-purple-100",
    textColor: "text-green-500",
  },
  {
    title: "Total Profit",
    value: "Rs. 0",
    subtitle: "+0% from last month",
    icon: <HiOutlineWallet className="text-3xl text-orange-500" />,
    bg: "bg-orange-100",
    textColor: "text-green-500",
  },
];

export default function Page() {
  const [date, setDate] = useState(new Date());

  const router = useRouter();
  const params = useParams();

  const shopId = params.shopId as string;
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row justify-center items-center md:justify-between ">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Dashboard
          </h1>

          <p className="mt-2 text-base sm:text-lg font-light text-slate-500">
            Welcome to Quantivo! Here's an overview of your business.
          </p>
        </div>

        {/* Right Side */}
        <div className="relative md:self-start">
          <DatePicker
            selected={date}
            onChange={(date: any) => setDate(date)}
            popperPlacement="bottom-end"
            wrapperClassName="inline-block"
            customInput={
              <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:border-slate-300 sm:px-5">
                <FiCalendar className="text-lg sm:text-xl text-slate-600" />

                <span className="text-sm sm:text-base font-medium text-slate-700">
                  This Month
                </span>

                <FiChevronDown className="text-base sm:text-lg text-slate-500" />
              </button>
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-col md:flex-row gap-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            {/* Icon */}
            <div
              className={`flex h-15 w-15 items-center justify-center rounded-full ${item.bg}`}
            >
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-md font-semibold text-slate-700">
                {item.title}
              </h3>

              <p className="mt-1 text-3xl font-semibold text-slate-900">
                {item.value}
              </p>

              <span
                className={`mt-2 text-sm font-light ${
                  item.textColor ?? "text-slate-500"
                }`}
              >
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="mt-8 md:p-6 md:border border-slate-200 rounded-2xl md:bg-white">
          <div className="flex justify-between items-center pb-6">
            <h1 className="text-2xl font-semibold ">Products</h1>
            <button
                onClick={() =>
                  router.push(`/shops/${shopId}/dashboard/products`)
                }
                className="flex items-center gap-2 rounded-md bg-white border border-blue-600 px-2 md:px-4 py-2 text-xs md:text-base font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                View More Products
              </button>
          </div>
          {products.length === 0 ? (
            <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py- shadow-sm">
              <Image
                src="/assets/signup.png"
                alt="No Products"
                width={280}
                height={280}
                className="object-contain"
              />

              <h2 className="mt-6 text-4xl font-bold text-slate-900">
                Let's get started!
              </h2>

              <p className="mt-3 max-w-lg text-center text-lg text-slate-500">
                Add your first product and start managing your business smarter
                with Quantivo.
              </p>

              <button
                onClick={() =>
                  router.push(`/shops/${shopId}/dashboard/products`)
                }
                className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-700"
              >
                <FiPlus className="text-2xl" />
                Add Your First Product
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
