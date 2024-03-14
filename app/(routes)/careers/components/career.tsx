import ButtonWithArrows from "@/app/components/button-with-arrows";
import Image from "next/image";
import React from "react";

type Props = {};

const Career = (props: Props) => {
  return (
    <div className="bg-primary text-white">
      <div className="relative mx-auto max-w-[1200px] ">
        <div className="flex flex-col gap-8 px-4   pt-8 text-xl lg:max-w-[600px] lg:pb-32 lg:pt-20">
          <h1 className="text-5xl font-bold">Career</h1>
          <p className="">
            You must gather your party before venturing forth - so why not join
            Blazity? Team up with our group of experts to create powerful web
            experiences.
          </p>
          <p>Fueling Innovation, igniting Careers - join us Now!</p>
          <ButtonWithArrows
            icon="arrow"
            text="Jump to Job Offers"
            href="/careers#job-offers"
            className="bg-white  text-base text-black max-lg:mx-auto"
          />
        </div>

        <div className="bottom-0 right-0 lg:absolute">
          <Image
            alt="CareersHands"
            src="/images/CareersHands.avif"
            width={380}
            height={380}
            className="mx-auto w-auto object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
