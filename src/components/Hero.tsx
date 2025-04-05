import heroImage from "../assets/image1.svg";
import { GiStrawberry } from "react-icons/gi";
import { MdArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12">
      <div className="max-w-xl space-y-6">
        <span className="px-4 py-1 rounded-full text-sm bg-customRedLight text-customRed inline-flex items-center gap-2">
          More than faster
          <GiStrawberry size={20} />
        </span>

        <h1 className="font-bold text-[48px] lg:text-[60px] leading-tight">
          Groceries delivered in as little as{" "}
          <span className="text-customRed font-normal">2 hours</span>
        </h1>

        <p className="text-lg text-gray-600">
          Grocen assures fresh grocery every morning to your family without
          getting out in this pandemic.
        </p>

        <div className="flex items-center gap-6">
          <button className="bg-customRed text-white px-6 py-3 rounded-xl text-base shadow-md hover:bg-red-600 transition">
            Order now
          </button>

          <div className="flex items-center gap-3 cursor-pointer group">
            <span className="p-3 rounded-full bg-yellow-100 text-yellow-600 shadow-md group-hover:bg-yellow-200 transition">
              <MdArrowRight size={16} />
            </span>
            <span className="text-base font-medium text-gray-700 group-hover:text-yellow-600 transition">
              Order process
            </span>
          </div>
        </div>
      </div>

      <img
        className="w-full max-w-md lg:max-w-[600px]"
        src={heroImage}
        alt="Grocery delivery illustration"
      />
    </main>
  );
};

export default Hero;
