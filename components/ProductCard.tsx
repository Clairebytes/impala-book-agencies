import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card reveal">
      <Link href={product.href} className="product-img-wrap">
        <Image
          src={product.img}
          alt={product.alt}
          fill
          sizes="(max-width: 480px) 90vw, 260px"
          style={{ objectFit: "cover" }}
        />
      </Link>
      <h3>{product.title}</h3>
      <Link href={product.href} className="learn-more-btn">
        Shop Now
      </Link>
    </div>
  );
}
