import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBaseQuery from "@/utils/customAxiosBaseQuery";
import { IProduct } from "@/types/product.type";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: customFetchBaseQuery(),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => ({ url: "products" }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
