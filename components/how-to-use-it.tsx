"use client"
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { playfair } from "@/lib/fonts";

const usageSteps = [
  {
    title: "It's gentle, and eye-safe",
    description:
      "Our product is formulated to be gentle on your skin and safe for use around the eye area. It's perfect for removing makeup and cleansing without causing irritation.",
  },
  {
    title: "Meticulously removes dirt",
    description:
      "The unique formula works to lift and remove dirt, oil, and impurities from your skin, leaving it clean and refreshed.",
  },
  {
    title: "Apply with gentle motions",
    description:
      "Use circular, gentle motions to apply the product to your face. This helps to stimulate circulation and ensures thorough cleansing.",
  },
  {
    title: "Rinse thoroughly",
    description:
      "After application, rinse your face thoroughly with lukewarm water to remove all traces of the product and reveal clean, glowing skin.",
  },
];

export default function HowToUseIt() {
  const [activeItem, setActiveItem] = useState("item-0");

  return (
    <div className="w-full flex flex-col lg:flex-row md:min-h-screen gap-8 p-4 lg:p-8">
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto mb-8 lg:mb-0">
        <Image
          src="/assets/accordion/1.jpg"
          alt="Spa products on a wooden tray"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
        <h2 className={`text-4xl lg:text-6xl font-medium tracking-tighter ${playfair.className}`}>How to use it?</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={activeItem}
          onValueChange={setActiveItem}
        >
          {usageSteps.map((step, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="pb-4">
              <AccordionTrigger className="text-left">
                <div className="flex gap-3 text-2xl lg:text-4xl">
                  <p>{String(index + 1).padStart(2, "0")}.</p>
                  <p>{step.title}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground font-light text-base lg:text-lg">
                  {step.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}