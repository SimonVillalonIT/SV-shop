"use client";

import { fetchProducts } from "@/actions/fetch-products";
import * as React from "react";
import { useInView } from "react-intersection-observer";
import Products from "./products";
import Spinner from "./spinner";

export default function LoadMore() {
  const [products, setProducts] = React.useState<Product[]>([]);

  const [pagesLoaded, setPagesLoaded] = React.useState(0);

  const { ref, inView } = useInView();

  const loadMoreProducts = async () => {
    setTimeout(async () => {
      const nextPage = pagesLoaded + 1;
      const newProducts = (await fetchProducts(nextPage)) ?? [];
      setProducts((prevState) => [...prevState, ...newProducts]);
      setPagesLoaded(nextPage);
    }, 2000);
  };

  React.useEffect(() => {
    if (inView) {
      console.log({ pagesLoaded });
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <>
      <Products products={products} />
      <div className="flex justify-center col-span-4 py-4" ref={ref}>
        <Spinner />
      </div>
    </>
  );
}
