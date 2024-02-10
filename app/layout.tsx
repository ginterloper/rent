import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Website for rent",
};

export default function RootLayout({
  children,
	}: Readonly<{
		children: React.ReactNode;
	}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased md:flex`}>
				<Navbar
					className="fixed bottom-0 p-3 w-full h-20 bg-gray-100 flex justify-around align-middle md:relative md:flex-col md:justify-start md:h-screen md:w-3/12"
				/>
				<div className="md:w-9/12">{children}</div>
			</body>
    </html>
  );
}
