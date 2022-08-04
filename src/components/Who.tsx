import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Bhaumik Bhaumik. I&apos;m a
          {false ? ` ${new Date().getFullYear() - 2001} years old` : ""}{" "}
          frontend developer living in Ontario, Canada. I started learning web
          development when I was 18. Since then, I have made a lot of projects,
          from basic HTML pages to complex projects like Dapps and marketplaces. I hope
          to be a great developer and get my dream job in the future. 
        </p>
      </div>
    </div>
  );
};

export default Who;
