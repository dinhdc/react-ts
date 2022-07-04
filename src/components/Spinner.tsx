import React from "react";

interface Props {
  color?: string;
  height?: number;
  width?: number;
  Loader: JSX.Element;
}

const Spinner: React.FC<Props> = ({
  color = "white",
  height = 20,
  width = 20,
}) => {
  return (
    <>
      
    </>
  );
};

export default Spinner;
