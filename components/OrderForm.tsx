"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "E3Pv6Y18DPTK2krWf";
const EMAILJS_SERVICE_ID = "service_q4jo4mb";
const EMAILJS_TEMPLATE_ID = "template_zqm4qym";

export default function OrderForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");
  const isCustom = product === "Custom School Printed Books";
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);
    const formData = new FormData(formRef.current);
    const notes = formData.get("message");
    const photo = formData.get("photo");
    const photoNote = photo instanceof File && photo.size > 0 ? " (reference photo attached via email)" : "";

    try {
      await Promise.all([
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
          publicKey: EMAILJS_PUBLIC_KEY,
        }),
        fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            phone_number: formData.get("phone_number"),
            product: formData.get("product"),
            quantity: formData.get("quantity"),
            notes: notes ? `${notes}${photoNote}` : photoNote || null,
          }),
        }).then((res) => {
          if (!res.ok) throw new Error("Failed to save order");
        }),
      ]);
      alert("Order submitted successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to submit order:", error);
      alert("Failed to submit order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="order-page">
      <div className="gallery-heading reveal">
        <span className="eyebrow">Sapphire Brand Collection</span>
        <h1>{product ? `Order Your ${product}` : "Order Your Book"}</h1>
      </div>

      <div className="order-layout">
        <form ref={formRef} onSubmit={handleSubmit} className="order-card reveal-left">
          <div className="order-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="order-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="order-field">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              pattern="\d{10}"
              title="Phone number must be exactly 10 digits"
              required
            />
          </div>

          <div className="order-field">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" min={1} required />
          </div>

          {isCustom && (
            <>
              <div className="order-field">
                <label htmlFor="message">Cover Details (optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="School name, crest text, colors, or any other details for the cover"
                />
              </div>

              <div className="order-field">
                <label htmlFor="photo">Upload Photo / Logo (optional)</label>
                <input type="file" id="photo" name="photo" accept="image/*" />
              </div>
            </>
          )}

          <input type="hidden" id="product" name="product" value={product ?? ""} />

          <button type="submit" className="order-submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit Order"}
          </button>
        </form>
      </div>
    </div>
  );
}
