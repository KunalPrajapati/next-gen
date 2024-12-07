const ServiceCard = ({
  service,
  index
}: {
  index: number;
  service: {
    name: string;
    desc: string;
    imgSrc: string;
  };
}) => {
  return (
    <div className="service-card w-[calc(100%/3-1.5rem)] flex flex-col gap-8 text-white rounded-2xl p-4 bg-[#141416] border-[1px] border-[#196164] flex-shrink-0 sm:w-full">
      <div className="service-card-image w-full aspect-video bg-no-repeat rounded-xl" style={{ backgroundImage: `url(${service.imgSrc})`, backgroundPosition: "center center", backgroundSize: index != 1 ? "100% 100%" : "cover" }}></div>
      <div className="service-card-content w-full flex flex-col gap-4 px-4">
        <div className="service-card-name">{service.name}</div>
        <div className="service-card-desc text-white/50">{service.desc}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
