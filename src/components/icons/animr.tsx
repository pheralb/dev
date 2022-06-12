import React from "react";
import { Svg } from "@/interfaces/svg";

const AnimrIcon = ({ width, height }: Svg) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26">
      <defs>
        <linearGradient
          id="a"
          x1="12"
          x2="12"
          y1="1.213"
          y2="22.796"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="stop-color-a6f9ff stop-color-401b34"
            offset="0"
            stopColor="#00a2ff"
          ></stop>
          <stop
            className="stop-color-3ed0f7 stop-color-401b34"
            offset="1"
            stopColor="#00a2ff"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M22.2 9.839l-1.552-.309a8.9 8.9 0 00-.784-1.9l.874-1.31a1 1 0 00-.125-1.262l-1.669-1.671a1 1 0 00-1.262-.125l-1.31.874a8.9 8.9 0 00-1.9-.784L14.161 1.8a1 1 0 00-.981-.8h-2.36a1 1 0 00-.981.8L9.53 3.352a8.9 8.9 0 00-1.9.784l-1.31-.874a1 1 0 00-1.262.125L3.387 5.056a1 1 0 00-.125 1.262l.874 1.31a8.9 8.9 0 00-.784 1.9L1.8 9.839a1 1 0 00-.8.981v2.36a1 1 0 00.8.981l1.548.309a8.9 8.9 0 00.784 1.9l-.874 1.31a1 1 0 00.125 1.262l1.669 1.669a1 1 0 001.262.125l1.31-.874a8.9 8.9 0 001.9.784l.315 1.554a1 1 0 00.981.8h2.36a1 1 0 00.981-.8l.309-1.548a8.9 8.9 0 001.9-.784l1.31.874a1 1 0 001.262-.125l1.669-1.669a1 1 0 00.125-1.262l-.874-1.31a8.9 8.9 0 00.784-1.9l1.548-.309a1 1 0 00.8-.981V10.82a1 1 0 00-.794-.981z"
        className="fillurl(-a)"
      ></path>
      <path
        fill="#fff"
        d="M7 13a1 1 0 01-1-1 6.006 6.006 0 016-6 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zm5 5a1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 6.006 6.006 0 01-6 6z"
        className="fill-2ac6ea fill-ffffff"
      ></path>
    </svg>
  );
};

export default AnimrIcon;
