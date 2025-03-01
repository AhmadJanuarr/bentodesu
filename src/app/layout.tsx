import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`antialiased relative`}>
        <Header />
        <main className="dekstop:w-[80%] laptop:w-[90%] w-full mx-auto px-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
