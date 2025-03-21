import {
  filterProductByCategoryList,
  filterProductByRange,
  setDefaultProducts,
} from "@/features/product/productSlice";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useGetAllProductsQuery } from "@/services/productApi/productApi";
import { FC, JSX, useEffect, useState } from "react";

const FilterMenu: FC = (): JSX.Element => {
  const [filterCategory, setFilterCategory] = useState<string[]>();
  const { products } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const [range, setRange] = useState<number>(0);

  const [productRange, setProductRange] = useState<{
    min: number;
    max: number;
  }>({
    min: 0,
    max: 0,
  });

  const [filterItems, setFilterItems] = useState<string[]>();

  const { data } = useGetAllProductsQuery();

  const debouncedSearchQuery = useDebounce(range, 500);

  const findLargetsAndSmallestPrices = () => {
    if (data) {
      let min = data[0].price;
      let max = data[0].price;

      for (let i = 0; i < data.length; i++) {
        if (data[i]?.price < min) {
          min = data[i].price;
        } else if (data[i].price > max) {
          max = data[i].price;
        }
      }
      setProductRange({ min, max });
    }
  };

  const handleCheckValue = (value: string) => {
    setRange(0);
    if (!filterCategory?.includes(value)) {
      setFilterCategory([...(filterCategory || []), value]);
    } else {
      const filteredList = filterCategory?.filter(
        (filterItem) => filterItem !== value
      );
      setFilterCategory(filteredList);
    }
  };

  useEffect(() => {
    findLargetsAndSmallestPrices();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const filterList = new Set(
        data.map((productItem) => productItem.category)
      );
      setFilterItems([...filterList]);
    }
  }, [data]);

  useEffect(() => {
    if (filterCategory?.length) {
      dispatch(filterProductByCategoryList(filterCategory));
    } else {
      dispatch(filterProductByCategoryList([]));
    }
  }, [filterCategory]);

  useEffect(() => {
    if (debouncedSearchQuery) {
      dispatch(filterProductByRange(Number(debouncedSearchQuery)));
    } else {
      dispatch(filterProductByRange(productRange.max));
    }
  }, [debouncedSearchQuery, dispatch]);

  return (
    <div className="sticky  top-20 h-full    border border-gray-200 bg-[#F9FAFB] flex flex-col gap-y-3 py-10   px-5 max-w-[338px] w-full">
      <h2 className="font-semibold text-xl uppercase">Prices</h2>
      <div className="flex flex-col gap-y-2">
        <ul className="flex justify-between items-end text-sm">
          <li className="text-[#4B5563] text-sm">Range</li>
          <li>${range}</li>
        </ul>
        <input
          value={range}
          type="range"
          min={productRange?.min}
          max={productRange?.max}
          onChange={(e) => setRange(Number(e.target.value))}
          className="accent-[#EB5757]"
        />
        <ul className="flex justify-between items-end text-sm">
          <li>${productRange?.min}</li>
          <li>${productRange?.max}</li>
        </ul>
      </div>
      <div className="flex gap-x-2 items-center"></div>
      <h2 className="font-semibold text-xl uppercase">Categories</h2>
      {filterItems?.map((item) => {
        return (
          <div key={item} className="flex items-center gap-x-3">
            <input
              id={item}
              type="checkbox"
              checked={filterCategory?.includes(item) || false}
              onChange={() => handleCheckValue(item)}
              className="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={`${item}`} className="text-sm">
              {item}
            </label>
          </div>
        );
      })}
      <div className="flex justify-center items-center mt-5 z-50">
        <button
          onClick={() => {
            setFilterCategory([]);
            dispatch(setDefaultProducts(products));
            setRange(0);
          }}
          className="flex cursor-pointer hover:scale-105 transition-all duration-500 justify-center items-center w-full text-gray-500 text-sm py-2 rounded-md border border-gray-200 bg-gray-50"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterMenu;
