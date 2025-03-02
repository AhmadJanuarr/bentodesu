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
      <body className={`antialiased`}>
        <Header />
        <main className="w-full mx-auto laptop:px-20 desktop:px-32 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
