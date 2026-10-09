import blog1 from "../assets/blogs/1.webp";
import blog2 from "../assets/blogs/2.webp";
import blog3 from "../assets/blogs/3.webp";
import blog4 from "../assets/blogs/4.webp";
import blog5 from "../assets/blogs/5.webp";
import blog6 from "../assets/blogs/6.webp";
import blog7 from "../assets/blogs/7.webp";
import blog8 from "../assets/blogs/8.webp";
import blog9 from "../assets/blogs/9.webp";
import blog10 from "../assets/blogs/10.webp";
import blog11 from "../assets/blogs/11.webp";
import blog12 from "../assets/blogs/12.webp";
import blog13 from "../assets/blogs/13.webp";
import blog14 from "../assets/blogs/14.webp";
import blog15 from "../assets/blogs/15.webp";
import blog16 from "../assets/blogs/16.webp";
import blog17 from "../assets/blogs/17.webp";
import blog18 from "../assets/blogs/18.webp";
import blog19 from "../assets/blogs/19.webp";
import blog20 from "../assets/blogs/20.webp";
import blog21 from "../assets/blogs/21.webp";
import blog22 from "../assets/blogs/22.webp";
import blog23 from "../assets/blogs/23.webp";
import blog24 from "../assets/blogs/24.webp";
import blog25 from "../assets/blogs/25.webp";
import blog26 from "../assets/blogs/26.webp";
import blog27 from "../assets/blogs/27.webp";
import blog28 from "../assets/blogs/28.webp";
import blog29 from "../assets/blogs/29.webp";
import blog30 from "../assets/blogs/30.webp";
import blog31 from "../assets/blogs/31.webp";
import blog32 from "../assets/blogs/32.webp";
import blogPostsJson from "./blogs.json";
import type { StaticImageData } from "next/image";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  image: string | null;
}

export const blogPosts: BlogPost[] = blogPostsJson;

const blogImages: Record<string, StaticImageData> = {
  "1.webp": blog1,
  "2.webp": blog2,
  "3.webp": blog3,
  "4.webp": blog4,
  "5.webp": blog5,
  "6.webp": blog6,
  "7.webp": blog7,
  "8.webp": blog8,
  "9.webp": blog9,
  "10.webp": blog10,
  "11.webp": blog11,
  "12.webp": blog12,
  "13.webp": blog13,
  "14.webp": blog14,
  "15.webp": blog15,
  "16.webp": blog16,
  "17.webp": blog17,
  "18.webp": blog18,
  "19.webp": blog19,
  "20.webp": blog20,
  "21.webp": blog21,
  "22.webp": blog22,
  "23.webp": blog23,
  "24.webp": blog24,
  "25.webp": blog25,
  "26.webp": blog26,
  "27.webp": blog27,
  "28.webp": blog28,
  "29.webp": blog29,
  "30.webp": blog30,
  "31.webp": blog31,
  "32.webp": blog32,
};

export function getBlogImage(filename: string | null) {
  return filename ? blogImages[filename] : undefined;
}

export interface BlogArticleSection {
  heading: string;
  paragraphs: string[];
}

