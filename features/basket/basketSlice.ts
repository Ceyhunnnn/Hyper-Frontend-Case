import { IProduct } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IBasketState {
  basket: IProduct[];
}

const initialState: IBasketState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action: PayloadAction<IProduct>) => {
      const lastProductList = state.basket.filter(
        (item) => item.id === action.payload.id
      );
      if (lastProductList.length > 0) {
        return;
      } else {
        state.basket.push(action.payload);
      }
    },
    deleteProductFromBasket: (state, action: PayloadAction<number>) => {
      const lastProductList = state.basket.filter(
        (item) => item.id !== action.payload
      );
      state.basket = lastProductList;
    },
  },
});

export const { addProductToBasket, deleteProductFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
