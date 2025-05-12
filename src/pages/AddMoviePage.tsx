import NavPage from "../components/navigation/NavPage";
import FoundMovieObject from "../components/add-movie/FoundMovieObject";
import DetailsMovieObject from "../components/add-movie/DetailsMovieObject";

const arrFoundData = [
  {
    imgUrl: "./test-pic-swiper/item7.jpg",
    title: "Title1",
    year: "2019",
    rating: "8",
  },
  {
    imgUrl: "./test-pic-swiper/item4.jpg",
    title: "Title2",
    year: "2010",
    rating: "2",
  },
  {
    imgUrl: "./test-pic-swiper/item1.jpg",
    title: "Title3",
    year: "2020",
    rating: "8",
  },
  {
    imgUrl: "./test-pic-swiper/item8.jpg",
    title: "Title4",
    year: "2019",
    rating: "8",
  },

  {
    imgUrl: "./test-pic-swiper/item2.jpg",
    title: "Title5",
    year: "2012",
    rating: "5",
  },
  {
    imgUrl: "./test-pic-swiper/item3.jpg",
    title: "Title1",
    year: "2022",
    rating: "8",
  },
];

export default function AddMoviePage() {
  return (
    <>
      <div className="flex flex-col bg-stone-900 w-full bg-cover min-h-screen">
        <NavPage />
        <input
          className="min-w-72 border-[1px] border-gray-400 text-white rounded-xl 
          p-1.5 mx-10 my-3 h-12 outline-none focus:border-yellow-400
             hover:border-yellow-400 "
          type="text"
          id="searchMovieAdd"
          placeholder="Add movie by title..."
          autoComplete="off"
        />
        <div
          className="flex flex-row gap-5 text-white mx-10 my-5 items-start justify-center 
        "
        >
          <div className="bg-neutral-800 p-5  w-2/3 rounded-lg relative">
            <button
              className="bg-white px-2 py-1 rounded-full flex items-center justify-center 
            absolute top-4 right-4 cursor-pointer  transition-all duration-200 ease-in hover:scale-110"
            >
              <i className="fa-solid fa-xmark text-lg text-black "></i>
            </button>

            <div className="h-[610px] overflow-y-auto mt-8 custom-scrollbar-add-movie">
              {arrFoundData.map((item, index) => {
                const { imgUrl, title, year, rating } = item;
                return (
                  <FoundMovieObject
                    key={index}
                    imgUrl={imgUrl}
                    title={title}
                    year={year}
                    rating={rating}
                  />
                );
              })}
            </div>

            {/* <h1>No result</h1> */}
          </div>
          <div className="bg-neutral-800 p-5 w-full rounded-lg relative h-[680px]">
            <button
              className="bg-white px-2 py-1 rounded-full flex items-center justify-center 
            absolute top-4 right-4 cursor-pointer  transition-all duration-200 ease-in hover:scale-110"
            >
              <i className="fa-solid fa-xmark text-lg text-black "></i>
            </button>
            <DetailsMovieObject />
            {/* <h1>No result</h1> */}
          </div>
        </div>
      </div>
    </>
  );
}
