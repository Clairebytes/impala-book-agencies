import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A4 Graph Book | The Impala Book Agencies",
};

const items: GalleryItem[] = [
  {
    src: "/images/products/a4-graph-96.jpg",
    alt: "Sapphire Brand A4 Graph Book - 96 pages",
    label: "A4 Graph Book - 96 pages",
    pages: 96,
    ruling: "Graph Ruled",
    product: "A4 Graph Book - 96 pages",
  },
];

export default function A4GraphBookPage() {
  return <ProductGallery title="A4 Graph Book" items={items} />;
}
