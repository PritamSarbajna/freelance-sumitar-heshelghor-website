import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Ankana Mondal",
    text: "The food from this kitchen is always fresh and delicious. Highly recommend!",
    img: "https://ui-avatars.com/api/?name=Ankana+Mondal&background=ddd&color=333&rounded=true",
  },
  {
    id: 2,
    name: "Ina Misra",
    text: "The food is tasty and the packaging was good.",
    img: "https://ui-avatars.com/api/?name=Ina+Misra&background=ddd&color=333&rounded=true",
  },
  {
    id: 3,
    name: "Anish Golder",
    text: "Always a pleasure to order from here. The food never disappoints. I have ordered for 40+ people from here.",
    img: "https://ui-avatars.com/api/?name=Mounak+Sen&background=ddd&color=333&rounded=true",
  },
];





const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customers say
          </p>
          <h1 className="text-5xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            Hear from our satisfied customers who have experienced the best of our culinary creations. Their feedback highlights the quality and taste that define us.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
        >
          <Slider {...settings}>
            {testimonialData.map((data) => {
              return (
                <div key={data.id} className="my-6">
                  <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <img
                      className="rounded-full block mx-auto h-24 w-24 object-cover"
                      src={data.img}
                      alt={data.name}
                    />
                    <p className="text-gray-500 text-sm">{data.text}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
