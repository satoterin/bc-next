"use client";

import Image from "next/image";
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

type Props = {};

const QuotesArray = [
  {
    name: "Justin Tannenbaum",
    position: "Unreal Estate PO",
    quote:
      "Their knowledge of JavaScript APIs is outstanding and sets them apart from their competitors.",
    image: "/lights/unrealEstate_Light.avif",
  },
  {
    name: "Francesca Risso",
    position: "Former Director General",
    quote: "The team was always available and extremely helpful.",
    image: "/lights/MiddleEuropen_Light.avif",
  },
  {
    name: "Antoni Redziniak",
    position: "Co-Founder, BMR Group",
    quote:
      "We were very impressed by the passion and skills these guys have to develop and execute ideas and solve problems.",
    image: "/lights/dropsy_Light.avif",
  },
  {
    name: "Jan Kruś",
    position: "Iberion",
    quote:
      "Team at Blazity presented an incredible attention to detail. Their response time is definitely something that stands out.",
    image: "/lights/iberion_Light.avif",
  },
  {
    name: "Jan Plociński",
    position: "Acquisitions & Asset Manager",
    quote:
      "They understood our needs and were flexible, remaining open-minded and professional.",
    image: "/lights/realEstate_Light.avif",
  },
  {
    name: "Nathan Joens",
    position: "CEO, Structurely",
    quote:
      "Blazity Software goes above and beyond to meet our client’s demands and ensure satisfaction. Their team is committed to staying within set timelines.",
    image: "/lights/stucturely_Light.avif",
  },
];

const Quotes = (props: Props) => {
  const [translateX, setTranslateX] = useState(0);
  const [ref, { width, height }] = useMeasure();
  const [currentIndex, setCurrentIndex] = useState(0);

  //console.log("width:", width);
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      const newTranslateX = translateX + width + 32;
      setTranslateX(newTranslateX);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < QuotesArray.length - 1) {
      const newTranslateX = translateX - width - 32;
      setTranslateX(newTranslateX);
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="mx-auto max-w-[95vw] overflow-x-hidden">
      <div className="mx-auto mt-12 w-fit ">
        <Image
          alt="doubleQuotes"
          src={"/images/doubleQuotes.svg"}
          width={200}
          height={200}
          className="w-auto"
        />
      </div>
      <div className="">
        <div className="relative -top-4 mx-auto grid max-w-[1200px]   flex-nowrap gap-4  px-8 max-md:flex max-md:gap-0    md:grid-cols-2    lg:grid-cols-3 ">
          {QuotesArray.map((quote, index) => (
            <div
              key={index}
              ref={ref}
              style={{ transform: `translateX(${translateX}px)` }}
              className=" shadow-quotes mr-8 w-full flex-shrink-0  flex-col gap-4 rounded-2xl  bg-white p-4 transition-all duration-500   md:max-w-[380px]   "
            >
              <div className=" flex justify-between  ">
                <div className="flex flex-col">
                  <h1 className="text-primary font-bold">{quote.name}</h1>
                  <p className="text-[#a0a0a0]">{quote.position} </p>
                </div>
                <div>
                  <Image
                    alt={quote.image}
                    src={quote.image}
                    width={96}
                    height={50}
                    className="w-auto"
                  />
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[#30302f]">
                  “Their knowledge of JavaScript APIs is outstanding and sets
                  them apart from their competitors.”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden items-center justify-center gap-4 max-md:flex">
        <button
          onClick={handlePrevClick}
          className="rounded-full border"
          disabled={currentIndex === 0}
        >
          <LuArrowLeft className="h-10 w-10 p-2" />
        </button>
        <button
          onClick={handleNextClick}
          className="rounded-full border"
          disabled={currentIndex === QuotesArray.length - 1}
        >
          <LuArrowRight className="h-10 w-10 p-2" />
        </button>
      </div>
    </div>
  );
};

export default Quotes;
