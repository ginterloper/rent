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
      <body className={`${inter.className} antialiased`}>
				{children}
				<Navbar
					className="fixed bottom-0 w-full"
				/>
			</body>
    </html>
  );
}
