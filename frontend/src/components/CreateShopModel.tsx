import React from "react";
import { IoClose } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";

interface ShopData {
  shopName: string;
  phone: string;
  address: string;
  totalEmployees: string;
  businessType: string;
  logo: File | null;
}

interface CreateShopModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shopData: ShopData;
  setShopData: React.Dispatch<React.SetStateAction<ShopData>>;
  onSubmit?: () => void | Promise<void>;
}

const CreateShopModal: React.FC<CreateShopModalProps> = ({
  open,
  setOpen,
  shopData,
  setShopData,
  onSubmit,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-5xl rounded-2xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-8 py-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Create Shop
            </h2>
            <p className="mt-1 text-slate-500">
              Fill your business information
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition hover:bg-slate-100"
          >
            <IoClose size={28} />
          </button>
        </div>

        {/* Body */}
        <div className="grid gap-10 p-8 lg:grid-cols-[220px_1fr]">

          {/* Left Side Logo */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Shop Logo
            </label>

           <label className="flex h-52 w-52 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-blue-500 hover:bg-slate-100">

  {shopData.logo ? (
    <img
      src={URL.createObjectURL(shopData.logo)}
      alt="Shop Logo"
      className="h-full w-full object-contain p-2"
    />
  ) : shopData.shopName ? (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-6xl font-bold text-white">

      {shopData.shopName
        .trim()
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase())
        .join("")}

    </div>
  ) : (
    <div className="flex flex-col items-center">
      <HiOutlinePhoto size={48} className="text-slate-400" />
      <span className="mt-3 text-sm text-slate-500">
        Upload Logo
      </span>
    </div>
  )}

  <input
    hidden
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];

      if (file) {
        setShopData((prev) => ({
          ...prev,
          logo: file,
        }));
      }
    }}
  />

</label>
          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <div className="grid grid-cols-2 gap-5">

              {/* Shop Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Shop Name
                </label>

                <input
                  value={shopData.shopName}
                  onChange={(e) =>
                    setShopData((prev) => ({
                      ...prev,
                      shopName: e.target.value,
                    }))
                  }
                  placeholder="Tech Store"
                  className="h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone
                </label>

                <input
                  value={shopData.phone}
                  onChange={(e) =>
                    setShopData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="+92 3001234567"
                  className="h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Business Type
                </label>

                <select
                  value={shopData.businessType}
                  onChange={(e) =>
                    setShopData((prev) => ({
                      ...prev,
                      businessType: e.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 outline-none transition focus:border-blue-500"
                >
                  <option value="">Select Type</option>
                  <option>Retail Shop</option>
                  <option>Medical Store</option>
                  <option>Restaurant</option>
                  <option>Electronics</option>
                  <option>Grocery Store</option>
                  <option>Clothing Store</option>
                  <option>Book Store</option>
                  <option>Cosmetics</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Employees */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Total Employees
                </label>

                <input
                  value={shopData.totalEmployees}
                  onChange={(e) =>
                    setShopData((prev) => ({
                      ...prev,
                      totalEmployees: e.target.value,
                    }))
                  }
                  placeholder="10"
                  className="h-12 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Address
              </label>

              <textarea
                rows={5}
                value={shopData.address}
                onChange={(e) =>
                  setShopData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                placeholder="Enter shop address..."
                className="w-full rounded-lg border border-slate-300 bg-slate-50 p-4 outline-none transition focus:border-blue-500"
              />
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 border-t bg-slate-50 px-8 py-5">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium transition hover:bg-white"
          >
            Cancel
          </button>

          <button
            onClick={async () => {
              if (onSubmit) {
                await onSubmit();
              }
              setOpen(false);
            }}
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateShopModal;