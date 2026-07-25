import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A5 Single Lined Books | The Impala Book Agencies",
};

const PAGE_COUNTS = [32, 48, 64, 80, 96, 120, 200];

const items: GalleryItem[] = PAGE_COUNTS.map((pages) => ({
  src: `/images/products/a5-single-${pages}.jpg`,
  alt: `Sapphire Brand A5 Single Ruled exercise book - ${pages} pages`,
  label: `A5 Single Lined - ${pages} pages`,
  pages,
  ruling: "Single Ruled",
  product: `A5 Single Lined - ${pages} pages`,
}));

export default function A5SingleLinedPage() {
  return <ProductGallery title="A5 Single Lined Books" items={items} />;
}
