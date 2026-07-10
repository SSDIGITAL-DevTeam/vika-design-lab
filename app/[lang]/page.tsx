import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { Home } from "@/components/v1";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);
  return <Home content={content} lang={lang} />;
}
