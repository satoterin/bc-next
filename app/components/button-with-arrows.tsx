import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { LuChevronsDown } from "react-icons/lu";
type Props = {
  glow?: boolean;
  href?: string;
  text: string;
  icon: "arrow" | "chevrons";
  className?: string;
};

const ButtonWithArrows = ({
  glow = false,
  text = "",
  href = "/#",
  icon = "arrow",
  className,
}: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        `bg-primary group  flex  items-center justify-center overflow-hidden rounded-3xl p-4 pr-8 font-semibold text-white transition-all  duration-300 hover:brightness-90 max-sm:hover:brightness-75 sm:w-fit`,

        //glow && "animate-ring-glow duration-4000",
        glow && "animate-ring-blazity duration-4000",
        className,
      )}
    >
      {icon === "arrow" ? (
        <Arrow className="   scale-0 transition-all duration-300 sm:group-hover:translate-x-[1.5rem] sm:group-hover:scale-100" />
      ) : (
        <LuChevronsDown className="   scale-0 transition-all duration-300 sm:group-hover:translate-x-[1.5rem] sm:group-hover:scale-100" />
      )}

      <p className="mx-2 mr-3 transition-all duration-300 max-sm:text-center sm:group-hover:translate-x-[2rem]">
        {text}
      </p>
      {icon === "arrow" ? (
        <Arrow className=" scale-100  transition-all duration-300 sm:group-hover:translate-x-[2rem] sm:group-hover:scale-0" />
      ) : (
        <LuChevronsDown className="   scale-100  transition-all duration-300 sm:group-hover:translate-x-[2rem] sm:group-hover:scale-0" />
      )}
    </Link>
  );
};

export default ButtonWithArrows;

type ArrowProps = {
  className?: string;
};

export const Arrow = ({ className }: ArrowProps) => {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(``, className)}
    >
      <path
        d="M3.75 9h10.5M9 14.25 14.25 9 9 3.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
