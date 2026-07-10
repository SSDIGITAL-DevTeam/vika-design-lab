import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { Services } from "@/components/v1";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: getContent(lang).nav.services } : {};
}

export default async function Page({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  return <Services content={content} lang={lang} />;
}
