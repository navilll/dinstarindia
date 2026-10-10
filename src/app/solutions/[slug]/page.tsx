import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Mainlayout from "@/component/Mainlayout";
import Icon from "@/component/Icon";
import { solutions, solutionDesigns } from "@/data/solutions";
import { getProduct } from "@/data/products";
import styles from "../page.module.css";
import BreadcrumbBanner from "@/component/BreadcrumbBanner";

export function generateStaticParams() { return solutions.map(solution => ({ slug: solution.id })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = solutions.find(item => item.id === params.slug);
  return { title: `${solution?.title ?? "Solution not found"} | Dinstar India`, description: solutionDesigns[params.slug]?.summary };
}
export default function SolutionDetail({ params }: { params: { slug: string } }) {
  const solution = solutions.find(item => item.id === params.slug);
  if (!solution) notFound();
  const design = solutionDesigns[solution.id];
  const relatedProducts = design.productSlugs.flatMap(slug => { const product = getProduct(slug); return product ? [product] : []; });
  return <Mainlayout><div className={styles.page}>
    <BreadcrumbBanner title={solution.title.toUpperCase()} current={solution.title} ancestors={[{ label: "Solutions", href: "/solutions" }]} />
    <section className={`${styles.hero} ${styles.detailHero}`}><div className={`container ${styles.detailHeroGrid}`}>
      <div className={styles.heroCopy}>
        <span className={styles.eyebrow}><Icon name={design.icon} size={17} /> {design.label}</span><div className="section-head style-1"><h2 className="title">{design.headline}</h2></div><p>{design.summary}</p>
        <div className={styles.heroActions}><Link href={`/contact-us?solution=${solution.id}`} className={styles.primaryButton}>Plan your solution <Icon name="arrow" size={19} /></Link><a href="#capabilities" className={styles.textButton}>Explore capabilities <Icon name="chevron" size={18} /></a></div>
      </div>
      <div className={styles.blueprint}><div className={styles.blueprintHeading}><span>SOLUTION BLUEPRINT</span><Icon name={design.icon} size={22} /></div>
        {design.flow.map((step, index) => <div className={styles.blueprintStep} key={step.title}><span className={styles.blueprintIcon}><Icon name={step.icon} size={21} /></span><div><small>0{index + 1}</small><strong>{step.title}</strong></div>{index < design.flow.length - 1 && <span className={styles.blueprintLine} />}</div>)}
        <div className={styles.blueprintFooter}><span className={styles.liveDot} /> DESIGNED AROUND YOUR DEPLOYMENT</div>
      </div>
    </div></section>
    <section className={styles.outcomes}><div className={`container ${styles.outcomeGrid}`}>{design.outcomes.map(outcome => <div key={outcome}><Icon name="check" size={20} /><span>{outcome}</span></div>)}</div></section>
    <section className={styles.section}><div className={`container ${styles.overviewGrid}`}><div><span className={styles.eyebrow}>THE BIGGER PICTURE</span><h2 className="title">{solution.contentHeading}</h2></div><div>{solution.intro.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div></section>
    <section id="capabilities" className={styles.capabilitiesSection}><div className="container"><div className={`section-head style-1 ${styles.sectionHeading}`}><div><span className={styles.eyebrow}>CAPABILITIES THAT MAKE A DIFFERENCE</span><h2 className="title">Built for real<br /><span>business conversations.</span></h2></div><p>A flexible foundation for the workflows that matter to your organization. Final capabilities depend on the selected products and configuration.</p></div><div className={styles.capabilityGrid}>{solution.features.map((feature, index) => <article key={feature.title}><span className={styles.capabilityNumber}>{String(index + 1).padStart(2, "0")}</span><Icon name={design.flow[index % design.flow.length].icon} size={26} /><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></div></section>
    <section className={styles.section}><div className="container"><div className={`section-head style-1 ${styles.sectionHeading}`}><div><span className={styles.eyebrow}>HOW IT COMES TOGETHER</span><h2 className="title">One connected workflow.</h2></div><p>An illustrative architecture to guide your planning. Our team can help refine it around your existing systems.</p></div><div className={styles.flowGrid}>{design.flow.map((step, index) => <article key={step.title}><div className={styles.flowIcon}><Icon name={step.icon} size={27} /></div><small>STEP 0{index + 1}</small><h3>{step.title}</h3><p>{step.description}</p>{index < design.flow.length - 1 && <Icon className={styles.flowArrow} name="arrow" size={24} />}</article>)}</div>{solution.functions && <div className={styles.securityPanel}><div><Icon name="shield" size={34} /><h3>Control where it matters.</h3><p>The role of a session border controller in your network.</p></div><ul>{solution.functions.map(item => <li key={item}><Icon name="check" size={17} /><span>{item}</span></li>)}</ul></div>}</div></section>
    {!!relatedProducts.length && <section className={styles.productSection}><div className="container"><div className={`section-head style-1 ${styles.sectionHeading}`}><div><span className={styles.eyebrow}>EXPLORE THE BUILDING BLOCKS</span><h2 className="title">Products for your solution.</h2></div><Link href="/products" className={styles.darkTextButton}>All products <Icon name="arrow" size={18} /></Link></div><div className={styles.relatedProductGrid}>{relatedProducts.map(product => <Link href={`/products/${product.slug}`} className={styles.relatedProduct} key={product.slug}><div className={styles.relatedImage}><Image src={product.image} alt={product.name} fill sizes="(max-width: 767px) 90vw, 30vw" /></div><span>{product.category}</span><h3>{product.name}</h3><div>View product <Icon name="arrow" size={18} /></div></Link>)}</div><p className={styles.productNote}>Product selection and compatibility are confirmed during solution planning.</p></div></section>}
    {solution.sections?.map(section => <section className={styles.section} key={section.title}><div className={`container ${styles.overviewGrid}`}><h2 className="title">{section.title}</h2><p>{section.body}</p></div></section>)}
    <section className={styles.ctaSection}><div className={`container ${styles.cta}`}><div><span className={styles.eyebrow}>LET’S TALK ABOUT YOUR DEPLOYMENT</span><h2 className="title">Make your next connection<br />a better one.</h2><p>Share your requirements for {solution.title.toLowerCase()} with our team.</p></div><Link href={`/contact-us?solution=${solution.id}`} className={styles.primaryButton}>Start a conversation <Icon name="arrow" size={19} /></Link></div></section>
    <div className={`container ${styles.otherSolutions}`}><span>Explore another solution</span>{solutions.filter(item => item.id !== solution.id).map(item => <Link key={item.id} href={`/solutions/${item.id}`}>{item.title === "DINSTARINDIA SMS Solution" ? "Business SMS" : item.title}<Icon name="arrow" size={15} /></Link>)}</div>
  </div></Mainlayout>;
}

