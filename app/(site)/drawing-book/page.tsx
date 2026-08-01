import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "Drawing Book | The Impala Book Agencies",
};

const items: GalleryItem[] = [
  {
    src: "/images/products/drawing-book-a4a3.jpg",
    alt: "Sapphire Elit Brand Drawing Book - A4",
    label: "Drawing Book - A4",
    pages: "A4",
    unit: "",
    ruling: "Chipboard Cover · Bank White Paper",
    product: "Drawing Book - A4",
  },
  {
    src: "/images/products/drawing-book-a3.jpg",
    alt: "Sapphire Elit Brand Drawing Book - A3",
    label: "Drawing Book - A3",
    pages: "A3",
    unit: "",
    ruling: "Chipboard Cover · Bank White Paper",
    product: "Drawing Book - A3",
  },
];

export default function DrawingBookPage() {
  return <ProductGallery title="Drawing Book" items={items} />;
}
