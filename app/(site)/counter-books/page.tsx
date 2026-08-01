import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A4 Counter Books | The Impala Book Agencies",
};

const QUIRES = [1, 2, 3, 4, 6];

const items: GalleryItem[] = QUIRES.map((quire) => ({
  src: `/images/products/counter-${quire}quire-${quire * 96}.jpg`,
  alt: `Sapphire Brand A4 Counter Book - ${quire} quire, ${quire * 96} pages`,
  label: `A4 Counter Book - ${quire} Quire`,
  pages: quire * 96,
  ruling: `${quire} Quire`,
  product: `A4 Counter Book - ${quire} Quire (${quire * 96} pages)`,
}));

export default function CounterBooksPage() {
  return <ProductGallery title="A4 Counter Books" items={items} />;
}
