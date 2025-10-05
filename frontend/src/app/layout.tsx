import type { Metadata } from "next";
import { Archivo } from "next/font/google"
import "./globals.css";
import { AlertProvider } from "@/context/AlertContext";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Hien Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-neutral-light text-primary ${archivo.variable} font-sans`}>
        <AlertProvider>
          {children}
        </AlertProvider>
      </body>
    </html>
  );
}
