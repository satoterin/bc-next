"use client";
import React from "react";
import ButtonWithArrows from "../button-with-arrows";
import MyPresentationPopup from "../my-popup/my-presentation-popup";

type Props = {};

const JoinButton = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="">
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <div onClick={() => setOpen(true)}>
        <ButtonWithArrows
          text="Join Our Newsletter"
          icon="arrow"
          glow={true}
          className="max-w-[300px] border border-black/85 bg-white text-black/70 transition-none hover:border-white hover:bg-transparent hover:text-white"
        />
      </div>
    </div>
  );
};

export default JoinButton;
