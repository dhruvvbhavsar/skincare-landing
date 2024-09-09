import Banner from "@/components/banner";

import Comparision from "@/components/comparision";
import Essentials from "@/components/essentials";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowToUseIt from "@/components/how-to-use-it";
import PopularProductsGrid from "@/components/most-popular";
import Reinvent from "@/components/reinvent";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <div className="p-16 md:p-40 space-y-24">
        <Reinvent />
        <PopularProductsGrid />
        <HowToUseIt />
        <Essentials />
      </div>
      <Comparision />
      <Testimonials />
      <Footer />
    </main>
  );
}
