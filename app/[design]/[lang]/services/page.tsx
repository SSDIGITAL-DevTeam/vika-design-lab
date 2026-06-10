import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasDesign, hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { getKit } from "@/components/registry";

export async function generateMetadata({
  params,
}: PageProps<"/[design]/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: getContent(lang).nav.services } : {};
}

export default async function Page({
  params,
}: PageProps<"/[design]/[lang]/services">) {
  const { design, lang } = await params;
  if (!hasDesign(design) || !hasLocale(lang)) notFound();

  const content = getContent(lang);
  const { Services } = getKit(design);
  return <Services content={content} design={design} lang={lang} />;
}
