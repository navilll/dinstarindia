"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import productData from "@/data/products.json";
import Icon, { type IconName } from "./Icon";
import styles from "./ProductMegaMenu.module.css";

const categoryIcons: Record<string, IconName> = { "IP PBX": "server", "Session Border Controller": "shield", "Digital VoIP Gateway": "gateway", "FXS VoIP Gateway": "phone", "FXO VoIP Gateway": "network" };
const categories = Array.from(new Set(productData.map(product => product.category)));

export default function ProductMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [panelTop, setPanelTop] = useState(100);
  const root = useRef<HTMLLIElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => { setOpen(false); onNavigate(); }, [path, onNavigate]);
  useEffect(() => {
    if (!open) return;
    const updatePosition = () => {
      const bar = root.current?.closest(".main-bar");
      if (bar) setPanelTop(bar.getBoundingClientRect().bottom);
    };
    const outside = (event: PointerEvent) => { if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true }); window.addEventListener("resize", updatePosition);
    document.addEventListener("pointerdown", outside); document.addEventListener("keydown", escape);
    return () => { window.removeEventListener("scroll", updatePosition); window.removeEventListener("resize", updatePosition); document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [open]);

  const desktopHover = () => window.matchMedia("(min-width: 992px) and (hover: hover)").matches;

  return <li ref={root} className={`${styles.menu} ${path.startsWith("/products") ? "active" : ""}`} onMouseEnter={() => { if (desktopHover()) setOpen(true); }} onMouseLeave={() => { if (desktopHover() && !root.current?.contains(document.activeElement)) setOpen(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false); }}>
    <Link href="/products" onFocus={() => setOpen(true)}>Products</Link>
    <button ref={toggle} className={styles.toggle} type="button" aria-label="Product categories" aria-expanded={open} aria-controls="product-mega-menu" onClick={() => { if (desktopHover()) setOpen(true); else setOpen(current => !current); }}><Icon name="chevron" size={12} /></button>
    {open && <div id="product-mega-menu" className={styles.panel} style={{ "--panel-top": `${panelTop}px` } as React.CSSProperties}>
      <nav className={styles.breadcrumb} aria-label="Product menu breadcrumb"><ol><li><Link href="/">Home</Link></li><li aria-current="page">Products</li></ol></nav>
      <div className={styles.heading}><div><span>DINSTAR PRODUCT PORTFOLIO</span><strong>Find the right connection for your business.</strong></div><Link href="/products">View all {productData.length} products <Icon name="arrow" size={16} /></Link></div>
      <div className={styles.categoryGrid}>{categories.map(category => <section className={styles.category} key={category} aria-label={category}>
        <h2><span><Icon name={categoryIcons[category]} size={23} /></span>{category}</h2>
        <ul>{productData.filter(product => product.category === category).map(product => <li key={product.slug}><Link href={`/products/${product.slug}`}><Icon name="box" size={13} /><span>{product.name}</span>{product.status && <small>{product.status}</small>}</Link></li>)}</ul>
      </section>)}</div>
      <div className={styles.footer}><span><Icon name="headset" size={18} /> Need help choosing a product?</span><Link href="/contact-us">Speak to our team <Icon name="arrow" size={16} /></Link></div>
    </div>}
  </li>;
}