const articleExpansions: Array<{
  matches: (title: string) => boolean;
  sections: BlogArticleSection[];
}> = [
  {
    matches: (title) => /FXO|FXS|analog|hybrid/i.test(title),
    sections: [
      {
        heading: "Start with the equipment you already have",
        paragraphs: [
          "Before selecting a gateway, list every connection that needs to remain available: carrier lines, desk phones, fax machines, intercoms, and any existing PBX. FXS connects analog endpoints to an IP voice service, while FXO connects an analog carrier line or PBX extension to an IP network. Hybrid deployments can combine both kinds of connection, but the exact port mix should follow the inventory rather than a guess.",
          "Also record how calls move today. Note which numbers are inbound, how staff make outbound calls, which extensions need to reach each other, and what should happen if the IP link is unavailable. This simple call-flow map helps the implementation team preserve familiar behavior during a migration.",
        ],
      },
      {
        heading: "Check capacity and compatibility",
        paragraphs: [
          "Port count and concurrent calls are different sizing questions. A site may have many attached lines but only a smaller number of simultaneous conversations; estimate both from real usage and allow room for busy periods. Confirm the signaling, codecs, dial plan, caller ID expectations, and SIP settings with the PBX or service provider before deployment.",
          "Test the less frequent but important cases as well: fax behavior if fax is in scope, emergency and after-hours routing, inbound caller identification, and recovery after a network interruption. A staged cutover with a rollback plan reduces disruption and gives staff time to verify everyday call flows.",
        ],
      },
    ],
  },
  {
    matches: (title) => /E1|T1|PRI|digital voip/i.test(title),
    sections: [
      {
        heading: "Bridge digital trunks with a clear migration plan",
        paragraphs: [
          "Digital voice deployments often connect an existing PBX or carrier circuit to SIP infrastructure. Start by confirming the circuit type, signaling, framing, and channel configuration with both ends of the connection. These details must agree before calls can pass reliably; they should be documented alongside the routing rules and the teams responsible for each side.",
          "The gateway’s channel capacity should reflect expected simultaneous calls, not only the total number of users. Review peak-hour demand and planned growth, then validate that the network can support the expected voice traffic without competing with other critical services.",
        ],
      },
      {
        heading: "Validate call quality and recovery",
        paragraphs: [
          "A pre-production test should cover inbound and outbound calls, number presentation, busy and unanswered handling, and the routing of calls between the legacy PBX and SIP endpoints. Check audio in both directions and test representative call volumes so problems are found before a full cutover.",
          "Finally, agree on what happens during a circuit, gateway, or network outage. Keep configuration backups, write down escalation contacts, and rehearse the recovery steps. Monitoring and clear ownership make it easier to identify whether an issue sits with the carrier, the IP network, the PBX, or the gateway.",
        ],
      },
    ],
  },
  {
    matches: (title) => /session border|SBC|security|safeguard|data security|compliance/i.test(title),
    sections: [
      {
        heading: "Treat the SIP boundary as part of the network design",
        paragraphs: [
          "A Session Border Controller sits between voice networks and helps administrators apply consistent controls to SIP sessions. Begin with a diagram of the trusted and untrusted networks, the SIP trunks that cross them, and the systems that need to communicate. Define which traffic is expected and restrict access to those known paths rather than exposing voice services broadly.",
          "Review authentication, encryption options, address and port rules, administrative access, and software maintenance as part of the deployment. Requirements depend on the organization’s topology and policies, so have the network and security teams verify the final design instead of relying on a default configuration.",
        ],
      },
      {
        heading: "Monitor, document, and review",
        paragraphs: [
          "Useful operational visibility includes registration status, call setup failures, resource usage, and changes to routing or access rules. Retain only the logs needed for troubleshooting and applicable business requirements, and ensure access to them is controlled.",
          "Security and compliance are ongoing responsibilities. Assign owners for updates, configuration backups, incident escalation, and periodic access reviews. Test any change in a controlled window, and confirm that the safeguards do not interrupt legitimate calls or emergency procedures.",
        ],
      },
    ],
  },
  {
    matches: (title) => /IP PBX|UC200/i.test(title),
    sections: [
      {
        heading: "Design the phone system around how people work",
        paragraphs: [
          "An IP PBX brings extensions, users, and calling rules together, so begin by documenting teams, locations, working hours, and the way calls should reach each group. Decide how extensions, voicemail, queues, transfers, and after-hours handling should work before configuring individual accounts.",
          "Estimate the number of users and simultaneous calls, and include remote staff and future additions in the plan. Confirm that phones, softphones, network connectivity, and SIP trunks are compatible with the intended setup. A small pilot helps uncover usability or call-flow gaps early.",
        ],
      },
      {
        heading: "Keep the system manageable as it grows",
        paragraphs: [
          "Use clear naming, role-based permissions, and a documented process for adding or removing users. These habits reduce configuration drift and make routine changes easier to review. Make sure administrators know how to back up settings and restore service if a change has an unintended effect.",
          "After launch, review call quality and user feedback alongside operational needs. Update routing when teams or business hours change, and periodically test voicemail, transfers, external calling, and recovery procedures so the system remains dependable rather than merely functional on day one.",
        ],
      },
    ],
  },
  {
    matches: (title) => /GSM|mobile|SMS|text message/i.test(title),
    sections: [
      {
        heading: "Plan for coverage, routing, and responsible use",
        paragraphs: [
          "Cellular connectivity varies by location and carrier. Before deploying a GSM gateway, verify signal quality where the equipment will operate, confirm supported networks and SIM arrangements with the carrier, and decide how calls or messages should be routed when a channel is busy or unavailable.",
          "For messaging, define the purpose and audience before choosing a channel. Keep consent, sender identification, opt-out handling, and applicable local rules in view. SMS can suit time-sensitive notifications, while email may be more appropriate for longer information; the right choice depends on the recipient and the communication being sent.",
        ],
      },
      {
        heading: "Measure outcomes and maintain the deployment",
        paragraphs: [
          "Track delivery or call completion, failed attempts, response patterns, and the cost of the traffic that matters to the business. Use those observations to adjust routing and capacity rather than assuming that one configuration will suit every site or campaign.",
          "Document SIM ownership, escalation contacts, access controls, and recovery steps. Review carrier terms and applicable regulations with the appropriate internal owner, and test changes before relying on the gateway for important customer or operational communications.",
        ],
      },
    ],
  },
  {
    matches: (title) => /call center|call centre|customer engagement|voice vs|AI revolution/i.test(title),
    sections: [
      {
        heading: "Connect communication design to the customer journey",
        paragraphs: [
          "A contact operation works best when customers can reach the right team without unnecessary transfers. Map the common reasons people get in touch, the hours and languages that need coverage, and the steps agents follow to resolve each request. This helps determine how queues, routing, callbacks, and escalation should be configured.",
          "Estimate busy-period demand as well as average traffic, and include the network, carrier, and staffing capacity needed to handle it. If voice, SMS, or other channels are combined, make sure agents can see enough context to respond consistently and that handoffs between channels are clear.",
        ],
      },
      {
        heading: "Improve service with measured, responsible changes",
        paragraphs: [
          "Useful measures can include wait time, abandonment, first-contact resolution, and customer feedback, interpreted alongside the complexity of the work. Review trends with frontline staff: a change that reduces queue time but makes a task harder to complete may not improve the overall experience.",
          "Automation and AI can assist with repetitive steps, but should have clear limits, appropriate human escalation, and review by the teams accountable for customer outcomes. Protect personal information, set retention and access rules, and test new workflows with a small group before expanding them.",
        ],
      },
    ],
  },
  {
    matches: (title) => /cost|affordable|budget|saving|reduce/i.test(title),
    sections: [
      {
        heading: "Compare total operating cost, not just purchase price",
        paragraphs: [
          "A realistic comparison includes hardware, licenses or service charges, carrier usage, network changes, installation, support, and the staff time required to operate the solution. Existing equipment that can be retained may reduce migration effort, but only if it remains compatible and supportable.",
          "Use actual traffic and call patterns to estimate capacity. Under-sizing can create congestion and service interruptions; over-sizing can leave capacity unused. Identify assumptions in the estimate and revisit them when locations, call volumes, or business requirements change.",
        ],
      },
      {
        heading: "Make savings measurable",
        paragraphs: [
          "Before changing a system, record a baseline for the costs and service measures the project is intended to improve. After rollout, compare like-for-like periods and account for changes in traffic or staffing. This makes it easier to distinguish a genuine operational improvement from a temporary fluctuation.",
          "Keep reliability, security, and support in the evaluation. The lowest initial cost is not necessarily the best value if outages, difficult maintenance, or poor interoperability create additional work later. A phased deployment gives the organization a chance to validate both the financial assumptions and the user experience.",
        ],
      },
    ],
  },
  {
    matches: (title) => /distributor|support|market leadership|why dinstar/i.test(title),
    sections: [
      {
        heading: "Evaluate the complete solution and support path",
        paragraphs: [
          "Selecting communications equipment is only one part of a successful project. A useful partner should understand the existing PBX, carriers, network, and business call flows, then help confirm product fit and interoperability before a commitment is made.",
          "Ask how implementation questions, warranty matters, configuration assistance, and escalation are handled. Clarify what is included, which teams own each step, and what information will be needed if troubleshooting is required. Clear expectations help avoid delays after equipment arrives.",
        ],
      },
      {
        heading: "Prepare for a smooth deployment",
        paragraphs: [
          "Share a current inventory of interfaces, capacity, software versions, and required call behavior. Where possible, test the proposed configuration with the actual PBX and carrier environment. Keep a written record of settings and acceptance checks so the deployed system can be supported consistently.",
          "Plan training and handover for the people who will maintain the service. Confirm backup and recovery procedures, support contacts, and the process for future changes. These operational details make a communication solution easier to sustain as the organization grows.",
        ],
      },
    ],
  },
];

