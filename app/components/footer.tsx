import Image from "next/image";
import React from "react";
import ButtonWithArrows from "./button-with-arrows";
import JoinButton from "./footer/join-button";
import Link from "next/link";
import SocialList from "./my-popup/social-list";
import { SocialArray } from "@/data/social-list";
import { cn } from "@/lib/utils";
import Discord from "./soc/discord";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" bg-black/85 px-4 py-12 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
        <div className="mb-8">
          <Link href={"/#"}>
            <Image
              src="/svgs/logoWhite.svg"
              alt="Picture of the author"
              width={120}
              height={50}
            />
          </Link>
        </div>
        <div className="grid grid-cols-1  gap-12 pb-12 lg:grid-cols-4">
          <div className="mb-14 flex flex-col gap-8">
            <div>
              <p className="max-w-[220px] text-2xl font-semibold text-[#a0a0a0]">
                Next.js and React expertise to supercharge your innovation
              </p>
            </div>
            <JoinButton />
          </div>
          <div className="mb-12 flex flex-col gap-4">
            <h1 className="font-bold md:pb-8">Company</h1>
            <ul className="flex flex-col gap-3">
              <li className="hover:text-primary ">
                <Link href={"/case-studies"}>Our Work</Link>
              </li>
              <li className="hover:text-primary ">
                <Link href={"/#"}>Next.js Development</Link>
              </li>
              <li className="hover:text-primary ">
                <Link href={"/#"}>React Development</Link>
              </li>
              <li className="hover:text-primary ">
                <Link href={"/#"}>Migration to Headless</Link>
              </li>
              <li className="hover:text-primary ">
                <Link href={"/#"}>Blog</Link>
              </li>
              <li className="hover:text-primary ">
                <Link href={"/#"}>Newsletter</Link>
              </li>
            </ul>
          </div>
          <div className="mb-12 flex flex-col gap-4">
            <h1 className="font-bold md:pb-8 ">Contact</h1>
            <p>
              Blazity sp. z o.o.
              <br /> Trzech Krzyży 10/14
              <br /> 00-535 Warsaw, Poland
            </p>
            <p className="font-semibold text-[#a0a0a0]">
              VAT ID: 9512467349 <br />
              KRS: 0000743458
            </p>
            <p>
              <u className="text-primary">contact@blazity.com</u>
            </p>
          </div>
          <div>
            <ul className={cn(`flex  text-white`)}>
              {SocialArray.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-primary  pr-8 text-white transition-colors duration-700"
                >
                  <a
                    href={item.url}
                    title={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="font-semibold text-[#a0a0a0]">
          © 2023 Blazity. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
