import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { playfair } from "@/lib/fonts";

type Product = {
  name: string;
  price: number;
  image: string;
  isNew: boolean;
  isSale: boolean;
};

const products: Product[] = [
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/1.webp",
    isNew: true,
    isSale: false,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/2.webp",
    isNew: true,
    isSale: true,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/3.webp",
    isNew: true,
    isSale: false,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/4.webp",
    isNew: false,
    isSale: false,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/5.webp",
    isNew: true,
    isSale: false,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/6.webp",
    isNew: true,
    isSale: false,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/7.webp",
    isNew: true,
    isSale: false,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 280.0,
    image: "/assets/popular/8.webp",
    isNew: true,
    isSale: false,
  },
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="relative bg-white group">
    <div className="relative w-full mb-2 sm:mb-4">
      <Image
        src={product.image}
        alt={product.name}
        layout="responsive"
        width={1}
        height={1}
        objectFit="cover"
        className="rounded-xl sm:rounded-3xl group-hover:shadow-2xl transition-shadow duration-300"
      />
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-11/12 sm:w-4/5 hidden group-hover:flex justify-between items-center text-sm sm:text-base lg:text-lg rounded-xl sm:rounded-2xl bg-white px-2 sm:px-4 py-1 sm:py-2 shadow-lg">
        <p>3 size</p>
        <p className="underline text-lime-400 text-base sm:text-lg lg:text-xl">Quick View</p>
        <div className="flex gap-1 items-center">
          <p>60ml</p>
          <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>
    </div>
    <div className="absolute left-2 sm:left-4 top-2 sm:top-4">
      <div className="flex gap-1 sm:gap-2">
        {product.isNew && (
          <span className="bg-white text-black px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm lg:text-base">
            New
          </span>
        )}
        {product.isSale && (
          <span className="bg-white text-pink-300 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm lg:text-base">
            Sale
          </span>
        )}
      </div>
    </div>

    <h3 className="text-base sm:text-lg lg:text-xl text-center mt-1 sm:mt-2">{product.name}</h3>
    <p className="text-lg sm:text-xl lg:text-2xl font-medium text-center mt-1 sm:mt-2">
      From ${product.price}
    </p>
  </div>
);

export default function PopularProductsGrid() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 lg:mb-12">
        <h2 className={`text-3xl sm:text-4xl ${playfair.className} lg:text-5xl font-bold mb-4 sm:mb-0`}>
          Most Popular
        </h2>
        <Button className="bg-[#B2D925] hover:bg-[#B2D925]/40 text-stone-800 py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-xl">
          View All Items
          <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}