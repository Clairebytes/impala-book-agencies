import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A4 Plain Exercise Book | The Impala Book Agencies",
};

const items: GalleryItem[] = [
  {
    src: "/images/products/a4-plain-96.jpg",
    alt: "Sapphire Brand A4 Plain Exercise Book - 96 pages",
    label: "A4 Plain Exercise Book - 96 pages",
    pages: 96,
    ruling: "Plain",
    product: "A4 Plain Exercise Book - 96 pages",
  },
];

export default function A4PlainPage() {
  return <ProductGallery title="A4 Plain Exercise Book" items={items} />;
}
