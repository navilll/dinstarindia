import Mainlayout from "@/component/Mainlayout";
import { getProduct, products } from "@/data/products";
import type { Metadata } from "next";
import Link from "next/link";
import ProductGallery from "./ProductGallery";
import ProductEnquiryModal from "./ProductEnquiryModal";
import ProductTabs from "./ProductTabs";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProduct(params.slug);

  return product
    ? { title: `${product.name} | Dinstar India`, description: product.description }
    : { title: "Product not found | Dinstar India" };
}

interface ProductPageProps {
  params: { slug: string };
}

const ProductDetails = ({ params }: ProductPageProps) => {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }
  const datasheet = product.resources?.find((resource) => /datasheet/i.test(resource.title));

  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <section className={styles.productSection}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span aria-current="page">{product.name}</span>
            </nav>
            <div className={styles.productLayout}>
              <div className={styles.productMain}>
                <div className={styles.productOverview}>
                  <ProductGallery images={product.gallery} productName={product.name} />
                  <div className={styles.productSummary}>
                    <span className={styles.category}>{product.category}</span>
                    {product.status && <span className={styles.productStatus}>{product.status}</span>}
                    <h1 className="title">{product.name}</h1>
                    <h2 className={styles.subtitle}>{product.subtitle ?? product.category}</h2>
                    <p className={styles.lead}>{product.description}</p>
                    {product.highlights && (
                      <ul className={styles.summaryHighlights}>
                        {product.highlights.slice(0, 3).map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    )}
                    <div className={styles.actionGroup}>
                      <ProductEnquiryModal productName={product.name} />
                      <a href={datasheet?.url ?? `mailto:info@dcnetindia.com?subject=${encodeURIComponent(`Datasheet request - ${product.name}`)}`} target={datasheet ? "_blank" : undefined} rel={datasheet ? "noopener noreferrer" : undefined} className={styles.datasheetAction}>
                        <i className="las la-file-download" /> {datasheet ? "VIEW DATASHEET" : "REQUEST DATASHEET"}
                      </a>
                    </div>
                  </div>
                </div>
                {!!product.highlights?.length && <div className={styles.featureStrip} aria-label="Key product capabilities">
                  {product.highlights.slice(0, 4).map((highlight, index) => <div key={highlight}><span className={styles.featureNumber}>0{index + 1}</span><p>{highlight}</p></div>)}
                </div>}
                <div className={styles.detailLayout}>
                <div>
                <ProductTabs product={product} />
                {!!product.resources?.length && <section id="downloads" className={styles.resources}>
                  <span className={styles.category}>PRODUCT RESOURCES</span>
                  <h2>Documentation & downloads</h2>
                  <div className={styles.resourceGrid}>{product.resources.map(resource => <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer"><i className="las la-file-pdf" /><span>{resource.title}<small>PDF document · DINSTAR</small></span><i className="las la-arrow-up" /></a>)}</div>
                </section>}
                {product.sourceUrl && <a className={styles.sourceLink} href={product.sourceUrl} target="_blank" rel="noopener noreferrer">View official DINSTAR product information <span aria-hidden="true">↗</span></a>}
                </div>
              <aside className={styles.enquirySidebar} aria-label="Product enquiry contact information">
                <span className={styles.sidebarEyebrow}>DINSTAR INDIA</span>
                <h2>Need product guidance?</h2>
                <p>Share your deployment requirements and our team can help with model information and availability.</p>
                <a href={`mailto:info@dcnetindia.com?subject=${encodeURIComponent(`Product enquiry - ${product.name}`)}`} className={styles.sidebarContact}>
                  <i className="las la-envelope" />
                  <span>info@dcnetindia.com</span>
                </a>
                <a href="tel:+919945160901" className={styles.sidebarContact}>
                  <i className="las la-phone" />
                  <span>+91 99451 60901</span>
                </a>
                <p className={styles.sidebarAddress}>3rd Floor, DCNET Building<br />BTM 2nd Stage, Bengaluru</p>
              </aside>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default ProductDetails;