export function getBlogArticleSections(title: string, category: string) {
  const article = articleExpansions.find(({ matches }) => matches(title));

  if (article) {
    return article.sections;
  }

  return [
    {
      heading: `Where ${category.toLowerCase()} fits`,
      paragraphs: [
        "The right communication setup depends on the systems already in place, the people who rely on them, and the call patterns the organization needs to support. Start with an inventory of interfaces, locations, peak usage, and critical call flows before comparing technical options.",
        "This assessment gives the project a practical baseline. It also makes it easier to identify which parts can be retained, where interoperability testing is needed, and what a successful migration should look like for users and support teams.",
      ],
    },
    {
      heading: "Move from requirements to a reliable rollout",
      paragraphs: [
        "Agree on capacity, routing, security, and ownership with the relevant teams before deployment. Test representative inbound and outbound calls, failure scenarios, and the devices people use every day. Document the configuration and any decisions that will affect future maintenance.",
        "A phased rollout creates room to gather feedback and correct issues before they affect every user. After launch, review service quality and operational feedback regularly, and update the plan as the organization’s network and communication needs evolve.",
      ],
    },
  ];
}

export function getBlogGuidance(category: string) {
  const guidance: Record<string, { title: string; points: string[] }> = {
    "Analog VoIP": {
      title: "Plan the analog-to-IP transition",
      points: [
        "Count the analog lines, phones, fax machines, and PBX ports that must remain in service.",
        "Choose the right mix of FXS and FXO ports and allow for expected call concurrency.",
        "Test SIP registration, dial plans, caller ID, and failover with the existing phone system.",
      ],
    },
    "Digital VoIP Gateways": {
      title: "Size a digital gateway deployment",
      points: [
        "Confirm the E1/T1 or PRI signaling and framing requirements with the carrier and PBX.",
        "Estimate concurrent channels, codecs, and peak traffic before selecting capacity.",
        "Validate routing, redundancy, and monitoring in a representative test environment.",
      ],
    },
    "Session Border Controllers": {
      title: "Build a secure SIP edge",
      points: [
        "Map trusted and untrusted network boundaries and the SIP trunks that cross them.",
        "Size session capacity for normal traffic as well as expected peaks and failover.",
        "Review access controls, topology hiding, encryption, and logging with the security team.",
      ],
    },
    "IP PBX": {
      title: "Prepare for a dependable IP PBX",
      points: [
        "Estimate users, extensions, simultaneous calls, and remote endpoints.",
        "Check SIP phone and trunk interoperability before migrating users.",
        "Plan backups, permissions, call routing, and a clear recovery process.",
      ],
    },
    "Call Centers": {
      title: "Design around customer experience",
      points: [
        "Forecast peak call and message volumes and the staffing needed to handle them.",
        "Connect communication channels with the CRM and reporting workflows agents already use.",
        "Set access, retention, and escalation policies that meet applicable compliance needs.",
      ],
    },
    "VoIP Gateways": {
      title: "Choose a gateway that fits the network",
      points: [
        "Inventory legacy interfaces such as analog, GSM, and E1/T1 before comparing models.",
        "Match port and concurrent-call capacity to current demand and planned growth.",
        "Confirm SIP interoperability, routing options, security controls, and local support.",
      ],
    },
    "Business Communication": {
      title: "Make support part of the solution",
      points: [
        "Document the current PBX, carrier connections, endpoints, and critical call flows.",
        "Define response times, escalation contacts, and remote troubleshooting expectations.",
        "Keep configuration backups and test recovery before a service interruption occurs.",
      ],
    },
  };

  return guidance[category] ?? guidance["VoIP Gateways"];
}
