import ProductList from "@/components/productList/ProductList";
import MainLayout from "@/layouts/mainLayout/MainLayout";
import { FC, JSX } from "react";

const Index: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
};

export default Index;
