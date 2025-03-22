import { FC, JSX } from "react";

const Banner: FC = (): JSX.Element => {
  return (
    <div className="container mx-auto hidden  md:flex  bg-[#111827] overflow-hidden h-[120px] my-4 md:my-10 w-full ">
      <div className="flex flex-1 items-start pl-2 sm:pl-6 text-white justify-center flex-col w-full">
        <h2 className="font-semibold text-sm md:text-lg">Jackets</h2>
        <span className="flex gap-x-0 md:gap-x-2">
          <p className="text-gray-300 font-light text-xs md:text-base">
            Slash Sales begins in April. Get up to 80% Discount on all products
          </p>
          <b className="text-xs md:text-base">Read More</b>
        </span>
      </div>
      <div className="flex justify-end w-[150px] overflow-hidden">
        <span className="w-[275px] overflow-hidden h-[180px] bg-[#3C7A89]"></span>
        <span className="w-[300px] overflow-hidden h-[210px] bg-[#EB5757]  rotate-45"></span>
      </div>
    </div>
  );
};

export default Banner;
