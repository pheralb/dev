import { Svg } from "@/interfaces/svg";
import React from "react";

const LeftArrow = ({ width, height }: Svg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 85 29"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        d="M84.143 1.126c-15.685 13.917-35.87 23.722-57.435 21.648-6.315-.608-13.457-3.27-19.198-6.11-1.213-.6-2.312-1.398-3.424-2.167-1.016-.702.868 7.799 1.034 8.799 1.778 10.69.124-.857-1.079-4.83-.933-3.084-2.905-6.175-3.34-9.39-.35-2.59 4.798-2.049 6.565-2.218 1.817-.174 13.555-3.079 11.985.954-2.818 7.234-8.336 12.077-13.239 17.745"
      ></path>
    </svg>
  );
};

export default LeftArrow;
