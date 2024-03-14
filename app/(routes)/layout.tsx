import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/app/components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js and React development experts | Blazity - clone",
  description: "This is a clone of Blazity's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="max-w-[100dvw] ">
          <Header />
          <div className="h-[71px]"></div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
