import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import mobileImage from "../assets/mobile.svg";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

const Features = () => {
  return (
    <section className="px-6 py-12 space-y-20">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={image2}
          className="w-full max-w-md lg:max-w-[600px] object-contain"
          alt="Feature 1"
        />
        <div className="text-center lg:text-left space-y-5">
          <h2 className="text-customGreen text-[18px]">WHY CHOOSE US</h2>
          <p className="text-[32px] lg:text-[40px] font-bold">
            Find Favorites and Discover New Ones
          </p>
          <p className="text-[16px] lg:text-[18px] text-gray-900">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            blanditiis praesentium voluptatum deleniti.
          </p>
          <button className="px-6 py-3 rounded-xl text-base border-customRed border text-customRed hover:bg-red-600 transition hover:text-white">
            Explore Now
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left space-y-5">
          <h2 className="text-customYellow text-[18px]">HOME DELIVERY</h2>
          <p className="text-[32px] lg:text-[40px] font-bold">
            Sit at Home We Will Take Care Your Order
          </p>
          <p className="text-[16px] lg:text-[18px] text-gray-900">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
          </p>
          <button className="px-6 py-3 rounded-xl text-base border-customRed border text-customRed hover:bg-red-600 transition hover:text-white">
            Explore Now
          </button>
        </div>
        <img
          src={image3}
          className="w-full max-w-md lg:max-w-[600px] object-contain"
          alt="Feature 2"
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-customRedLight p-6 rounded-xl">
        <img
          src={mobileImage}
          className="max-w-[200px] md:max-w-[250px] object-contain"
          alt="Mobile App"
        />
        <div className="text-center lg:text-left space-y-5">
          <h2 className="text-customRed text-[18px]">Download our app</h2>
          <p className="text-[32px] lg:text-[40px] font-bold">
            Get the Groceries app order more easily.
          </p>
          <p className="text-[16px] lg:text-[18px] text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex gap-3 p-4 items-center justify-center font-semibold rounded-xl text-base border-gray-700 border text-gray-700">
              <IoLogoApple size={30} />
              App Store
            </button>
            <button className="flex gap-3 p-4 items-center justify-center font-semibold rounded-xl text-base border-gray-700 border text-gray-700">
              <BiLogoPlayStore size={30} />
              Play Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
