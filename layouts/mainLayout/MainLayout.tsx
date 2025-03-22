import Head from "next/head";
import { FC, JSX, ReactNode } from "react";
import Header from "../header/Header";
import Categories from "../categories/Categories";
import Footer from "../footer/Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Hyper Store</title>
      </Head>
      <Header />
      <Categories />
      <div className="h-full w-full min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
