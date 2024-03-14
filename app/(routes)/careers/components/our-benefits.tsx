"use client";
import MyPresentationPopup from "@/app/components/my-popup/my-presentation-popup";
import Image from "next/image";
import React from "react";

type Props = {};

export const benefitsArray = [
  {
    title: "Medicover",

    description:
      "At Blazity, we believe your health is the ultimate frontier, and just like rockets need a solid launchpad to reach the stars, your well-being deserves the best starting point.",
  },
  {
    title: "Multisport",

    description:
      "Just like astronauts need precision and power to embark on their cosmic voyages, sports enthusiasts need the right tools for their athletic odyssey.",
  },
  {
    title: "26 paid days off",

    description:
      "Everybody needs a break from their interstellar journeys, you too deserve a well-earned escape from the daily grind - paid days off are more than just a pause; they're a rocket launch to relaxation and rejuvenation!",
  },
];

const OurBenefits = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-32">
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <div id="job-offers" className="scroll-m-24">
        <h1 className="pb-8 text-center text-5xl font-bold">
          Our <span className="text-primary">Benefits </span>
        </h1>
        <p className="mx-auto max-w-[800px] pb-8  text-center text-xl text-[#5e5e5d]">
          At Blazity, we are committed to supporting your overall well-being and
          ensuring you have the tools and resources to thrive both personally
          and professionally.
        </p>
        <div className="flex   items-center justify-center gap-8 py-12  pb-32 max-sm:flex-col">
          {benefitsArray.map((benefit) => (
            <div
              key={benefit.title}
              className="flex-shrink-1 flex min-w-[200px] flex-col  gap-8 rounded-3xl border border-[#5e5e5d00] bg-[#ffffff80] px-4 py-10 shadow-xl backdrop-blur-lg max-lg:flex-col "
            >
              <div className="flex justify-between  gap-4 ">
                <h1 className="  text-2xl font-bold opacity-70 ">
                  {benefit.title}
                </h1>

                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3346 10L15.0013 28.3333L6.66797 20"
                    stroke="#FF782C"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[#5e5e5d]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
