import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import { Modak } from "next/font/google";

const iranSans = localFont({
  src: [
    {
      path: "../font/IRANSansX-Thin.woff2",
      weight: "100",
    },
    {
      path: "../font/IRANSansX-UltraLight.woff2",
      weight: "200",
    },
    {
      path: "../font/IRANSansX-Light.woff2",
      weight: "300",
    },
    {
      path: "../font/IRANSansX-Regular.woff2",
      weight: "400",
    },
    {
      path: "../font/IRANSansX-Medium.woff2",
      weight: "500",
    },
    {
      path: "../font/IRANSansX-DemiBold.woff2",
      weight: "600",
    },
    {
      path: "../font/IRANSansX-Bold.woff2",
      weight: "700",
    },
    {
      path: "../font/IRANSansX-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../font/IRANSansX-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-IranSans",
});

export const modak = Modak({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "نفت",
  description: "هوش مصنوعی در صنعت نفت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSans.variable} ${iranSans.className} antialiased overflow-x-hidden bg-background text-neutral-700`}
      >
        <div className="w-full grid grid-cols-12 px-6 max-md:px-4">
          <div className="col-start-2 col-end-12 max-lg:col-span-full z-10 ">
            <Header />
          </div>
          <div className="col-span-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
