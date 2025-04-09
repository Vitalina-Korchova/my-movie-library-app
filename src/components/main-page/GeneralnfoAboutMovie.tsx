export default function GeneralInfoMovie() {
  return (
    <>
      <div className="z-10 flex flex-col gap-3.5 max-w-[533px] m-10">
        <span className="text-white font-semibold text-5xl max-w-[530px]">
          Spider man No Way Home
        </span>
        <div className="flex flex-row gap-1 text-white text-sm">
          <span>Fantasy | </span>
          <span>Drama | </span>
          <span>2021 | </span>
          <span className="font-bold">Your rating: 8 </span>
          <span>| General rating: 7 | </span>
          <span>1hour 20min </span>
        </div>
        <span className="text-sm text-white max-w-[450px]">
          Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu
          felis. HJfidhfoergjre riojr rrjirejgojer rjerjof irjforejgoerj rejrj
          jrofjref fjsfjerof r dsof fj sf/
        </span>
        <button
          className="text-black bg-yellow-400 py-2.5 px-3 flex justify-start self-start
          font-medium rounded-lg text-sm items-center cursor-pointer  hover:bg-amber-400"
        >
          <i className="fa fa-play  pe-2"></i>
          Watch now
        </button>
      </div>
    </>
  );
}
