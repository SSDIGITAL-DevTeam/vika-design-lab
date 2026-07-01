import type { SiteContent } from "./types";

// English copy — mapped from the polished Website Copywriting Guide.
export const en: SiteContent = {
  langTag: "en",

  brand: {
    name: "Vika Design Lab",
    tagline:
      "Designing homes with care, patience, and attention. So you can feel at ease.",
  },

  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    portfolio: "Portfolio",
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
    heroHeadline: "We Design Homes with Care, Patience and Attention, So You Can Feel at Ease.",
    heroSub:
      "The only interior design firm in Singapore with a full-refund guarantee if your project runs more than one month late. Written into your contract.",
    cta: { primary: "Get a Free Quote", secondary: "See Our Work" },
    stats: [
      { value: "400+", label: "Homes Transformed" },
      { value: "5", label: "Years in Singapore" },
      { value: "5-Year", label: "Workmanship Warranty" },
    ],
    intro: {
      heading: "Designed for How You Actually Live",
      body: [
        "A home should reflect how you actually live, not just look good in photos. Over five years and 400-plus completed projects, we have helped HDB homeowners, condo dwellers, and landed property owners across Singapore turn empty spaces into homes that feel right.",
        "Every project comes with two dedicated designers. Every timeline we agree to is backed in writing.",
      ],
    },
    usp: {
      eyebrow: "Our Difference",
      heading: "Why Choose Us",
      sub: "Six reasons homeowners in Singapore keep choosing Vika. And why they refer their friends.",
      cards: [
        {
          icon: "shield",
          title: "Full Refund If We're Late",
          body: "If your project is delayed by more than one month, you get a full refund. Guaranteed in writing, in your contract. We have never needed to use it.",
        },
        {
          icon: "users",
          title: "Two Designers on Every Job",
          body: "Two designers on every project, so work keeps moving if one person is unavailable. Continuity from day one.",
        },
        {
          icon: "cube",
          title: "3D Immersive Design Preview",
          body: "Before a single wall is touched, you walk through your new home in full 3D. Most firms in Singapore don't offer this at the design stage.",
        },
        {
          icon: "clock",
          title: "Quote in Under a Week",
          body: "Most clients get a detailed, itemised quote within one week of their first meeting.",
        },
        {
          icon: "tag",
          title: "Affordable Without Compromise",
          body: "Our prices sit below the Singapore market average. Good design does not have to mean high prices.",
        },
        {
          icon: "badge",
          title: "5-Year Workmanship Warranty",
          body: "Every nail, tile, and cabinet door is covered for five years. If something we built fails, we come back and fix it.",
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
      sub: "What homeowners told us after they moved in. No scripts, no incentives.",
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
          author: "Mr Tan",
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
    title: "Why We Build Homes Differently",
    subtitle:
      "Vika Design Lab was built on one belief: homeowners in Singapore deserve a firm that actually keeps its word.",
    storyLabel: "Our Story",
    story: [
      "One designer. Years watching the same pattern repeat: homeowners paying deposits in good faith, then waiting months with little to show for it. Accountability was missing from the market.",
      "The full-refund guarantee was born from that gap — not a marketing line, but a written commitment. If your renovation runs more than one month late due to our oversight, you get a full refund. In your contract.",
      "Five years and 400+ homes later, we've built a brand homeowners recommend to their families and friends — because it delivered what it promised.",
    ],
    founderQuote: {
      quote:
        "This reflects the confidence I have in my team and our planning. It is not just a marketing line.",
      author: "Vika, Founder of Vika Design Lab",
    },
    missionLabel: "Our Mission",
    mission:
      "To make quality interior design genuinely accessible — at prices below the Singapore market average, without compromising on materials, workmanship, or the human experience of working with us.",
    visionLabel: "Our Vision",
    vision:
      "To become the most trusted interior design company in Singapore: the name homeowners recommend to the people they care about most.",
    process: {
      heading: "Our Promise Is Backed by a Process",
      body: [
        "Site visits and contractor coordination keep every project on schedule. Delivery is managed, not left to chance.",
        "If a delay comes up, you hear from us first — with an explanation and a plan.",
        "Every timeline is agreed in writing. Delay over one month? Full refund. Written into your contract from day one.",
      ],
    },
    designers: {
      heading: "Meet Our Designer",
      intro:
        "Care, attention, and patience are not catchphrases here. They describe how every project runs, from first meeting to final handover.",
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
      "Design, renovation, and a full 3D preview before construction starts. One roof, one contract.",
    coreEyebrow: "What We Offer",
    coreHeading: "Four services, one team.",
    coreSub:
      "Interior design, full renovation, 3D visualisation, and renovation packages. Built to fit different budgets and starting points.",
    core: [
      {
        icon: "home",
        title: "Interior Design",
        body: "We start with how your household actually works — routines, storage habits, kids, pets. Design comes from that, not a template.",
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
        body: "One contract, one team, one point of contact. Carpentry, electrical, plumbing, tiling, and painting — all supervised by us throughout.",
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
        body: "Common renovation scopes bundled into a single, clear quote — a practical starting point before committing to a full design brief.",
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
        body: "Walk through a fully rendered 3D version of your home before construction starts. See the space before a single wall goes up.",
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
    specialityHeading: "A few things most firms won't do.",
    specialityIntro:
      "Outside the standard scope, we take on projects that need something more specific.",
    speciality: [
      {
        icon: "paw",
        title: "Pet-Friendly Design",
        body: "Durable surfaces, built-in cat shelves and walkways — fitted to the interior, not bolted on.",
      },
      {
        icon: "star",
        title: "Kids' Themed Rooms",
        body: "Themed rooms built around your child's interests, with space to grow.",
      },
      {
        icon: "bolt",
        title: "Smart Home Integration",
        body: "Lighting, curtains, and controls integrated from day one, not retrofitted.",
      },
      {
        icon: "key",
        title: "Single-Room Premium Reno",
        body: "High-end single-room renovation, fully reversible when you move.",
      },
      {
        icon: "leaf",
        title: "Rainwater Collection",
        body: "For landed homes — a rainwater system designed into the build from the start.",
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
      heading: "Transparent pricing, no upfront lump sum.",
      sub: "Milestones tied to completed work, credit cards accepted, and a refund clause in your contract from day one.",
      body: "We accept credit card payments — a convenience most renovation firms in Singapore don't offer. Payment milestones are tied to completed project stages, so you only pay as verified work is done.",
      refundQuote:
        "If your project goes more than one month past the agreed deadline, you get a full refund. It is written into your contract.",
      refundNote:
        "In five years, we have never had to pay one out.",
      milestones: [
        {
          icon: "users",
          title: "Free Consultation",
          desc: "We look at your space, talk through what you want, and put together a detailed quote. Free, no strings.",
        },
        {
          icon: "cube",
          title: "Design Sign-Off",
          desc: "Full 3D walkthrough before we order anything. You approve every detail before work begins.",
        },
        {
          icon: "check",
          title: "Pay as Work Progresses",
          desc: "Credit card accepted. Payments tied to completed stages — you are never paying for work that has not happened.",
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
    cta: {
      heading: "Like what you see?",
      body: "Every project here started with one conversation. Tell us about your home and what you have in mind.",
      primary: "Get a Free Quote",
      secondary: "WhatsApp Us Now",
    },
  },

  contact: {
    title: "Let's Talk About Your Home",
    subtitle:
      "Whether you have a clear vision or you're still figuring things out, we're here to help. No pressure, no obligation.",
    detailsHeading: "Talk to us directly",
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
      heading: "Tell Us About Your Home",
      sub: "Fill in the form and we'll be in touch within one business day with a no-obligation consultation.",
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
};
