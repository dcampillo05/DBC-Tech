import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DBC Tech",
  description: "Transformando sonhos em realidade virtual",
  icons: {
    icon: [
      "/favicon.ico?v=4",
    ],
    apple: [
      "/apple-touch-icon.png?v=4",
    ],
    shortcut: [
      "apple-touch-icon.png"
    ],
  },
  manifest: 'site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
