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
      "Before Vika Design Lab existed, there was just a designer — one who had spent years in the industry building relationships with contractors and suppliers, completing project after project, and quietly watching the same problem repeat itself across the renovation industry: homeowners paying in good faith, only to be left waiting.",
      "The moment that changed everything came from reading a news report about a Sentosa renovation project. Homeowners had paid large sums and seen little to no progress for months. It wasn't an isolated story — it was a pattern. And it pointed to a gap in the market that most companies preferred to ignore: accountability.",
      "That's the reason the full-refund guarantee exists. Not as a marketing gimmick, but as a statement. A declaration that Vika Design Lab is willing to put its money where its commitment is. If your renovation is delayed by more than one month due to our oversight, you receive a full refund. In writing. In your contract.",
      "Vika Design Lab started from zero. No shortcut, no inherited client list. Just a clear vision and the hard work of building it step by step, learning business management, taking marketing courses, and growing into the role of a company founder, not just a designer.",
      "Five years and more than 400 homes later, the business has grown into something more than a renovation company. It's a brand that homeowners refer to their families, their parents, and their friends — because it delivered on what it promised.",
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
        "On-time delivery comes from site supervision, contractor coordination, and clear communication throughout. It is not luck.",
        "Every project has a team that visits the site regularly, checks the work, and keeps things on schedule. If a delay comes up, we tell you straight away, explain what happened, and give you a plan.",
        "Our target is to finish every project on time as agreed. Minor overruns can happen, but you will always hear about them first, not after the fact.",
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
        title: "Interior Design",
        body: "We start by learning how your household actually works — storage habits, daily routines, whether you have pets or kids at home. The design comes from that, not from a template we adapt to fit your flat.",
        includedLabel: "What's included",
        included: [
          "Initial consultation and lifestyle brief",
          "Concept development and moodboard",
          "Space planning and layout",
          "Material and finish selection",
          "Full 3D design walkthrough",
        ],
      },
      {
        title: "Full Renovation Works",
        body: "Everything runs under one contract, supervised by our team. Carpentry, electrical, plumbing, tiling, painting: one point of contact throughout, not five separate trades to follow up with.",
        includedLabel: "Trades we cover",
        included: [
          "Carpentry — cabinetry, wardrobes, TV feature walls, kitchen cabinets",
          "Electrical — rewiring, lighting layout, power points",
          "Plumbing — bathroom and kitchen wet works",
          "Tiling — floors, walls, wet areas",
          "Painting — full interior with quality finishes",
          "Rectification and repair works",
        ],
      },
      {
        title: "Renovation Packages",
        body: "Our packages bundle the most common renovation scopes into a clear, single quote. A practical starting point if you want a fixed number before committing to a full design brief.",
        includedLabel: "Package types available",
        included: [
          "BTO Full-House Package: move-in ready for new flat owners",
          "Resale HDB Package: full upgrade including hacking and rewiring",
          "Partial Renovation: kitchen-only or bathroom-only",
          "Condo Package: clean, premium finishes for condominium living",
        ],
      },
      {
        title: "3D Design Visualisation",
        body: "Before construction starts, you'll walk through a fully rendered 3D version of your home. Most Singapore firms don't offer this at the design stage. You'll see exactly how the space looks before any money goes to construction.",
        includedLabel: "Why it matters",
        included: [
          "Catch layout problems before walls go up",
          "See materials and colours in actual context",
          "Fewer change orders and mid-project revisions",
          "Full clarity on your design before work begins",
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
        title: "Pet-Friendly Home Design",
        body: "We design spaces around how cats actually live — durable surfaces, built-in shelves and walkways. It fits the interior rather than looking bolted on.",
      },
      {
        icon: "star",
        title: "Kids' Room Themed Packages",
        body: "Themed rooms designed around your child's interests, with room to grow. No need to redo everything in three years.",
      },
      {
        icon: "bolt",
        title: "Smart Home Integration",
        body: "Smart lighting, automated curtains, and home control systems — planned into the build from day one, not retrofitted after.",
      },
      {
        icon: "key",
        title: "Single-Room Premium Renovation",
        body: "High-end single-room renovation for those not ready for a full overhaul. Can be restored to original condition when the time comes to move.",
      },
      {
        icon: "leaf",
        title: "Sustainable Design: Rainwater Collection",
        body: "For landed homeowners, a rainwater collection system designed into the build. Cuts long-term outdoor water costs.",
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
          step: "01",
          title: "Free Consultation",
          desc: "We look at your space, talk through what you want, and put together a detailed quote. Free, no strings.",
        },
        {
          step: "02",
          title: "Design Sign-Off",
          desc: "Full 3D walkthrough before we order anything. You approve every detail before work begins.",
        },
        {
          step: "03",
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
      body: "We know reaching out to a renovation firm can feel daunting, especially after hearing about projects that went wrong. Vika was built to be the firm that doesn't let that happen. No surprises, no delays you find out about after the fact.",
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
