import { deleteProductFromBasket } from "@/features/basket/basketSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { IProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import { FC, JSX } from "react";

interface IProps {
  product: IProduct;
}
const BasketContentCard: FC<IProps> = ({ product }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <li key={product.id} className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border p-1 border-gray-200">
        <Image
          width={200}
          height={300}
          alt={product.image}
          src={product.image}
          className="size-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href={""}>{product.title}</Link>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.rating.rate}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              onClick={() => dispatch(deleteProductFromBasket(product.id))}
              className="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BasketContentCard;
