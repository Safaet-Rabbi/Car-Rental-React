import React from "react";
import whiteCar from "../../assets/bmw.png";
import car2 from "../../assets/mercedes.png";
import car3 from "../../assets/range-rover.png";
import ford from "../../assets/ford.png";
import mazda from "../../assets/mazda.png";
import audi from "../../assets/audi.png";

const carList = [
  {
    name: "BMW F30",
    price: 160,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Mercedes Benz CLA",
    price: 180,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Black Range Rover SUV",
    price: 200,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "Ford Mustang",
    price: 150,
    image: ford,
    aosDelay: "1000",
  },
  {
    name: "Mazda",
    price: 100,
    image: mazda,
    aosDelay: "1000",
  },
  {
    name: "Audi A7",
    price: 120,
    image: audi,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div id="cars" className="pb-24">  
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Car collections
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          This is our cars list. You can choose cars from the list for rent.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  200 miles
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
