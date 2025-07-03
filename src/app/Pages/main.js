"use client";
import { useState, useEffect } from "react";
import Logo from "../../../public/lg.jpeg";
import Image from "next/image";
import first from "../../../public/first.png";
import Advantage from "./advantage";
import Membership from "./membership";
import Staff from "./Staff";
import AnimatedTestimonialsDemo from "./reviewacternity";
import Facility from "./Facility";
import { ParallaxScrollDemo } from "./GymImages";
import FloatingNavDemo from "./navbar";
import Workout from "./Workouts";
import Footer from "../Info/page";
import Contact from "../Contact/page";
import { useRouter } from "next/navigation";
// Loading Screen Component
function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black text-white z-50">
      <Image src={Logo} alt="Loading Logo" width={120} height={120} />
      <h1 className="text-3xl font-bold mt-4">Welcome to Shotokan Martialarts Academy</h1>
      <div className="mt-6 w-20 h-20 border-t-4 border-yellow-300 rounded-full animate-spin"></div>
    </div>
  );
}

export default function Main() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
    <FloatingNavDemo/>
      <div className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 md:px-[7%] font-outfit bg-black py-4">
        <div className="flex space-x-2 items-center">
          <Image src={Logo} alt="logo" width={70} height={70} />
          <h1 className="text-[24px] font-semibold">Shotokan Martialarts Academy</h1>
        </div>
        <div className="hidden md:flex space-x-[40px] text-[18px] font-semibold">
          <h1 onClick={() => router.push("/")}>HOME</h1>
          <h1 onClick={() => router.push("#")}>ABOUT US</h1>
          <h1 onClick={() => router.push("/Contact")}>CONTACT US</h1>
          <h1 onClick={() => router.push("/Info")}>INFO</h1>
                  </div>
      </div>
      {/* <FloatingNavDemo /> */}

      {/* Hero Section */}
      <div className="relative mt-[80px] flex flex-col md:flex-row items-center px-4 md:px-[7%] bg-[url('/karatebgFirst.avif')] bg-cover bg-center">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-black/30 backdrop-blur-[2px] rounded-r-2xl"></div>

        <div className="relative z-10 text-center md:text-left text-white w-full md:w-1/2 p-6">
          <h1 className="text-[10vw] md:text-[87px] font-outfit">
            MAKE YOURSELF
            <br />
            <span className="font-bold text-[#007878]">FIGHTER</span>
          </h1>
          <p className="w-full md:w-[500px] text-[16px] md:text-[18px] mt-4 text-gray-300">
            Being physically active can improve your brain health, help manage weight, reduce the risk of disease, Self Defence , strengthen bones and muscles, and can fight in any situation, make yourself powerfull.
          </p>
          <div className="w-[200px] h-[52px] mt-6 bg-[#007878] rounded-[20px] flex items-center justify-center font-semibold mx-auto md:mx-0">
            <h1 className="text-black text-[20px]">Get Started</h1>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Advantage />
      <Workout/>
      <ParallaxScrollDemo />
      <Membership />
      <Staff />
      <Facility />
      <AnimatedTestimonialsDemo />
      <Contact/>
      
      <Footer/>
     
    </>
  );
}
