import type { StaticImageData } from "next/image";
import { productImages } from "./product-images";
import productData from "./products.json";

export interface Product {
  slug: string;
  name: string;
  category: string;
  subtitle?: string;
  sourceUrl?: string;
  resources?: { title: string; url: string }[];
  status?: string;
  description: string;
  image: StaticImageData;
  gallery: StaticImageData[];
  overview: string[];
  specifications?: { label: string; value: string }[];
  features?: string[];
  highlights?: string[];
}

interface ProductRecord extends Omit<Product, "image" | "gallery" | "overview"> {
  imageKey: string;
  galleryKeys: string[];
  overview?: string[];
}

const productRecords: ProductRecord[] = productData;

export const products: Product[] = productRecords.map(({ imageKey, galleryKeys, ...product }) => {
  const image = productImages[imageKey];
  const gallery = galleryKeys.map((key) => productImages[key]);

  if (!image || gallery.some((galleryImage) => !galleryImage)) {
    throw new Error(`Product image is missing for ${product.name}`);
  }

  return { ...product, overview: product.overview ?? [], image, gallery };
});

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
