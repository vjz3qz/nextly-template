import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import { useEffect } from "react";

const Home = () => {
  // Function to set the favicon based on the user's theme
  const setFavicon = (theme) => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (theme === "dark") {
      favicon.href = "/img/removed_white_favicon.ico";
    } else {
      favicon.href = "/img/removed_black_favicon.ico";
    }
  };

  // Call the setFavicon function with the user's theme
  const setUserTheme = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    let userTheme;

    if (prefersDarkMode) {
      // Nighttime
      userTheme = "dark";
    } else {
      // Daytime
      userTheme = "light";
    }

    setFavicon(userTheme); // Call the setFavicon function with the user's theme
  };

  // Call the setUserTheme function when the component mounts
  useEffect(() => {
    setUserTheme();
  }, []);

  return (
    <>
      <Head>
        <title>Trace AI - Prior Auth Copilot</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Trace AI"
        title="Use AI to get approvals the first time"
      >
        Spend less time on paperwork by letting Trace AI handle insurance policy
        research and medical neccesity write-ups.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
