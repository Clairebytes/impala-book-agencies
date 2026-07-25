/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Slideshow from "@/components/Slideshow";

const PRODUCTS = [
  {
    href: "/a4-single-lined",
    img: "/images/products/a4-single-120.jpg",
    alt: "Sapphire Brand A4 Single Ruled exercise book",
    title: "A4 Single Lined",
  },
  {
    href: "/a4-square-ruled",
    img: "/images/products/a4-square-200.jpg",
    alt: "Sapphire Brand A4 Square Ruled exercise book",
    title: "A4 Square Ruled",
  },
  {
    href: "/a5-single-lined",
    img: "/images/products/a5-single-64.jpg",
    alt: "Sapphire Brand A5 Single Ruled exercise book",
    title: "A5 Single Lined",
  },
  {
    href: "/a5-square-ruled",
    img: "/images/products/a5-square-120.jpg",
    alt: "Sapphire Brand A5 Square Ruled exercise book",
    title: "A5 Square Ruled",
  },
];

export default function Home() {
  return (
    <>
      <Slideshow />

      {/* Product Collection Section */}
      <section className="products-section">
        <div className="products-heading reveal">
          <span className="eyebrow">Explore The</span>
          <h2>Collection</h2>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <div className="product-card reveal" key={product.href}>
              <Link href={product.href} className="product-img-wrap">
                <img src={product.img} alt={product.alt} />
              </Link>
              <h3>{product.title}</h3>
              <Link href={product.href} className="learn-more-btn">
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Package Section */}
      <section className="spotlight-section">
        <div className="spotlight-heading reveal">
          <span className="eyebrow">Wholesale &amp; Institutional</span>
          <h2>Bulk Order Packages</h2>
          <p>
            Whether you&apos;re stocking a single classroom or supplying an entire school
            district, we have an order package to match. Every book is manufactured in-house, so
            quality stays consistent no matter the volume. Ordering from outside Nairobi? We
            arrange delivery countrywide.
          </p>
        </div>

        <ul className="included-list included-list--row reveal">
          <li>Custom cover branding option</li>
          <li>Consistent paper quality across the full order</li>
          <li>Flexible page counts</li>
          <li>Delivery countrywide</li>
        </ul>

        <div className="package-grid">
          <div className="package-card reveal">
            <span className="package-card__label">School Package</span>
            <h3>100 – 499 Books</h3>
            <p>
              Ideal for a single school stocking up for a term. Includes standard cover, your
              choice of single or square ruling, and delivery within Nairobi.
            </p>
            <a href="#contact" className="learn-more-btn">
              Enquire Now
            </a>
          </div>

          <div className="package-card reveal">
            <span className="package-card__label">Business Package</span>
            <h3>500+ Books</h3>
            <p>
              Built for wholesalers, distributors, and multi-branch schools. Includes custom cover
              branding, priority production, and countrywide delivery.
            </p>
            <a href="#contact" className="learn-more-btn">
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
