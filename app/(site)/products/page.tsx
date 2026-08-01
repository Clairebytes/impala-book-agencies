import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, type Product } from "@/lib/products";

export const metadata: Metadata = {
  title: "Full Collection | The Impala Book Agencies",
};

const CATEGORIES: Product["category"][] = [
  "Exercise Books",
  "Specialty Books",
  "Counter Books",
  "Stationery",
  "Custom Printed Books",
];

export default function ProductsPage() {
  return (
    <div className="collection-page">
      <div className="gallery-heading reveal">
        <span className="eyebrow">Sapphire Brand Collection</span>
        <h1>Full Collection</h1>
      </div>

      {CATEGORIES.map((category) => (
        <section className="products-section products-section--sub" key={category}>
          <div className="products-heading reveal">
            <h2>{category}</h2>
          </div>
          <div className="product-grid">
            {PRODUCTS.filter((product) => product.category === category).map((product) => (
              <ProductCard product={product} key={product.href} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
