import React, { ButtonHTMLAttributes, forwardRef, Ref } from "react";
import Spinner from "./Spinner"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | string;
  height?: string;
  width?: string;
  loading?: boolean;
  spinnerColor?: string;
  spinnerHeight?: number;
  spinnerWidth?: number;
}

const Button: React.FC<Props> = forwardRef(
  (
    {
      children,
      disabled,
      style,
      className,
      height = "2.7rem",
      width = "9rem",
      loading,
    }: Props,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={`btn ${className}`}
        disabled={disabled}
        style={{ cursor: loading ? "not-allowed" : undefined, height, width, ...style }}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  }
);

export default Button;
