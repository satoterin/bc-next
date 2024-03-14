import React from "react";
import ButtonWithArrows from "./button-with-arrows";

type Props = {};

const HeroButtons = (props: Props) => {
  return (
    <div className="mx-2 flex items-center justify-center gap-8 pb-8 max-sm:flex-col">
      <ButtonWithArrows text="Contact Us" icon="arrow" href="/#contact" />
      <ButtonWithArrows
        text="Our service"
        icon="chevrons"
        className="border border-black bg-transparent text-black transition-none hover:bg-black hover:text-white"
      />
    </div>
  );
};

export default HeroButtons;
