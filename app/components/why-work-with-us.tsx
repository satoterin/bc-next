import Image from "next/image";
import React from "react";

type Props = {};

const whyWorkWithUsArray = [
  {
    src: "/whywork/specialization.avif",
    alt: "specialization.avif",
    title: "Specialization",
    description:
      "Building on 5 years of Next.js focus, we are the industry leader in providing unmatched expertise and experience for headless web implementations, delivering top-notch solutions for businesses seeking a specialized partner.",
  },
  {
    src: "/whywork/consulting.avif",
    alt: "consulting.avif",
    title: "Consulting approach",
    description:
      "We understand that communication is key to any successful project. We not only excel at developing high-quality solutions, but we also offer extensive consulting expertise, helping our clients make more informed decisions",
  },
  {
    src: "/whywork/speed.avif",
    alt: "speed.avif",
    title: "Speed & flexibility",
    description:
      "We understand the importance of business value in software solutions. We fear no deadline. For urgent projects, we can flexibly scale our team to adapt to your timeline.",
  },
  {
    src: "/whywork/stability.avif",
    alt: "stability.avif",
    title: "Stability",
    description:
      "We prioritize lasting partnerships with our clients and maintain consistent team composition throughout the entire project to build trust and a deep understanding of your businesses",
  },
];
const WhyWorkWithUs = (props: Props) => {
  return (
    <div id="about-us" className="bg-[#f8f8f8] py-24">
      <div className=" text-center text-4xl font-bold">Why work with us</div>
      <div className="mx-auto my-24 grid w-fit grid-cols-1 gap-12  md:grid-cols-2 ">
        {whyWorkWithUsArray.map((item) => (
          <div
            key={item.title}
            className="mx-auto flex max-w-[480px] gap-8 rounded-3xl bg-white p-6 max-sm:flex-col"
          >
            <div className="bg-primary flex-shrink-0 self-start rounded-3xl p-4 text-white">
              <Image alt={item.alt} src={item.src} width={32} height={32} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-[#5e5e5d]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
