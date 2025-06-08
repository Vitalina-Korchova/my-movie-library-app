import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { IMovie } from "../../store/movie/movie.type";
import { NavigationOptions } from "swiper/types";

type SliderProps = {
  movies: IMovie[];
  activeSlideIndex: number;
  activeNumber: number;
  onSlideChange: (newIndex: number) => void;
};

export default function Slider({
  movies,
  activeSlideIndex,
  activeNumber,
  onSlideChange,
}: SliderProps) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="absolute top-7/12 left-0 right-0">
      <div className="relative w-full h-full py-3 px-7 overflow-visible">
        {/* Кнопки для стрілок */}
        <div className="absolute top-0 left-0  ">
          <div className="flex ms-3.5 space-x-4 w-full px-6">
            <button
              ref={prevRef}
              className="bg-black text-white border-[1px] border-gray-500
             px-2 py-2 rounded cursor-pointer transition-all duration-300 ease-in 
             hover:shadow-xs hover:shadow-amber-50"
            >
              <IoIosArrowBack className="text-2xl" />
            </button>
            <button
              ref={nextRef}
              className="bg-black text-white border-[1px] border-gray-500 px-2
             py-2 rounded cursor-pointer transition-all duration-300 ease-in 
             hover:shadow-xs hover:shadow-amber-50"
            >
              <IoIosArrowForward className="text-2xl" />
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
            const navigation = swiper.params.navigation as NavigationOptions;
            if (navigation) {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          onSlideChange={(swiper) => {
            const newIndex = (swiper.realIndex + activeNumber) % movies.length;
            onSlideChange(newIndex);
          }}
          breakpoints={{
            //adaptive
            1536: {
              slidesPerView: 13,
            },
            1139: {
              slidesPerView: 8,
            },
            768: {
              slidesPerView: 6,
            },
            609: {
              slidesPerView: 5,
            },
            517: {
              slidesPerView: 4,
            },
            385: {
              slidesPerView: 3,
            },
            319: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
          className="w-full h-full mt-8 overflow-visible"
        >
          {movies.map((movie, index) => (
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
                ease-in-out group-hover:brightness-110 "
                  src={movie.Poster}
                  alt={`item-${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
