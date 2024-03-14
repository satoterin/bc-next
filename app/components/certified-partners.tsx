import { partnersArray } from "@/data/partners";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const CertifiedPartners = (props: Props) => {
  return (
    <div className="">
      <p className="text-center font-bold uppercase">Certified Partners:</p>
      <div>
        <ul className="flex flex-wrap items-center justify-center gap-6 ">
          {partnersArray.map((partner) => (
            <li key={partner.name} className=" ">
              <Link
                target="_blank"
                href={partner.href}
                className=" flex h-16  translate-y-[50%] cursor-pointer rounded-2xl  bg-white p-4 outline-1 hover:shadow-md hover:outline hover:outline-gray-200"
              >
                <Image
                  priority
                  src={partner.logo}
                  alt={partner.name}
                  width={130}
                  height={130}
                  className="z-30 w-auto object-contain object-center"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-[100px] bg-white"></div>
      </div>
    </div>
  );
};

export default CertifiedPartners;
