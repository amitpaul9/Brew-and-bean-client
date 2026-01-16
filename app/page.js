import About from "@/components/home/About";
import Cafe from "@/components/home/Cafe";
import Hero from "@/components/home/Hero";
import Location from "@/components/home/Location";
import Menu from "@/components/home/Menu";
import Newsletter from "@/components/home/Newsletter";
import Reviews from "@/components/home/Reviews";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Menu></Menu>
      <Cafe></Cafe>
      <About></About>
      <Reviews></Reviews>
      <Location></Location>
      <Newsletter></Newsletter>
    </div>
  );
};

export default page;
