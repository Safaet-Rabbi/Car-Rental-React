import React, { useEffect } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/bugati.jfif";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-100 relative -z-10 max-h-[450px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              QuickWheels
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Choose from a wide range of luxury, sports, and economy cars to suit your needs. Whether you're on vacation, a business trip, or just need a car for the day, we have the perfect ride for you.{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
