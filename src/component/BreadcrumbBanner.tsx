import banner from "@/assets/images/about/breadcrumb.png";
import Link from "next/link";
import styles from "./BreadcrumbBanner.module.css";

export default function BreadcrumbBanner({ title, current, ancestors }: { title: string; current: string; ancestors?: { label: string; href: string }[] }) {
  return <section className={styles.banner} style={{ backgroundImage: `url(${banner.src})` }} aria-label={title}>
    <div className={styles.content}>
      <h1>{current}</h1>
      <nav aria-label="Breadcrumb">
        <ol className={styles.breadcrumb}>
          <li><span aria-hidden="true">/</span><Link href="/">Home</Link></li>
          {ancestors?.map(ancestor => <li key={ancestor.href}><span aria-hidden="true">-</span><Link href={ancestor.href}>{ancestor.label}</Link></li>)}
          <li aria-current="page"><span aria-hidden="true">-</span><span>{current}</span></li>
        </ol>
      </nav>
    </div>
    <aside className={styles.socialRail} aria-label="Follow us on social media">
      <span>Follow Us On:</span>
      <ul>{[
        { name: "Facebook", icon: "fab fa-facebook-f" },
        { name: "Instagram", icon: "fab fa-instagram" },
        { name: "Twitter", icon: "fab fa-twitter" },
        { name: "YouTube", icon: "fab fa-youtube" },
        { name: "Dribbble", icon: "fab fa-dribbble" },
        { name: "Pinterest", icon: "fab fa-pinterest-p" },
      ].map(social => <li key={social.name}><Link href="#" scroll={false} aria-label={social.name}><i className={social.icon} aria-hidden="true" /></Link></li>)}</ul>
    </aside>
  </section>;
}
