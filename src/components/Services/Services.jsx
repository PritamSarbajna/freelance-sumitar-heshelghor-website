import React from "react";
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
// import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Thali",
    description:
      "Try delicious thalis - choose from Veg, Chicken or Mutton for a satisfying meal!",
  },
  {
    id: 2,
    img: Img3,
    name: "Mutton Kosha",
    description:
      "Don't miss our Mutton Kosha - rich, flavorful and slow-cooked to perfection!",
  },
  {
    id: 3,
    img: Img2,
    name: "Fried rice & Chilli chicken",
    description:
      "Try our delicious Fried Rice and Chilli Chicken combo - bold flavors you’ll love!",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our star dishes
            </p>
            <h1 className="text-5xl font-bold">Star Dishes</h1>
            <p className="text-xs text-gray-400">
              Explore our star dishes, each offering a unique blend of flavors and ingredients. Enjoy a taste sensation with every bite!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
              key={service.id} // Added key prop here
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
