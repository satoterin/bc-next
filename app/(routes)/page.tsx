import CircuralAnimation from "../components/circural-animation";
import PartnersLongTemp from "../components/partners-long-term";
import AutoScrolledCompanies from "../components/auto-scrolled-companies";
import Quotes from "../components/quotes";
import Clutch from "../components/clutch";
import Numbers from "../components/numbers";
import OurServices from "../components/our-services";
import WhyWorkWithUs from "../components/why-work-with-us";
import WeWorkGlobally from "../components/we-work-globally";
import PartnerWithUs from "../components/partner-with-us";
import MotionWrapper from "../components/motion-wrapper";
import CertifiedPartners from "../components/certified-partners";

export default function Home() {
  return (
    <main className="">
      <div className=" bg-[#efece7] ">
        <CircuralAnimation />
        <CertifiedPartners />
      </div>
      <PartnersLongTemp />
      <AutoScrolledCompanies />
      <MotionWrapper>
        <Quotes />
      </MotionWrapper>
      <MotionWrapper>
        <Clutch />
      </MotionWrapper>
      <Numbers />
      <MotionWrapper>
        <OurServices />
      </MotionWrapper>
      <MotionWrapper>
        <WhyWorkWithUs />
      </MotionWrapper>
      <MotionWrapper>
        <WeWorkGlobally />
      </MotionWrapper>
      <PartnerWithUs />
    </main>
  );
}
