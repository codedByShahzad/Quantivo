import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    image: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md">

      {/* Product Image */}

      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Product Name */}

      <h3 className="mt-3 text-base font-medium text-slate-800 line-clamp-2">
        {product.name}
      </h3>

      {/* Price */}

      <p className="mt-2 text-xl font-semibold text-slate-900">
        Rs. {product.price.toLocaleString()}
      </p>

      {/* Stock */}

      <p className="mt-1 text-sm font-medium text-green-500">
        {product.stock} pcs available
      </p>

      {/* Bottom */}

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {product.category}
        </span>

        <button className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100">
          <BsThreeDotsVertical className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;