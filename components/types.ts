import type { ComponentType } from "react";
import type { Design, Locale } from "@/lib/designs";
import type { SiteContent } from "@/content/types";

/** Props shared by every page-body and chrome component. */
export interface ViewProps {
  content: SiteContent;
  design: Design;
  lang: Locale;
}

/** A complete set of components implementing one visual design. */
export interface DesignKit {
  Header: ComponentType<ViewProps>;
  Footer: ComponentType<ViewProps>;
  Home: ComponentType<ViewProps>;
  About: ComponentType<ViewProps>;
  Services: ComponentType<ViewProps>;
  Portfolio: ComponentType<ViewProps>;
  Contact: ComponentType<ViewProps>;
}
