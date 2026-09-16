"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_IMAGES = [
  "/images/image1.webp",
  "/images/image2.webp",
  "/images/image3.webp",
  "/images/image4.webp",
  "/images/image6.webp",
  "/images/image7.webp",
  "/images/image8.webp",
  "/images/image9.webp",
  "/images/image10.webp",
];

const INTERVAL_MS = 4000;

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  // Only the current slide plus the one it will transition into next are
  // ever fetched at a given time, instead of all nine hero photos at once
  // on first paint — that was starving the LCP image of bandwidth.
  const [loaded, setLoaded] = useState(() => new Set([0, 1 % SLIDE_IMAGES.length]));

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % SLIDE_IMAGES.length;
        const upcoming = (next + 1) % SLIDE_IMAGES.length;
        setLoaded((prevLoaded) =>
          prevLoaded.has(upcoming) ? prevLoaded : new Set(prevLoaded).add(upcoming)
        );
        return next;
      });
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="slideshow-container">
      {SLIDE_IMAGES.map((src, index) =>
        loaded.has(index) ? (
          <div key={src} className={`slide${index === current ? " active" : ""}`}>
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              preload={index === 0}
            />
          </div>
        ) : (
          <div key={src} className="slide" />
        )
      )}

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
