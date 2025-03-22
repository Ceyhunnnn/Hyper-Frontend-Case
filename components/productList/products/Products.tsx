import ProductCard from "./ProductCard";
import { useAppSelector } from "@/hooks/useRedux";

const Products = () => {
  const { filteredProducts } = useAppSelector((state) => state.product);

  return (
    <div className="grid grid-cols-2 py-4 md:p-0 md:grid-cols-3 2xl:grid-cols-4 place-content-center gap-3 lg:gap-5 pb-5 place-items-center w-full">
      {filteredProducts &&
        filteredProducts.map((productItem) => {
          return <ProductCard item={productItem} key={productItem.id} />;
        })}
    </div>
  );
};

export default Products;
