"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FiSearch, FiMoreVertical, FiChevronDown } from "react-icons/fi";
import { useEffect, useRef } from "react";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
const products = [
  {
    id: 1,
    name: "Dalda Ghee 1kg",
    description: "Premium quality ghee",
    image: "/assets/dalda.webp",
    sku: "DALDA-1KG",
    category: "Grocery & Staples",
    price: 1650,
    stock: 45,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Surf Excel 1kg",
    description: "Stain removal detergent",
    image: "/assets/surf.jpg",
    sku: "SURF-1KG",
    category: "Home Care",
    price: 950,
    stock: 32,
    status: "In Stock",
  },
  {
    id: 3,
    name: "Head & Shoulders 400ml",
    description: "Anti-dandruff shampoo",
    image: "/assets/shampoo.webp",
    sku: "HS-400ML",
    category: "Personal Care",
    price: 850,
    stock: 28,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Colgate Toothpaste 100ml",
    description: "Maximum cavity protection",
    image: "/assets/colgate.jpeg",
    sku: "COLG-100ML",
    category: "Personal Care",
    price: 180,
    stock: 60,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Lipton Green Tea",
    description: "Natural and refreshing",
    image: "/assets/lipton.jpg",
    sku: "LIPTON-100",
    category: "Beverages",
    price: 250,
    stock: 22,
    status: "In Stock",
  },
  {
    id: 6,
    name: "Nestle Milk Pack 1L",
    description: "Fresh dairy milk",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200",
    sku: "MILK-1L",
    category: "Dairy",
    price: 290,
    stock: 35,
    status: "In Stock",
  },
  {
    id: 7,
    name: "Pepsi 1.5L",
    description: "Refreshing soft drink",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200",
    sku: "PEPSI-15",
    category: "Beverages",
    price: 180,
    stock: 15,
    status: "Low Stock",
  },
  {
    id: 8,
    name: "Tapal Danedar Tea",
    description: "Strong black tea",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=200",
    sku: "TAPAL-900",
    category: "Beverages",
    price: 720,
    stock: 20,
    status: "Low Stock",
  },
  {
    id: 9,
    name: "National Ketchup",
    description: "Tomato ketchup 800g",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200",
    sku: "NAT-800",
    category: "Sauces",
    price: 340,
    stock: 42,
    status: "In Stock",
  },
];

export default function ProductTable() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [openAction, setOpenAction] = useState<number | null>(null);

  const actionRef = useRef<HTMLTableCellElement | null>(null);
  const categories = [
    "All Categories",
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        actionRef.current &&
        !actionRef.current.contains(event.target as Node)
      ) {
        setOpenAction(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-6">
      {/* Search & Category */}

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="relative w-full lg:w-[40%]">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Category */}

        <div className="relative w-full lg:w-72">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
        h-14
        w-full
        appearance-none
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        pr-12
        text-slate-800
        outline-none
        focus:border-blue-500
      "
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <FiChevronDown
            className="
        pointer-events-none
        absolute
        right-5
        top-1/2
        -translate-y-1/2
        text-xl
        text-slate-500
      "
          />
        </div>
      </div>

      {/* Table */}

      <div className="w-full overflow-x-auto">
        <table className="min-w-[950px] w-full">
          <thead className="border-b border-slate-200">
            <tr className="text-left text-sm font-medium text-slate-600">
              <th className="pb-4 whitespace-nowrap">Product</th>
              <th className="pb-4 whitespace-nowrap">SKU</th>
              <th className="pb-4 whitespace-nowrap">Category</th>
              <th className="pb-4 whitespace-nowrap">Price</th>
              <th className="pb-4 whitespace-nowrap">Stock</th>
              <th className="pb-4 whitespace-nowrap">Status</th>
              <th className="pb-4 text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 transition hover:bg-slate-50"
              >
                {/* Product */}

                <td className="py-5">
                  <div className="flex min-w-[240px] items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="h-12 w-12 flex-shrink-0 rounded-lg object-contain"
                    />

                    <div>
                      <h3 className="font-semibold text-slate-700 whitespace-nowrap">
                        {item.name}
                      </h3>

                      <p className="text-sm font-light text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* SKU */}

                <td className="t text-slate-600 whitespace-nowrap">
                  {item.sku}
                </td>

                {/* Category */}

                <td className="whitespace-nowrap">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                    {item.category}
                  </span>
                </td>

                {/* Price */}

                <td className="font-medium whitespace-nowrap">
                  Rs. {item.price}
                </td>

                {/* Stock */}

                <td
                  className={`whitespace-nowrap font-medium ${
                    item.stock <= 20 ? "text-orange-500" : "text-green-500"
                  }`}
                >
                  {item.stock} pcs
                </td>

                {/* Status */}

                <td className="whitespace-nowrap">
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      item.status === "In Stock"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}

                <td
                  className="relative"
                  ref={openAction === item.id ? actionRef : null}
                >
                  <div className="flex justify-center">
                    <button
                      onClick={() =>
                        setOpenAction(openAction === item.id ? null : item.id)
                      }
                      className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100"
                    >
                      <FiMoreVertical />
                    </button>

                    {openAction === item.id && (
                      <div className="absolute right-8 top-12 z-50 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                        <button
                          onClick={() => {
                            console.log("Edit", item.id);
                            setOpenAction(null);
                          }}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <FiEdit2 />
                          Edit
                        </button>

                        <button
                          onClick={() => {
                            console.log("Delete", item.id);
                            setOpenAction(null);
                          }}
                          className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <FiTrash2 />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
