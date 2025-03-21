import Link from "next/link";
import { FC, JSX } from "react";

const Logo: FC = (): JSX.Element => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-xl font-bold">Hyper Store</span>
    </Link>
  );
};

export default Logo;
