import type { IconName } from '@/component/Icon';
import solutionContent from './solutions.json';

export interface Solution {
  id: string;
  title: string;
  intro: string[];
  features: { title: string; description: string }[];
  functions?: string[];
  sourceUrl?: string;
  contentHeading?: string;
  sections?: { title: string; body: string }[];
}

export interface SolutionDesign {
  icon: IconName;
  label: string;
  headline: string;
  summary: string;
  outcomes: string[];
  flow: { title: string; description: string; icon: IconName }[];
  productSlugs: string[];
}

export const solutionDesigns: Record<string, SolutionDesign> = {
  "call-center": {
    icon: "headset", label: "CUSTOMER EXPERIENCE",
    headline: "Every conversation. A better connection.",
    summary: "Bring your agents, customers, and calling workflows together with a flexible contact center communication foundation.",
    outcomes: ["Keep customer conversations moving", "Connect calling with your CRM workflow", "Support agents across locations"],
    flow: [
      { title: "Connect", description: "Bring incoming calls from your service provider into your voice network.", icon: "globe" },
      { title: "Protect", description: "Control SIP traffic at the network boundary with a suitable SBC.", icon: "shield" },
      { title: "Route", description: "Use IVR, queues, and routing rules to direct callers to the right team.", icon: "network" },
      { title: "Engage", description: "Give agents the tools to handle, transfer, and review conversations.", icon: "headset" },
    ],
    productSlugs: ["uc200-pro", "sbc300", "mtg200"],
  },
  "enterprise-communication": {
    icon: "network", label: "CONNECTED WORKPLACES",
    headline: "One business. Connected everywhere.",
    summary: "Connect onsite and remote teams with business conferencing, webinars, online meetings, and flexible communication platforms.",
    outcomes: ["Connect internal and external audiences", "Support remote collaboration", "Bring meetings and conferencing together"],
    flow: [
      { title: "Your teams", description: "Desk phones, analog endpoints, and branch offices start the conversation.", icon: "building" },
      { title: "Voice core", description: "An IP PBX brings extensions and business calling functions together.", icon: "server" },
      { title: "Network edge", description: "VoIP gateways bridge legacy lines while an SBC manages SIP interconnection.", icon: "gateway" },
      { title: "Connected offices", description: "A deployment designed around your locations supports day-to-day collaboration.", icon: "network" },
    ],
    productSlugs: ["uc350-uc350-pro", "sbc1000", "dag2000-32s-ge"],
  },
  "sms-solution": {
    icon: "message", label: "BUSINESS MESSAGING",
    headline: "The right message. At the right moment.",
    summary: "Create a manageable messaging workflow for service notifications, customer updates, and business campaigns.",
    outcomes: ["Coordinate customer notifications", "Organize campaign delivery", "Connect messaging to business workflows"],
    flow: [
      { title: "Business event", description: "Start with a service update, reminder, or planned campaign.", icon: "spark" },
      { title: "Application", description: "Prepare recipients and messages in your business application.", icon: "layers" },
      { title: "Messaging gateway", description: "Select suitable SMS gateway connectivity for your volume and deployment.", icon: "gateway" },
      { title: "Your audience", description: "Deliver updates and organize the follow-up process.", icon: "message" },
    ],
    productSlugs: [],
  },
  "industry-solution": {
    icon: "building", label: "PURPOSE-BUILT DEPLOYMENTS",
    headline: "Built around your industry. Ready for your people.",
    summary: "Shape voice and messaging infrastructure around the needs of enterprise offices, healthcare, education, and hospitality.",
    outcomes: ["Match technology to your workflow", "Connect front desks and operations", "Plan a coordinated deployment"],
    flow: [
      { title: "Understand", description: "Map your locations, users, existing systems, and daily communication needs.", icon: "building" },
      { title: "Design", description: "Choose a mix of voice, gateway, and application capabilities.", icon: "layers" },
      { title: "Integrate", description: "Plan connections with business systems and supported applications.", icon: "network" },
      { title: "Deploy", description: "Configure the solution and prepare your team for everyday use.", icon: "check" },
    ],
    productSlugs: ["uc200-pro", "pms", "attendant-console"],
  },
};
export const solutions: Solution[] = solutionContent;
