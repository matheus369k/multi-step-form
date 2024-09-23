import type { Metadata } from "next";
import localFont from "next/font/local";
import { RootProvider } from "@/layout";
import "./globals.css";

const ubuntuRegular = localFont({
  src: "../assets/fonts/Ubuntu-Regular.ttf",
  variable: "--font-Ubuntu-Regular",
  weight: "400",
});
const ubuntuMedium = localFont({
  src: "../assets/fonts/Ubuntu-Medium.ttf",
  variable: "--font-Ubuntu-Medium",
  weight: "500",
});
const ubuntuBold = localFont({
  src: "../assets/fonts/Ubuntu-Bold.ttf",
  variable: "--font-Ubuntu-Bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Multi-step form",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuRegular.variable} ${ubuntuMedium.variable} ${ubuntuBold.variable} antialiased bg-slate-200 flex justify-center items-center h-screen`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
