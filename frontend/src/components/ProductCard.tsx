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
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="h-40 w-40 object-contain"
        />
      </div>

      <h3 className="mt-4 text-lg text-slate-800">
        {product.name}
      </h3>

      <p className="mt-3 text-2xl font-semibold text-slate-900">
        Rs. {product.price.toLocaleString()}
      </p>

      <p className="mt-2 text-lg text-green-500">
        {product.stock} pcs
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          {product.category}
        </span>

        <button className="rounded-lg border border-slate-200 p-2 transition hover:bg-slate-100">
          <BsThreeDotsVertical />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;