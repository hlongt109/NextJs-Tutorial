import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`)
    },100)
  })
  return {
    title: `Product ${title}`
  }
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
}
