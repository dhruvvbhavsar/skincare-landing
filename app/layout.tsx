import type { Metadata } from "next";
import "./globals.css";
import { pt_sans } from "@/lib/fonts";





export const metadata: Metadata = {
  title: "MavonCare",
  description: "Skincare for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pt_sans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
