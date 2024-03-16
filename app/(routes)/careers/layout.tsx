import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Blockcharming",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
