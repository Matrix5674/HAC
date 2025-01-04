import {
  SunIcon,
  CloudIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  StarIcon,
  UserIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/HAC_FutureGoals.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const About_Section = {
  title: "Future Goals",
  desc: "Our organization is committed to making a positive impact in the community. In this section, we outline our aspirations and the steps we plan to take to achieve them. Stay tuned as we reveal our exciting plans for the future.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Winter Warmth Drive 2025",
      desc: "A new initiative to provide winter clothing, blankets, and other essentials to those in need.",
      icon: <CloudIcon className="w-6 h-6 text-yellow-500"/>,
    },
    {
      title: "Spring Nutrition Program 2025",
      desc: "A program to provide healthy meals to children in need during the spring season.",
      icon: flowerIcon(),
    },
    {
      title: "Summer Shade Campaign 2025",
      desc: "A campaign to provide various beverages, and bring recreational activities to the community during the summer.",
      icon: <SunIcon />,
    },
  ],
};

const Team_Section = {
  title: "The HAC Team",
  desc: "Our team is composed of dedicated professionals who are passionate about making a difference in the community. We work collaboratively to create and implement programs that address the needs of those we serve.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Soham Sahasrabuddhe",
      desc: "Founder and President of HAC; Lead of Software Development",
      icon: <StarIcon />,
    },
    {
      title: "May Hassner",
      desc: "Founder and Co-President of HAC",
      icon: <StarIcon />,
    },
    {
      title: "Sana Santimano",
      desc: "Lead of Communications and Community Outreach",
      icon: <UserIcon />,
    },
  ],
};

function flowerIcon(){
  return <svg dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <circle cx="12" cy="12" r="5" fill="currentColor" /> <circle cx="12" cy="6" r="5" fill="currentColor" /> <circle cx="18" cy="9" r="5" fill="currentColor" /> <circle cx="18" cy="15" r="5" fill="currentColor" /> <circle cx="12" cy="18" r="5" fill="currentColor" /> <circle cx="6" cy="15" r="5" fill="currentColor" /> <circle cx="6" cy="9" r="5" fill="currentColor" /> </svg>;
}


export {About_Section as benefitOne, Team_Section as benefitTwo};
