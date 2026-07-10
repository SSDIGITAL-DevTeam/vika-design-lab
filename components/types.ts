import type { Locale } from "@/lib/designs";
import type { SiteContent } from "@/content/types";

/** Props shared by every page-body and chrome component. */
export interface ViewProps {
  content: SiteContent;
  lang: Locale;
}
