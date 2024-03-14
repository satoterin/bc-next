import Link from "next/link";
import React from "react";

type Props = {};

const JoinUs = (props: Props) => {
  return (
    <div className="bg-[#30302f] px-4 text-center text-white">
      <h1 className="pb-8 pt-16 text-3xl font-bold">Join us today...</h1>
      <p className="mx-auto max-w-[570px] ">
        Don't miss out on your chance to be part of our innovative team! Take
        the first step towards an exciting career by exploring our current job
        openings and applying today.
      </p>
      <Link href="/careers#job-offers" className="block py-12">
        <div className="bg-primary mx-auto w-fit rounded-3xl px-4 py-4 hover:brightness-95">
          Get Back to Job Offers
        </div>
      </Link>
    </div>
  );
};

export default JoinUs;
