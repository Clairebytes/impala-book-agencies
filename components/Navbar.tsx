"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PRODUCT_LINKS = [
  { href: "/a4-single-lined", label: "A4 Single Lined" },
  { href: "/a4-square-ruled", label: "A4 Square Ruled" },
  { href: "/a5-single-lined", label: "A5 Single Lined" },
  { href: "/a5-square-ruled", label: "A5 Square Ruled" },
  { href: "/a4-graph-book", label: "A4 Graph Book" },
  { href: "/a5-graph-book", label: "A5 Graph Book" },
  { href: "/a5-irish-book", label: "A5 Irish Book" },
  { href: "/a4-plain", label: "A4 Plain Exercise Book" },
  { href: "/counter-books", label: "A4 Counter Books" },
  { href: "/drawing-book", label: "Drawing Book" },
  { href: "/a4-ruled-paper", label: "A4 Ruled Paper" },
  { href: "/a4-loose-leaf-pad", label: "A4 Loose Leaf Pad" },
  { href: "/custom-school-books", label: "Custom School Printed Books" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function updateNavbar() {
      setScrolled(window.scrollY > 60);
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar);
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  // Closing on navigation matters most on mobile, where the menu is a
  // full panel that would otherwise stay open over the next page.
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.jpg" alt="The Impala Book Agencies Logo" />
        <span className="logo-text">The Impala Book Agencies</span>
      </div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links${menuOpen ? " nav-links--open" : ""}`}>
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li className="dropdown">
          <a href="#">Product ▾</a>
          <ul className="dropdown-menu">
            <li>
              <Link href="/products" onClick={closeMenu}>
                <strong>View Full Collection</strong>
              </Link>
            </li>
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li>
          <a href="/#about" onClick={closeMenu}>
            About Us
          </a>
        </li>
        <li>
          <a href="/#contact" onClick={closeMenu}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
