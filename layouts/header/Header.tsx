import { FC, JSX } from "react";
import Logo from "./components/Logo";
import RightMenu from "./components/RightMenu";
import SearchArea from "./components/SearchArea";

const Header: FC = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 w-full  shadow-sm  bg-[#FAFAFA] border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between ">
        <Logo />
        <SearchArea />
        <RightMenu />
      </div>
    </header>
  );
};

export default Header;
