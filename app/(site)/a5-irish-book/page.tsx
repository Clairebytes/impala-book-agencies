import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A5 Irish Book | The Impala Book Agencies",
};

const items: GalleryItem[] = [
  {
    src: "/images/products/a5-irish-48.jpg",
    alt: "Sapphire Brand A5 Irish Book - 48 pages",
    label: "A5 Irish Book - 48 pages",
    pages: 48,
    ruling: "Irish Ruled",
    product: "A5 Irish Book - 48 pages",
  },
];

export default function A5IrishBookPage() {
  return <ProductGallery title="A5 Irish Book" items={items} />;
}
