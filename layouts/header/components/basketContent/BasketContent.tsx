import { useAppSelector } from "@/hooks/useRedux";
import { Dispatch, FC, JSX, SetStateAction } from "react";
import BasketContentCard from "./BasketContentCard";
import BasketContentFooter from "./BasketContentFooter";

interface IProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const BasketContent: FC<IProps> = ({ setIsOpen }): JSX.Element => {
  const { basket } = useAppSelector((state) => state.basket);
  return (
    <div className="flex h-full flex-col overflow-y-scroll no-scrollbar bg-white">
      <div className="flex-1 ">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {basket.map((product) => (
                <BasketContentCard key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BasketContentFooter setIsOpen={setIsOpen} />
    </div>
  );
};

export default BasketContent;
