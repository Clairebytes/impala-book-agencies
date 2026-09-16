import type { Metadata } from "next";
import { IBM_Plex_Serif, Cormorant_Garamond, Tangerine, Yeseva_One } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font so the fonts ship with the initial HTML instead
// of blocking on a render-blocking @import to Google's CSS + font servers.
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-tangerine",
  display: "swap",
});

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-yeseva-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Impala Book Agencies",
  description:
    "Premium exercise books, crafted for schools and businesses across Kenya. Manufactured in-house in Nairobi with countrywide delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${cormorantGaramond.variable} ${tangerine.variable} ${yesevaOne.variable}`}
    >
      <head>
        {/* Runs before paint so a stored light-mode preference doesn't
            flash the default dark theme first. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
