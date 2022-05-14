import { Svg } from "interfaces/svg";
import React from "react";

const Heart = ({ width, height }: Svg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 99 91"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1.836"
        d="M46.59 90C32.262 82.58 21.668 75.822 13.41 62.02c-4.41-7.37-8.494-15.007-10.72-23.36C-.54 26.53.795 10.386 12.99 3.53 28.14-4.986 49.2 9.316 45.285 26.77c-.121.542-1.643 3.86-.855 2.02 4.242-9.907 16.833-19.04 26.718-22.303 15.64-5.163 26.637 3.146 26.043 19.577-.429 11.873-8.72 25.831-16.996 33.973-9.76 9.603-22.88 15.366-29.766 27.536"
      ></path>
    </svg>
  );
};

export default Heart;
