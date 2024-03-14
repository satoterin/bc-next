import Image from "next/image";
import React from "react";
import SectionWrapper from "./section-wrapper";
import ButtonWithArrows from "./button-with-arrows";
import Navigation from "./navigation";
import NavigationMobile from "./navigation-mobile";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="fixed left-0 right-0 top-0 z-[999] h-[70px] max-w-[100dvw]  border-[#dddfe0] bg-white">
      <SectionWrapper className="h-full">
        <div className="flex h-full items-center justify-between gap-2 ">
          <div className="flex items-center justify-center max-[300px]:hidden ">
            <Link href={"/"}>
              <Image
                priority
                src="/svgs/logo.svg"
                alt="Picture of the author"
                width={120}
                height={50}
              />
            </Link>
            <span className="max-sm:hidden"> (clone)</span>
          </div>
          <Navigation />
          <ButtonWithArrows
            glow={true}
            text="Get a quote"
            href="/#contact"
            icon="arrow"
            className="min-w-[200px] py-2 max-sm:px-0"
          />
          <div className=" ml-auto w-8 flex-shrink  lg:hidden">
            <NavigationMobile />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Header;
