import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A5 Graph Book | The Impala Book Agencies",
};

const items: GalleryItem[] = [
  {
    src: "/images/products/a5-graph-48.jpg",
    alt: "Sapphire Brand A5 Graph Book - 48 pages, 2mm grid",
    label: "A5 Graph Book - 48 pages",
    pages: 48,
    ruling: "Graph Ruled (2mm)",
    product: "A5 Graph Book - 48 pages",
  },
];

export default function A5GraphBookPage() {
  return <ProductGallery title="A5 Graph Book" items={items} />;
}
