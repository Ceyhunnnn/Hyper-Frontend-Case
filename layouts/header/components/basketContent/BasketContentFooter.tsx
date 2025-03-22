import { useAppSelector } from "@/hooks/useRedux";
import Link from "next/link";
import { Dispatch, FC, JSX, SetStateAction, useEffect, useState } from "react";

interface IProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const BasketContentFooter: FC<IProps> = ({ setIsOpen }): JSX.Element => {
  const [total, setTotal] = useState<number>();

  const { basket } = useAppSelector((state) => state.basket);

  const calculateTotal = () => {
    let totalPrice = 0;
    basket.map((item) => {
      return (totalPrice += item.price);
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    if (basket?.length) {
      calculateTotal();
    } else {
      setTotal(0);
    }
  }, [basket]);

  return (
    <div className="border-t mt-5 border-gray-200 py-6 ">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${total?.toFixed(2)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <Link
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-1 py-3 text-xs md:text-base font-medium text-white shadow-xs hover:bg-indigo-700"
        >
          Checkout
        </Link>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{" "}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="font-medium text-xs md:text-base text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default BasketContentFooter;
