import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Clutch = (props: Props) => {
  return (
    <div className="shadow-clutch mx-auto my-16 max-w-[700px] rounded-3xl bg-[#30302fd9] p-2 font-bold text-white max-sm:mx-2 sm:p-8">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-2xl max-sm:text-center">
            Our Clutch reviews <span className="text-primary">say it all!</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <Image
              alt="clutch"
              src="/images/clutch-logo-new.avif"
              width={100}
              height={50}
              className="mr-2 w-auto object-contain object-center"
            />
            <div className="flex flex-col  gap-1">
              <div className="flex  gap-4">
                <div>
                  <span className="font-normal">
                    <span className="font-bold">5.0</span> / 5.0
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      alt="star"
                      src="/svgs/stars.svg"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
              </div>
              <div className="font-normal text-[#a0a0a0]  ">
                Based on 18 clients reviews
              </div>
            </div>
          </div>
          <div>
            <Link href={"/#"}>
              <div className="rounded-3xl border border-white px-6 py-4 transition-all hover:bg-white hover:font-semibold hover:text-black max-sm:text-center">
                See all Reviews on Clutch
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clutch;
