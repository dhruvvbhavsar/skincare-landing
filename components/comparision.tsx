"use client";
import { ImgComparisonSlider } from "@img-comparison-slider/react";

export default function Comparison() {
  return (
    <ImgComparisonSlider hover className="md:h-screen w-full">
      <img slot="first" src="/assets/compare/1.jpg" className="object-cover" />
      <img slot="second" src="/assets/compare/2.jpg" className="object-cover" />

      <svg
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        slot="handle"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        viewBox="-8 -3 16 6"
      >
        <path
          stroke="#fff"
          d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
          stroke-width="1"
          fill="#fff"
          vector-effect="non-scaling-stroke"
        ></path>
      </svg>
    </ImgComparisonSlider>
  );
}
