import { notFound } from "next/navigation";
import { hasDesign, hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { getKit } from "@/components/registry";

export default async function Page({ params }: PageProps<"/[design]/[lang]">) {
  const { design, lang } = await params;
  if (!hasDesign(design) || !hasLocale(lang)) notFound();

  const content = getContent(lang);
  const { Home } = getKit(design);
  return <Home content={content} design={design} lang={lang} />;
}
