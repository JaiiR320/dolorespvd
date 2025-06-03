import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dolores PVD",
  description: "Dolores PVD restaurant, 100 Hope St, Providence, RI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        style={{ fontFamily: "Quiche", margin: 0 }}
        className="flex min-h-screen w-full flex-col"
      >
        <Navbar />
        <main className="flex-1 overflow-y-auto pt-20">
          <div className="flex min-h-screen flex-col">
            {children}
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
