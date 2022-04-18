import Head from "next/head";

import { useMediaQuery } from "@chakra-ui/react";

import LandingPageFirstSection from "../sections/landingPage/LandingPageFirstSection";
import LandingPageSecondSection from "../sections/landingPage/LandingPageSecondSection";
import LandingPageThirdSection from "../sections/landingPage/LandingPageThirdSection";
import LandingPageFourthSection from "../sections/landingPage/LandingPageFourthSection";
import LandingPageFifthSection from "../sections/landingPage/LandingPageFifthSection";

export default function Home() {
  const isNotSmallScreen = useMediaQuery("(min-width:600px)"); // Min midth 600 px sets the breakpoint for desktop screens.

  return (
    <>
      <Head>
        <title>Raw Fitness - Get Fit Stay Fit</title>
      </Head>
      {/* ----------------------PAGE CONTENT 1 STARTS---------------------------- */}
      <LandingPageFirstSection />
      {/* ----------------------PAGE CONTENT 1 ENDS---------------------------- */}
      {/* ----------------------PAGE CONTENT 2 STARTS---------------------------- */}
      <LandingPageSecondSection />
      {/* -------------------------PAGE CONTENT 2 ENDS---------------------------- */}
      {/* ----------------------PAGE CONTENT 3 STARTS---------------------------- */}
      {/* <LandingPageThirdSection /> */}
      {/* ----------------------PAGE CONTENT 3 ENDS---------------------------- */}
      {/* -----------------------PAGE CONTENT 4 STARTS --------------------------*/}
      {/* <LandingPageFourthSection /> */}
      {/* -----------------------PAGE CONTENT 4 ENDS --------------------------*/}
      {/* -----------------------PAGE CONTENT 5 STARTS --------------------------*/}
      {/* <LandingPageFifthSection /> */}
      {/* -----------------------PAGE CONTENT 5 ENDS --------------------------*/}
    </>
  );
}
