const HeroSection = () => {
  return (
    <div className="hero-section flex flex-col items-center pt-[7.125rem] text-white relative">
      <div className="hero-section-heading w-[60%] flex flex-col gap-4 items-center sm:w-[90%]">
        <h1>Let&rsquo;s build the future of your business, today</h1>
        <h2 className="w-[80%] sm:w-full">
          Welcome to NEXTGENAI SYSTEMS LLP, your trusted partner in cutting-edge
          technology solutions. We specialize in providing tailored software,
          AI-driven systems, and advanced automation that drive your business
          forward.
        </h2>
      </div>
      <div className="hero-section-image relative -bottom-20 rounded-br-[3rem] rounded-bl-[3rem]"></div>
    </div>
  );
};

export default HeroSection;
