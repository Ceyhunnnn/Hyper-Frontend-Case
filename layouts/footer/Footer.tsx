import CreditCard from "@/components/global/icons/CreditCard";
import Facebook from "@/components/global/icons/Facebook";
import Instagram from "@/components/global/icons/Instagram";
import Mail from "@/components/global/icons/Mail";
import Twitter from "@/components/global/icons/Twitter";
import Link from "next/link";
import { FC, JSX } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="bg-[#F9FAFB] pt-12 pb-8 px-4 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Hyper Store</h3>
            <p className="text-gray-600 text-sm">
              We provide the best products at the best prices. Quality is our
              priority.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for updates and promotions.
            </p>
            <div className="flex">
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Your email"
                className="px-4 py-2 w-full border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded-r hover:bg-gray-800 transition duration-200">
                <Mail />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} ShopName. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-600 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                <CreditCard />
                <span className="text-gray-600 text-sm">
                  Visa, Mastercard, PayPal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
