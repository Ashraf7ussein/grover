import Card from "./card";
import money from "../assets/money.svg";
import securityIcon from "../assets/securityIcon.svg";
import shippingIcon from "../assets/shippingIcon.svg";

const Services = () => {
  const services = [
    {
      name: "Free Shipping",
      desc: "Enjoy Order in a hand using the freshness of groceries",
      icon: shippingIcon,
    },
    {
      name: "15 days returns",
      desc: "Order in a handy way using the freshness of the groceries.",
      icon: money,
    },
    {
      name: "Secure checkout",
      desc: "If you get rotten items - return immediately to us.",
      icon: securityIcon,
    },
  ];

  return (
    <div className="items-center flex flex-col bg-customRedLight p-[20px]">
      <h2 className="text-customRed text-[18px] mb-4">what we serve</h2>
      <p className="text-[40px] font-bold sm:w-[50%] text-center mb-24">
        {" "}
        Fruit and vegetable delivered to your home
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {services.map((service, index) => (
          <Card key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
