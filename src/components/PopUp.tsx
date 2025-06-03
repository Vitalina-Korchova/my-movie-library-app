import { useRef } from "react";

export default function PopUp({
  onClose,
  title,
  description,
}: {
  onClose: () => void;
  title: string;
  description: string;
}) {
  const popupRef = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    if (popupRef.current) {
      popupRef.current.classList.add("slide-up");
      popupRef.current.classList.remove("slide-down");
    }
    setTimeout(onClose, 500); // час має відповідати тривалості CSS анімації
  };
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
        <div
          ref={popupRef}
          className="slide-down bg-neutral-950  text-white p-6 rounded-xl 
        shadow-lg w-[90%] max-w-md border-[1px] border-yellow-600"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
          <p className="mb-5 text-center">{description}</p>
          <div className="flex items-center justify-center">
            <button
              onClick={handleClose}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 
          py-2 rounded font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
