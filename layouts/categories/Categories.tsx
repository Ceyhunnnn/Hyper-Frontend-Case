import { FC, JSX } from "react";

const Categories: FC = (): JSX.Element => {
  const categories: string[] = [
    "New Arrivals",
    "Dresses",
    "Tops",
    "Jackets",
    "Beach Wear",
    "Blouse",
    "Vintage",
    "Shoes",
    "Sandals",
    "Bags",
    "Lingerie & Lounge Wear",
    "Jewelries",
    "Bags",
  ];
  return (
    <ul className="container py-3 md:py-5 mx-auto flex flex-wrap gap-1 md:gap-4 px-4 border-b border-gray-200 md:border-hidden justify-center md:justify-between items-center text-sm font-semibold">
      {categories.map((item, index) => (
        <li
          key={index}
          className="border border-[#efefef] hover:text-gray-500 transition-all duration-500 cursor-pointer md:border-hidden py-1 px-4 md:py-0 md:px-0 rounded-2xl"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
