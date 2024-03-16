import Image from "next/image";
import React from "react";
import ContactForm from "./form/contact-form";

type Props = {};

const PartnerWithUs = (props: Props) => {
  return (
    <div className="relative z-0  bg-[#30302f] px-2 py-20 text-white">
      <div className="relative  mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <Image
          alt="Lines"
          src="/svgs/lines.svg"
          width={300}
          height={300}
          className="absolute left-[-100px] top-[50%] z-[-1] mr-2 object-contain object-center max-lg:hidden"
        />
        <div className="">
          <div className="pb-32 text-center text-4xl font-bold lg:text-5xl lg:leading-[1.2]">
            Empower your vision,{" "}
            <span className="text-primary  ">partner with us</span> today
          </div>
          <div className="shadow-partner z-10 mb-6 flex flex-col gap-10 rounded-3xl bg-[#30302f]  p-4 max-lg:hidden sm:p-10">
            <div className=" flex items-center gap-4">
              <Image
                alt="Jabkub"
                src="/faces/Jakub.avif"
                width={100}
                height={50}
                className="mr-2 object-contain object-center "
              />
              <div className="flex flex-col gap-2">
                <p className="text-primary font-semibold">Jabkub Czapski</p>
                <p>Founding Partner at Blockcharming</p>
              </div>
            </div>
            <div className="text-xl">
              To best serve you, let's get to know your requirements first. Tell
              us about your project, and we'll arrange a free consultation call
              to discuss how we can help.
            </div>
          </div>
          <div className="shadow-partner flex flex-col gap-4 rounded-3xl bg-[#30302f] p-4 max-lg:hidden sm:p-10">
            <div className="flex items-center pb-10 font-bold uppercase">
              Trusted By:
            </div>
            <div className="flex items-center justify-center gap-8">
              <Image
                alt="solana"
                src="/trustedby/solana.svg"
                width={80}
                height={50}
              />
              <Image
                alt="vibes"
                src="/trustedby/vibes.svg"
                width={80}
                height={50}
              />
              <Image
                alt="softConstruct"
                src="/trustedby/softConstruct.svg"
                width={80}
                height={50}
              />
              <Image
                alt="reckit"
                src="/trustedby/reckit.svg"
                width={80}
                height={50}
              />
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
