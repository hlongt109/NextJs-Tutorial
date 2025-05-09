"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h2>Review {reviewId} not found for product {productId}</h2>
    </div>
  );
}
