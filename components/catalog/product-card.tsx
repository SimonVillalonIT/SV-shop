import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article>
      <img
        src={`http://${product.imageUrl}`}
        alt={product.name}
      />
    </article>
  );
};

export default ProductCard;
