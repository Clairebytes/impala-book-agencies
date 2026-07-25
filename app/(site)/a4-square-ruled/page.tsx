import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A4 Square Ruled Books | The Impala Book Agencies",
};

const PAGE_COUNTS = [48, 64, 80, 96, 120, 200];

const items: GalleryItem[] = PAGE_COUNTS.map((pages) => ({
  src: `/images/products/a4-square-${pages}.jpg`,
  alt: `Sapphire Brand A4 Square Ruled exercise book - ${pages} pages`,
  label: `A4 Square Ruled - ${pages} pages`,
  pages,
  ruling: "Square Ruled",
  product: `A4 Square Ruled - ${pages} pages`,
}));

export default function A4SquareRuledPage() {
  return <ProductGallery title="A4 Square Ruled Books" items={items} />;
}
