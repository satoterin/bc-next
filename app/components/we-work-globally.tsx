import React from "react";
import SvgComponent from "./mapSmall";

type Props = {};

const WeWorkGlobally = (props: Props) => {
  return (
    <div className=" bg-[#f8f8f8]">
      <div className="relative  text-center text-4xl font-bold text-black md:top-12 md:text-6xl">
        We Work globally
      </div>
      <div
        style={{
          backgroundImage: "url('/Map.webp')",
        }}
        className="h-[800px]    bg-contain bg-center bg-no-repeat max-md:hidden"
      ></div>
      <div className="h-full   md:hidden">
        <SvgComponent className="w-full " />
      </div>
    </div>
  );
};

export default WeWorkGlobally;
