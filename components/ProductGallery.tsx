import Image from "next/image";
import Link from "next/link";

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  /** Shown on the card instead of the full label, since the category is already in the page heading. */
  pages: number | string;
  /** Unit shown after `pages`, e.g. "Pages" or "Sheets". Pass "" to show `pages` alone (e.g. a size code like "A4"). */
  unit?: string;
  /** e.g. "Single Ruled" / "Square Ruled" — shown above the page count. */
  ruling: string;
  /** Query value sent to the order form; omit when the page has no per-item ordering yet. */
  product?: string;
};

export default function ProductGallery({
  title,
  items,
}: {
  title: string;
  items: GalleryItem[];
}) {
  return (
    <div className="gallery-page">
      <div className="gallery-heading reveal">
        <span className="eyebrow">Sapphire Brand Collection</span>
        <h1>{title}</h1>
      </div>

      <div className="gallery-grid">
        {items.map((item) => (
          <div className="gallery-card reveal" key={item.src + item.label}>
            <div className="gallery-card__img-wrap">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 480px) 90vw, 320px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="gallery-card__label">
              <span className="gallery-card__ruling">{item.ruling}</span>
              <span className="gallery-card__pages">
                {item.pages}
                {item.unit === "" ? "" : ` ${item.unit ?? "Pages"}`}
              </span>
            </p>
            <Link
              href={item.product ? { pathname: "/order-form", query: { product: item.product } } : "/order-form"}
              className="gallery-card__order-btn"
            >
              Order Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
