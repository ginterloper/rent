import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Авито Аренда',
    default: 'Авито Аренда',
  },
  description: 'Авито Аренда - удобное веб-приложение, которое позволяет пользователям легко находить и размещать объявления о аренде недвижимости и транспорта. С помощью этой платформы пользователи могут быстро найти идеальное жилье или автотранспорт для аренды, а также разместить свои собственные объявления для сдачи.',
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
