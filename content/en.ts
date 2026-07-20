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
    heroHeadline: "Designed for Your Home. Built Around Your Life.",
    heroHeadlineSub: "Every detail is thoughtfully considered to create a home that's comfortable, functional, and made for the way you live.",
    heroSub:
      "If your project is delayed by more than one month, you'll receive a full refund—guaranteed in your contract, so you can renovate with complete confidence.",
    cta: { primary: "Book a Free Consultation", secondary: "View Our Portfolio" },
    stats: [
      { value: "400+", label: "Homes Completed" },
      { value: "5", label: "Years in Singapore" },
      { value: "5-Year", label: "Workmanship Warranty" },
    ],
    intro: {
      heading: "Designed for How You Actually Live",
      body: [
        "​A home isn't just designed to be seen—it should be designed to be lived in. With over 400 completed homes and 5+ years of experience, we create interiors that balance beauty, comfort, and everyday living.",
        "Every project is led by two dedicated designers, with clear timelines and commitments documented from the start.",
      ],
    },
    usp: {
      eyebrow: "Service Advantages",
      heading: "What Sets Vika Apart",
      sub: "Thoughtful design. Transparent service. Renovations you can trust.",
      cards: [
        {
          icon: "shield",
          title: "Delay Refund Guarantee",
          body: "If your project is delayed by more than one month, you'll receive a full refund—as guaranteed in your contract.",
        },
        {
          icon: "users",
          title: "Two Dedicated Designers",
          body: "Every project is managed by two designers for seamless communication and consistent support.",
        },
        {
          icon: "cube",
          title: "3D Design Preview",
          body: "Experience your future home in immersive 3D before renovation begins.",
        },
        {
          icon: "clock",
          title: "Detailed Quote Within a Week",
          body: "Receive a clear, itemised quotation within a week of your initial consultation.",
        },
        {
          icon: "tag",
          title: "Fair & Transparent Pricing",
          body: "Thoughtfully priced solutions without compromising on quality or design.",
        },
        {
          icon: "badge",
          title: "5 Years of Construction Warranty",
          body: "Enjoy lasting peace of mind with a 5-year workmanship warranty on every project.",
        },
      ],
    },
    servicesOverview: {
      heading: "Everything Your Home Needs, Under One Roof",
      tiles: [
        {
          title: "Interior Design",
          desc: "Space planning, concept design, and material selection.",
        },
        {
          title: "Full Renovation Works",
          desc: "Carpentry, electrical, plumbing, tiling, and painting.",
        },
        {
          title: "3D Design Visualisation",
          desc: "Experience your home in 3D before renovation begins.",
        },
        {
          title: "BTO & Resale Renovation",
          desc: "Tailored renovation solutions for new and resale homes.",
        },
        {
          title: "Speciality Spaces",
          desc: "Pet-friendly homes, children's rooms, and smart home solutions.",
        },
      ],
      cta: "Explore Our Services",
    },
    portfolioPreview: {
      eyebrow: "Selected Projects",
      sub: "A closer look at the homes we've thoughtfully designed for homeowners across Singapore.",
      cta: "View Our Portfolio",
    },
    testimonials: {
      eyebrow: "Client Reviews",
      heading: "What Our Clients Say",
      sub: "Real stories from homeowners who've trusted Vika.",
      items: [
        {
          quote:
            "We were worried about renovation horror stories, but Vika kept us informed every step of the way and delivered on time. Our home turned out even better than we imagined.",
          author: "Lim Family",
          meta: "Resale HDB, Serangoon",
        },
        {
          quote:
            "Vika handled everything from start to finish, making the renovation completely stress-free. The quality exceeded our expectations.",
          author: "Mr Chen",
          meta: "Condo, Bishan",
        },
        {
          quote:
            "Vika patiently guided us through every decision and delivered a home we're truly proud of.",
          author: "Mdm Wong",
          meta: "Resale HDB, Tampines",
        },
      ],
    },
    partners: {
      eyebrow: "Trusted Partners",
      heading: "The brands behind every project",
      sub: "We partner with trusted brands and certified suppliers, ensuring every material and finish meets our quality standards.",
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
      "At Vika Design Lab, we believe every homeowner deserves a renovation experience built on transparency, accountability, and peace of mind.",
    storyLabel: "Our Story",
    story: [
      "Vika began with a single designer who spent years watching the same story repeat: homeowners placing their trust and paying their deposits, only to face months of waiting with little progress.",
      "Our full-refund guarantee was born from this reality—not as a marketing slogan, but as a commitment written into every contract. If your renovation is delayed by more than one month due to our responsibility, you'll receive a full refund.",
      "Five years and over 400 homes later, we've built a brand homeowners confidently recommend to their family and friends—because we honour every promise we make.",
    ],
    founderQuote: {
      quote:
        "It reflects our commitment to standing behind every promise we make — and our belief that good design has to be built on trust.",
      author: "Dion, Founder, Vika Design Lab",
    },
    missionLabel: "Our Mission",
    mission:
      "To make quality interior design more accessible through fair, transparent pricing—without compromising on materials or workmanship.",
    visionLabel: "Our Vision",
    vision:
      "To be Singapore's most trusted interior design company, recommended by homeowners to their family and friends.",
    process: {
      heading: "Every Promise Is Backed by a Proven Process",
      body: [
        "On-time delivery starts with clear planning, regular site visits, and transparent communication.",
        "From site inspections to contractor coordination and progress updates, our dedicated team keeps every stage moving smoothly—so you're always informed and never left guessing.",
        "We keep every project on track through careful planning and clear communication. If anything changes, you'll be informed every step of the way.",
      ],
    },
    designers: {
      heading: "Meet Our Designers",
      intro:
        "Meet the people behind every project, guiding you from the first conversation to final handover with care and attention.",
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
      "From design to delivery, one team manages every stage.",
    coreEyebrow: "What We Offer",
    coreHeading: "Everything you need, from design to completion",
    core: [
      {
        icon: "home",
        title: "Interior Design",
        body: "Every design begins with your lifestyle, creating a home that works beautifully for the way you live.",
        includedLabel: "Included",
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
        body: "One dedicated team manages every stage, from construction to handover, for a smoother renovation experience.",
        includedLabel: "Included",
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
        body: "Straightforward renovation packages that make planning your budget and scope easier from the start.",
        includedLabel: "Package Options",
        included: [
          "BTO Full-House",
          "Resale HDB",
          "Partial Renovation (Kitchen or Bathroom)",
          "Condo Package",
        ],
      },
      {
        icon: "cube",
        title: "3D Visualisation",
        body: "Explore your future home in 3D before renovation begins, so you can make confident decisions before work starts.",
        includedLabel: "Benefits",
        included: [
          "Spot layout issues early",
          "Minimise changes",
          "Visualise materials",
          "Build with confidence",
        ],
      },
    ],
    specialityEyebrow: "Speciality Services",
    specialityHeading: "Designed for the way you live.",
    speciality: [
      {
        icon: "paw",
        title: "Pet-Friendly Design",
        body: "Designed for life with pets, with durable finishes and built-in features that blend naturally into your home.",
      },
      {
        icon: "star",
        title: "Kids' Themed Rooms",
        body: "Designed around your child's interests today, with the flexibility to grow for years to come.",
      },
      {
        icon: "bolt",
        title: "Smart Home Integration",
        body: "Smart lighting, curtains, and home controls planned from the start for a seamless everyday experience.",
      },
      {
        icon: "key",
        title: "Single-Room Premium Renovation",
        body: "A premium upgrade for a single space, thoughtfully designed with future flexibility in mind.",
      },
    ],
    materialsEyebrow: "Materials",
    materials: {
      heading: "Built with quality that lasts.",
      sub: "Carefully selected materials for healthier living, lasting durability, and long-term value.",
      body: [
        "We use low-formaldehyde boards throughout all carpentry work. Better indoor air quality from day one. For clients who want it, aluminium carpentry upgrades are available — they outlast conventional timber significantly.",
        "Selected products come with manufacturer warranties from 10 years to lifetime. Our workmanship carries a 5-year warranty — if something we built fails within five years, we fix it.",
      ],
      specs: [
        {
          icon: "leaf",
          title: "Low-Formaldehyde Boards",
          body: "Used in all carpentry for a healthier indoor environment from the day you move in.",
        },
        {
          icon: "badge",
          title: "Long-Term Manufacturer Warranties",
          body: "Selected products are backed by manufacturer warranties ranging from 10 years to a lifetime.",
        },
        {
          icon: "shield",
          title: "5-Year Workmanship Warranty",
          body: "Built to last, backed by our 5-year workmanship warranty.",
        },
      ],
    },
    pricingEyebrow: "Pricing",
    payment: {
      heading: "Transparent pricing. No surprises.",
      sub: "Clear project milestones, with payment terms and scope outlined in your contract.",
      body: "We accept credit card payments — a convenience many renovation firms in Singapore don't offer. Payments are tied to project stages as work progresses.",
      refundQuote:
        "If your project is delayed by more than one month due to our oversight, you'll receive a full refund—guaranteed in writing.",
      refundNote:
        "In five years, we've never had to honour that guarantee.",
      milestones: [
        {
          icon: "users",
          title: "Free Consultation",
          desc: "We'll understand your needs and prepare a detailed quotation—with no obligation.",
        },
        {
          icon: "cube",
          title: "Design Sign-Off",
          desc: "Work begins only after every detail has been reviewed and approved.",
        },
        {
          icon: "check",
          title: "Pay as Work Progresses",
          desc: "Payments follow agreed project milestones, so you always know what to expect.",
        },
      ],
    },
    cta: {
      heading: "Ready to get started?",
      sub: "Tell us about your home and your vision. We'll prepare a detailed quotation within a week.",
      primary: "Book a Free Consultation",
      secondary: "View Our Portfolio",
    },
  },

  portfolio: {
    title: "Our Work",
    subtitle:
      "Over 400 homes across Singapore. Designed for the people who call them home.",
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
    title: "Let's Talk About Your Home",
    subtitle:
      "Whether you have a clear vision or are just getting started, we're here to help.",
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
      sub: "Tell us what you have in mind, and we'll be in touch within one business day.",
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
      body: "Most homeowners come to us with one concern: Can we trust our renovation?​ That's why Vika is built on clear contracts, milestone-based payments, and a full-refund guarantee—so you can renovate with confidence from day one..",
      icons: [
        "Full Refund if Delayed Over 1 Month",
        "5-Year Workmanship Warranty",
        "Qanvast SuperTrust Protection up to SGD 50,000",
        "Two Designers on Every Project",
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
      "Singapore's trusted interior design and renovation partner, built on accountability and a written refund guarantee.",
    navHeading: "Explore",
    contactHeading: "Get in Touch",
    rights: "Vika Design Lab. All rights reserved.",
  },

  // Placeholder copy — layout ready ahead of confirmed role details from the client.
  recruitment: {
    title: "Join Us",
    subtitle:
      "We're growing. We'd love to hear from you.",
    cultureHeading: "Why Join Vika",
    culture:
      "Join a hands-on team where you'll work alongside our founders and see real homes through from concept to completion.",
    viewPositionsLabel: "View Open Positions",
    positionsEyebrow: "Open Positions",
    positions: [
      {
        title: "Interior Designer",
        location: "Singapore",
        intro:
          "We're looking for passionate Interior Designers to join our growing team and create homes that people love to live in.",
        highlightsLabel: "What We're Looking For",
        highlights: [
          "Experience in residential interior design",
          "A portfolio showcasing your work",
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
