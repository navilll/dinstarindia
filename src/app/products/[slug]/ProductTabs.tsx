"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import styles from "./page.module.css";

type ProductTab = "description" | "specifications" | "features";

const ProductTabs = ({ product }: { product: Product }) => {
  const [activeTab, setActiveTab] = useState<ProductTab>("description");
  const featureList = [...(product.highlights ?? []), ...(product.features ?? [])];

  return (
    <section className={styles.tabsSection} aria-label={`${product.name} information`}>
      <div className={styles.tabControls} role="group" aria-label="Product information">
        {(["description", "specifications", "features"] as const).map((tab) => (
          <button
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
            type="button"
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            key={tab}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel} aria-live="polite">
        {activeTab === "description" && (
          <div>
            {(product.overview.length ? product.overview : [product.description]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        )}
        {activeTab === "specifications" && (
          product.specifications?.length ? (
            <dl className={styles.specificationList}>
              {product.specifications.map((specification) => (
                <div className={styles.specificationRow} key={specification.label}>
                  <dt>{specification.label}</dt>
                  <dd>{specification.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p>Contact Dinstar India for model-specific specifications and configuration options.</p>
          )
        )}
        {activeTab === "features" && (
          featureList.length ? (
            <ul className={styles.tabFeatureList}>
              {featureList.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          ) : (
            <p>Contact Dinstar India for confirmed features and a datasheet for this model.</p>
          )
        )}
      </div>
    </section>
  );
};

export default ProductTabs;