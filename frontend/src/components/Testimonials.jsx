import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { div } from "framer-motion/client";

const TestimonialsData = [
  {
    id: 1,
    name: "Tea Set",
    text: "Best quality",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0g37z_2rCGyqsssMU1wedBkWmVs9nYwLRhA&s",
  },
  {
    id: 2,
    name: "Tea potcup",
    text: "Best quality",
    img: "https://images.pexels.com/photos/5975/food-fashion-meal-white.jpg?cs=srgb&dl=pexels-kaboompics-5975.jpg&fm=jpg",
  },
  {
    id: 3,
    name: "plates",
    text: "Best quality",
    img: "https://www.shutterstock.com/image-photo/blue-white-porcelain-tableware-600nw-1946324614.jpg",
  },
  {
    id: 4,
    name: "Dishes equipment",
    text: "Best quality",
    img: "https://img.freepik.com/free-vector/realistic-dishes-cutlery-round-concept-with-teapot-different-spoons-forks-cups-pan-napkin-holder-plates-salt-pepper-shakers-isolated_1284-50878.jpg?uid=R176131379&ga=GA1.1.1249102873.1732605569&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Cup",
    text: "Best quality",
    img: "https://images.unsplash.com/photo-1509099260230-b032e6e135b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JvY2tlcnl8ZW58MHx8MHx8fDA%3D",
  },

  {
    id: 6,
    name: "Tea Set",
    text: "Best quality",
    img: "https://img.freepik.com/free-photo/top-view-table-arrangement-with-empty-dishes-tableware_23-2150310712.jpg?t=st=1733928791~exp=1733932391~hmac=9c6a3414e58dda7562a0c98bd6364be184c791b91367e9238eef19ff1248751d&w=1800",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinte: true,
    speed: 500,
    slideToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToshow: 3,
          slideToScroll: 1,
          infinte: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-serif text-gray-800 underline">
            Crockery Products
          </h1>
        </div>

        {/* cards section */}

        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data, index) => {
              return (
                <div className="my-6 " key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                    {/* image section */}
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-44 h-44"
                    />
                  </div>
                  {/* content section */}
                  <div>
                    <div>
                      <p className="text-sm font-sans underline">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 ">
                        {data.name}
                      </h1>
                    </div>
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

export default Testimonials;
