/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card reveal">
      <Link href={product.href} className="product-img-wrap">
        <img src={product.img} alt={product.alt} />
      </Link>
      <h3>{product.title}</h3>
      <Link href={product.href} className="learn-more-btn">
        Shop Now
      </Link>
    </div>
  );
}
