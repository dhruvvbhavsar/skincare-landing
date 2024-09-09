import Image from "next/image";
import { Button } from "./ui/button";
import Navbar from "./navbar";
import { playfair } from "@/lib/fonts";

export default function Hero() {
  return (
    <div className="h-screen bg-[#F1F2EB] relative">
      <Image
        className="absolute select-none left-1/2 -translate-x-1/2 grayscale opacity-20"
        src={"/assets/hero/image.png"}
        height={600}
        width={600}
        alt="leaf"
      />

      <Navbar />

      <Image
        className="absolute select-none top-1/3 hidden md:block -translate-y-1/3"
        src={"/assets/hero/z.png"}
        height={350}
        width={350}
        alt="leaf"
      />

      <Image
        className="absolute select-none right-4 top-1/3 hidden md:block -translate-y-1/3"
        src={"/assets/hero/1.png"}
        height={700}
        width={700}
        alt="leaf"
      />

      <Image
        className="absolute select-none left-40  top-2/3 hidden md:block -translate-y-1/3"
        src={"/assets/hero/y.png"}
        height={500}
        width={500}
        alt="leaf"
      />

      <Image
        className="absolute select-none right-1/4 hidden md:block  bottom-10"
        src={"/assets/hero/x.png"}
        height={550}
        width={550}
        alt="leaf"
      />

      <div className="space-y-4 sm:space-y-6 w-full absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/3 px-4 sm:px-6 lg:px-8">
        <div
          className={`leading-tight sm:leading-snug ${playfair.className} font-semibold`}
        >
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center">
            Skincare for
          </p>
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center mb-2 sm:mb-4 md:mb-6">
            everyone
          </p>
        </div>
        <div>
          <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-pretty">
            A mild blend of fresh mint, warming herbs, smooth
          </p>
          <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-pretty">
            honey, and sparkling citrus.
          </p>
        </div>
        <div className="w-full flex justify-center mt-4 sm:mt-6">
          <Button className="bg-[#B2D925] hover:bg-[#B2D925]/40 text-stone-800 py-3 px-6 sm:py-4 sm:px-7 md:py-5 md:px-8 text-lg sm:text-xl md:text-2xl">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}
