import { fetchProducts } from "@/actions/fetch-products";
import LoadMore from "@/components/catalog/load-more";
import Products from "@/components/catalog/products";
import Hero from "@/components/catalog/hero";

const CatalogPage = async () => {
  const data = (await fetchProducts(0)) as Product[];
  return (
    <>
      <Hero />
      <section className="grid grid-cols-4">
        <Products products={data} />
        <LoadMore />
      </section>
    </>
  );
};

export default CatalogPage;
