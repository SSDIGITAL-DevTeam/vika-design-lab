// The single typed shape every locale dictionary must satisfy.
// Both designs (v1/v2) and both languages (en/zh) read from this shape,
// so copy can never drift between them.

export interface CtaPair {
  primary: string;
  secondary: string;
}

export interface UspCard {
  /** Icon key resolved in components/shared/icons.tsx */
  icon: string;
  title: string;
  body: string;
}

export interface ServiceTile {
  title: string;
  desc: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  meta: string;
}

export interface Badge {
  name: string;
  note: string;
  /** When true, render a "Coming Soon" / 即将认证 state. */
  comingSoon?: boolean;
}

export interface CoreService {
  title: string;
  body: string;
  includedLabel: string;
  included: string[];
}

export interface SpecialityService {
  icon: string;
  title: string;
  body: string;
}

export interface Designer {
  name: string;
  role: string;
}

export interface FormField {
  label: string;
  placeholder?: string;
  /** For select fields. */
  options?: string[];
  required?: boolean;
}

export interface SiteContent {
  /** Used for <html lang> + UI direction; mirrors the locale. */
  langTag: string;

  brand: {
    name: string;
    tagline: string;
  };

  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };

  common: {
    comingSoon: string;
    designSwitchLabel: string;
    skipToContent: string;
    whatsappTooltip: string;
    whatsappPrefill: string;
  };

  home: {
    heroEyebrow: string;
    heroHeadline: string;
    heroSub: string;
    cta: CtaPair;
    stats: Stat[];
    intro: { heading: string; body: string[] };
    usp: { heading: string; cards: UspCard[] };
    servicesOverview: {
      heading: string;
      tiles: ServiceTile[];
      cta: string;
    };
    testimonials: { heading: string; items: Testimonial[] };
    trust: { heading: string; badges: Badge[] };
  };

  about: {
    title: string;
    subtitle: string;
    storyLabel: string;
    story: string[];
    founderQuote: { quote: string; author: string };
    missionLabel: string;
    mission: string;
    visionLabel: string;
    vision: string;
    process: { heading: string; body: string[] };
    designers: {
      heading: string;
      intro: string;
      team: Designer[];
    };
  };

  services: {
    title: string;
    subtitle: string;
    coreHeading: string;
    core: CoreService[];
    specialityHeading: string;
    specialityIntro: string;
    speciality: SpecialityService[];
    materials: { heading: string; body: string[] };
    payment: {
      heading: string;
      body: string;
      refundQuote: string;
      refundNote: string;
    };
    cta: { heading: string; sub: string } & CtaPair;
  };

  portfolio: {
    title: string;
    subtitle: string;
    filters: string[];
    captionPrefix: string;
    cta: { heading: string; body: string } & CtaPair;
  };

  contact: {
    title: string;
    subtitle: string;
    detailsHeading: string;
    detailsNote: string;
    labels: {
      phone: string;
      whatsapp: string;
      email: string;
      showroom: string;
      hours: string;
    };
    hoursValue: string;
    form: {
      heading: string;
      sub: string;
      name: FormField;
      phone: FormField;
      email: FormField;
      propertyType: FormField;
      budget: FormField;
      message: FormField;
      submit: string;
      success: string;
      whatsappCta: string;
      errorRequired: string;
    };
    reassurance: { body: string; icons: string[] };
    map: { heading: string; directions: string };
  };

  footer: {
    blurb: string;
    navHeading: string;
    contactHeading: string;
    rights: string;
  };
}
