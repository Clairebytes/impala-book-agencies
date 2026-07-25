import type { Metadata } from "next";
import { Suspense } from "react";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "Order Form | The Impala Book Agencies",
};

export default function OrderFormPage() {
  return (
    <Suspense fallback={null}>
      <OrderForm />
    </Suspense>
  );
}
