import { Inter, Playfair, PT_Sans } from "next/font/google";

export const playfair = Playfair({
  weight: ["300","400","500","600","800","900", "700"],
  subsets: ["latin"],
});

export const pt_sans = PT_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const inter = Inter({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});
