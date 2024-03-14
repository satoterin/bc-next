import React from "react";

type Props = {};

const PartnersLongTemp = (props: Props) => {
  return (
    <>
      <div className=" mx-auto mb-24 mt-12 grid max-w-[1200px] grid-cols-1 items-center gap-4 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto flex flex-col  gap-8  px-12 max-md:text-center md:ml-12">
            <p className="  text-3xl font-bold leading-tight md:text-5xl">
              Partners for your <span className="text-primary">long-term</span>{" "}
              success
            </p>{" "}
            <p className="text-sm text-[#6d6d6c] md:text-xl">
              Fover We have years-long relationships with many of our clients.
              As trusted development partners, we take full ownership of the
              projects and continuously optimize apps, stores, websites, and
              implement new features, or automate workflows.
            </p>
          </div>
        </div>
        <div className=" mx-auto h-full w-full  max-w-lg max-md:px-4">
          <iframe
            className="aspect-video h-auto rounded-3xl"
            //frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="Client Success Story - Building a Real Estate Marketplace with Next.js, Vercel and Azure"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/aXuJyDBqpKg?autoplay=false&amp;accelerometer=true&amp;clipboardWrite=true&amp;encryptedMedia=true&amp;gyroscope=true&amp;pictureInPicture=true&amp;allowFullScreen=true&amp;title=Embedded%20youtube&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fblazity.com&amp;widgetid=5"
            id="widget6"
          ></iframe>
        </div>
      </div>
      <div>
        <p className="text-center text-3xl font-bold text-[#30302f] md:text-5xl">
          Successful products delivered{" "}
          <span className="text-primary">globally </span>
        </p>
      </div>
    </>
  );
};

export default PartnersLongTemp;
