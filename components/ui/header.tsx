"use client";
import stockflowpng from "../../public/images/stockflow.png";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <nav className="bg-transparent px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <Image
              width={40}
              height={120}
              src={stockflowpng.src}
              className="mr-3 h-[40px] w-[30px] lg:h-[50px] lg:w-[60px]"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
          <button className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-xl p-[1px] focus:outline-none">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#047857_0%,#10B981_50%,#22c55e_100%)]"></span>
  <span className="h-full inline-flex  cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
    Join Waitlist
    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
    </svg>
  </span>
</button>


          </div>
          <div className="hidden justify-between items-center w-full lg:pl-[150px] lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href=""
                  className="block py-2 pr-4 pl-3 text-white rounded-xl bg-green-700 lg:bg-transparent lg:text-green-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="blogs"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
