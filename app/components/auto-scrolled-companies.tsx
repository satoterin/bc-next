import Image from "next/image";
import React from "react";

type Props = {};

const companiesArray = [
  {
    src: "/companies/Divi.svg",
    alt: "Divi",
  },
  {
    src: "/companies/unrealEstate.avif",
    alt: "unrealEstate",
  },
  {
    src: "/companies/image (9).avif",
    alt: "image (9)",
  },
  {
    src: "/companies/image (10).avif",
    alt: "image (10)",
  },
  {
    src: "/companies/image (11).avif",
    alt: "image (11)",
  },
  {
    src: "/companies/easyTranslate.avif",
    alt: "easyTranslate",
  },
  {
    src: "/companies/hoory.avif",
    alt: "hoory",
  },
];

const AutoScrolledCompanies = (props: Props) => {
  return (
    <div className="mx-0 mt-16    overflow-hidden">
      <div className="animate-scroll  ml-0 mr-0 flex w-fit  flex-nowrap gap-4 overflow-x-hidden ">
        {companiesArray.map((company) => (
          <div
            key={`1-${company.alt}`}
            className="relative h-[70px]  w-[155px]    "
          >
            <Image
              priority
              alt={company.alt}
              src={company.src}
              fill
              className=" object-cover object-center"
            />
          </div>
        ))}
        {companiesArray.map((company) => (
          <div
            key={`2-${company.alt}`}
            className="relative h-[70px]  w-[155px]    "
          >
            <Image
              priority
              alt={company.alt}
              src={company.src}
              fill
              className=" object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScrolledCompanies;
