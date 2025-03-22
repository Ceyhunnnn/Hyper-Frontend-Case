import Link from "next/link";
import { FC, JSX } from "react";
import RightMenu from "./RightMenu";

const Logo: FC = (): JSX.Element => {
  return (
    <Link
      href="/"
      className="flex items-center justify-between gap-2 w-full md:w-auto "
    >
      <span className="text-sm md:text-xl font-bold">Hyper Store</span>
      <RightMenu inLogo />
    </Link>
  );
};

export default Logo;
