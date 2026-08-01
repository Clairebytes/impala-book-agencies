import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A4 Ruled Paper | The Impala Book Agencies",
};

const items: GalleryItem[] = [
  {
    src: "/images/products/a4-ruled-paper.jpg",
    alt: "Sapphire Elit Brand A4 Ruled Paper - 500 sheets",
    label: "A4 Ruled Paper - 500 sheets",
    pages: 500,
    unit: "Sheets",
    ruling: "Bank & Newsprint",
    product: "A4 Ruled Paper - 500 sheets",
  },
];

export default function A4RuledPaperPage() {
  return <ProductGallery title="A4 Ruled Paper" items={items} />;
}
