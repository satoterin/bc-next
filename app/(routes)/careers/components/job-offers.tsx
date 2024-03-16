"use client";
import MyPresentationPopup from "@/app/components/my-popup/my-presentation-popup";
import Image from "next/image";
import React from "react";

type Props = {};

export const jobsArray = [
  {
    title: "Frontend Developer (React/Next)",
    location: "Remote / APAC",
    salary: "2,500 – 3,500 USD / month",
    status: "Coming soon",
    description: "",
  },
  {
    title: "Backend Developer (Go)",
    location: "Remote / Worldwide",
    salary: "3,500 – 4,000 USD / month",
    status: "Apply now",
    description: "",
  },
  {
    title: "Rust Developer",
    location: "Remote / Worldwide",
    salary: "3,500 – 4,000 USD / month",
    status: "Apply now",
    description: "",
  },
];

const JobOffers = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="px-4 pt-32">
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <div id="job-offers" className="scroll-m-24">
        <h1 className="pb-8 text-center text-5xl font-bold">
          All <span className="text-primary">job </span> offers
        </h1>
        <div className="flex flex-col items-center gap-8 pb-32">
          {jobsArray.map((job) => (
            <div
              key={job.title}
              className="flex shrink-0 gap-8 rounded-3xl border border-[#5e5e5d00] bg-[#ffffff80] p-10 shadow-xl backdrop-blur-lg max-lg:flex-col lg:basis-5/6 lg:gap-32"
            >
              <div className="flex flex-col gap-4 ">
                <h1 className="  text-2xl font-bold opacity-70 md:min-w-[450px]">
                  {job.title}
                </h1>
                <div className="text-primary flex items-center gap-4 font-bold">
                  <Image
                    alt="solana"
                    src="/svgs/location.svg"
                    width={24}
                    height={24}
                  />
                  <span>{job.location}</span>
                </div>
                <div className="flex gap-2 font-semibold">
                  {job.salary.length > 1 && <p className=" opacity-50">B2B:</p>}

                  <p>{job.salary}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 font-semibold max-sm:flex-col">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-primary rounded-3xl  px-4 py-3 text-white hover:brightness-90"
                >
                  {job.status}
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-3xl border border-black bg-white px-4 py-3 text-black hover:bg-black hover:text-white"
                >
                  Read More...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
