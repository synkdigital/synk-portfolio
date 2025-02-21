import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Synk Digital",
  description: "The service provider for all your online bussiness needs. We cater a wide range of services from web development to AI solutions.",
  openGraph: {
    title: "Synk Digital",
    description: "The service provider for all your online bussiness needs. We cater a wide range of services from web development to AI solutions.",
    type: "website",
    authors: ["Synk Digital"],
    url: "https://synk.digital",
    images: [
      {
        url: "https://synk.digital/synk2.png",
        width:800,
        height:600,
        alt: "Synk Digital",
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ptSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
