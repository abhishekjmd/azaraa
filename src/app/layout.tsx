import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AZARAA | Luxury Indian Ethnic Jewellery",
  description: "Discover the timeless elegance of hand-crafted Indian jewellery, designed for the modern bride.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Noto+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" defer />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-[#1b160d] dark:text-[#f8f7f6] font-sans">
        {children}
      </body>
    </html>
  );
}
