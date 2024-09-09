import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

export default function Essentials() {
  return (
    <div className="flex flex-col justify-center  w-full md:flex-row gap-12 bg-gr items-center">
      <div>
        <h1 className={`${playfair.className}  text-4xl font-bold mb-8 text-center`}>ESSENTIALS</h1>
        <div className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/essential/1.webp"
            alt="BLOOM Bleeding Heart Eau de Parfum"
            width={600}
            height={700}
          />
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="space-y-3">
              <p className="text-gray-600 text-2xl">07 - Facial Cleanser</p>
              <p className="text-3xl font-bold">139.00$</p>
            </div>
            <button className="bg-[#BFFA00]/80 p-3 rounded-2xl">
              <ArrowUpRight className="size-8 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#E8D0B3] rounded-3xl overflow-hidden">
        <Image
          src="/assets/essential/2.jpeg"
          alt="Woman applying skincare product"
          width={800}
          height={700}
        />
      </div>
    </div>
  );
}
