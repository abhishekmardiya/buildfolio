import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { siteInfo } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteInfo.name} - ${siteInfo.description}`,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
