import type { SiteContent } from "./types";

// English copy — sourced from the client's final Figma design ("UIUX Space 2").
export const en: SiteContent = {
  langTag: "en",

  brand: {
    name: "Vika Design Lab",
    tagline:
      "Designed for your home. Built around your life. Every detail exists to make living more comfortable, more worry-free.",
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
    heroHeadline: "Designed for your home. Built around your life. Every detail exists to make living more comfortable, more worry-free.",
    heroSub:
      "If your project runs more than a month behind schedule, you get a full refund — guaranteed in writing, in every contract. Because peace of mind should be part of the deal.",
    cta: { primary: "Book a Free Consultation", secondary: "View Our Portfolio" },
    stats: [
      { value: "400+", label: "Homes Completed" },
      { value: "5", label: "Years Serving Singapore" },
      { value: "5-Year", label: "Construction Warranty" },
    ],
    intro: {
      heading: "Designed for How You Actually Live",
      body: [
        "A home is more than just visual beauty — it should reflect the way you live. Over the past five years, we've completed more than 400 residential projects, helping homeowners across Singapore's HDB flats, condominiums, and landed properties transform empty spaces into homes that truly fit their lives — and are built to be lived in for years to come.",
        "Every project is personally overseen by two dedicated designers. Every timeline commitment is written into the contract — because we believe in backing up our promises with action.",
      ],
    },
    usp: {
      eyebrow: "Service Advantages",
      heading: "Why Homeowners Choose Vika Design Lab",
      sub: "Six reasons why more Singapore homeowners are choosing Vika — and recommending us to the people they trust.",
      cards: [
        {
          icon: "shield",
          title: "Full Refund Guarantee",
          body: "If your project falls more than a month behind schedule, you're entitled to a full refund under our contract. Every promise we make is written down — never just a verbal assurance.",
        },
        {
          icon: "users",
          title: "Two Designers on Every Project",
          body: "Every project is handled by two dedicated designers working in tandem, ensuring smooth communication, consistent design direction, and minimal disruption even if staffing changes.",
        },
        {
          icon: "cube",
          title: "Preview Your Future Home in Full 3D",
          body: "Before construction begins, experience your home through a complete 3D walkthrough — so you can see and feel every detail before it's real.",
        },
        {
          icon: "clock",
          title: "Detailed Quote Within 7 Days",
          body: "Most projects receive a full quotation and cost breakdown within a week of our first consultation.",
        },
        {
          icon: "tag",
          title: "Budget-Conscious, Quality-Driven",
          body: "Smart budgeting without compromising on craftsmanship. We believe great design doesn't have to come with a high price tag.",
        },
        {
          icon: "badge",
          title: "5 Years of Construction Warranty",
          body: "Enjoy up to 5 years of post-renovation support, so you can move in with confidence — and count on us if any issues arise down the line.",
        },
      ],
    },
    servicesOverview: {
      heading: "Everything Your Home Needs, Under One Roof",
      tiles: [
        {
          title: "Interior Design",
          desc: "From space planning to concept development and material selection, we craft ideal homes tailored to your lifestyle.",
        },
        {
          title: "Full Home Renovation",
          desc: "Covering carpentry, electrical, plumbing, masonry, and painting — a true one-stop renovation service.",
        },
        {
          title: "3D Panoramic Preview",
          desc: "Step into your future home before construction even begins, and experience every space and detail firsthand.",
        },
        {
          title: "BTO & Resale Renovation",
          desc: "Tailored, end-to-end renovation solutions for new BTO flats and resale homes alike.",
        },
        {
          title: "Specialty Space Design",
          desc: "From pet-friendly homes to child-friendly spaces and smart home integration — designed around how you live.",
        },
      ],
      cta: "View All Services",
    },
    portfolioPreview: {
      eyebrow: "Featured Projects",
      heading: "Real Homes We've Brought to Life",
      sub: "From HDB flats and condominiums to landed properties across Singapore, every project is designed around how our homeowners live — turning each space into a true extension of home.",
      cta: "View Full Portfolio",
    },
    testimonials: {
      eyebrow: "Customer Reviews",
      heading: "Hear It From Our Homeowners",
      sub: "Real feedback, straight from families who've settled into their new homes.",
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
      eyebrow: "Partner Brands",
      heading: "Trusted Partners We Work With",
      sub: "We collaborate with carefully vetted suppliers and renowned brands for the long term. From materials and fittings to the finest finishing details, every choice is rigorously assessed — so quality, beauty, and durability always go hand in hand.",
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
      "Vika Design Lab was founded on a simple belief — that every Singapore homeowner deserves a renovation experience built on transparency, accountability, and peace of mind.",
    storyLabel: "Our Story",
    story: [
      "As a solo designer with years in the industry, I kept watching the same story play out — homeowners paying their deposit in good faith, only to be met with endless delays and no progress in sight.",
      "That's where the full refund promise came from — not a marketing tagline, but a commitment written into every contract. If a project falls more than a month behind due to us, you get your money back. In full.",
      "Five years and over 400 homes later, we've built a brand that homeowners are proud to recommend to their own family and friends — because we followed through on what we promised.",
    ],
    founderQuote: {
      quote:
        "It means we take every promise seriously, and we believe good design should be built on trust.",
      author: "Dion, Founder, Vika Design Lab",
    },
    missionLabel: "Our Mission",
    mission:
      "To provide high-quality interior design with fair, transparent pricing — so more homeowners in Singapore can have the home they've been dreaming of, without compromising on materials or workmanship.",
    visionLabel: "Our Vision",
    vision:
      "To become the most trusted interior design company in Singapore: the name homeowners recommend to the people they care about most.",
    process: {
      heading: "Every Promise, Backed by a Proven Process",
      body: [
        "On-time delivery isn't left to chance — it comes from clear project management, regular on-site inspections, and transparent communication throughout the entire renovation.",
        "Every project is overseen by a dedicated team, from site inspections to work coordination and progress tracking, ensuring each phase moves forward smoothly. If any changes or adjustments arise, we proactively reach out — explaining the situation clearly and offering solutions, so you're always kept in the loop.",
        "We're committed to on-time delivery, driven by disciplined project management and constant communication at every stage. If the schedule ever needs to shift, we'll let you know in advance — with a clear plan for what comes next, so you're never left waiting in the dark.",
      ],
    },
    designers: {
      heading: "Meet Our Designers",
      intro:
        "Care, attention, and patience aren't just words we believe in — they shape how we work on every project. From the very first conversation, through design and construction, all the way to handover, we walk alongside every homeowner with clear communication and thoughtful service, every step of the way.",
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
      "One team, from design to delivery — fully accountable at every step. Space planning, hands-on construction, 3D visualization, and full renovation packages, all brought together under a single contract to plan and realize your entire home.",
    coreEyebrow: "Our Services",
    coreHeading: "Four Services, Every Space Covered",
    coreSub:
      "Whether you're renovating a new home, revamping an older one, or simply want to understand your budget upfront, we offer a clear, complete service plan for every need.",
    core: [
      {
        icon: "home",
        title: "Interior Design",
        body: "Design starts with understanding how you live. We begin with your daily habits — storage needs, lifestyle rhythm, pets, working from home, and more — so your space truly fits your life, instead of the other way around.",
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
        title: "Full Home Renovation",
        body: "From construction to handover, one dedicated team sees it through. With unified project management, our in-house team coordinates every trade and timeline — keeping the entire process more transparent, and more reassuring.",
        includedLabel: "What's Covered",
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
        body: "Plan your budget and scope with clarity from the start. We consolidate common renovation needs into clear, defined packages — so homeowners can easily understand the full investment before work even begins.",
        includedLabel: "Available Packages",
        included: [
          "BTO Full-House",
          "Resale HDB",
          "Partial (kitchen or bathroom)",
          "Condo Package",
        ],
      },
      {
        icon: "cube",
        title: "3D Panoramic Preview",
        body: "See your future home before construction even begins. With a complete 3D rendering, it's easier to visualize proportions, materials, and how each space will actually feel to live in.",
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
    specialityHeading: "Spaces Designed Around How You Actually Live.",
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
    materialsEyebrow: "Material Quality",
    materials: {
      heading: "The Materials We Use.",
      sub: "Our material standards go beyond aesthetics — durability, air quality, and long-term value matter just as much.",
      body: [
        "We use low-formaldehyde boards throughout all carpentry work. Better indoor air quality from day one. For clients who want it, aluminium carpentry upgrades are available — they outlast conventional timber significantly.",
        "Selected products come with manufacturer warranties from 10 years to lifetime. Our workmanship carries a 5-year warranty — if something we built fails within five years, we fix it.",
      ],
      specs: [
        {
          icon: "leaf",
          title: "Low-Formaldehyde Boards",
          body: "All carpentry projects use low-formaldehyde boards, so your living environment feels safer and more comfortable from day one.",
        },
        {
          icon: "badge",
          title: "Manufacturer Warranty Support",
          body: "Premium materials and fittings come with original manufacturer warranties, ranging from fixed terms to lifetime coverage depending on the product.",
        },
        {
          icon: "shield",
          title: "5-Year Construction Warranty",
          body: "Every project we complete comes with a 5-year construction warranty. If any construction-related issues arise, we'll follow through and resolve them.",
        },
      ],
    },
    pricingEyebrow: "Pricing Approach",
    payment: {
      heading: "Transparent Planning, Confident Start.",
      sub: "Payment is structured around project milestones, with the full scope and terms clearly laid out in the contract.",
      body: "We accept credit card payments — a convenience many renovation firms in Singapore don't offer. Payments are tied to project stages as work progresses.",
      refundQuote:
        "\"More than a month behind schedule? Full refund.\" For any delay caused by us, this guarantee is written directly into the contract.",
      refundNote:
        "In five years, we've never had to activate it.",
      milestones: [
        {
          icon: "users",
          title: "Understand First, Quote Second",
          desc: "No strings attached, no pressure to decide.",
        },
        {
          icon: "cube",
          title: "Confirm First, Build Second",
          desc: "Every detail reviewed before a single thing begins.",
        },
        {
          icon: "check",
          title: "Milestone-Based Payments",
          desc: "A clear process, a calmer experience.",
        },
      ],
    },
    cta: {
      heading: "Ready to get started?",
      sub: "Tell us about your home and what you're looking for — we'll get back to you with a detailed quote within a week.",
      primary: "Book a Free Consultation",
      secondary: "View Our Portfolio",
    },
  },

  portfolio: {
    title: "Our Work",
    subtitle:
      "Over 400 real homes across Singapore. Every space, designed around how you live.",
    filters: ["All", "HDB", "Condo", "Landed"],
    captionPrefix: "Project",
    albumDetailLabels: {
      roomType: "Room Type",
      size: "Size",
      location: "Location",
      sqftUnit: "sqft",
    },
    cta: {
      heading: "Every Home Begins With One Sentence: \"This Is How I Want to Live.\"",
      body: "Every project here starts with a conversation. Tell us how you envision your home, and let's begin together.",
      primary: "Book a Free Consultation",
      secondary: "Get in Touch",
    },
  },

  contact: {
    title: "Let's Talk About Your Dream Home",
    subtitle:
      "Whether you already have ideas in mind or you're still exploring, we're here to help plan the home you've always envisioned.",
    detailsHeading: "Contact Us",
    detailsNote: "We typically get back to you within one business day.",
    labels: {
      phone: "WhatsApp",
      whatsapp: "WhatsApp",
      email: "Email",
      showroom: "Showroom",
      hours: "Office Hours",
    },
    hoursValue: "Monday – Saturday, 10am – 7pm",
    form: {
      heading: "Start Planning Your Dream Home",
      sub: "Share your requirements with us, and we'll get in touch within one business day to offer you a free initial consultation.",
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
      body: "Many clients who reach out to us come in feeling especially cautious about starting a renovation. Some have watched a friend's project drag on for months past deadline; others have experienced paying upfront only to see little progress afterward. Vika was founded on a simple idea — to bring a more transparent, more reassuring renovation experience: clear, well-defined contracts, milestone-based payments, and a refund guarantee written into every contract from day one. Throughout the process, we stay proactive in our communication, so you always know exactly where your project stands.",
      icons: [
        "Full refund available under contract if the project runs more than a month behind schedule",
        "5-year construction warranty included",
        "Qanvast SuperTrust Protection Plan | Project insurance coverage up to S$50,000",
        "Every project overseen by two dedicated designers",
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
    title: "Join Us",
    subtitle:
      "We're growing, and we're looking for talented interior designers to join our team.",
    cultureHeading: "Why Join Vika",
    culture:
      "We're a lean, execution-driven team that stays hands-on from first sketch to final handover. You'll work directly with the founding team, contributing to real residential projects across Singapore — not just producing renders.",
    viewPositionsLabel: "View Open Positions",
    positionsEyebrow: "Open Positions",
    positions: [
      {
        title: "Interior Designer",
        location: "Singapore",
        intro:
          "We're looking for Interior Designers to join our team in Singapore. Details on requirements and experience level will be added here once confirmed.",
        highlightsLabel: "What We Look For",
        highlights: [
          "Experience in residential interior design (details to be confirmed)",
          "A portfolio of past work",
          "Based in Singapore",
        ],
        applyLabel: "Apply via WhatsApp",
        whatsappMessage:
          "Hi Vika Design Lab! I'm interested in the Interior Designer position and would like to find out more.",
      },
    ],
    ctaHeading: "Don't see the right role?",
    ctaSub:
      "We're always open to hearing from great talent. Drop us a message — we'll keep you in mind.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "Message Us on WhatsApp",
    ctaWhatsappMessage:
      "Hi Vika Design Lab! I'd like to find out about career opportunities with your team.",
  },
};
