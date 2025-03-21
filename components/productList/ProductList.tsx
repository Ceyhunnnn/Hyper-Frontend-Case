import { FC, JSX, useEffect } from "react";
import FilterMenu from "./filterMenu/FilterMenu";
import { useGetAllProductsQuery } from "@/services/productApi/productApi";
import Products from "./products/Products";
import LoadingIndicator from "../global/icons/LoadingIndicator";
import Banner from "./banner/Banner";
import { useAppDispatch } from "@/hooks/useRedux";
import { setDefaultProducts } from "@/features/product/productSlice";

const ProductList: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    if (data?.length) {
      dispatch(setDefaultProducts(data));
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className="flex flex-col gap-x-3 items-start w-full">
          <Banner />
          <div className="flex gap-x-5 items-start w-full container mx-auto">
            <FilterMenu />
            <Products />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
