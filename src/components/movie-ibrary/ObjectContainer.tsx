import MovieObjectFilter from "./components/MovieObjectFilter";
const arrPhotoTitle = [
  {
    "The name title1": "./test-pic-swiper/item1.jpg",
  },
  {
    "The name title2": "./test-pic-swiper/item2.jpg",
  },
  {
    "The name title3": "./test-pic-swiper/item3.jpg",
  },
  {
    "The name title4": "./test-pic-swiper/item4.jpg",
  },
  {
    "The name title5": "./test-pic-swiper/item5.jpg",
  },
  {
    "The name title6": "./test-pic-swiper/item6.jpg",
  },
  {
    "The name title7": "./test-pic-swiper/item7.jpg",
  },
];

export default function ObjectContainer() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 m-7">
        {arrPhotoTitle.map((item, index) => {
          const [title, pathImg] = Object.entries(item)[0];
          return (
            <MovieObjectFilter key={index} pathImg={pathImg} title={title} />
          );
        })}
      </div>
    </>
  );
}
