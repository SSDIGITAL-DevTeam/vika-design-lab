import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasDesign, hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { getKit } from "@/components/registry";

export async function generateMetadata({
  params,
}: PageProps<"/[design]/[lang]/portfolio">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: getContent(lang).nav.portfolio } : {};
}

export default async function Page({
  params,
}: PageProps<"/[design]/[lang]/portfolio">) {
  const { design, lang } = await params;
  if (!hasDesign(design) || !hasLocale(lang)) notFound();

  const content = getContent(lang);
  const { Portfolio } = getKit(design);
  return <Portfolio content={content} design={design} lang={lang} />;
}
