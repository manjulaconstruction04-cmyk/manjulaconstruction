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
  metadataBase: new URL("https://www.manjulaconstruction.com"),
  title: "Manjula Construction | Top Civil Engineers & Luxury House Builders in Coimbatore",
  description: "Manjula Construction is the leading turnkey residential & commercial construction company in Coimbatore, South India. 20+ Years Experience, 50+ Delivered Projects, Vastu Compliant Architectural Planning.",
  keywords: [
    "Manjula Construction",
    "Construction Company in Coimbatore",
    "Best House Builders Coimbatore",
    "Turnkey Civil Engineers Coimbatore",
    "Luxury Villa Builders South India",
    "Residential Construction Coimbatore",
    "Commercial Building Contractors",
    "3D BIM Architectural Planning",
    "Vastu House Plans Coimbatore"
  ],
  authors: [{ name: "Manjula Construction", url: "https://www.manjulaconstruction.com" }],
  creator: "Manjula Construction",
  publisher: "Manjula Construction",
  alternates: {
    canonical: "https://www.manjulaconstruction.com",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" }
    ],
    shortcut: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "Manjula Construction | Turnkey Residential & Commercial Builders",
    description: "20+ Years Experience • 50+ Delivered Projects • 10-Stage Quality Audit • Tata Steel & UltraTech Cement",
    url: "https://www.manjulaconstruction.com",
    siteName: "Manjula Construction",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Manjula Construction Logo" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manjula Construction | Top Civil Engineers in Coimbatore",
    description: "Turnkey Luxury Villa & Commercial Construction with 10-Stage Audit Quality Guarantee.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Manjula Construction",
  "image": "https://www.manjulaconstruction.com/logo.png",
  "@id": "https://www.manjulaconstruction.com",
  "url": "https://www.manjulaconstruction.com",
  "telephone": "+91 95669 93556",
  "priceRange": "₹1650/sq.ft - ₹2450/sq.ft",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Coimbatore HQ, Tamil Nadu",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "641001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0168,
    "longitude": 76.9558
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "124"
  },
  "sameAs": [
    "https://www.manjulaconstruction.com"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-[#D9A441] selection:text-black">
        {children}
      </body>
    </html>
  );
}
