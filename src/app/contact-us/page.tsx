import type { Metadata } from "next";
import Link from "next/link";
import Mainlayout from "@/component/Mainlayout";
import BreadcrumbBanner from "@/component/BreadcrumbBanner";
import Icon from "@/component/Icon";
import { contact } from "@/data/contact";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Contact Us | Dinstar India", description: "Contact our Bengaluru team for Dinstar product enquiries, solution planning, and technical guidance." };
export default function ContactUs() {
  return <Mainlayout><div className="page-content bg-white">
    <BreadcrumbBanner title="CONTACT US" current="Contact Us" />
    <section className={styles.contactSection}><div className={`container ${styles.contactGrid}`}>
      <aside className={styles.contactCard}>
        <div className={styles.cardIcon}><Icon name="message" size={32} /></div><span className={styles.eyebrow}>START A CONVERSATION</span><h2>YOUR NEXT CONNECTION<br />STARTS WITH US.</h2><p>Tell us about your business, your existing setup, and what you’d like to achieve.</p>
        <a className={styles.contactLink} href={`mailto:${contact.email}`}><Icon name="mail" size={24} /><div><small>WRITE TO US</small><strong>{contact.email}</strong></div><Icon name="arrow" size={18} /></a>
        <a className={styles.contactLink} href={contact.phoneHref}><Icon name="phone" size={24} /><div><small>CALL OUR TEAM</small><strong>{contact.phone}</strong></div><Icon name="arrow" size={18} /></a>
        <a className={styles.addressLink} href={contact.mapsUrl} target="_blank" rel="noopener noreferrer"><Icon name="pin" size={24} /><div><small>VISIT OUR BENGALURU OFFICE</small><p>{contact.address}</p><span>Get directions <Icon name="arrow" size={16} /></span></div></a>
        <div className={styles.cardFooter}>Product guidance · Solution planning · Support</div>
      </aside>
      <div id="enquiry" className={styles.formCard}><div className="section-head style-1"><span className={styles.eyebrow}>TELL US WHAT YOU HAVE IN MIND</span><h2 className="title">HOW CAN WE <span className="text-primary">HELP?</span></h2></div><p>Share a few details and our team can help with your next step.</p><ContactForm /></div>
    </div></section>
    <section className={styles.helpSection}><div className="container"><div className="section-head style-1"><span className={styles.eyebrow}>A CONVERSATION FOR EVERY REQUIREMENT</span><h2 className="title">THE RIGHT HELP.<br /><span className="text-primary">FOR YOUR NEXT STEP.</span></h2></div><div className={styles.helpGrid}>
      <article><Icon name="box" size={30} /><h3>Product enquiries</h3><p>Ask about model selection, specifications, configuration options, and availability.</p><Link href="/products">Explore products <Icon name="arrow" size={18} /></Link></article>
      <article><Icon name="network" size={30} /><h3>Solution planning</h3><p>Share your users, locations, and infrastructure so we can discuss a suitable setup.</p><Link href="/solutions">Explore solutions <Icon name="arrow" size={18} /></Link></article>
      <article><Icon name="headset" size={30} /><h3>Technical guidance</h3><p>Include your model, firmware version, and a description of the issue when requesting help.</p><a href={`mailto:${contact.email}?subject=Technical%20support%20request`}>Contact support <Icon name="arrow" size={18} /></a></article>
    </div></div></section>
    <section className={styles.locationSection}><div className={`container ${styles.locationGrid}`}><div><div className="section-head style-1"><span className={styles.eyebrow}>LOCAL EXPERTISE. CONNECTED POSSIBILITIES.</span><h2 className="title">FIND US IN<br /><span className="text-primary">BENGALURU.</span></h2></div><p>Visit our office or contact us to discuss your communication requirements before your visit.</p><a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GET DIRECTIONS <Icon name="arrow" size={18} /></a></div><div className={styles.locationCard}><div className={styles.locationMarker}><Icon name="pin" size={36} /></div><span className={styles.eyebrow}>BENGALURU · KARNATAKA</span><h3>Dinstar India</h3><p>{contact.address}</p><div><Icon name="building" size={20} /><span>DCNET Building · BTM 2nd Stage</span></div></div></div></section>
    <section className={styles.faqSection}><div className={`container ${styles.faqGrid}`}><div className="section-head style-1"><span className={styles.eyebrow}>BEFORE YOU GET IN TOUCH</span><h2 className="title">HELPFUL <span className="text-primary">ANSWERS.</span></h2></div><div>{[
      { question: "What should I include in my enquiry?", answer: "Tell us about the product or solution you’re considering, your number of users or ports, and your current setup. For support, include the model and firmware version." },
      { question: "Can you help me choose a product?", answer: "Yes. Share your calling requirements, network connections, and existing infrastructure so our team can discuss suitable options from the Dinstar range." },
      { question: "How can I contact the team directly?", answer: `Email ${contact.email} or call ${contact.phone}. You can also use the enquiry form above.` },
    ].map(item => <details key={item.question}><summary>{item.question}<Icon name="chevron" size={18} /></summary><p>{item.answer}</p></details>)}</div></div></section>
  </div></Mainlayout>;
}
