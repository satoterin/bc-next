import React from "react";
import Career from "./components/career";
import JobOffers from "./components/job-offers";
import { QuotesCarousel } from "./components/quotes-carousel";
import Core from "./components/core";
import JoinUs from "./components/join-us";
import OurBenefits from "./components/our-benefits";
import MotionWrapper from "@/app/components/motion-wrapper";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="scroll-smooth">
      <Career />
      <MotionWrapper>
        <JobOffers />
      </MotionWrapper>
      <MotionWrapper>
        <OurBenefits />
      </MotionWrapper>
      <QuotesCarousel />
      <MotionWrapper>
        <Core />
      </MotionWrapper>
      <JoinUs />
    </div>
  );
};

export default Page;
