"use client";
import dynamic from "next/dynamic";

const FooterLp = dynamic(() => import("./components/LandingPage/FooterLp"));
const Landingpage2 = dynamic(() => import("./components/LandingPage/Lp2"));
const Lp3 = dynamic(() => import("./components/LandingPage/Lp3"));
const Lp4 = dynamic(() => import("./components/LandingPage/Lp4"));
const Lp5 = dynamic(() => import("./components/LandingPage/Lp5"));
const Lp6 = dynamic(() => import("./components/LandingPage/Lp6"));

export default function Home() {
  return (
    <div>
      <Landingpage2 />
      <Lp3 />
      <Lp4 />
      <Lp5 />
      <Lp6 />
      <FooterLp />
    </div>
  );
}
