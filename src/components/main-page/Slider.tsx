import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(5);

  const arr = [
    "./test-pic-swiper/item1.jpg",
    "./test-pic-swiper/item2.jpg",
    "./test-pic-swiper/item3.jpg",
    "./test-pic-swiper/item4.jpg",
    "./test-pic-swiper/item5.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGQzZjY1MGItYmVjZS00ZmFkLWIwYzYtZDg4ODBjYzE5NzU2XkEyXkFqcGc@._V1_SX300.jpg",
    "./test-pic-swiper/item6.jpg",
    "./test-pic-swiper/item7.jpg",
    "./test-pic-swiper/item8.jpg",
    "./test-pic-swiper/item9.jpg",
    "./test-pic-swiper/item10.jpg",
    "./test-pic-swiper/item11.jpg",
    "./test-pic-swiper/item12.jpg",
    "./test-pic-swiper/item13.jpg",
    "./test-pic-swiper/item14.jpg",
    "./test-pic-swiper/item15.jpg",
  ];
  return (
    <div className="relative w-full h-full py-3 px-7 overflow-visible">
      {/* Кнопки для стрілок */}
      <div className="absolute top-0 left-0  ">
        <div className="flex ms-3.5 space-x-4 w-full px-6">
          <button
            ref={prevRef}
            className="bg-black text-white border-[1px] border-gray-500
             px-4 py-2 rounded cursor-pointer transition-all duration-300 ease-in 
             hover:shadow-xs hover:shadow-amber-50"
          >
            <i className="fa fa-chevron-left"></i>
          </button>
          <button
            ref={nextRef}
            className="bg-black text-white border-[1px] border-gray-500 px-4
             py-2 rounded cursor-pointer transition-all duration-300 ease-in 
             hover:shadow-xs hover:shadow-amber-50"
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Слайдер */}
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        onSwiper={(swiper) => {
          if (swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        onSlideChange={(swiper) => {
          setActiveSlideIndex((swiper.realIndex + 5) % arr.length);
        }}
        breakpoints={{
          1536: {
            slidesPerView: 13,
          },
        }}
        modules={[Navigation]}
        className="w-full h-full mt-8 overflow-visible"
      >
        {arr.map((image, index) => (
          <SwiperSlide
            key={index}
            className="group relative overflow-hidden rounded-xl transition-all
             duration-500 ease-in-out"
          >
            <div
              className={`relative overflow-hidden rounded-xl transition-all duration-500 
              ease-in-out transform ${
                index === activeSlideIndex
                  ? "scale-100 opacity-100"
                  : "scale-[85%] opacity-40"
              }`}
            >
              <img
                className="h-48 w-full rounded-xl object-cover transition-all duration-500 
                ease-in-out group-hover:brightness-110"
                src={image}
                alt={`item-${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
