import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
