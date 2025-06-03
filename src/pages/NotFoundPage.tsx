import { FaQuestionCircle } from "react-icons/fa";
export default function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col bg-stone-900 w-full min-h-screen bg-cover">
        <div className="flex flex-col gap-5 items-center justify-center mt-28">
          <FaQuestionCircle className="text-yellow-400 size-44" />
          <h1 className="text-yellow-400 text-6xl font-semibold">404</h1>
          <h1 className="text-yellow-400 text-5xl font-semibold">
            Page not found!
          </h1>
        </div>
      </div>
    </>
  );
}
