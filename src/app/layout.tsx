import type { Metadata } from "next";
import { Montserrat, Source_Code_Pro } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Organisms/Header";
import Footer from "@/components/Organisms/Footer";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const sourcePro = Source_Code_Pro({
  variable: "--font-source",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polis Analytics",
  description: "Polís Analytics ofrece soluciones tecnológicas para la gestión local de la seguridad en América Latina. Datos, mapas y predicción del delito al alcance de todos.",
  openGraph: {
    title: "Polis Analytics",
    description: "Polís Analytics ofrece soluciones tecnológicas para la gestión local de la seguridad en América Latina. Datos, mapas y predicción del delito al alcance de todos.",
    siteName: "Polis Analytics",
    images: [
      {
        url: "/images/metaimage.jpg", // Image from public folder
        width: 1200,
        height: 630,
        alt: "Polis Analytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polis Analytics",
    description: "Polís Analytics ofrece soluciones tecnológicas para la gestión local de la seguridad en América Latina. Datos, mapas y predicción del delito al alcance de todos.",
    images: ["/images/metaimage.jpg"], // Same image for Twitter
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${sourcePro.variable}`}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
