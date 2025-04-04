import { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const Navnar = () => {
  const navList = [
    { href: "#", name: "Home" },
    { href: "#", name: "Menu" },
    { href: "#", name: "Service" },
    { href: "#", name: "Shop" },
  ];

  const [currentTab, setCurrentTab] = useState("Home");
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus:ring-inset ${
                isExpanded
                  ? "border border-customRed bg-customRed text-white"
                  : "hover:bg-customRed hover:text-white"
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setExpanded(!isExpanded)}
            >
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navList.map((tab) => (
                  <a
                    onClick={() => setCurrentTab(tab.name)}
                    key={tab.name}
                    href={tab.href}
                    className={
                      currentTab == tab.name
                        ? "px-3 py-2 text-sm font-medium text-customRed hover:text-customRed duration-200"
                        : "px-3 py-2 text-sm font-medium text-gray-800 hover:text-customRed duration-200"
                    }
                  >
                    {tab.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex rounded-lg shadow-lg shadow-black/10 bg-white items-center justify-between px-4 py-2 gap-3">
            <div className="flex items-center gap-2 flex-1">
              <IoIosSearch className="text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none"
              />
            </div>
            <span className="h-5 w-px bg-gray-300" />
            <FaBasketShopping className="text-xl text-gray-700 cursor-pointer hover:text-red-500 transition-colors duration-200" />
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        {isExpanded && (
          <div className="space-y-1 px-2 pt-2 pb-3">
            <div className="sm:hidden flex flex-nowrap w-full overflow-hidden rounded-lg border bg-white items-center justify-between px-4 py-2 gap-3">
              <div className="flex items-center gap-2 flex-1">
                <IoIosSearch className="text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none"
                />
              </div>
              <span className="h-5 w-px bg-gray-300" />
              <FaBasketShopping className="text-xl text-gray-700 cursor-pointer hover:text-red-500 transition-colors duration-200" />
            </div>

            {navList.map((tab) => (
              <a
                onClick={() => setCurrentTab(tab.name)}
                key={tab.name}
                href={tab.href}
                className={
                  currentTab == tab.name
                    ? "block bg-customRed rounded-md px-3 py-2 text-base font-medium text-white"
                    : "block rounded-md px-3 py-2 text-base text-gray-300 hover:bg-customRed duration-150 hover:text-white"
                }
              >
                {tab.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navnar;
