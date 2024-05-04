// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
  people01,
  people02,
  people03,
  send,
  shield,
  star,
} from "../../../assets";
export default function handler(req, res) {
  const data = {
    features: [
      {
        id: "feature-1",
        icon: star,
        title: "Simple CRM",
        content:
          "A user-friendly solution for a complete customer overview using 360-degree view and collaboration tools with just a few clicks away.",
      },
      {
        id: "feature-2",
        icon: shield,
        title: "Custom CRM",
        content:
          "Customize your CRM effortlessly through Codeless Solution, utilizing Intuitive Drag and Drop functionality to easily design Fields, Reports, Dashboards, Custom Views, and Layouts.",
      },
      {
        id: "feature-3",
        icon: send,
        title: "Integrated CRM",
        content:
          "Build customer trust and loyalty with responsive service through App Integrations. Foster seamless communication, streamlined processes, agent productivity and efficient data sharing across omnichannel and cross functional tools.",
      },
      {
        id: "feature-4",
        icon: send,
        title: "Mobile CRM",
        content:
          "Having a field service team? No Problem. Manage customer and make data driven decisions with no limits. - Anywhere, Anytime",
      },
    ],

    managementList: [
      { id: "f1", content: "Round Robin Assignment" },
      { id: "f2", content: "G-Suite and O-365 Plugins" },
      { id: "f3", content: "Lead Qualification Cycle" },
      { id: "f4", content: "API Integration with webform" },
      { id: "f5", content: "Native Google form Integration" },
      { id: "f6", content: "Lead score monitoring" },
    ],

    supportFeature: [
      {
        id: "feature-1",
        icon: star,
        title: "ADVANCED TICKETING",
        sub_desc: "Deliver personalized support fast",
        content:
          "Manage, prioritize, and resolve tickets at scale with a unified workspace that helps agents move quickly, focus on the right issues, and deliver personalized support.",
      },
      {
        id: "feature-2",
        icon: shield,
        title: "ANALYTICS",
        sub_desc: "Proactive AI-driven insights to optimize support",
        content:
          "Surface potential issues and optimize support operations with proactive AI-driven insights. Unleash the power of generative AI to analyze interactions constantly, monitor quality, and realize a lower TCO.",
      },
      {
        id: "feature-3",
        icon: send,
        title: "AI-POWERED AUTOMATIONS",
        sub_desc:
          "Optimize operations with AI-powered automations and workflows",
        content:
          "Eliminate redundancy and enable your teams to run on autopilot with AI-powered automations. Improve productivity and efficiency with generative AI that assists agents at every step, enabling them to deliver accurate resolutions.",
      },
      {
        id: "feature-4",
        icon: send,
        title: "COLLABORATION",
        sub_desc: "Bring teams together for the future of hybrid work",
        content:
          "Empower agents with collaboration tools to help them engage with the right experts from cross-functional teams and provide faster, more consistent service on complex inquiries.",
      },
    ],

    feedback: [
      {
        id: "feedback-1",
        content:
          "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
      },
      {
        id: "feedback-2",
        content:
          "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
      },
      {
        id: "feedback-3",
        content:
          "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
      },
    ],

    stats: [
      {
        id: "stats-1",
        title: "User Active",
        value: "3800+",
      },
      {
        id: "stats-2",
        title: "Trusted by Company",
        value: "230+",
      },
      {
        id: "stats-3",
        title: "Transaction",
        value: "$230M+",
      },
    ],
  };
  res.status(200).json({ data });
}
