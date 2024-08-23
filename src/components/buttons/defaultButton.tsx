import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

interface DefaultButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const DefaultButton = ({
  className,
  loading,
  disabled,
  type = "button",
  children,
  onClick,
}: DefaultButtonProps) => {
  return (
    <button
      type={type}
      className={" flex justify-center items-center px-3 py-1 " + className}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <LoadingOutlined className="mr-3" /> : ""} {children}
    </button>
  );
};
