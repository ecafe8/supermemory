import RotatingIcons from "./RotatingIcons";
import Hero from "./Hero";
import { Navbar } from "./Navbar";
import Cta from "./Cta";
import { Toaster } from "@repo/ui/shadcn/toaster";
import Features from "./Features";
import Footer from "./footer";
import { auth } from "../helpers/server/auth";
import { redirect } from "next/navigation";
import FUIPricingSectionWithBadge from "./Pricing";
import Services from "./Features/index";
import { Showcases } from "./Showcase";

export const runtime = "edge";

export default async function Home() {
  const user = await auth();

  console.log(user);

  if (user) {
    // await redirect("/home")
  }

  return (
    <main className="flex relative min-h-screen flex-col items-center overflow-x-hidden px-2 md:px-0 font-geistSans bg-hero-gradient">
      <Navbar />

      {/* Background gradients */}
      <div className="absolute left-0 top-0 z-[-1] h-full w-full">
        <div className="overflow-x-hidden">
          <div
            className="absolute left-0 h-32 w-[95%] overflow-x-hidden bg-[#369DFD] bg-opacity-70 blur-[337.4px]"
            style={{ transform: "rotate(-30deg)" }}
          />
        </div>

        {/* a blue gradient line that's slightly tilted with blur (a lotof blur)*/}
        {/* <div className="overflow-x-hidden overflow-y-hidden">
          <div
            className="absolute left-0 top-[100%] h-32 w-[90%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-40 blur-[337.4px]"
            style={{ transform: "rotate(-30deg)" }}
          />
        </div> */}

        {/* <div className="overflow-x-hidden overflow-y-hidden">
          <div className="absolute right-0 top-[145%] h-40 w-[17%] overflow-x-hidden bg-[#369DFD] bg-opacity-20 blur-[110px]" />
        </div> */}
      </div>

      {/* Hero section */}
      <Hero />
      <Showcases />
      <Services />

      {/* Features section */}
      <Features />
      
      <RotatingIcons />

      <Cta />

      <Toaster />

      <Footer />
    </main>
  );
}
