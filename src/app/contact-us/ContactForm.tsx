"use client";
import { useEffect, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Icon from "@/component/Icon";
import { solutions } from "@/data/solutions";
import { contact } from "@/data/contact";
import styles from "./page.module.css";

export default function ContactForm() {
  const [topic, setTopic] = useState("Product enquiry");
  const [solution, setSolution] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  useEffect(() => { const preset = new URLSearchParams(window.location.search).get("solution"); if (preset && solutions.some(item => item.id === preset)) { setTopic("Solution planning"); setSolution(preset); } }, []);
  const send = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); if (status === "sending") return;
    const form = event.currentTarget; setStatus("sending");
    try { await emailjs.sendForm("service_gfykn6i", "template_iy1pb0b", form, "HccoOtZS6GHw-N-m6"); setStatus("success"); form.reset(); setTopic("Product enquiry"); setSolution(""); }
    catch { setStatus("error"); }
  };
  return <form className={styles.form} onSubmit={send}>
    <input type="hidden" name="dzToDo" value="Contact" />
    <input type="hidden" name="dzOther[subject]" value={`${topic}${solution ? ` — ${solutions.find(item => item.id === solution)?.title}` : ""}`} />
    <div className={styles.formGrid}>
      <label>First name <span>*</span><input name="dzFirstName" autoComplete="given-name" placeholder="First name" required maxLength={100} /></label>
      <label>Last name <span>*</span><input name="dzLastName" autoComplete="family-name" placeholder="Last name" required maxLength={100} /></label>
      <label>Work email <span>*</span><input name="dzEmail" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} /></label>
      <label>Phone number<input name="dzPhoneNumber" type="tel" autoComplete="tel" placeholder="Your contact number" maxLength={30} /></label>
      <label className={styles.fullWidth}>Company<input name="dzCompany" autoComplete="organization" placeholder="Your organization" maxLength={160} /></label>
      <label className={styles.fullWidth}>What would you like to discuss? <span>*</span><select name="enquiryTopic" value={topic} onChange={event => { setTopic(event.target.value); if (event.target.value !== "Solution planning") setSolution(""); }}>{["Product enquiry", "Solution planning", "Technical support", "Partnership enquiry"].map(item => <option key={item}>{item}</option>)}</select></label>
      {topic === "Solution planning" && <label className={styles.fullWidth}>Solution<select name="solution" value={solution} onChange={event => setSolution(event.target.value)}><option value="">Help me choose</option>{solutions.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>}
      <label className={styles.fullWidth}>Your message <span>*</span><textarea name="dzMessage" rows={4} placeholder="Tell us about your setup, requirements, or question…" required maxLength={5000} /></label>
    </div>
    <div className={styles.formBottom}><p>Your details will be used to respond to this enquiry.</p><button className="btn btn-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "SENDING…" : "SEND ENQUIRY"}<Icon name="arrow" size={18} /></button></div>
    <div className={styles.formStatus} role="status" aria-live="polite">{status === "success" && <p className={styles.success}><Icon name="check" size={18} />Your enquiry has been sent. Thank you for getting in touch.</p>}{status === "error" && <p className={styles.error}>We couldn’t send your enquiry. Your details are still in the form. Please try again or <a href={`mailto:${contact.email}`}>email our team directly</a>.</p>}</div>
  </form>;
}
