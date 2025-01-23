import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokemon Display",
  description: "Simple website to display Pokemon lists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="max-w-5xl mx-auto px-8 mb-16">{children}</main>
      </body>
    </html>
  );
}
