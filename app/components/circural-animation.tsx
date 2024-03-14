import React from "react";
import HeroButtons from "./hero-buttons";

type Props = {};

const CircuralAnimation = (props: Props) => {
  return (
    <div className="relative m-auto min-h-[300px] max-w-[600px] overflow-hidden bg-[#efece7] p-4   pt-[60px] text-black">
      <div className="flex flex-col gap-12  ">
        <p className="w-full text-center text-3xl font-semibold leading-tight sm:text-5xl">
          <span className="text-primary font-bold">Next.js </span> and
          <span className="text-primary font-bold"> React </span>
          development experts{" "}
        </p>
        <p className="text-center text-xl">
          We’re a team of engineers using <b>headless</b> and{" "}
          <b>composable architecture </b> to create powerful web experiences
        </p>
      </div>
      <div className="animate-circular absolute inset-0 m-auto h-24 w-24 overflow-hidden rounded-full bg-orange-400/60 blur-xl filter "></div>
      <div
        className="animate-circular3 absolute inset-0 m-auto h-24 w-24 overflow-hidden rounded-full bg-white blur-xl filter "
        // style={{
        //   animationDelay: "4s",
        // }}
      ></div>
      <div
        className="animate-circular2 absolute inset-0 m-auto h-24 w-24 overflow-hidden rounded-full bg-orange-400/60 blur-xl filter"
        // style={{
        //   animationDelay: "8s",
        // }}
      ></div>
      <div className="py-12">
        <HeroButtons />
      </div>
    </div>
  );
};

export default CircuralAnimation;
