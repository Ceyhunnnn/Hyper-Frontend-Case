import { FC, JSX } from "react";

const Categories: FC = (): JSX.Element => {
  return (
    <ul className="container py-5 mx-auto flex justify-between items-center text-sm font-semibold">
      <li>New Arrivals</li>
      <li>Dresses</li>
      <li>Tops</li>
      <li>Jackets</li>
      <li>Beach Wear</li>
      <li>Blouse</li>
      <li>Vintage</li>
      <li>Shoes</li>
      <li>Sandals</li>
      <li>Bags</li>
      <li>Lingerie & Lounge Wear</li>
      <li>Jewelries</li>
      <li>Bags</li>
    </ul>
  );
};

export default Categories;
