import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { Recruitment } from "@/components/v1";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/recruitment">): Promise<Metadata> {
  const { lang } = await params;
  return hasLocale(lang)
    ? { title: getContent(lang).recruitment?.title ?? "Careers" }
    : {};
}

export default async function Page({
  params,
}: PageProps<"/[lang]/recruitment">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  return <Recruitment content={content} lang={lang} />;
}
