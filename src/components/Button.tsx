import React from "react";
import { cn } from "../utility";

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className ? : undefined | string;
  props ?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

const Button = ({ children, className  , ...props }: ButtonProp) => {
  return (
    <button
      className={cn(
        " px-4 py-2 bg-blue-500 text-sm font-semibold text-white rounded-lg hover:bg-blue-600 active:scale-95 transition duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
