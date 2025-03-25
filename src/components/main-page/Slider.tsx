import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative w-full h-full py-3 px-7">
      {/* Кнопки для стрілок */}
      <div className="absolute top-0 left-0 flex justify-between w-full px-6">
        <button
          ref={prevRef}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          ref={nextRef}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>

      {/* Слайдер */}
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
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
          console.log(
            "Змінився слайд, зараз активний слайд:",
            swiper.activeIndex
          );
        }}
        modules={[Navigation]}
        className="w-full h-full mt-12"
      >
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item6.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item8.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item10.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-lg bg-white">
          <img
            className="h-44 w-[150px]"
            src="./test-pic-swiper/item11.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
