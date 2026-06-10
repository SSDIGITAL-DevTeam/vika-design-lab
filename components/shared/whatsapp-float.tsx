import { buildWhatsAppLink } from "@/lib/site";
import { Icon } from "./icons";

/** Site-wide floating WhatsApp button with a pre-filled message. */
export function WhatsAppFloat({
  message,
  label,
}: {
  message: string;
  label: string;
}) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/10 transition-transform duration-200 hover:scale-105 focus-visible:scale-105 motion-reduce:hover:scale-100"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
