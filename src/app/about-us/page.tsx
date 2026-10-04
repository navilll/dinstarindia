import Link from "next/link";
import Image from "next/image";
import IMAGES from "../../component/theme";
import Pagebanner from "../../element/Pagebanner";
import Mainlayout from "../../component/Mainlayout";
import styles from "./page.module.css";

const communicationPortfolio = [
  {
    title: "VoIP Gateways",
    icon: "flaticon-blueprint-1",
    description: "Connect traditional telephony infrastructure with IP communication systems using gateways suited to your deployment.",
  },
  {
    title: "IP-PBX Systems",
    icon: "flaticon-project-management",
    description: "Give teams and offices a flexible business telephony foundation with centralized call management.",
  },
  {
    title: "Session Border Controllers",
    icon: "flaticon-concept",
    description: "Manage SIP connectivity and apply security and traffic policies at the edge of your communications network.",
  },
  {
    title: "IP Phones and SIP Intercoms",
    icon: "flaticon-home",
    description: "Equip desks, shared spaces, and entry points with reliable voice communication endpoints.",
  },
];

const approachItems = [
  {
    title: "Start with the workflow",
    description: "We consider who needs to communicate, how calls move through the organization, and which systems are already in place.",
  },
  {
    title: "Choose compatible building blocks",
    description: "Gateways, IP-PBX systems, SBCs, phones, and intercoms can be brought together around the requirements of each deployment.",
  },
  {
    title: "Keep the setup practical",
    description: "Product guidance and configuration support help teams move from equipment selection toward day-to-day use.",
  },
];

const deploymentSteps = [
  { title: "Understand", description: "Outline your users, locations, existing infrastructure, and communication priorities." },
  { title: "Recommend", description: "Identify suitable Dinstar products and how they fit into your intended system." },
  { title: "Prepare", description: "Coordinate product supply and configuration requirements ahead of rollout." },
  { title: "Support", description: "Get practical guidance as your team brings the communication setup into use." },
];

const About = () => {
  return (
    <Mainlayout>
      <div className='page-content bg-white'>
        <div className='dz-bnr-inr style-1 overlay-white-dark' style={{ backgroundImage: `url(${IMAGES.BanerImg1.src})` }}>
          <Pagebanner maintitle='ABOUT US' currenttitle='About Us' parent='Home' />
        </div>
        <section className={`content-inner style-2 position-relative ${styles.aboutIntro}`} data-name="Our Company">
          <div className="container">
            <div className="row about-bx5 align-items-end">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="dz-media">
                  <div className="img1 m-b30">
                    <Image src={IMAGES.Aboutpic8} alt="Dinstar India communication portfolio" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-a0">
                <div className="about-content">
                  <div className="section-head style-1">
                    <h2 className="title">CONNECTING BUSINESSES THROUGH BETTER COMMUNICATION</h2>
                  </div>
                  <p className="m-b15">Dinstar India helps businesses build dependable communication systems with genuine VoIP and IP communication products, practical technical guidance, and support from selection through deployment.</p>
                  <p className="m-b30">From contact centers to distributed enterprise teams, we bring together gateways, IP-PBX systems, session border controllers, IP phones, and SIP intercoms to meet real operational needs.</p>
                  <div className="row m-b30">
                    <div className="col-md-4 col-6 m-b15">
                      <h5 className="text-primary">Genuine Products</h5>
                      <span>Official Dinstar distribution</span>
                    </div>
                    <div className="col-md-4 col-6 m-b15">
                      <h5 className="text-primary">PAN-India Reach</h5>
                      <span>Delivery across India</span>
                    </div>
                    <div className="col-md-4 col-6 m-b15">
                      <h5 className="text-primary">Expert Support</h5>
                      <span>Guidance for deployment</span>
                    </div>
                  </div>
                  <Link href="/solutions" className="btn shadow-primary btn-primary">EXPLORE SOLUTIONS <i className="m-l10 fas fa-caret-right" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner-3 overflow-hidden bg-gray line-img" data-name="Communication Portfolio">
          <div className='container'>
            <div className='section-head style-1 text-center'>
              <h2 className='title'>COMMUNICATION <span className='text-primary'>PORTFOLIO</span></h2>
              <div className='dz-separator style-1 text-primary'></div>
              <p>Flexible voice and IP communication products for businesses, contact centers, and distributed teams.</p>
            </div>
            <div className="row justify-content-center">
              {communicationPortfolio.map((item) => (
                <div className="col-lg-3 col-md-6" key={item.title}>
                  <article className="icon-bx-wraper style-10 m-b30 p-a30 box-hover h-100">
                    <div className="icon-bx-sm m-b20">
                      <span className="icon-cell text-primary"><i className={item.icon} /></span>
                    </div>
                    <h4 className="title m-b10">{item.title}</h4>
                    <p>{item.description}</p>
                  </article>
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link href="/solutions" className="btn shadow-primary btn-primary">EXPLORE SOLUTIONS <i className="m-l10 fas fa-caret-right" /></Link>
            </div>
          </div>
        </section>
        <section className={`content-inner ${styles.approachSection}`} data-name="Our Approach">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-5 m-b30">
                <div className="section-head style-1">
                  <h2 className="title">COMMUNICATION THAT FITS THE WAY YOU WORK</h2>
                  <div className="dz-separator style-1 text-primary"></div>
                  <p>Every organization has a different calling pattern, footprint, and starting point. We help shape the product mix around those practical details.</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className={styles.approachList}>
                  {approachItems.map((item, index) => (
                    <article className={styles.approachItem} key={item.title}>
                      <span className={styles.approachNumber}>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-inner bg-gray line-img" data-name="Deployment Process">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h2 className="title">FROM REQUIREMENTS <span className="text-primary">TO ROLLOUT</span></h2>
              <div className="dz-separator style-1 text-primary"></div>
              <p>A straightforward path to selecting and putting communication products to work.</p>
            </div>
            <ol className={styles.processList}>
              {deploymentSteps.map((step, index) => (
                <li className={styles.processStep} key={step.title}>
                  <span className={styles.processNumber}>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className={`content-inner ${styles.contactSection}`} data-name="Talk to Dinstar India">
          <div className={`container ${styles.contactLayout}`}>
            <div>
              <h2 className={`title ${styles.contactTitle}`}>LET'S PLAN YOUR COMMUNICATION SETUP</h2>
              <p className={styles.contactText}>Tell us about your team, locations, and requirements. We can help you explore the right Dinstar products for your next step.</p>
            </div>
            <Link href="/contact-us" className="btn shadow-primary btn-primary">CONTACT DINSTAR INDIA <i className="m-l10 fas fa-caret-right" /></Link>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default About;
