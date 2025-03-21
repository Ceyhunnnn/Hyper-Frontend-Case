import Basket from "@/components/global/icons/Basket";
import Star from "@/components/global/icons/Star";
import { addProductToBasket } from "@/features/basket/basketSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { IProduct } from "@/types/product.type";
import Image from "next/image";
import { FC, JSX } from "react";

interface IProps {
  item: IProduct;
}
const ProductCard: FC<IProps> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch();

  const {
    title,
    price,
    rating: { rate },
    image,
    description,
  } = item;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rate);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        );
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }

    return stars;
  };

  const addToBasket = (item: IProduct) => {
    dispatch(addProductToBasket(item));
  };

  return (
    <div className="group relative  w-full border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative  flex justify-center items-center aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={title}
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="object-cover p-16 w-full h-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-lg font-medium text-gray-900 line-clamp-1">
          {title}
        </h3>

        <div className="mb-2 flex items-center">
          <div className="flex mr-2">{renderStars()}</div>
          <span className="text-sm text-gray-500">({rate.toFixed(1)})</span>
        </div>

        <p className="mb-3 text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </div>

          <button
            onClick={() => {
              addToBasket(item);
            }}
            className="flex items-center cursor-pointer justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            <Basket className="mr-2 h-4 w-4 stroke-white" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
