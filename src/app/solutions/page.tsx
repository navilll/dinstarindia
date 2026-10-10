import type { Metadata } from "next";
import Link from "next/link";
import Mainlayout from "@/component/Mainlayout";
import Icon, { type IconName } from "@/component/Icon";
import { solutions, solutionDesigns } from "@/data/solutions";
import styles from "./page.module.css";
import BreadcrumbBanner from "@/component/BreadcrumbBanner";

export const metadata: Metadata = { title: "Communication Solutions | Dinstar India", description: "Explore solutions for call centers, enterprise communications, business messaging, and industry deployments." };
const pillars: { icon: IconName; title: string; text: string }[] = [
  { icon: "network", title: "Connected by design", text: "Bring people, locations, and existing systems into a coordinated communication network." },
  { icon: "shield", title: "Control at the edge", text: "Plan SIP interconnection and network security around your deployment requirements." },
  { icon: "layers", title: "Room to evolve", text: "Choose a modular approach that makes your next stage of growth easier to plan." },
];

export default function Solutions() {
  return <Mainlayout><div className={styles.page}>
    <BreadcrumbBanner title="OUR SOLUTIONS" current="Solutions" />
    <section className={styles.hero}><div className={`container ${styles.heroGrid}`}>
      <div className={styles.heroCopy}>
        <span className={styles.eyebrow}><span className={styles.liveDot} /> THE NEXT CONNECTION STARTS HERE</span>
        <div className="section-head style-1"><h2 className="title">CONNECTED PEOPLE.<br /><span className="text-primary">BETTER POSSIBILITIES.</span></h2></div>
        <p>Communication infrastructure shaped around your business. Connect your customers, empower your teams, and bring every location closer.</p>
        <div className={styles.heroActions}><a href="#solutions" className={styles.primaryButton}>Explore solutions <Icon name="arrow" size={19} /></a><Link href="/contact-us" className={styles.textButton}>Talk to our team <Icon name="arrow" size={18} /></Link></div>
        <div className={styles.heroTags}><span><Icon name="phone" size={15} /> Voice</span><span><Icon name="message" size={15} /> Messaging</span><span><Icon name="shield" size={15} /> Security</span></div>
      </div>
      <div className={styles.networkVisual} role="img" aria-label="Communication network connecting teams, voice, messaging, and security">
        <div className={styles.orbitOne} /><div className={styles.orbitTwo} /><div className={styles.orbitThree} />
        <div className={styles.connectionLines}><span /><span /><span /><span /></div>
        <div className={styles.networkCore}><Icon name="network" size={44} /><strong>DINSTAR</strong><small>CONNECTED ECOSYSTEM</small></div>
        <div className={`${styles.networkNode} ${styles.nodeTop}`}><Icon name="cloud" /><span>Cloud & SIP</span></div>
        <div className={`${styles.networkNode} ${styles.nodeRight}`}><Icon name="shield" /><span>Secure edge</span></div>
        <div className={`${styles.networkNode} ${styles.nodeBottom}`}><Icon name="headset" /><span>Your teams</span></div>
        <div className={`${styles.networkNode} ${styles.nodeLeft}`}><Icon name="message" /><span>Every message</span></div>
        <span className={styles.visualCaption}><span className={styles.liveDot} /> ONE CONNECTED COMMUNICATION FOUNDATION</span>
      </div>
    </div></section>
    <section className={styles.pillars} aria-label="Solution principles"><div className={`container ${styles.pillarGrid}`}>{pillars.map(pillar => <article key={pillar.title}><div className={styles.pillarIcon}><Icon name={pillar.icon} /></div><div><h2 className="title">{pillar.title}</h2><p>{pillar.text}</p></div></article>)}</div></section>
    <section id="solutions" className={styles.section}><div className="container">
      <div className={`section-head style-1 ${styles.sectionHeading}`}><div><span className={styles.eyebrow}>SOLUTIONS FOR THE WAY YOU WORK</span><h2 className="title">Your challenges.<br /><span>Our connection.</span></h2></div><p>Explore a focused solution for your business. Each starts with your workflow and brings the right communication capabilities together.</p></div>
      <div className={styles.solutionGrid}>{solutions.map((solution, index) => {
        const design = solutionDesigns[solution.id];
        return <Link className={styles.solutionCard} id={solution.id} href={`/solutions/${solution.id}`} key={solution.id}>
          <div className={styles.cardTop}><span className={styles.cardIcon}><Icon name={design.icon} size={28} /></span><span className={styles.cardNumber}>0{index + 1}</span></div>
          <span className={styles.cardLabel}>{design.label}</span><h3>{solution.title === "DINSTARINDIA SMS Solution" ? "Business SMS" : solution.title}</h3><p>{design.summary}</p>
          <div className={styles.cardChips}>{solution.features.slice(0, 3).map(feature => <span key={feature.title}>{feature.title}</span>)}</div>
          <div className={styles.cardBottom}><span>Explore solution</span><Icon name="arrow" size={21} /></div>
        </Link>;
      })}</div>
    </div></section>
    <section className={styles.processSection}><div className="container">
      <div className={`section-head style-1 ${styles.sectionHeading}`}><div><span className={styles.eyebrow}>FROM IDEA TO INFRASTRUCTURE</span><h2 className="title">A clearer path.<br /><span>A better deployment.</span></h2></div><p>A practical approach to building the communication system your business needs.</p></div>
      <div className={styles.processGrid}>{[
        { title: "Discover", text: "Tell us about your users, locations, call volumes, and existing infrastructure." },
        { title: "Design", text: "Map the architecture and identify products suited to your requirements." },
        { title: "Connect", text: "Plan configuration, integrations, and the transition to your new system." },
        { title: "Evolve", text: "Review how your setup can support changing workflows and future capacity." },
      ].map((step, index) => <article key={step.title}><span className={styles.stepNumber}>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </div></section>
    <section className={styles.ctaSection}><div className={`container ${styles.cta}`}><div><span className={styles.eyebrow}>LET’S BUILD YOUR NEXT CONNECTION</span><h2 className="title">Your business is unique.<br />Your communication should be, too.</h2><p>Tell us what you’re working toward. We’ll help you find a practical starting point.</p></div><Link href="/contact-us" className={styles.primaryButton}>Discuss your project <Icon name="arrow" size={19} /></Link></div></section>
  </div></Mainlayout>;
}
