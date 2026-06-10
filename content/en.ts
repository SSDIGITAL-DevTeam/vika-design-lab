import type { SiteContent } from "./types";

// English copy — mapped from the polished Website Copywriting Guide.
export const en: SiteContent = {
  langTag: "en",

  brand: {
    name: "Vika Design Lab",
    tagline:
      "Designing Homes with Care, Patience and Attention — So You Can Feel at Ease.",
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
      "Singapore's only interior design firm that guarantees a full refund if your renovation is delayed by more than one month — written into your contract.",
    cta: { primary: "Get a Free Quote", secondary: "See Our Work" },
    stats: [
      { value: "400+", label: "Homes Transformed" },
      { value: "5", label: "Years in Singapore" },
      { value: "5-Year", label: "Workmanship Warranty" },
    ],
    intro: {
      heading: "Designed for How You Actually Live",
      body: [
        "At Vika Design Lab, we believe a home should reflect who you are — not just look good in photos. Over five years and more than 400 completed projects, we've helped HDB homeowners, condo dwellers, and landed property owners across Singapore turn empty spaces into warm, functional, deeply personal homes.",
        "Every project gets two dedicated designers. Every timeline is a commitment we stand behind — in writing.",
      ],
    },
    usp: {
      heading: "Why Choose Us",
      cards: [
        {
          icon: "shield",
          title: "Full Refund If We're Late",
          body: "If your project is delayed by more than one month, you get a full refund — guaranteed and written into your contract. We've never needed to honour it.",
        },
        {
          icon: "users",
          title: "Two Designers on Every Job",
          body: "Every project is assigned two designers so your renovation never stalls due to a single point of failure. Continuity is built in.",
        },
        {
          icon: "cube",
          title: "3D Immersive Design Preview",
          body: "Before a single wall is touched, you'll walk through your new home in a full 3D experience — a level of clarity rare in the Singapore market.",
        },
        {
          icon: "clock",
          title: "Quote in Under a Week",
          body: "We respect your time. Most clients receive a detailed, transparent quotation within one week of their first consultation.",
        },
        {
          icon: "tag",
          title: "Affordable Without Compromise",
          body: "Our pricing is benchmarked below the general Singapore market. Good design and fair cost are not a trade-off at Vika Design Lab.",
        },
        {
          icon: "badge",
          title: "5-Year Workmanship Warranty",
          body: "We stand behind every nail, tile and cabinet door. Our 5-year workmanship warranty means you're covered long after move-in day.",
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
    testimonials: {
      heading: "What They Say About Us",
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
      "Vika Design Lab was built on a simple belief: homeowners in Singapore deserve an interior design company that keeps its word.",
    storyLabel: "Our Story",
    story: [
      "Before Vika Design Lab existed, there was just a designer — one who had spent years in the industry building relationships with contractors and suppliers, completing project after project, and quietly watching the same problem repeat itself across the renovation industry: homeowners paying in good faith, only to be left waiting.",
      "The moment that changed everything came from reading a news report about a Sentosa renovation project. Homeowners had paid large sums and seen little to no progress for months. It wasn't an isolated story — it was a pattern. And it pointed to a gap in the market that most companies preferred to ignore: accountability.",
      "That's the reason the full-refund guarantee exists. Not as a marketing gimmick — but as a statement. A declaration that Vika Design Lab is willing to put its money where its commitment is. If your renovation is delayed by more than one month due to our oversight, you receive a full refund. In writing. In your contract.",
      "Vika Design Lab started from zero. No shortcut, no inherited client list. Just a clear vision and the hard work of building it step by step — learning business management, taking marketing courses, and growing into the role of a company founder, not just a designer.",
      "Five years and more than 400 homes later, the business has grown into something more than a renovation company. It's a brand that homeowners refer to their families, their parents, and their friends — because it delivered on what it promised.",
    ],
    founderQuote: {
      quote:
        "This is not just a marketing promise — it reflects the confidence I have in my team, our planning, and our ability to deliver projects properly and on time.",
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
        "Delivering on time is not luck. It's the result of dedicated site supervision, regular contractor coordination, and a commitment to transparent communication throughout your renovation.",
        "Every Vika project includes a dedicated team that monitors progress from start to finish — going on-site regularly to inspect work, solve problems early, and keep the schedule on track. When small delays happen (as they sometimes do in any construction project), we tell you immediately, explain why, and give you a clear resolution plan.",
        "Our target: complete every project within one month as promised. In rare cases, minor overruns of up to one week can occur — but you will always know about them in advance, not after the fact.",
      ],
    },
    designers: {
      heading: "Meet Our Designer",
      intro:
        "Our team is committed to a service philosophy centered on care, attention to detail, and patience, ensuring every customer feels confident and supported. We continuously pursue learning and improvement to deliver exceptional service and expert guidance tailored to our customers' needs.",
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
      "From the first 3D walkthrough to the final coat of paint — we handle your renovation end to end, so you don't have to coordinate between five different contractors.",
    coreHeading: "What We Do",
    core: [
      {
        title: "Interior Design",
        body: "Every project begins with understanding how you live. We work with you to develop a design concept that fits your lifestyle, personality, and budget — then refine it through a detailed 3D visualisation before a single wall is touched.",
        includedLabel: "What's included",
        included: [
          "Initial consultation and lifestyle brief",
          "Concept development and mood boarding",
          "Space planning and layout optimisation",
          "Material and finish selection",
          "Full 3D design walkthrough (immersive, rare in the Singapore market)",
        ],
      },
      {
        title: "Full Renovation Works",
        body: "We manage the full scope of your renovation — from knocking walls to the last finishing touch. Our in-house team and trusted contractors work under our direct supervision, so timelines are kept and quality is consistent throughout.",
        includedLabel: "Trades we cover",
        included: [
          "Carpentry — custom cabinetry, wardrobes, TV features, kitchen cabinets",
          "Electrical — rewiring, lighting layout, power points",
          "Plumbing — bathroom and kitchen wet works",
          "Tiling — floors, walls, wet areas",
          "Painting — full interior painting with quality finishes",
          "Repairing & rectification works",
        ],
      },
      {
        title: "Renovation Packages",
        body: "Not sure where to start? Our packages bundle the most common renovation scopes into a single, transparent quote — so you know exactly what you're getting and what it costs.",
        includedLabel: "Package types available",
        included: [
          "BTO Full-House Package — move-in ready, designed for new flat owners starting fresh",
          "Resale HDB Full-House Package — comprehensive upgrade for older flats, including hacking and rewiring",
          "Partial Renovation — kitchen-only or bathroom-only upgrades for a focused budget",
          "Condo Renovation Package — clean, premium finishes suited to condominium living",
        ],
      },
      {
        title: "3D Design Visualisation",
        body: "Before your renovation begins, you'll walk through a fully rendered 3D version of your new home. This isn't just a nice-to-have — it's how we make sure your space looks and works exactly the way you imagined before any money is spent on construction.",
        includedLabel: "Why this matters",
        included: [
          "Catch layout problems before walls are built",
          "See material and colour combinations in context",
          "Reduce change orders and costly mid-project revisions",
          "Arrive at your renovation brief with full clarity",
        ],
      },
    ],
    specialityHeading: "Something Extra for Your Home",
    specialityIntro:
      "Beyond the standard renovation scope, we offer a handful of speciality services that not many interior design firms in Singapore provide.",
    speciality: [
      {
        icon: "paw",
        title: "Pet-Friendly Home Design",
        body: "For households with cats, we design spaces around how your pets actually live — durable, scratch-resistant materials, integrated cat shelves and walkways, and furniture that holds up over the long term without looking like a pet store.",
      },
      {
        icon: "star",
        title: "Kids' Room Themed Packages",
        body: "Themed bedrooms built around your child's interests — designed to grow with them. From adventure loft beds to creative study zones, we make rooms kids genuinely love spending time in.",
      },
      {
        icon: "bolt",
        title: "Smart Home Integration",
        body: "Smart lighting, automated curtains, and integrated home control systems — planned from the start as part of your renovation, not added as an afterthought.",
      },
      {
        icon: "key",
        title: "Single-Room Premium Renovation",
        body: "Not ready for a full renovation yet? We offer high-end single-room transformations — with the option to restore the room to its original condition when the time comes to move.",
      },
      {
        icon: "leaf",
        title: "Sustainable Design — Rainwater Collection",
        body: "For landed property owners, we can incorporate a rainwater collection and recycling system into the design — reducing long-term water costs and a standout feature among our landed home projects.",
      },
    ],
    materials: {
      heading: "Built to Last — Materials We Stand Behind",
      body: [
        "The materials we specify are chosen for durability, safety, and value. We use low-formaldehyde boards throughout all carpentry work — meaning the air quality in your home stays healthy long after move-in. For clients who want it, we can also offer aluminium carpentry upgrades, which outlast conventional timber alternatives significantly.",
        "Selected products and materials come with manufacturer warranties ranging from 10 years to lifetime coverage. Our own workmanship carries a 5-year warranty — which means if something we built fails within five years, we fix it.",
      ],
    },
    payment: {
      heading: "Transparent Pricing. No Surprises.",
      body: "We accept credit card payments — a convenience not offered by many renovation firms in Singapore. Flexible payment milestones are tied to project stages, so you only pay as work progresses.",
      refundQuote:
        "If your project is delayed by more than one month due to our oversight, you receive a full refund. Not a discount. Not an apology. A full refund — written into your contract from day one.",
      refundNote:
        "This isn't a marketing promise. It's a contractual obligation. Because we believe accountability shouldn't be optional.",
    },
    cta: {
      heading: "Ready to talk about your home?",
      sub: "Get a no-obligation quote in under a week. Just tell us about your property and what you have in mind — we'll handle the rest.",
      primary: "Get a Free Quote",
      secondary: "See Our Portfolio",
    },
  },

  portfolio: {
    title: "Our Work",
    subtitle:
      "Over 400 homes designed across Singapore — each one built around the people who live in it.",
    filters: ["All", "HDB", "BTO", "Condo", "Landed"],
    captionPrefix: "Project",
    cta: {
      heading: "Like what you see?",
      body: "Every project you've just seen started with a single conversation. Tell us about your home and we'll show you what we can do with it.",
      primary: "Get a Free Quote",
      secondary: "WhatsApp Us Now",
    },
  },

  contact: {
    title: "Let's Talk About Your Home",
    subtitle:
      "Whether you have a clear vision or you're still figuring things out, we're here to help. Reach out and let's start with a conversation — no pressure, no commitment.",
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
      body: "We know that reaching out to a renovation company can feel daunting — especially if you've heard stories about projects that went wrong. We built Vika Design Lab specifically to be the company that doesn't let that happen. No surprises. No delays you aren't told about. Just honest work, done properly.",
      icons: [
        "Full Refund if Delayed Over 1 Month — Contract-Backed",
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
      "Singapore interior design & renovation — built on trust, accountability, and a refund guarantee in writing.",
    navHeading: "Explore",
    contactHeading: "Get in Touch",
    rights: "Vika Design Lab. All rights reserved.",
  },
};
