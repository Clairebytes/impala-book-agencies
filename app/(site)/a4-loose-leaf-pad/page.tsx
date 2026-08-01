import type { Metadata } from "next";
import ProductGallery, { type GalleryItem } from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "A4 Loose Leaf Pad | The Impala Book Agencies",
};

const items: GalleryItem[] = [
  {
    src: "/images/products/a4-loose-leaf-pad.jpg",
    alt: "Sapphire Elit Brand A4 Loose Leaf Pad - 50 sheets",
    label: "A4 Loose Leaf Pad - 50 sheets",
    pages: 50,
    unit: "Sheets",
    ruling: "Bank Paper",
    product: "A4 Loose Leaf Pad - 50 sheets",
  },
];

export default function A4LooseLeafPadPage() {
  return <ProductGallery title="A4 Loose Leaf Pad" items={items} />;
}
