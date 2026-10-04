"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Mainlayout from "@/component/Mainlayout";
import { products } from "@/data/products";
import styles from "./page.module.css";

const PAGE_SIZE = 10;
type ViewMode = "grid" | "compact" | "list";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = products
    .filter((product) => category === "all" || product.category === category)
    .filter((product) => selectedModels.length === 0 || selectedModels.includes(product.slug))
    .filter((product) => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalizedSearch))
    .sort((first, second) => {
      if (sortOrder === "name-asc") return first.name.localeCompare(second.name);
      if (sortOrder === "name-desc") return second.name.localeCompare(first.name);
      return products.indexOf(first) - products.indexOf(second);
    });
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const pageProducts = filteredProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const resetFilters = () => {
    setSearchTerm("");
    setCategory("all");
    setSelectedModels([]);
    setSortOrder("featured");
    setCurrentPage(1);
  };

  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <section className={styles.shopSection}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><span aria-current="page">Products</span>
            </nav>
            <div className={styles.shopLayout}>
              <aside className={styles.filterSidebar} aria-label="Product filters">
                <div className={styles.filterGroup}>
                  <h2>Product categories</h2>
                  <label className={styles.checkboxRow}>
                    <input type="checkbox" checked={category === categories[0]} onChange={(event) => { setCategory(event.target.checked ? categories[0] : "all"); setCurrentPage(1); }} />
                    <span>{categories[0]}</span>
                    <span className={styles.filterCount}>{products.length}</span>
                  </label>
                </div>
                <div className={styles.filterGroup}>
                  <h2>Filter by model</h2>
                  {products.map((product) => (
                    <label className={styles.checkboxRow} key={product.slug}>
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(product.slug)}
                        onChange={(event) => {
                          setSelectedModels((models) => event.target.checked ? [...models, product.slug] : models.filter((slug) => slug !== product.slug));
                          setCurrentPage(1);
                        }}
                      />
                      <span>{product.name}</span>
                    </label>
                  ))}
                </div>
                <div className={styles.sidebarHelp}>
                  <span>Need help choosing?</span>
                  <p>Ask our team about model fit and availability.</p>
                  <a href="mailto:info@dcnetindia.com?subject=Gateway%20product%20enquiry">CONTACT US <i className="las la-arrow-right" /></a>
                </div>
              </aside>
              <div className={styles.catalogMain}>
                <section className={styles.catalogHero} aria-labelledby="catalog-title">
                  <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>DINSTAR DIGITAL GATEWAYS</span>
                    <h1 id="catalog-title">Connect legacy lines.<br /><span>Move voice forward.</span></h1>
                    <p>VoIP trunk gateways for business telephony, network migration, and reliable PSTN connectivity.</p>
                  </div>
                  <div className={styles.heroImage}>
                    <Image src={products[0].image} alt="Dinstar MTG200 digital VoIP gateway" fill sizes="(max-width: 767px) 100vw, 35vw" priority />
                  </div>
                </section>
                <div className={styles.catalogToolbar}>
                  <div className={styles.resultSummary}>
                    <strong>Showing {filteredProducts.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-{Math.min(currentPage * PAGE_SIZE, filteredProducts.length)} of {filteredProducts.length} products</strong>
                    <span>Page size: 10</span>
                  </div>
                  <div className={styles.toolbarActions}>
                    <div className={styles.viewControls} role="group" aria-label="Product view">
                      <button type="button" className={viewMode === "grid" ? styles.activeView : ""} onClick={() => setViewMode("grid")} aria-label="Four-column grid" aria-pressed={viewMode === "grid"}><i className="las la-th-large" /></button>
                      <button type="button" className={viewMode === "compact" ? styles.activeView : ""} onClick={() => setViewMode("compact")} aria-label="Three-column grid" aria-pressed={viewMode === "compact"}><i className="las la-th" /></button>
                      <button type="button" className={viewMode === "list" ? styles.activeView : ""} onClick={() => setViewMode("list")} aria-label="List view" aria-pressed={viewMode === "list"}><i className="las la-list" /></button>
                    </div>
                    <label className={styles.sortControl}>
                      <span className={styles.visuallyHidden}>Sort products</span>
                      <select value={sortOrder} onChange={(event) => { setSortOrder(event.target.value); setCurrentPage(1); }}>
                        <option value="featured">Featured</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className={styles.searchRow}>
                  <label className={styles.searchField}>
                    <i className="las la-search" aria-hidden="true" />
                    <span className={styles.visuallyHidden}>Search products</span>
                    <input type="search" placeholder="Search product name or category" value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value); setCurrentPage(1); }} />
                  </label>
                  <button className={styles.resetButton} type="button" onClick={resetFilters}>
                    <i className="las la-redo-alt" aria-hidden="true" /> RESET FILTERS
                  </button>
                </div>
                <div className={`${styles.productGrid} ${styles[`${viewMode}Mode`]}`}>
                  {pageProducts.map((product) => (
                    <article className={styles.productCard} key={product.slug}>
                      <Link href={`/products/${product.slug}`} className={styles.productLink}>
                        <div className={styles.productImage}>
                          <Image src={product.image} alt={`Dinstar ${product.name} digital VoIP gateway`} fill sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 25vw" />
                        </div>
                        <div className={styles.productInfo}>
                          <span className={styles.productCategory}>{product.category}</span>
                          <h2>{product.name}</h2>
                          <p>{product.name === "MTG200" ? product.description : "Digital VoIP gateway. Contact us for model specifications."}</p>
                          <span className={styles.detailsLink}>VIEW DETAILS <i className="las la-long-arrow-alt-right" /></span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
                {pageProducts.length === 0 && (
                  <div className={styles.emptyState}>
                    <h2>No matching products</h2>
                    <p>Try another search term or clear the selected filters.</p>
                    <button type="button" className="btn btn-primary" onClick={resetFilters}>RESET FILTERS</button>
                  </div>
                )}
                <nav className={styles.pagination} aria-label="Product pages">
                  <button type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={currentPage === 1} aria-label="Previous page"><i className="las la-angle-left" /></button>
                  <span>Page {currentPage} of {pageCount}</span>
                  <button type="button" onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))} disabled={currentPage === pageCount} aria-label="Next page"><i className="las la-angle-right" /></button>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default Products;