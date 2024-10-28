import React from "react";
import Slider from "react-slick";
import { MdArrowForward, MdArrowBack } from "react-icons/md"; // Importing arrow icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Siaga = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ position: "relative" }}>
        <ul className="slick-dots flex justify-center items-center mt-4">
          {dots}
        </ul>
      </div>
    ),
  };

  const data = [
    {
      img: "/siaga/gempa.png",
      title: "Gempa Bumi Berkekuatan 6,5 SR di Bengkulu",
    },
    {
      img: "/siaga/banjir.png",
      title:
        "Banjir Bandang Terjang Kabupaten Luwu, Sulawesi Selatan, Puluhan Rumah Terendam",
    },
    {
      img: "/siaga/merapi.png",
      title: "Letusan Gunung Merapi Tingkatkan Status",
    },
  ];

  // Custom Next Button with Arrow Icon
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition z-10"
    >
      <MdArrowForward size={24} /> {/* Use MdArrowForward icon */}
    </button>
  );

  // Custom Prev Button with Arrow Icon
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition z-10"
    >
      <MdArrowBack size={24} /> {/* Use MdArrowBack icon */}
    </button>
  );

  return (
    <div className="mx-auto py-10 px-4 bg-blue-50 rounded-lg pt-24">
      <h2 className="text-center text-3xl font-semibold text-orange-600 mb-2">
        Informasi Siaga Bencana
      </h2>
      <p className="text-center text-gray-700 mb-6">
        Tetap Waspada, Selalu Terkini
      </p>
      <p className="text-center text-gray-600 mb-10">
        Dapatkan berita terbaru mengenai bencana, peringatan dini, dan informasi
        pra dan pasca-bencana dari sumber terpercaya, langsung dari lokasi Anda.
      </p>

      <div className="container relative">
        <Slider
          {...sliderSettings}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          className="flex items-center px-5 md:px-12 justify-center"
        >
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <p className="p-4 text-gray-700 font-semibold text-center">
                  "{item.title}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Siaga;
