import { PhoneCall } from "lucide-react";
import { InstagramLogo, WhatsappLogo, Xlogo } from "./icons"; // Assuming FacebookLogo is present
import { inter } from "@/lib/fonts";

export default function Banner() {
  return (
    <div id="banner" className={`bg-[#E8F2C4] px-40 py-4 ${inter.className} text-gray-800 hidden md:block`}>
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Socials */}
        <div className="flex gap-2 items-center">
          <p className="text-sm sm:text-base lg:text-lg font-medium">
            Follow Us
          </p>
          <div className="flex gap-2">
            <InstagramLogo />
            <Xlogo />
            <WhatsappLogo />
          </div>
        </div>

        {/* Banner Text */}
        <p className="text-center text-sm sm:text-base font-medium">
          Save 15% on orders over $50{" "}
          <span className="text-lg font-semibold">♡</span> Use code 15OFF at
          checkout
        </p>

        {/* Contact Number */}
        <div className="flex gap-2 items-center">
          <PhoneCall size={16} />
          <p className="text-sm sm:text-base">1 (100) 234-5678</p>
        </div>
      </div>
    </div>
  );
}
