import React from "react";
import ProductCard from "./product-card";

interface ProductsInterface {
  products: Product[];
}

const Products = ({ products }: ProductsInterface) => {
  return (
    <>
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
};

export default Products;
