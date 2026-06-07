"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { useState } from "react";

import { useRouter } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBox,
  FiFolder,
  FiShoppingCart,
  FiTruck,
  FiUsers,
  FiBarChart2,
  FiPieChart,
  FiUser,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";

interface MenuItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export default function DashboardSidebar() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const shopId = params.shopId as string;

  const [open, setOpen] = useState(false);

  const manage: MenuItem[] = [
    {
      title: "Products",
      href: `/shops/${shopId}/dashboard/products`,
      icon: <FiBox />,
    },
    {
      title: "Categories",
      href: `/shops/${shopId}/dashboard/categories`,
      icon: <FiFolder />,
    },
    {
      title: "Sales",
      href: `/shops/${shopId}/dashboard/sales`,
      icon: <FiShoppingCart />,
    },
    {
      title: "Purchases",
      href: `/shops/${shopId}/dashboard/purchases`,
      icon: <FiCreditCard />,
    },
    {
      title: "Customers",
      href: `/shops/${shopId}/dashboard/customers`,
      icon: <FiUsers />,
    },
    {
      title: "Suppliers",
      href: `/shops/${shopId}/dashboard/suppliers`,
      icon: <FiTruck />,
    },
  ];

  const reports: MenuItem[] = [
    {
      title: "Sales Report",
      href: `/shops/${shopId}/dashboard/reports/sales`,
      icon: <FiBarChart2 />,
    },
    {
      title: "Stock Report",
      href: `/shops/${shopId}/dashboard/reports/stock`,
      icon: <FiPieChart />,
    },
    {
      title: "Profit Report",
      href: `/shops/${shopId}/dashboard/reports/profit`,
      icon: <FiBarChart2 />,
    },
  ];

  const settings: MenuItem[] = [
    {
      title: "Manage Plan",
      href: `/shops/${shopId}/dashboard/plans`,
      icon: <FiCreditCard />,
    },
    {
      title: "Profile",
      href: `/shops/${shopId}/dashboard/profile`,
      icon: <FiUser />,
    },
  ];

  const SidebarItem = ({ item }: { item: MenuItem }) => {
    const active = pathname === item.href;

    return (
      <Link
        href={item.href}
        onClick={() => setOpen(false)}
        className={`
          group flex items-center gap-3 rounded-xl px-4 py-3
          text-sm font-medium transition-all duration-200

          ${
            active
              ? "bg-blue-50 text-blue-600 shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }
        `}
      >
        <span
          className={`
            text-lg transition-transform duration-200
            ${active ? "scale-110" : "group-hover:scale-105"}
          `}
        >
          {item.icon}
        </span>

        {item.title}
      </Link>
    );
  };

  const Section = ({
    title,
    items,
  }: {
    title: string;
    items: MenuItem[];
  }) => (
    <div className="mt-8">
      <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
        {title}
      </p>

      <div className="space-y-1">
        {items.map((item) => (
          <SidebarItem
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}

      <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white px-5 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          <FiMenu size={22} />
        </button>

        <div className="ml-3">
          <Image
            src="/assets/quantivo-logo.png"
            alt="logo"
            width={130}
            height={40}
          />
        </div>
      </header>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-all duration-300 lg:hidden

          ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* Sidebar */}

      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-[280px]
          border-r border-slate-200
          bg-white

          transition-transform duration-300 ease-out

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}

          <div className="flex h-20 items-center justify-between border-b border-slate-200 px-6">
            <Image
              src="/assets/quantivo-logo.png"
              alt="logo"
              width={150}
              height={45}
            />

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Navigation */}

          <div className="hide-scrollbar flex-1 overflow-y-auto px-3 py-5">
            <Link
              href={`/shops/${shopId}/dashboard`}
              className={`
                mb-6 flex items-center gap-3 rounded-xl px-4 py-3
                text-sm font-medium transition-all duration-200

                ${
                  pathname ===
                  `/shops/${shopId}/dashboard`
                    ? "bg-blue-50 text-blue-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-100"
                }
              `}
            >
              <FiHome />
              Dashboard
            </Link>

            <Section
              title="Manage"
              items={manage}
            />

            <Section
              title="Reports"
              items={reports}
            />

            <Section
              title="Settings"
              items={settings}
            />
          </div>

          {/* Footer */}

          <div className="border-t border-slate-200 p-4">
            <button
            onClick={()=>router.push("/shops")}
              className="
                flex w-full items-center gap-3
                rounded-xl px-4 py-3
                text-sm font-medium text-red-500
                transition-all duration-200
                hover:bg-red-50
              "
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}