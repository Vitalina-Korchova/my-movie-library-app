import { useParams } from "react-router-dom";
import NavPage from "../components/navigation/NavPage";
import { FaCalendarDay } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { BiBook } from "react-icons/bi";
import Stars from "../components/add-movie/Stars";

export default function DetailedInfoMovie() {
  const { id } = useParams<{ id: string }>(); // витягуємо параметр з URL
  return (
    <>
      <div className="flex flex-col bg-stone-900 w-full min-h-screen bg-cover">
        <NavPage />
        <div className="bg-neutral-800 text-amber-50 m-5 rounded-lg p-5 flex justify-between items-center">
          <div className=" w-2/3 flex justify-center items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDhlMzEyNzItMTA5Mi00YWRhLThlNTktYTQyMTA0MDIyNDEyXkEyXkFqcGc@._V1_SX300.jpg"
              alt=""
            />
          </div>
          <div className="w-full flex self-start flex-col gap-3">
            <span className="font-bold text-3xl">Title random text here</span>
            <span className="text-lg">Adventure, Comedy, Fantasy</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-68">
                <FaCalendarDay className="text-2xl text-yellow-400" />
                <span> 2017 release year</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-88">
                <IoMdPerson className="text-3xl text-yellow-400" />
                <span className="text-sm">
                  Johny Depp, Ann Del Rey, Amanta Sanata, Bill Cordio
                </span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-68">
                <IoIosTimer className="text-2xl text-yellow-400" />
                <span>192 min</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-88">
                <IoLanguage className="text-2xl text-yellow-400" />
                <span>Ukranian</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-68">
                <BiWorld className="text-2xl text-yellow-400" />
                <span>Ukraine</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-88">
                <BiBook className="text-2xl text-yellow-400" />
                <span>movie</span>
              </div>
            </div>
            <span className="font-semibold text-xl mt-4">My rating </span>
            <Stars />
            <span className="font-semibold text-xl mt-4">Plot</span>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              consectetur laudantium voluptatum fugit ratione et nostrum
              delectus odio quae veritatis, culpa reiciendis ut provident dolor
              fugiat nihil non dicta fuga!
            </span>
            <button
              className=" text-black bg-yellow-400 py-2.5 px-3 flex justify-center items-center
            font-semibold rounded-lg text-base cursor-pointer w-48 m-auto mt-8 hover:bg-amber-400"
            >
              Add to my library
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
