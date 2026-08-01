export type Product = {
  href: string;
  img: string;
  alt: string;
  title: string;
  category: "Exercise Books" | "Specialty Books" | "Counter Books" | "Stationery" | "Custom Printed Books";
  /** Shown in the homepage's curated preview grid. */
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    href: "/a4-single-lined",
    img: "/images/products/a4-single-120.jpg",
    alt: "Sapphire Brand A4 Single Ruled exercise book",
    title: "A4 Single Lined",
    category: "Exercise Books",
    featured: true,
  },
  {
    href: "/a4-square-ruled",
    img: "/images/products/a4-square-200.jpg",
    alt: "Sapphire Brand A4 Square Ruled exercise book",
    title: "A4 Square Ruled",
    category: "Exercise Books",
    featured: true,
  },
  {
    href: "/a5-single-lined",
    img: "/images/products/a5-single-64.jpg",
    alt: "Sapphire Brand A5 Single Ruled exercise book",
    title: "A5 Single Lined",
    category: "Exercise Books",
    featured: true,
  },
  {
    href: "/a5-square-ruled",
    img: "/images/products/a5-square-120.jpg",
    alt: "Sapphire Brand A5 Square Ruled exercise book",
    title: "A5 Square Ruled",
    category: "Exercise Books",
    featured: true,
  },
  {
    href: "/a4-graph-book",
    img: "/images/products/a4-graph-96.jpg",
    alt: "Sapphire Brand A4 Graph Book",
    title: "A4 Graph Book",
    category: "Specialty Books",
  },
  {
    href: "/a5-graph-book",
    img: "/images/products/a5-graph-48.jpg",
    alt: "Sapphire Brand A5 Graph Book",
    title: "A5 Graph Book",
    category: "Specialty Books",
  },
  {
    href: "/a5-irish-book",
    img: "/images/products/a5-irish-48.jpg",
    alt: "Sapphire Brand A5 Irish Book",
    title: "A5 Irish Book",
    category: "Specialty Books",
  },
  {
    href: "/a4-plain",
    img: "/images/products/a4-plain-96.jpg",
    alt: "Sapphire Brand A4 Plain Exercise Book",
    title: "A4 Plain Exercise Book",
    category: "Specialty Books",
  },
  {
    href: "/counter-books",
    img: "/images/products/counter-3quire-288.jpg",
    alt: "Sapphire Brand A4 Counter Book",
    title: "A4 Counter Books",
    category: "Counter Books",
  },
  {
    href: "/drawing-book",
    img: "/images/products/drawing-book-a4a3.jpg",
    alt: "Sapphire Elit Brand Drawing Book",
    title: "Drawing Book",
    category: "Stationery",
  },
  {
    href: "/a4-ruled-paper",
    img: "/images/products/a4-ruled-paper.jpg",
    alt: "Sapphire Elit Brand A4 Ruled Paper",
    title: "A4 Ruled Paper",
    category: "Stationery",
  },
  {
    href: "/a4-loose-leaf-pad",
    img: "/images/products/a4-loose-leaf-pad.jpg",
    alt: "Sapphire Elit Brand A4 Loose Leaf Pad",
    title: "A4 Loose Leaf Pad",
    category: "Stationery",
  },
  {
    href: "/custom-school-books",
    img: "/images/products/custom-school-books.jpg",
    alt: "Custom school-branded exercise books",
    title: "Custom School Printed Books",
    category: "Custom Printed Books",
  },
];
