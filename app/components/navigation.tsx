"use client";
import React from "react";
import { LuChevronDown } from "react-icons/lu";
import ServiceSubMenu from "./service-sub-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MyPresentationPopup from "./my-popup/my-presentation-popup";
type Props = {};

const Navigation = (props: Props) => {
  const [showSubMenu, setShowSubMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  //console.log("pathname:", pathname);

  return (
    <>
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <ServiceSubMenu
        showSubMenu={showSubMenu}
        setShowSubMenu={setShowSubMenu}
      />
      <div className="h-full">
        <ul className="hidden h-full w-full  justify-center gap-10 text-[#30302f] lg:flex">
          <li className={cn(`group h-full  `, showSubMenu && "text-[#ff782c]")}>
            <button
              onMouseEnter={() => setShowSubMenu(true)}
              className="flex h-full items-center gap-2 "
            >
              <span>Services</span>{" "}
              <LuChevronDown
                className={cn(
                  `h-5 w-5 text-gray-500`,
                  showSubMenu && "rotate-180 text-[#ff782c]",
                )}
              />
            </button>
          </li>
          <li className=" flex h-full items-center ">
            <Link
              href={"/#about-us"}
              className={cn(
                `hover:text-primary`,
                // pathname === "/careers" && "text-primary",
              )}
            >
              About Us
            </Link>{" "}
          </li>
          <li className=" flex h-full items-center ">
            <Link
              href={"/careers"}
              className={cn(
                `hover:text-primary`,
                pathname === "/careers" && "text-primary",
              )}
            >
              Career
            </Link>
          </li>
          <li className=" flex h-full items-center ">
            <button
              className="hover:text-primary"
              //onClick={() => setOpen(true)}
            >
              Our Work
            </button>
          </li>

          <li className=" flex h-full items-center ">
            <button
              className="hover:text-primary"
              //onClick={() => setOpen(true)}
            >
              Open Source
            </button>
          </li>
          <li className=" flex h-full items-center ">
            <button
              className="hover:text-primary"
              //onClick={() => setOpen(true)}
            >
              Blog
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
