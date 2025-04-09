type MovieObjectFilterProps = {
  pathImg: string;
  title: string;
};

export default function MovieObjectFilter({
  pathImg,
  title,
}: MovieObjectFilterProps) {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="cursor-pointer pb-3">
          <img
            src={pathImg}
            alt=""
            className="w-36 h-48 rounded-lg mb-3 transition-all duration-300 hover:scale-110"
          />
          <span className="text-white font-bold ">{title}</span>
        </div>
      </div>
    </>
  );
}
