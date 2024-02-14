import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Авито Аренда",
  description: "Сайт для аренды недвижимости и транспорта",
};

export default function RootLayout({
  children,
	}: Readonly<{
		children: React.ReactNode;
	}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased md:flex md:flex-col`}>
				<Navbar
					className="fixed rounded-t-xl md:rounded-b-xl z-10 bottom-0 p-3 w-full h-20 bg-gray-100 flex justify-around items-center md:relative md:gap-4 md:h-35 md:w-full"
				/>
				<div className="md:w-full z-0">{children}</div>
			</body>
    </html>
  );
}
