import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasDesign, hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { getKit } from "@/components/registry";

export async function generateMetadata({
  params,
}: PageProps<"/[design]/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: getContent(lang).nav.about } : {};
}

export default async function Page({
  params,
}: PageProps<"/[design]/[lang]/about">) {
  const { design, lang } = await params;
  if (!hasDesign(design) || !hasLocale(lang)) notFound();

  const content = getContent(lang);
  const { About } = getKit(design);
  return <About content={content} design={design} lang={lang} />;
}
