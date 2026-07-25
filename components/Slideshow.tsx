"use client";

import { useEffect, useState } from "react";

const SLIDE_IMAGES = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image6.png",
  "/images/image7.png",
  "/images/image8.png",
  "/images/image9.png",
  "/images/image10.png",
];

const INTERVAL_MS = 4000;

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="slideshow-container">
      {SLIDE_IMAGES.map((src, index) => (
        <div
          key={src}
          className={`slide${index === current ? " active" : ""}`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      <div className="content">
        <span className="brand-name">The Impala Book Agencies</span>
        <span className="eyebrow">Est. Nairobi, Kenya</span>
        <h1>
          The Art of a <em>Beautiful</em> Page
        </h1>
        <p>Premium exercise books, crafted for schools and businesses across Kenya.</p>
        <a href="#contact" className="cta-btn">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
