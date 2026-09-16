import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom School Printed Books | The Impala Book Agencies",
};

export default function CustomSchoolBooksPage() {
  return (
    <div className="gallery-page">
      <div className="gallery-heading reveal">
        <span className="eyebrow">Sapphire Elit Brand Collection</span>
        <h1>Custom School Printed Books</h1>
      </div>

      <div className="custom-school-content reveal">
        <div className="custom-school-content__img-wrap">
          <Image
            src="/images/products/custom-school-books.jpg"
            alt="Custom school-branded exercise books with school crests and details printed on the cover"
            width={1600}
            height={900}
            sizes="(max-width: 900px) 90vw, 480px"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="custom-school-content__details">
          <p>
            High quality personalised exercise books printed on chipboard, manila, and MG covers,
            with your school&apos;s name, crest, and details on every cover.
          </p>

          <ul className="included-list included-list--col">
            <li>Cover type: Manila, Chipboard 1 Color, Chipboard 2 Color</li>
            <li>Paper type: 45gsm Newsprint &amp; 50gsm Bank</li>
            <li>Pages: 32, 48, 64, 80, 96, 120, 200</li>
            <li>Ruling: Single Line &amp; Square, Graph (48pg), Half-Inch Single, Half-Inch Square &amp; Plain</li>
          </ul>

          <Link
            href={{ pathname: "/order-form", query: { product: "Custom School Printed Books" } }}
            className="gallery-card__order-btn"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}
