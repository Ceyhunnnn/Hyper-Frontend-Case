import Drawer from "@/components/global/drawer/Drawer";
import Basket from "@/components/global/icons/Basket";
import Person from "@/components/global/icons/Person";
import { useAppSelector } from "@/hooks/useRedux";
import { FC, JSX, useState } from "react";
import BasketContent from "./basketContent/BasketContent";

interface IIprops {
  inLogo?: boolean;
}
const RightMenu: FC<IIprops> = ({ inLogo }): JSX.Element => {
  const { basket } = useAppSelector((state) => state.basket);
  const basketItemCount: number = basket?.length;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`flex gap-x-3 items-center ${
        inLogo ? "block md:hidden" : "hidden md:block"
      }`}
    >
      <ul className="flex gap-x-3 items-center text-sm text-[#6B7280] font-semibold">
        <li className="flex gap-x-2 cursor-pointer">
          Account
          <Person />
        </li>
        <li
          className="flex gap-x-2 cursor-pointer text-[#1F2937]"
          onClick={() => {
            if (basketItemCount) {
              setIsOpen(true);
            }
          }}
        >
          Basket
          <Basket count={basketItemCount} />
        </li>
      </ul>

      <Drawer
        isOpen={isOpen}
        side="right"
        onClose={() => {
          setIsOpen(false);
        }}
        title="Shopping Cart"
        children={<BasketContent setIsOpen={setIsOpen} />}
      />
    </div>
  );
};

export default RightMenu;
