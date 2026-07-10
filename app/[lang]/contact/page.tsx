import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { Contact } from "@/components/v1";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: getContent(lang).nav.contact } : {};
}

export default async function Page({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  return <Contact content={content} lang={lang} />;
}
