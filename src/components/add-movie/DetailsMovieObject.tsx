import Stars from "./Stars";

export default function DetailsMovieObject() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row rounded-lg ">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZGQzZjY1MGItYmVjZS00ZmFkLWIwYzYtZDg4ODBjYzE5NzU2XkEyXkFqcGc@._V1_SX300.jpg"
            alt=""
            className="rounded-lg w-48 "
          />
          <div className="px-5 flex flex-col gap-5">
            <span className="font-bold text-wrap text-2xl">
              Title for example here long very title
            </span>
            <div>
              <span>2010 year </span>
              <span>• 120 min</span>
            </div>
            <span>Adventure, Historical</span>
            <span>United Kingdom</span>
            <span>Rating: 7 / 10</span>
          </div>
        </div>
        <Stars />
        <div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            cumque, accusantium dicta obcaecati totam reiciendis eaque sed illum
            excepturi possimus, animi at iure similique alias placeat, unde
            repellendus voluptates doloremque. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptate cumque, accusantium dicta
            obcaecati totam reiciendis eaque sed illum excepturi possimus, animi
            at iure similique alias placeat, unde repellendus voluptates
            doloremque.tetur adipisicing elit. Voluptate cumque, ac
          </span>
        </div>
        <button
          className="text-black bg-yellow-400 py-2.5 px-3 flex justify-center items-center
          font-semibold rounded-lg text-base cursor-pointer w-48 m-auto mt-8 hover:bg-amber-400"
        >
          Add to my library
        </button>
      </div>
    </>
  );
}
