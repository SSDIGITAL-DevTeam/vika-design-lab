import type { SiteContent } from "./types";

// English copy — tone and messaging aligned with the current content/zh.ts.
export const en: SiteContent = {
  langTag: "en",

  brand: {
    name: "Vika Design Lab",
    tagline:
      "Designed for your home, considered for your life. Every detail exists to make living more comfortable, more at ease.",
  },

  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    portfolio: "Portfolio",
    recruitment: "Careers",
    contact: "Contact",
  },

  common: {
    comingSoon: "Coming Soon",
    designSwitchLabel: "Design",
    skipToContent: "Skip to content",
    whatsappTooltip: "Chat with us on WhatsApp",
    whatsappPrefill:
      "Hi Vika Design Lab! I'd like to find out more about your renovation services.",
  },

  home: {
    heroEyebrow: "Singapore Interior Design & Renovation",
    heroHeadline: "Designed for Your Home, Considered for Your Life. Every Detail Exists to Make Living More Comfortable, More at Ease.",
    heroSub:
      "If your project runs more than one month late, you get a full refund. It's written into your contract — for a renovation you can feel at ease about.",
    cta: { primary: "Get a Free Quote", secondary: "See Our Work" },
    stats: [
      { value: "400+", label: "Homes Completed" },
      { value: "5", label: "Years in Singapore" },
      { value: "5-Year", label: "Workmanship Warranty" },
    ],
    intro: {
      heading: "Designed for How You Actually Live",
      body: [
        "A home is more than how it looks in photos — it should fit how you actually live. Over five years and 400-plus completed projects, we've helped HDB, condo, and landed homeowners across Singapore turn empty spaces into homes that truly feel right to live in.",
        "Every project is led by two dedicated designers, and every timeline we agree on is put in writing — a promise we follow through with action.",
      ],
    },
    usp: {
      eyebrow: "Our Difference",
      heading: "Why Homeowners Choose Vika",
      sub: "Six reasons more homeowners in Singapore are choosing Vika — and recommending us to the people they care about.",
      cards: [
        {
          icon: "shield",
          title: "Full Refund If Your Project Runs Late",
          body: "If your project is delayed by more than one month, you get a full refund — guaranteed in writing, in your contract.",
        },
        {
          icon: "users",
          title: "Two Designers on Every Project",
          body: "Every project is handled by two dedicated designers — for smoother communication, design continuity, and less disruption if someone's away.",
        },
        {
          icon: "cube",
          title: "3D Immersive Design Preview",
          body: "Before a single wall is touched, you'll walk through your future home in full 3D, so you can get a feel for the space in advance.",
        },
        {
          icon: "clock",
          title: "Quote in Under a Week",
          body: "Most clients receive a detailed, itemised quote within a week of our first meeting.",
        },
        {
          icon: "tag",
          title: "Considered Pricing, Without Compromise",
          body: "We keep pricing fair and considered — good design shouldn't have to mean a high price tag.",
        },
        {
          icon: "badge",
          title: "5-Year Workmanship Warranty",
          body: "Every project comes with a 5-year workmanship warranty, so you can stay at ease after moving in — if any issue comes up, we're still here to help.",
        },
      ],
    },
    servicesOverview: {
      heading: "Everything Your Home Needs, Under One Roof",
      tiles: [
        {
          title: "Interior Design",
          desc: "Space planning, concept development, material selection.",
        },
        {
          title: "Full Renovation Works",
          desc: "Carpentry, electrical, plumbing, tiling, painting.",
        },
        {
          title: "3D Design Visualisation",
          desc: "Walk through your home before construction begins.",
        },
        {
          title: "BTO & Resale Packages",
          desc: "Bundled solutions for new and existing flats.",
        },
        {
          title: "Speciality Spaces",
          desc: "Pet-friendly homes, kids' themed rooms, smart home integration.",
        },
      ],
      cta: "Explore All Our Services",
    },
    portfolioPreview: {
      eyebrow: "Selected Work",
      heading: "Homes we've transformed across Singapore.",
      sub: "HDB, condo, and landed homes across Singapore. A cross-section of completed projects, each one built around its owners.",
      cta: "Explore Full Portfolio",
    },
    testimonials: {
      eyebrow: "Client Reviews",
      heading: "What They Say About Us",
      sub: "Real feedback, shared after they moved in.",
      items: [
        {
          quote:
            "We were so worried after hearing about renovation horror stories in Singapore. Vika's team not only finished on time — they kept us updated every step of the way. Our HDB flat looks completely transformed.",
          author: "Lim Family",
          meta: "Resale HDB, Serangoon",
        },
        {
          quote:
            "As a business owner, I don't have time to micromanage a renovation. Vika's team took complete ownership. The quality of materials and workmanship exceeded what I expected at this price point.",
          author: "Mr Chen",
          meta: "Condo, Bishan",
        },
        {
          quote:
            "We're in our 60s and were worried about being misled. Vika took the time to explain everything clearly, never rushed us, and the final result is a home we're proud to show to our grandchildren.",
          author: "Mdm Wong",
          meta: "Resale HDB, Tampines",
        },
      ],
    },
    partners: {
      eyebrow: "Trusted Partners",
      heading: "The brands behind every project.",
      sub: "We work with certified suppliers and established brands. Every material, fixture, and finish is quality-checked before it goes into your home.",
    },
    trust: {
      heading: "Registered, certified, and insured for your peace of mind.",
      badges: [
        {
          name: "Qanvast Supertrust Partner",
          note: "Project insurance up to SGD 50,000",
        },
        { name: "RCMA Certified", note: "In progress", comingSoon: true },
        { name: "CaseTrust Singapore", note: "In progress", comingSoon: true },
        { name: "BizSafe Certified", note: "In progress", comingSoon: true },
        {
          name: "HDB Renovation Licensed",
          note: "In progress",
          comingSoon: true,
        },
      ],
    },
  },

  about: {
    title: "Why Choose Vika Design Lab?",
    subtitle:
      "Vika Design Lab was founded on a simple idea: homeowners in Singapore deserve a more transparent, more accountable, and more reassuring renovation experience.",
    storyLabel: "Our Story",
    story: [
      "It started with one designer, and years spent watching the same story repeat: homeowners paying their deposit in good faith, then waiting months with little to show for it.",
      "The full-refund guarantee was born from that gap — not a marketing line, but a written commitment. If your renovation runs more than one month late due to our oversight, you get a full refund. In your contract.",
      "Five years and 400+ homes later, we've built a brand homeowners recommend to their families and friends — because it delivered what it promised.",
    ],
    founderQuote: {
      quote:
        "It reflects our commitment to standing behind every promise we make — and our belief that good design has to be built on trust.",
      author: "Dion, Founder of Vika Design Lab",
    },
    missionLabel: "Our Mission",
    mission:
      "To provide high-quality interior design with fair, transparent pricing — so more homeowners in Singapore can have the home they've been dreaming of, without compromising on materials or workmanship.",
    visionLabel: "Our Vision",
    vision:
      "To become the most trusted interior design company in Singapore: the name homeowners recommend to the people they care about most.",
    process: {
      heading: "Our Promise Is Backed by a Process",
      body: [
        "On-time delivery isn't left to chance — it comes from clear project management, regular site visits, and transparent communication throughout construction.",
        "Every project is followed through by a dedicated team — from site inspections to contractor coordination to progress tracking — so each phase moves forward smoothly. If anything changes, we'll reach out first, explain what's happening, and lay out a clear plan, so you're never left guessing.",
        "We aim to deliver every project on time, through solid project management and ongoing communication at every stage. If the schedule needs to shift, we'll tell you in advance and confirm the next steps — not leave you waiting to find out.",
      ],
    },
    designers: {
      heading: "Meet Our Designers",
      intro:
        "Care, attention, and patience aren't just words here — they describe how every project runs, from our first conversation through design, construction, and final handover.",
      team: [
        { name: "Dion Yeoh", role: "Lead Designer" },
        { name: "Zheng Li Yeoh", role: "Senior Designer" },
        { name: "Edward Kong", role: "Senior Designer" },
        { name: "Luke", role: "Designer" },
      ],
    },
  },

  services: {
    title: "Our Services",
    subtitle:
      "From design to delivery, one team sees it through. Interior design, full renovation, 3D visualisation, and renovation packages — all under a single contract.",
    coreEyebrow: "What We Offer",
    coreHeading: "Four services, built around your space.",
    coreSub:
      "Whether you're renovating a new home, refreshing an old one, or just want to understand your budget range first, we offer clear, complete service options.",
    core: [
      {
        icon: "home",
        title: "Interior Design",
        body: "Design starts with understanding how you actually live — storage needs, daily routines, pets, working from home. The space should fit your life, not the other way around.",
        includedLabel: "What's included",
        included: [
          "Lifestyle consultation",
          "Concept and moodboard",
          "Space planning",
          "Material selection",
          "Full 3D walkthrough",
        ],
      },
      {
        icon: "shield",
        title: "Full Renovation Works",
        body: "One team sees your project from construction through to delivery. We manage carpentry, electrical, plumbing, tiling, and painting under one roof, so the process stays transparent and easy to follow.",
        includedLabel: "Trades we cover",
        included: [
          "Carpentry",
          "Electrical",
          "Plumbing",
          "Tiling",
          "Painting",
          "Rectification works",
        ],
      },
      {
        icon: "tag",
        title: "Renovation Packages",
        body: "A clearer way to plan your budget and scope. Common renovation needs bundled into a straightforward package, so you know roughly what to expect before committing to a full design brief.",
        includedLabel: "Package types",
        included: [
          "BTO Full-House",
          "Resale HDB",
          "Partial (kitchen or bathroom)",
          "Condo Package",
        ],
      },
      {
        icon: "cube",
        title: "3D Design Visualisation",
        body: "See your future home before construction starts. A full 3D walkthrough helps you understand the proportions, materials, and feel of the space ahead of time.",
        includedLabel: "Why it matters",
        included: [
          "Catch layout issues early",
          "See materials in actual context",
          "Fewer change orders",
          "Full clarity before build",
        ],
      },
    ],
    specialityEyebrow: "Speciality Services",
    specialityHeading: "Spaces designed around how you actually live.",
    speciality: [
      {
        icon: "paw",
        title: "Pet-Friendly Design",
        body: "Designed around how your pets actually live — durable surfaces, built-in cat shelves and walkways, worked naturally into the space rather than added on afterward.",
      },
      {
        icon: "star",
        title: "Kids' Themed Rooms",
        body: "A room built around your child's interests today, with enough flexibility to grow with them — so it doesn't need a full redo down the road.",
      },
      {
        icon: "bolt",
        title: "Smart Home Integration",
        body: "Lighting, curtains, and smart controls planned in from the design stage, so the technology fits naturally into daily life instead of being added on later.",
      },
      {
        icon: "key",
        title: "Single-Room Premium Reno",
        body: "A high-end upgrade for a rental unit, master bedroom, or single space — with a plan to reverse it if you move.",
      },
    ],
    materialsEyebrow: "Materials",
    materials: {
      heading: "What we build with.",
      sub: "Materials chosen for how they perform over time: air quality, durability, and long-term value.",
      body: [
        "We use low-formaldehyde boards throughout all carpentry work. Better indoor air quality from day one. For clients who want it, aluminium carpentry upgrades are available — they outlast conventional timber significantly.",
        "Selected products come with manufacturer warranties from 10 years to lifetime. Our workmanship carries a 5-year warranty — if something we built fails within five years, we fix it.",
      ],
      specs: [
        {
          icon: "leaf",
          title: "Low-Formaldehyde Boards",
          body: "Used across all carpentry. Better indoor air quality from the day you move in.",
        },
        {
          icon: "badge",
          title: "Long-Term Manufacturer Warranties",
          body: "Selected products come with warranties from 10 years to lifetime, depending on the spec.",
        },
        {
          icon: "shield",
          title: "5-Year Workmanship Warranty",
          body: "On everything we build. If it fails within five years, we come back and fix it.",
        },
      ],
    },
    pricingEyebrow: "Pricing",
    payment: {
      heading: "Transparent pricing, a reassuring start.",
      sub: "Payments follow project milestones, with scope and terms clearly laid out in your contract.",
      body: "We accept credit card payments — a convenience many renovation firms in Singapore don't offer. Payments are tied to project stages as work progresses.",
      refundQuote:
        "If your project runs more than one month past the agreed deadline due to our oversight, you get a full refund — written into your contract.",
      refundNote:
        "In five years, we have never had to pay one out.",
      milestones: [
        {
          icon: "users",
          title: "Free Consultation",
          desc: "We look at your space, talk through what you want, and put together a detailed quote. No strings attached, no pressure to decide.",
        },
        {
          icon: "cube",
          title: "Design Sign-Off",
          desc: "We start only once every detail has been confirmed.",
        },
        {
          icon: "check",
          title: "Pay as Work Progresses",
          desc: "A clear process, so you always know where things stand.",
        },
      ],
    },
    cta: {
      heading: "Ready to get started?",
      sub: "Tell us about your home and what you have in mind. We will send a detailed quote within a week.",
      primary: "Get a Free Quote",
      secondary: "See Our Portfolio",
    },
  },

  portfolio: {
    title: "Our Work",
    subtitle:
      "Over 400 homes across Singapore. Each one designed around the people who live there.",
    filters: ["All", "HDB", "Condo", "Landed"],
    captionPrefix: "Project",
    albumDetailLabels: {
      roomType: "Room Type",
      size: "Size",
      location: "Location",
      sqftUnit: "sqft",
    },
    cta: {
      heading: "Every home starts with a conversation.",
      body: "Every project here began with one conversation. Tell us what you have in mind for your home, and let's start there.",
      primary: "Get a Free Quote",
      secondary: "WhatsApp Us Now",
    },
  },

  contact: {
    title: "Let's Talk About Your Home",
    subtitle:
      "Whether you already have ideas or you're still exploring, we're happy to help you plan the home you're picturing.",
    detailsHeading: "Contact Us",
    detailsNote: "We typically respond within one business day.",
    labels: {
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
      showroom: "Showroom",
      hours: "Office Hours",
    },
    hoursValue: "Monday – Saturday, 10am – 7pm",
    form: {
      heading: "Start Planning Your Dream Home",
      sub: "Share your needs and we'll be in touch within one business day with a free initial consultation.",
      name: { label: "Full Name", placeholder: "Your name", required: true },
      phone: {
        label: "Phone Number",
        placeholder: "WhatsApp preferred",
        required: true,
      },
      email: { label: "Email Address", placeholder: "you@example.com" },
      propertyType: {
        label: "Property Type",
        options: ["HDB Resale", "BTO", "Condo", "Landed", "Other"],
      },
      budget: {
        label: "Renovation Budget",
        options: [
          "Under $20K",
          "$20K – $50K",
          "$50K – $100K",
          "$100K and above",
        ],
      },
      message: {
        label: "Tell us about your project",
        placeholder: "Property, timeline, what you have in mind…",
      },
      submit: "Send My Enquiry",
      success:
        "Thank you! We've received your enquiry and will get back to you within one business day. If you'd prefer a faster reply, WhatsApp us directly.",
      whatsappCta: "WhatsApp us instead",
      errorRequired: "This field is required.",
    },
    reassurance: {
      body: "Most people who reach out to us are cautious, and for good reason. A friend's renovation that dragged on for months. A deposit paid with little to show for it. We built Vika to be the answer to that: clear contracts, milestone-based payments, and a full-refund guarantee written in from day one. If something comes up, you hear from us first.",
      icons: [
        "Full Refund if Delayed Over 1 Month, Written in Your Contract",
        "5-Year Workmanship Warranty",
        "Qanvast Supertrust — Project Insurance up to SGD 50,000",
        "Two Designers Assigned to Every Project",
      ],
    },
    map: {
      heading: "Visit Our Showroom",
      directions:
        "We are located in Serangoon Central, a short walk from Serangoon MRT (NEL / CCL). Street parking is available at the adjacent multi-storey carpark.",
    },
  },

  footer: {
    blurb:
      "Singapore interior design and renovation. Built on trust, accountability, and a refund guarantee in writing.",
    navHeading: "Explore",
    contactHeading: "Get in Touch",
    rights: "Vika Design Lab. All rights reserved.",
  },

  // Placeholder copy — layout ready ahead of confirmed role details from the client.
  recruitment: {
    title: "Join Our Team",
    subtitle:
      "We're expanding, and inviting Interior Designers to join our team.",
    introHeading: "Interior Designer",
    intro:
      "We're looking for Interior Designers to join our team in Singapore. Details on requirements and experience level will be added here once confirmed.",
    highlightsHeading: "What We Look For",
    highlights: [
      "Experience in residential interior design (details to be confirmed)",
      "A portfolio of past work",
      "Based in Singapore",
    ],
    ctaHeading: "Interested in joining us?",
    ctaSub: "Send us a message on WhatsApp with your portfolio and we'll get back to you.",
    applyLabel: "Apply via WhatsApp",
    whatsappMessage:
      "Hi Vika Design Lab! I'm interested in the Interior Designer position and would like to find out more.",
  },
};
