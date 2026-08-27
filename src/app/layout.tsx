import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manjula Construction | Building Dreams • Creating Futures",
  description: "Premier multi-page luxury construction company with cinematic 3D visual experiences. 20+ Years of structural excellence, 50+ completed residential & commercial projects in Coimbatore.",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "Manjula Construction | Building Dreams • Creating Futures",
    description: "20+ Years Experience • 500+ Completed Projects • Turnkey Residential & Commercial Engineering",
    url: "https://manjulaconstruction.com",
    siteName: "Manjula Construction",
    images: [{ url: "/logo.png" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-[#D9A441] selection:text-black">
        {children}
      </body>
    </html>
  );
}
