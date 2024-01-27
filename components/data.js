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
  title: "Rapidly Process Prior Authorizations",
  desc: "Streamline your prior authorization process with our AI-driven solutions, allowing you to devote more time to patient care.",
  // desc: "Let us search and process your complex insurance policies so you can spend more time with patients.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Insurance Guideline Discovery",
      desc: "Quickly upload policy documents and our AI will extract the necessary guidelines with precision.",
      icon: <SunIcon />,
    },
    {
      title: "Insurance Policy Coverage",
      desc: "Determine how your prior authorization aligns with insurance guidelines, complete with detailed justifications.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "AI Agent for Insurance Calls",
      desc: "Our AI Agent efficiently manages calls to insurance representatives, utilizing in-depth policy data and your specified guidelines.",
      //Our AI Agent expertly handles calls to insurance representatives, leveraging detailed policy data and your guidelines for efficient tracking and verification.
      icon: <CursorArrowRaysIcon />,
    },
    // {
    //   title: "Automated Prior Authorization Writing",
    //   desc: "Tell us about the patient and let us argue medical neccesity.",
    //   icon: <CursorArrowRaysIcon />,
    // },
    // {
    //   title: "Comprehensive Policy Access",
    //   desc: "Leverage an extensive insurance policy and form database to find documents scattered across the web.",
    //   icon: <CursorArrowRaysIcon />,
    // },
  ],
};

const benefitTwo = {
  title: "Scalable AI Healthcare Solution",
  desc: "Empower your healthcare practice with an adaptable AI solution that scales with your needs.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "HIPAA Compliant",
      desc: "Maintain the highest standards of patient data privacy and security in strict compliance with HIPAA regulations.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Compliant Cloud Infrastructure",
      desc: "Rely on a cloud infrastructure meticulously aligned with healthcare industry norms for security and reliability.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Industry Standard Data Security",
      desc: "Protect sensitive data with state-of-the-art encryption and security protocols, meeting the highest industry standards.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
