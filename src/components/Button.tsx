import { cn } from "../utility";

interface ButtonProp {
  children: React.ReactNode;
  className ? : undefined | string;
}

const Button = ({ children, className }: ButtonProp) => {
  return (
    <button
      className={cn(
        " px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:scale-95 transition duration-300",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
