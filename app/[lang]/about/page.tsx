import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { About } from "@/components/v1";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang) ? { title: getContent(lang).nav.about } : {};
}

export default async function Page({
  params,
}: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  return <About content={content} lang={lang} />;
}
