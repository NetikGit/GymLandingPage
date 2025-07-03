import { HoverEffect } from "../../components/ui/cards-hover-effects";

export default function CardHoverEffectDemo() {
  return (
    (<div className="max-w-full mx-auto mt-16 sm:max-w-5xl lg:ml-[250px] lg:mt-[100px]">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [

  {
    title: "1-Month Membership",
    price:1500,
    description:"This package contains 1 month membership only . " ,
    link: "https://google.com",
  },
  {
    title:"3-Month Membership",
    price:4000,
    description:"This package contains 3 months membership only . " ,
    link: "https://meta.com",
  },
  {
    title: "6- Month Membership",
    price:7200,
    description:
      "This package contains 6 months membership only ",
    link: "https://stripe.com",
  },
  {
    title: "Yearly",
    price:12000,
    description:
      "This package contains  membership for a year ",
    link: "https://netflix.com",
  },
  
];
