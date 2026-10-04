import Mainlayout from "@/component/Mainlayout";
import { getProduct, products } from "@/data/products";
import ProductGallery from "./ProductGallery";
import ProductEnquiryModal from "./ProductEnquiryModal";
import ProductTabs from "./ProductTabs";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

interface ProductPageProps {
  params: { slug: string };
}

const ProductDetails = ({ params }: ProductPageProps) => {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <section className={styles.productSection}>
          <div className="container">
            <div className={styles.productLayout}>
              <div className={styles.productMain}>
                <div className={styles.productOverview}>
                  <ProductGallery images={product.gallery} productName={product.name} />
                  <div className={styles.productSummary}>
                    <span className={styles.category}>{product.category}</span>
                    <h1 className="title">{product.name}</h1>
                    <p className={styles.lead}>{product.description}</p>
                    {product.highlights && (
                      <ul className={styles.summaryHighlights}>
                        {product.highlights.slice(0, 3).map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    )}
                    <div className={styles.actionGroup}>
                      <ProductEnquiryModal productName={product.name} />
                      <a href={`mailto:info@dcnetindia.com?subject=${encodeURIComponent(`Datasheet request - ${product.name}`)}`} className={styles.datasheetAction}>
                        <i className="las la-file-download" /> REQUEST DATASHEET
                      </a>
                    </div>
                  </div>
                </div>
                <ProductTabs product={product} />
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
        </section>
      </div>
    </Mainlayout>
  );
};

export default ProductDetails;