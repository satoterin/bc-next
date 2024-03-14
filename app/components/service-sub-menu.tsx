import React from "react";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { Arrow } from "./button-with-arrows";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  showSubMenu: boolean;
  setShowSubMenu: (show: boolean) => void;
};

const subNavArray = [
  {
    id: 1,
    title: "Next.js Development",
    alt: "code",
    image: "/images/code.avif",
    href: "/#",
  },
  {
    id: 2,
    title: "React Development",
    alt: "code",
    image: "/images/code.avif",
    href: "/#",
  },
  {
    id: 3,
    title: "Migration to Headless",
    alt: "bulb",
    image: "/images/bulb.avif",
    href: "/#",
  },
  {
    id: 4,
    title: "Headless eCommerce",
    alt: "shoping",
    image: "/images/shoping.avif",
    href: "/#",
  },
];

const ServiceSubMenu = ({ showSubMenu, setShowSubMenu }: Props) => {
  return (
    <Popover.Root open={showSubMenu} onOpenChange={setShowSubMenu}>
      <Popover.Trigger className=""></Popover.Trigger>
      <Popover.Portal key="dialog">
        <Popover.Content
          onMouseLeave={() => setShowSubMenu(false)}
          sideOffset={45}
          //alignOffset={100}
          align="center"
          className="     z-[999] mx-auto flex w-screen  rounded-md  bg-transparent "
        >
          <div className=" mx-auto rounded-md bg-neutral-100 p-4">
            <ul className="grid grid-cols-2 gap-4">
              {subNavArray.map((item) => (
                <li key={item.id}>
                  <div className="flex items-center justify-evenly gap-10 rounded-md bg-white px-8 py-6">
                    {" "}
                    <div>
                      <Image
                        alt="code"
                        src={item.image}
                        width={35}
                        height={35}
                      />
                    </div>{" "}
                    <p className="w-[200px] text-lg font-bold">{item.title}</p>
                    <Link href={"/#"} onClick={() => setShowSubMenu(false)}>
                      <div className="group flex h-10  w-16 items-center  justify-center  rounded-3xl border border-black hover:bg-black ">
                        <Arrow className=" group-hover:text-white  " />
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ServiceSubMenu;

type ArrowProps = {
  className?: string;
};
export const ArrowCentered = ({ className }: ArrowProps) => {
  return (
    <svg
      width="18"
      viewBox="0 0 18 18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(``, className)}
    >
      <path
        d="M3.75 9h10.5M9 14.25 14.25 9 9 3.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
