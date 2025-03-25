import NavPage from "../components/navigation/NavPage";
import GeneralInfoMovie from "../components/main-page/GeneralnfoAboutMovie";
import Slider from "../components/main-page/Slider";
export default function MainPage() {
  return (
    <>
      <div className="relative w-full flex flex-col min-h-screen z-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('/kaiser.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[url('/kaiser.jpg')] bg-cover bg-center scale-x-[-1]"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/50"></div>

        <NavPage />

        <GeneralInfoMovie />
        <Slider />
      </div>
    </>
  );
}
