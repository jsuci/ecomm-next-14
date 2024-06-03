import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Container, SSRProvider } from "@/components/bootstrap";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "700"] });

export const metadata: Metadata = {
  title: "eCommerce in NextJS 14",
  description: "Build eCommerce website using NextJS 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SSRProvider>
          <main><Container>{children}</Container></main>
        </SSRProvider>
      </body>
    </html>
  );
}
