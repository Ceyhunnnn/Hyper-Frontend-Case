import SearchInput from "@/components/global/inputs/SearchInput";
import { filterProductByText } from "@/features/product/productSlice";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppDispatch } from "@/hooks/useRedux";
import { useEffect, useState } from "react";

const SearchArea = () => {
  const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch();

  const debouncedSearchQuery = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      dispatch(filterProductByText(String(debouncedSearchQuery)));
    } else {
      dispatch(filterProductByText(""));
    }
  }, [debouncedSearchQuery, dispatch]);

  return (
    <SearchInput value={search} onChange={(value) => setSearch(value || "")} />
  );
};

export default SearchArea;
