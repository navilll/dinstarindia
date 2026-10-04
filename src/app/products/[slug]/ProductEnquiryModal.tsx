"use client";

import { useState, type FormEvent } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./page.module.css";

const ProductEnquiryModal = ({ productName }: { productName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Product enquiry - ${productName}`);
    const body = encodeURIComponent([
      `Product: ${productName}`,
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      "",
      `Requirements: ${formData.get("requirements")}`,
    ].join("\n"));

    window.location.href = `mailto:info@dcnetindia.com?subject=${subject}&body=${body}`;
    setIsOpen(false);
  };

  return (
    <>
      <button className={`btn shadow-primary btn-primary ${styles.primaryAction}`} type="button" onClick={() => setIsOpen(true)}>
        ENQUIRE NOW <i className="m-l10 fas fa-caret-right" />
      </button>
      <Modal show={isOpen} onHide={() => setIsOpen(false)} centered dialogClassName={styles.enquiryDialog} aria-labelledby="product-enquiry-title">
        <Modal.Header closeButton className={styles.enquiryHeader}>
          <div>
            <span className={styles.modalEyebrow}>DINSTAR INDIA</span>
            <Modal.Title id="product-enquiry-title">Enquire about {productName}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className={styles.enquiryBody}>
          <form onSubmit={submitEnquiry}>
            <div className={styles.formGrid}>
              <label>
                Name
                <input className="form-control" name="name" autoComplete="name" required />
              </label>
              <label>
                Company
                <input className="form-control" name="company" autoComplete="organization" />
              </label>
              <label>
                Work email
                <input className="form-control" type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                Phone
                <input className="form-control" type="tel" name="phone" autoComplete="tel" required />
              </label>
              <label className={styles.fullWidthField}>
                Requirements
                <textarea className="form-control" name="requirements" rows={4} placeholder={`Tell us about your ${productName} requirements`} required />
              </label>
            </div>
            <div className={styles.modalActions}>
              <button type="button" className={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancel</button>
              <button type="submit" className="btn shadow-primary btn-primary">CONTINUE TO EMAIL <i className="m-l10 fas fa-caret-right" /></button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductEnquiryModal;