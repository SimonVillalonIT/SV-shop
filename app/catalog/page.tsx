import { fetchProducts } from "@/actions/fetch-products";
import LoadMore from "@/components/catalog/load-more";
import Products from "@/components/catalog/products";

const CatalogPage = async () => {
  const data = (await fetchProducts(0)) as Product[];
  return (
    <div className="grid grid-cols-4 relative">
      <Products products={data} />
      <LoadMore />
    </div>
  );
};

export default CatalogPage;
