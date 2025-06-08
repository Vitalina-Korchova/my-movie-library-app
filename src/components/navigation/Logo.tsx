export default function Logo() {
  return (
    <>
      <div className="flex flex-row gap-2 font-bold justify-center items-center  ">
        <div className="bg bg-yellow-400 py-1 px-2 rounded-md max-[465px]:text-sm">
          MY MOVIE
        </div>
        <span className="text-yellow-400 max-[465px]:text-sm">LIBRARY</span>
      </div>
    </>
  );
}
