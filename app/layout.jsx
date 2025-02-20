import { PT_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["normal", "itlaic"],
  weight: ['400', '700'],
});

export const metadata = {
  title: "synk.digital",
  description: "the service for you online bussiness needs",
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
