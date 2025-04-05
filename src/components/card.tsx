interface Props {
  service: {
    name: string;
    desc: string;
    icon: string;
  };
}

const Card = ({ service }: Props) => {
  return (
    <div
      className="flex items-center flex-col justify-center p-[30px] rounded-lg bg-white w-[300px] mx-5 
     transition-transform duration-300 transform hover:scale-[1.05] shadow-md hover:shadow-xl hover:shadow-customRed/30"
    >
      <img src={service.icon} alt={service.name} className="mb-2" />
      <h3 className="text-[22px] text-gray-900 font-bold">{service.name}</h3>
      <p className="text-[14px] text-gray-600 text-center">{service.desc}</p>
    </div>
  );
};

export default Card;
