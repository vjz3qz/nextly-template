import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/automation.svg";
import benefitTwoImg from "../public/img/locker.png";

const benefitOne = {
  title: "Rapidly understand insurance policies",
  desc: "Let us search and summarize your complex insurance policies so you can spend more time with patients.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Requirement checker",
      desc: "See what criteria your patient meets in a matter of seconds.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Reliable source material ",
      desc: "We pull information straight from insurance policies and give you the source material.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Automated letter writing",
      desc: "Tell us about the patient and let us argue medical neccesity.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Keep your medical documents organized",
  desc: "Have your entire knowledge base at your fingertips. Spend less time searching for information and more time using it.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Rapid semantic search",
      desc: "Search using ideas, codes, or terminology and immediatley get the specific information you need.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Pre-built policy database",
      desc: "Leverage Trace AI's insurance policy and form database to find documents scattered across the web.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Add your own documents",
      desc: "Easily upload your own documents and find information whenever you need",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
