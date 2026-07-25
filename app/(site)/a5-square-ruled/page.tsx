import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A5 Square Ruled Books | The Impala Book Agencies",
};

const PAGE_COUNTS = [32, 48, 64, 80, 96, 120, 200];

const items: GalleryItem[] = PAGE_COUNTS.map((pages) => ({
  src: `/images/products/a5-square-${pages}.jpg`,
  alt: `Sapphire Brand A5 Square Ruled exercise book - ${pages} pages`,
  label: `A5 Square Ruled - ${pages} pages`,
  pages,
  ruling: "Square Ruled",
  product: `A5 Square Ruled - ${pages} pages`,
}));

export default function A5SquareRuledPage() {
  return <ProductGallery title="A5 Square Ruled Books" items={items} />;
}
