import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className }: Props) => {
  return (
    <section
      className={cn(
        `mx-auto  max-w-[1200px]  px-[5%]  text-center xl:px-0 `,
        className,
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
