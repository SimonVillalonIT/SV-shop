import Image from "next/image";
import React from "react";
import CartAddSvg from "./cart-svg";
import "@/styles/product.css";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className="border border-black/10 hover:border-black/25">
      <div className="py-6 w-full flex justify-between px-3">
        <span className="text-xs font-thin text-black/50">SV-SHOP</span>
        <CartAddSvg />
      </div>
      <div className="card relative group transition duration-1000 ease-in-out">
        <Image
          width={365}
          height={365}
          src={`http://${product.imageUrl}`}
          className="w-full max-h-[365px] object-cover object-top"
          alt={product.name}
        />
        <div className="absolute top-0 w-full h-full bg-white hidden group-hover:flex">
          <Image
            width={365}
            height={365}
            alt="image"
            src={`http://${product.additionalImageUrls[0]}`}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
