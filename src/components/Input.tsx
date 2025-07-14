type InputProps = {
  value: string | undefined;
  setValue: (val: string) => void;
  id: string | undefined;
  placeholder: string | undefined;
  className?: string | undefined;
};

export default function Input({
  value,
  setValue,
  id,
  placeholder,
  className,
}: InputProps) {
  const baseClasses =
    "flex-1 border-[1px] border-gray-400 text-white rounded-lg p-1.5 h-10 outline-none focus:border-yellow-400 text-sm hover:border-yellow-400";

  // Об'єднуємо базові стилі з додатковими
  const combinedClasses = `${baseClasses} ${className}`;
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={combinedClasses.trim()}
      type="text"
      id={id}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}
