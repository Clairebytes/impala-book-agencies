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
      <body>{children}</body>
    </html>
  );
}
