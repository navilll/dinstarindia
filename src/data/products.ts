import type { StaticImageData } from "next/image";
import mtg1000b1 from "../assets/products/mtg1000b/th1.png";
import mtg1000b2 from "../assets/products/mtg1000b/th2.png";
import mtg1000b3 from "../assets/products/mtg1000b/th3.png";
import mtg1000b4 from "../assets/products/mtg1000b/th4.png";
import mtg1000b5 from "../assets/products/mtg1000b/th5.jpg";
import mtg2001 from "../assets/products/mtg200/th1.png";
import mtg2002 from "../assets/products/mtg200/th2.png";
import mtg2003 from "../assets/products/mtg200/th3.png";
import mtg2004 from "../assets/products/mtg200/th4.png";
import mtg2005 from "../assets/products/mtg200/th5.jpg";
import mtg2006 from "../assets/products/mtg200/th6.jpg";
import mtg20001 from "../assets/products/mtg2000/th1.png";
import mtg20002 from "../assets/products/mtg2000/th2.png";
import mtg20003 from "../assets/products/mtg2000/th3.png";
import mtg20004 from "../assets/products/mtg2000/th4.jpg";
import mtg20005 from "../assets/products/mtg2000/th5.png";
import mtg2000b1 from "../assets/products/mtg200b/th1.png";
import mtg2000b2 from "../assets/products/mtg200b/th2.png";
import mtg2000b3 from "../assets/products/mtg200b/th3.png";
import mtg2000b4 from "../assets/products/mtg200b/th4.jpg";
import mtg30001 from "../assets/products/mtg3000/th1.png";
import mtg30002 from "../assets/products/mtg3000/th2.png";
import mtg30003 from "../assets/products/mtg3000/th3.jpg";
import mtg30004 from "../assets/products/mtg3000/th4.png";
import mtg30005 from "../assets/products/mtg3000/th5.png";
import mtg3000t1 from "../assets/products/mtg3000t/th1.png";
import mtg3000t2 from "../assets/products/mtg3000t/th2.jpg";
import mtg3000t3 from "../assets/products/mtg3000t/th3.png";
import mtg3000t4 from "../assets/products/mtg3000t/th4.png";

export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: StaticImageData;
  gallery: StaticImageData[];
  overview: string[];
  specifications?: { label: string; value: string }[];
  features?: string[];
  highlights?: string[];
}

const digitalGateway = "Digital VoIP Gateway";
const contactForDetails = "Contact Dinstar India for model-specific specifications, configuration options, and a datasheet.";

export const products: Product[] = [
  {
    slug: "mtg200",
    name: "MTG200",
    category: digitalGateway,
    description: "Cost-effective VoIP trunk gateway for SMEs, with 1/2/4 E1/T1 port options.",
    image: mtg2001,
    gallery: [mtg2001, mtg2002, mtg2003, mtg2004, mtg2005, mtg2006],
    overview: [
      "The Dinstar MTG200 Digital VoIP Gateway with 1/2/4 E1/T1 ports enables migration from legacy PSTN and PBX systems to modern VoIP networks while maintaining PSTN connectivity.",
      "Compact and high-performance, the MTG200 is suited to SMEs and businesses. It is compatible with platforms including Asterisk, Elastix, Trixbox, and FreeSWITCH, and supports ISDN PRI, SS7, and R2 MFC protocols.",
      "Available through authorized Dinstar distribution in India, the MTG200 provides a secure, scalable communications option for organizations integrating legacy telephony with VoIP.",
    ],
    highlights: [
      "1/2/4 E1/T1 ports with RJ48C interface",
      "Up to 60 simultaneous calls",
      "Flexible routing and multiple SIP trunks",
      "Compatibility with Asterisk, FreeSWITCH, and mainstream VoIP platforms",
      "More than 10 years of experience integrating with legacy PBXs and PSTN networks",
    ],
    specifications: [
      { label: "Port options", value: "1, 2, or 4 E1/T1 ports" },
      { label: "Interface", value: "RJ48C" },
      { label: "Simultaneous calls", value: "Up to 60" },
      { label: "SIP accounts", value: "Up to 256" },
      { label: "Signaling protocols", value: "ISDN PRI, QSIG, optional SS7, and R2 MFC" },
      { label: "DTMF", value: "RFC2833, SIP Info, or in-band" },
      { label: "Fax and data", value: "T.38, pass-through fax, modem, and POS support" },
      { label: "VoIP platforms", value: "Asterisk, Elastix, Trixbox, FreeSWITCH, and mainstream platforms" },
    ],
    features: [
      "SIP v2.0 and SIP/IMS registration with up to 256 SIP accounts",
      "ISDN PRI, QSIG, optional ISDN SS7, and R2 MFC",
      "DTMF via RFC2833, SIP Info, or in-band",
      "VLAN 802.1p/q and dynamic NAT with Rport",
      "T.38 and pass-through fax; support for modem and POS machines",
      "Overlapping dialing, dialing rules, and PSTN call statistics",
      "Voice codecs: G.711 a/u law, G.723.1, G.729AB, iLBC, and AMR",
      "Echo cancellation, silence suppression, CNG, VAD, and jitter buffer",
      "Web GUI configuration, data backup and restore, and firmware upgrade via TFTP or web",
      "SNMP v1/v2/v3, syslog, network capture, and centralized management support",
    ],
  },
  {
    slug: "mtg1000b",
    name: "MTG1000B",
    category: digitalGateway,
    description: contactForDetails,
    image: mtg1000b1,
    gallery: [mtg1000b1, mtg1000b2, mtg1000b3, mtg1000b4, mtg1000b5],
    overview: [],
  },
  {
    slug: "mtg2000",
    name: "MTG2000",
    category: digitalGateway,
    description: contactForDetails,
    image: mtg20001,
    gallery: [mtg20001, mtg20002, mtg20003, mtg20004, mtg20005],
    overview: [],
  },
  {
    slug: "mtg2000b",
    name: "MTG2000B",
    category: digitalGateway,
    description: contactForDetails,
    image: mtg2000b1,
    gallery: [mtg2000b1, mtg2000b2, mtg2000b3, mtg2000b4],
    overview: [],
  },
  {
    slug: "mtg3000",
    name: "MTG3000",
    category: digitalGateway,
    description: contactForDetails,
    image: mtg30001,
    gallery: [mtg30001, mtg30002, mtg30003, mtg30004, mtg30005],
    overview: [],
  },
  {
    slug: "mtg3000t",
    name: "MTG3000T",
    category: digitalGateway,
    description: contactForDetails,
    image: mtg3000t1,
    gallery: [mtg3000t1, mtg3000t2, mtg3000t3, mtg3000t4],
    overview: [],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);