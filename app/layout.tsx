import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
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
