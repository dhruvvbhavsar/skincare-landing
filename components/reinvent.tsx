import { playfair } from "@/lib/fonts";
import Image from "next/image";

const categories = [
  { name: "Skin Care", image: "/assets/reinvent/1.jpeg" },
  { name: "Body", image: "/assets/reinvent/2.jpeg" },
  { name: "Makeup", image: "/assets/reinvent/3.jpg" },
  { name: "Fragrance", image: "/assets/reinvent/4.webp" },
  { name: "Serum", image: "/assets/reinvent/5.jpeg" },
  { name: "Balms", image: "/assets/reinvent/6.jpeg" },
];

export default function Reinvent() {
  return (
    <div>
      <h1 className={`text-4xl ${playfair.className} md:text-5xl mb-12`}>
        Reinvent your skin today
      </h1>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <span className="text-lg md:text-2xl text-muted-foreground">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
