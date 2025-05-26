import { useParams } from "react-router-dom";
import NavPage from "../components/navigation/NavPage";

export default function DetailedInfoMovie() {
  const { id } = useParams<{ id: string }>(); // витягуємо параметр з URL
  return (
    <>
      <div className=" flex flex-col bg-stone-900 w-full bg-cover min-h-screen">
        <NavPage />
        <h2>kello</h2>
      </div>
    </>
  );
}
