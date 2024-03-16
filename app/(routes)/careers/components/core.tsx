import Image from "next/image";
import React from "react";

type Props = {};

const coreArray = [
  {
    src: "/whywork/stability.avif",
    alt: "star",
    title: "Teamwork",
    description:
      "We aren't soloists but a pack, playing on the same team with a shared goal and victory.",
  },
  {
    src: "/whywork/stability.avif",
    alt: "star",
    title: "Technology Excellence",
    description:
      "We excel in Next.js, React JavaScript, TypeScript. Every day, we aim to become better with our core technologies. We prioritize education!",
  },

  {
    src: "/whywork/stability.avif",
    alt: "star",
    title: "We’re Passionate About Our Work",
    description:
      "We love our profession, core technologies and working with clients. That's why we're all at Blockcharming :)",
  },
  {
    src: "/whywork/stability.avif",
    alt: "star",
    title: "We’re Client-Centric",
    description:
      "In our service-oriented company, the client is always at the center. That's why we work closely together; their success is our success, so we strive for it!",
  },
  {
    src: "/whywork/stability.avif",
    alt: "star",
    title: "We value Transparent and Open Communication",
    description:
      "Challenges are part of our daily work, so we confront them openly. We know how and where to address it. This way, we can avoid bigger problems.",
  },
];
const Core = (props: Props) => {
  return (
    <div className="mx-auto  max-w-[1200px] bg-[#ffffff80] px-4 py-24">
      <div className=" px-4 pb-24 text-center text-5xl font-bold">
        Our <span className="text-primary">core</span> values
      </div>
      <div
        className="
        flex flex-wrap justify-center gap-4
        
      "
      >
        {coreArray.map((item) => (
          <div
            key={item.title}
            className="mx-auto flex flex-grow gap-4 rounded-3xl border border-[#5e5e5d00] bg-white p-6 shadow-xl max-sm:flex-col sm:basis-1/3 lg:basis-1/4"
          >
            <div className="bg-primary flex-shrink-0 self-start rounded-3xl p-4 text-white">
              <Image
                alt={item.alt}
                src={item.src}
                width={32}
                height={32}
                className="w-auto"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-[#5e5e5d]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Core;
