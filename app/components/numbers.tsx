import React from "react";
import ButtonWithArrows from "./button-with-arrows";
import MotionWrapper from "./motion-wrapper";

type Props = {};

const numbersArray = [
  {
    number: 30,
    text: "JavaScript experts on board",
    sign: "+",
  },
  {
    number: 5,
    text: "years of operating experience",
    sign: "+",
  },
  {
    number: 30,
    text: "clients stay with us",
    sign: "%",
  },
  {
    number: 4,
    text: "revenue growth last year",
    sign: "x",
  },
];
const Numbers = (props: Props) => {
  return (
    <div
      style={{
        //backgroundPositionX: "70%",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        //backgroundPositionY: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url('/images/statistics-bg-mask.svg')",
        backgroundColor: "rgb(255, 120, 44)",
      }}
      className="flex flex-col items-center justify-evenly pb-20 pt-20"
    >
      <MotionWrapper>
        <div className="grid grid-cols-2 gap-8 pb-14 text-white lg:grid-cols-4">
          {numbersArray.map((number, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex text-5xl font-bold">
                <span>{number.number} </span>
                <span className="opacity-50">{number.sign}</span>
              </div>
              <p className="text-center">{number.text}</p>
            </div>
          ))}

          {/* <div className="flex flex-col items-center justify-center">
          <div>30 +</div>
          <p>JavaScript experts on board</p>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div>30 +</div>
          <p>JavaScript experts on board</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>30 +</div>
          <p>JavaScript experts on board</p>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div>30 +</div>
          <p>JavaScript experts on board</p>
        </div> */}
        </div>
      </MotionWrapper>
      <div>
        <ButtonWithArrows
          icon="arrow"
          text="Tell us about you project"
          href="/#"
          className="bg-white text-black transition-none duration-0 hover:bg-black hover:text-white"
        />
      </div>
    </div>
  );
};

export default Numbers;
