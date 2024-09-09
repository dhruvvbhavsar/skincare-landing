import { playfair } from "@/lib/fonts";
import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Sarah Johnson",
    description:
      "I was skeptical at first, but this product exceeded all my expectations. The quality is outstanding, and the customer service team went above and beyond to ensure my satisfaction.",
    rating: 5,
    profilePicture: "/assets/testimonials/1.jpeg",
  },
  {
    name: "Michael Chen",
    description:
      "As a long-time user, I can confidently say that this service has consistently delivered top-notch results. The attention to detail and innovative features have made it an indispensable part!",
    rating: 4,
    profilePicture: "/assets/testimonials/3.jpeg",
  },
  {
    name: "Emily Rodriguez",
    description:
      "I've tried many similar products, but none compare to this one. The ease of use combined with powerful functionality sets it apart from the competition. It's been a game-changer for my business.",
    rating: 5,
    profilePicture: "/assets/testimonials/5.jpeg",
  },
  {
    name: "David Thompson",
    description:
      "While there's room for improvement in some areas, overall, I'm satisfied with my purchase. The product delivers on its core promises and offers good value for money.",
    rating: 4,
    profilePicture: "/assets/testimonials/4.jpeg",
  },
  {
    name: "Jessica Williams",
    description:
      "This product has truly transformed my daily routine. The results are visible, and I feel more confident than ever. Highly recommend to anyone looking for a reliable solution.",
    rating: 5,
    profilePicture: "/assets/testimonials/2.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F1F2EB] py-16 w-full">
      <h1
        className={`text-center text-5xl font-extrabold ${playfair.className}`}
      >
        Shining Testimonials
      </h1>
      <Marquee>
        <div className="flex items-center ml-5 mt-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              description={testimonial.description}
              rating={testimonial.rating}
              profilePicture={testimonial.profilePicture}
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
}

type TestimonialCardProps = {
  name: string;
  description: string;
  rating: number;
  profilePicture: string;
};

function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="max-w-lg mx-auto h-56 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex items-center">
        <div className="flex-1">
          <div className="flex flex-col justify-between items-start mb-2">
            <div className="flex">
              {" "}
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-yellow-400"
                  }`}
                />
              ))}
              <span className="ml-2 font-semibold">({props.rating})</span>
            </div>
            <p className="text-gray-600 mb-2">{props.description}</p>
            <p className="font-semibold">{props.name}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            className="rounded-md h-44 w-32 object-cover"
            src={props.profilePicture}
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  );
}
