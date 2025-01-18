"use client";
import dynamic from "next/dynamic";
import Header from "./components/Header/Header";
import LogisticsForm from "./components/LogisticForm/LogisticsForm";

const FooterLp = dynamic(() => import("./components/landingpage/FooterLp"));
const Landingpage2 = dynamic(() => import("./components/landingpage/Lp2"));
const Lp3 = dynamic(() => import("./components/landingpage/Lp3"));
const Lp4 = dynamic(() => import("./components/landingpage/Lp4"));
const Lp5 = dynamic(() => import("./components/landingpage/Lp5"));
const Lp6 = dynamic(() => import("./components/landingpage/Lp6"));

export default function Home() {
  return (
    <div>
      <Header />
      <LogisticsForm />
      <Landingpage2 />
      <Lp3 />
      <Lp4 />
      <Lp5 />
      <Lp6 />
      <FooterLp />
    </div>
  );
}
