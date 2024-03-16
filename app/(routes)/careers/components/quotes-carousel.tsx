"use client";
import { Card, CardContent } from "@/app/components/ui/card";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/careers-quotes-carousel";
import Image from "next/image";

const careersQuotes = [
  {
    src: "/faces/Diana.avif",
    alt: "Diana",
    name: "Diana Popa",
    position: "Project Manager",
    quote:
      "To me, working at Blockcharming feels empowering, because from day one I felt that the team has placed their trust in me. I'm surrounded by skilled colleagues who have been extremely helpful and welcomed me with kind smiles. The atmosphere is friendly and the work is very fulfilling. As a Project Manager I am part of a diverse range of projects and exciting technologies, which allowed me to learned so much in a short period of time.",
  },
  {
    src: "/faces/Piotr.avif",
    alt: "Piotr",
    name: "Piotr Sławiński",
    position: "Software Engineer",
    quote:
      "Working at Blockcharming is great! The team is amazing, the projects are exciting, and everyday work is very rewarding. The recruitment process was well-planned and positive, ensuring a smooth onboarding experience. Moreover, the company provides many opportunities to learn and grow, both personally and professionally. Blazity fosters a supportive work culture that encourages collaboration, knowledge sharing, and personal development.",
  },
  {
    src: "/faces/Filip.avif",
    alt: "Filip",
    name: "Filip Dukat",
    position: "Software Engineer",
    quote:
      "As a software engineer, I enjoy continuously learning and improving both my technical and soft skills. This is why I chose to work at Blockcharming. With many skilled programmers, a welcoming environment, opportunities to work on open-source projects, and the chance to build web applications with the latest technology, it's an ideal place for any ambitious developer who's looking for a new job.",
  },
];

export function QuotesCarousel() {
  return (
    <Carousel className="] mx-0 w-full  py-24 pt-2" opts={{ loop: true }}>
      <CarouselContent className="">
        {careersQuotes.map((quote, index) => (
          <CarouselItem key={index} className="basis-[90%] lg:basis-[60%]">
            <div className="relative top-4  mt-12 w-fit ">
              <Image
                alt="doubleQuotes"
                src={"/images/doubleQuotes.svg"}
                width={200}
                height={200}
                className="w-auto"
              />
            </div>
            <div className=" p-1">
              <div className="bg-primary flex flex-col gap-8 rounded-3xl p-2 font-semibold text-white sm:p-10">
                <p className="min-h-[240px] p-2 text-base sm:text-2xl">
                  "{quote.quote}"
                </p>
                <div className="flex gap-6">
                  <Image
                    alt="Diana"
                    src={quote.src}
                    width={80}
                    className="w-auto rounded-full"
                    height={80}
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <div className="text-base">{quote.name}</div>
                    <div className="text-sm opacity-70">{quote.position}</div>
                  </div>
                </div>
              </div>
              {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-md:hidden" />
      <CarouselNext className="max-md:hidden" />
    </Carousel>
  );
}
