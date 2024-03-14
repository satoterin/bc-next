"use client";
import React from "react";
import { LuChevronDown, LuMenu, LuX } from "react-icons/lu";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
type Props = {};

const NavigationMobile = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showSubMenu, setShowSubMenu] = React.useState(false);
  return (
    <>
      <div className="cursor-pointer overflow-hidden   hover:opacity-70">
        {!isOpen ? (
          <LuMenu
            onClick={() => setIsOpen(true)}
            className="ml-auto mr-8 h-8 w-8 transition-all"
          />
        ) : (
          <LuX
            onClick={() => setIsOpen(false)}
            className="ml-auto mr-8 h-8 w-8 transition-all"
          />
        )}
      </div>
      <AnimatePresence key={"mobile"}>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            exit={{ x: "100%" }}
            key="mobileMenu"
            className="absolute left-0 top-[70px] z-[20]  h-screen  w-full   overflow-hidden bg-white text-2xl "
          >
            <ul
              onClick={() => setIsOpen(false)}
              className="flex flex-col items-end justify-end gap-8  px-20 pt-28 text-right font-semibold"
            >
              <li className=" ">
                <button
                  className={cn(
                    `group ml-auto flex h-full  items-center justify-end gap-2  `,
                    showSubMenu && "text-[#ff782c]",
                  )}
                  onClick={(e) => {
                    e.stopPropagation();

                    setShowSubMenu(!showSubMenu);
                  }}
                >
                  <span className="font-semibold">Services</span>{" "}
                  <LuChevronDown
                    className={cn(
                      `h-5 w-5 text-gray-500`,
                      showSubMenu && "rotate-180 text-[#ff782c]",
                    )}
                  />
                </button>
                {showSubMenu && (
                  <div
                    className="mt-12 space-y-12 text-base font-semibold"
                    onClick={() => setShowSubMenu(false)}
                  >
                    <div>Next.js Development</div>
                    <div>React Development</div>
                    <div>Migration to headless</div>
                    <div>Headless eCommerce</div>
                  </div>
                )}
              </li>
              <li>
                <Link href={"/#about-us"}>About Us</Link>
              </li>
              <li>Our Work</li>
              <li>
                <Link href={"/careers"}>Career</Link>
              </li>
              <li>Open Source</li>
              <li>Blog</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationMobile;
