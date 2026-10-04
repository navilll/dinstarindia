"use client";

import { useEffect } from "react";
import IMAGES from "@/component/theme";
import Mainlayout from "@/component/Mainlayout";
import Pagebanner from "@/element/Pagebanner";
import styles from "./page.module.css";

const solutions = [
  {
    id: "call-center",
    title: "Call Center",
    intro: [
      "Dinstar India provides flexible call center solutions to match your changing demands. With extensive industry experience, we help contact centers streamline their operations by providing effective dialing process automation solutions. Our solutions are adaptable and can be easily implemented for inbound, outbound, or hybrid processes. As a call centre solutions provider in India, our solutions support market research, telemarketing, customer service, and other activities.",
      "Our products help organizations increase their presence in domestic and international markets. From Dinstar VoIP gateways and adaptive dialers to call centre headsets, our range meets the diverse needs of call centers. Known for cost-effectiveness and workplace efficiency, these products support successful engagement with end consumers. Dinstar India is committed to high-quality solutions that improve communication capabilities and operational excellence for call centers in Bangalore and across India.",
    ],
    features: [
      { title: "Call Recording", description: "Record incoming and outgoing calls in real time, then use recordings for quality review, coaching, and training." },
      { title: "Call Control", description: "Queue calls, play automated messages, transfer callers, mute, or place calls on hold with a complete call-control setup." },
      { title: "International Numbers", description: "Use virtual numbers for multiple countries to make global business processes easier to manage." },
      { title: "Call Conference", description: "Handle inbound and outbound calling at scale and bring participants together when a conversation needs a group." },
      { title: "Call Routing", description: "Route calls to available agents to reduce unnecessary waits and keep customer interactions moving." },
      { title: "Configuration", description: "Get desktop IP phones configured and ready to use, with support for agents who need help getting started." },
      { title: "Call Security", description: "Session border controllers help contact centers manage and control incoming and outgoing VoIP traffic at the network perimeter." },
      { title: "CRM Integration", description: "Connect call management with CRM workflows to review call history, manage conversations, and inform future decisions." },
    ],
    functions: [
      "Manage SIP endpoints by proxying and filtering signaling between phones and unified communications or IP-PBX systems.",
      "Support NAT traversal between private address spaces and the public internet.",
      "Apply quality-of-service policies to prioritize traffic, manage bandwidth, and control connections in real time.",
    ],
  },
  {
    id: "enterprise-communication",
    title: "Enterprise Communication",
    intro: [
      "Connect people, branches, and business systems with a flexible communications foundation. Dinstar India supplies VoIP gateways, IP-PBX systems, session border controllers, IP phones, and SIP intercoms for organizations modernizing voice communications.",
      "Build a setup around the way your teams work, whether they need dependable office telephony, connectivity between locations, or a foundation that can expand as the business grows.",
    ],
    features: [
      { title: "VoIP Gateways", description: "Bridge traditional telephony lines and IP networks to support practical migration and connectivity requirements." },
      { title: "IP-PBX Systems", description: "Bring business calling features and extension management together for teams across offices." },
      { title: "Session Border Controllers", description: "Add a controlled boundary for SIP communications, with support for interoperability and network security policies." },
      { title: "IP Phones and SIP Intercoms", description: "Equip desks, shared spaces, and entry points with communication endpoints suited to their day-to-day use." },
    ],
  },
  {
    id: "sms-solution",
    title: "DINSTARINDIA SMS Solution",
    intro: [
      "Reach customers and teams through business messaging built for timely, high-volume communication. Dinstar India SMS solutions help organizations coordinate campaigns, notifications, and service updates from a manageable messaging workflow.",
      "Choose a setup to suit your messaging volume and operational needs, with gateway options that can connect messaging activity to existing business processes.",
    ],
    features: [
      { title: "Bulk Messaging", description: "Send announcements, reminders, and campaign messages to large audiences through a streamlined workflow." },
      { title: "Business Notifications", description: "Deliver useful updates such as confirmations, alerts, and service information through SMS." },
      { title: "Gateway Connectivity", description: "Integrate SMS traffic with business applications and communication systems using suitable gateway hardware." },
      { title: "Operational Visibility", description: "Organize messaging activity to make campaign execution and follow-up easier for your team." },
    ],
  },
  {
    id: "industry-solution",
    title: "Industry Solution",
    intro: [
      "Different industries have different communication demands. Dinstar India brings together voice, messaging, and network products to help organizations create a communications setup around their workflows, locations, and customers.",
      "From customer-facing teams to distributed operations, solutions can combine gateways, IP-PBX systems, IP phones, SBCs, and SMS capabilities to support the needs of each deployment.",
    ],
    features: [
      { title: "Customer Service", description: "Support customer-facing teams with call handling, routing, and business telephony tools." },
      { title: "Distributed Offices", description: "Connect branches and teams with communication infrastructure suited to multi-location operations." },
      { title: "Business Messaging", description: "Use SMS for service updates, reminders, and other timely communication with customers or staff." },
      { title: "Deployment Support", description: "Select compatible products and get help configuring a solution for your organization's requirements." },
    ],
  },
];

const Solutions = () => {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);

    if (target instanceof HTMLDetailsElement) {
      target.open = true;
    }
  }, []);

  return (
    <Mainlayout>
      <div className="page-content bg-white">
        <div className="dz-bnr-inr style-1 overlay-white-dark" style={{ backgroundImage: `url(${IMAGES.BanerImg2.src})` }}>
          <Pagebanner maintitle="OUR SOLUTIONS" currenttitle="Solutions" parent="Home" />
        </div>
        <section className="content-inner line-img">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h2 className="title">COMMUNICATION <span className="text-primary">SOLUTIONS</span></h2>
              <div className="dz-separator style-1 text-primary"></div>
              <p>Explore communication systems shaped around the way your organization works.</p>
            </div>
            <div className={styles.solutionList}>
              {solutions.map((solution, index) => (
                <details
                  className={styles.solution}
                  id={solution.id}
                  name="solutions"
                  open={index === 0}
                  key={solution.id}
                >
                  <summary className={styles.summary}>{solution.title}</summary>
                  <div className={styles.solutionContent}>
                    {solution.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <h3 className="title">{solution.id === "call-center" ? "Call Center Service Provider in Bangalore" : `What ${solution.title} includes`}</h3>
                    {solution.id === "call-center" && <p>Simplifying your daily operations starts with choosing the right call centre solutions for your team.</p>}
                    <div className={styles.featureGrid}>
                      {solution.features.map((feature) => (
                        <article className={styles.feature} key={feature.title}>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </article>
                      ))}
                    </div>
                    {solution.functions && (
                      <div className={styles.functions}>
                        <h3 className="title">Primary Functions Executed by an SBC</h3>
                        <ol>
                          {solution.functions.map((functionDescription) => <li key={functionDescription}>{functionDescription}</li>)}
                        </ol>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Mainlayout>
  );
};

export default Solutions;