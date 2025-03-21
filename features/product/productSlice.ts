import { IProduct } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProductState {
  products: IProduct[];
  filteredProducts: IProduct[];
}

const initialState: IProductState = {
  products: [],
  filteredProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDefaultProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },

    filterProductByText: (state, action: PayloadAction<string>) => {
      if (action?.payload?.length) {
        const filterProduct = state.products.filter((item) =>
          item.title
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        );
        state.filteredProducts = filterProduct;
      } else {
        state.filteredProducts = state.products;
      }
    },

    filterProductByCategoryList: (state, action: PayloadAction<string[]>) => {
      if (action?.payload?.length) {
        const filterProduct = state.products
          .filter((item) =>
            action.payload.some((stateName) => item.category === stateName)
          )
          .map((item) => item);
        state.filteredProducts = filterProduct;
      } else {
        state.filteredProducts = state.products;
      }
    },

    filterProductByRange: (state, action: PayloadAction<number>) => {
      if (action?.payload) {
        const filterProduct = state.products.filter(
          (item) => item.price <= action.payload
        );
        state.filteredProducts = filterProduct;
      } else {
        state.filteredProducts = state.products;
      }
    },
  },
});

export const {
  setDefaultProducts,
  filterProductByText,
  filterProductByCategoryList,
  filterProductByRange,
} = productSlice.actions;

export default productSlice.reducer;
