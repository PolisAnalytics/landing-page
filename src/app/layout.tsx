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
  description: "Gestion y monitoreo de datos",
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
