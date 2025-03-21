import Facebook from "@/components/global/icons/Facebook";
import Instagram from "@/components/global/icons/Instagram";
import Twitter from "@/components/global/icons/Twitter";
import Link from "next/link";
import { FC, JSX } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="bg-[#F9FAFB] text-black py-8  mt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start w-full">
          <div className="w-full flex justify-start items-start flex-col">
            <h2 className="text-2xl font-semibold mb-4">Hyper Store</h2>
            <ul>
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-start items-center flex-col">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:text-gray-400">
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  <Instagram />
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full flex justify-center items-end flex-col">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <ul>
              <li className="mb-2">Email: support@shopname.com</li>
              <li className="mb-2">Phone: (123) 456-7890</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Hyper Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
