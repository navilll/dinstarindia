"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./page.module.css";

interface ProductGalleryProps {
  images: StaticImageData[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <Image src={images[selectedImage]} alt={`Dinstar ${productName}`} fill priority sizes="(max-width: 991px) 100vw, 50vw" />
      </div>
      {images.length > 1 && (
        <div className={styles.thumbnailList} aria-label={`${productName} product images`}>
          {images.map((image, index) => (
            <button
              className={`${styles.thumbnail} ${selectedImage === index ? styles.thumbnailActive : ""}`}
              type="button"
              aria-label={`Show image ${index + 1} of ${productName}`}
              aria-pressed={selectedImage === index}
              onClick={() => setSelectedImage(index)}
              key={image.src}
            >
              <Image src={image} alt="" fill sizes="92px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;