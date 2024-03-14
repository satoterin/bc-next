import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";

type Props = {};

const servicesArray = [
  {
    title: "Next.js Development",
    description:
      "Whether it's crafting Next.js web applications, conducting code audits, enterprise software development, or even providing professional training, we're here to help you achieve your business goals!",
    image: "/images/code.avif",
    alt: "code",
    href: "/#",
  },
  {
    title: "React development",
    description:
      "Whether you need help with developing React web apps, code reviews, enterprise software creation, or just need some specialized training, we're here for you every step of the way!",
    image: "/images/code.avif",
    alt: "code",
    href: "/#",
  },
  {
    title: "Migration to headless",
    description:
      "We’ll help you migrate from legacy systems and use Jamstack technologies to build custom solutions that offer greater flexibility, customizability, and scalability",
    image: "/images/bulb.avif",
    alt: "bulb",
    href: "/#",
  },
  {
    title: "Headless eCommerce",
    description:
      "From building Next.js storefronts through headless marketplace development and to building fully customized headless eCommerce platforms, we will help you create exceptional online shopping experiences for your customers.",
    image: "/images/shoping.avif",
    alt: "shopping",
    href: "/#",
  },
];

const OurServices = (props: Props) => {
  return (
    <div className="    grid  grid-cols-1 gap-12  px-4 py-32 align-top md:grid-cols-2 lg:px-12 ">
      <div className="flex flex-col gap-6   max-md:text-center  md:sticky md:left-0 md:top-[92px] md:self-start">
        <h1 className=" text-4xl  font-bold">Our services</h1>
        <p className="text-xl text-[#5e5e5d]">
          We help enterprises transform their innovative ideas into successful
          products from scratch.
        </p>
        <p className="text-xl text-[#5e5e5d] ">
          From custom product and web development to migrating legacy systems to
          modern and efficient Jamstack architecture, we take care of the
          technical complexities, so your team can focus on what you do best
        </p>
      </div>

      <div className="self-start ">
        <div className="flex flex-col  gap-12">
          {servicesArray.map((item) => (
            <div
              key={item.title}
              className="mx-4 flex max-w-[570px] flex-col items-start justify-start gap-4 rounded-3xl bg-[#30302fd9] p-6 text-white"
            >
              <div className="flex  items-center gap-4">
                <div className="mx-auto max-[300px]:hidden">
                  <Image
                    alt={item.alt}
                    src={item.image}
                    width={32}
                    height={32}
                  />
                </div>
                <h1 className="text-2xl font-bold">{item.title}</h1>
              </div>
              <p className="text-[#efece7]">{item.description}</p>
              <div className="ml-auto ">
                <Link href={"/#"}>
                  <button
                    className="flex items-center justify-center gap-2 rounded-3xl 
                  border border-white px-4
                  
                  py-2 font-bold transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <span className="text-sm">Read More</span>{" "}
                    <LuArrowRight className="h-5 w-5 font-bold" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
