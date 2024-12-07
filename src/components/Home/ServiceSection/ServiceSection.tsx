import Marquee from "react-fast-marquee";
import ServiceCard from "./components/ServiceCard";
import ServiceIcon from "./components/ServiceIcon"

const ServiceSection = () => {

  const services = [
    {
      name: "Website Development",
      desc: "From corporate websites to e-commerce platforms, our custom web solutions  are designed to engage and convert visitors into loyal customers.",
      imgSrc: "/Home/ServiceSection1.jpg",
    },
    {
      name: "Mobile App Development",
      desc: "Building websites using code, design, and content for user-friendly online experiences.",
      imgSrc: "/Home/ServiceSection2.jpg",
    },
    {
      name: "UI/UX Design",
      desc: "We design intuitive, visually  appealing, and functional interfaces that prioritize usability and aesthetics.",
      imgSrc: "/Home/ServiceSection3.jpg",
    },
  ];

  const tools = [
    {
      imgSrc: "/Home/Tools/1.png",
    },
    {
      imgSrc: "/Home/Tools/2.png",
    },
    {
      imgSrc: "/Home/Tools/3.png",
    },
    {
      imgSrc: "/Home/Tools/4.png",
    },
    {
      imgSrc: "/Home/Tools/5.png",
    },
  ];

  return (
    <div className="service-section bg-[#141416] pt-[12rem] flex flex-col items-center">
      <div className="service-section-identifier text-white flex justify-center">
				<div className="flex gap-2 items-stretch">
          <ServiceIcon />
          <p className="text-[#F24F00]">Our Services</p>
        </div>
			</div>
      <div className="service-section-heading w-[50%] sm:w-[90%] flex justify-center">
        <h1>Innovating for a Smarter, Connected Future</h1>
      </div>

      <div className="service-provided-container mt-[4rem] w-[80%] flex flex-wrap gap-6 items-stretch justify-center sm:flex-col">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} service={service} />
        ))}
      </div>
      <div className="tools-strip-container w-[90%] pt-[7.5rem]">
        <Marquee gradient={false} speed={50} pauseOnClick={true} gradientWidth={100} autoFill={true} >
            {tools.map((tool, index) => (
            <img key={index} src={tool.imgSrc} alt="Tool" className="h-[4rem] mx-4 invert-[50%] brightness-100" draggable={false} />
            ))}
        </Marquee>
      </div>
    </div>
  )
}

export default ServiceSection