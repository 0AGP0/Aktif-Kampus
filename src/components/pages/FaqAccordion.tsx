import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = { q: string; a: string };

const defaultItems: FaqItem[] = [
  {
    q: "Aktif Kampüs ücretli mi?",
    a: "Çoğu kampüs etkinliği ücretsizdir; kontenjanlı oturumlarda ön kayıt gerekir. Ücretli programlar sayfada açıkça belirtilir.",
  },
  {
    q: "Temsilcilik için hangi kriterler var?",
    a: "Öğrenci statüsü, iletişim becerisi ve kampüs içi gönüllü süre taahhüdü temel beklentilerdir. Başvuru sonrası kısa bir görüşme yapılır.",
  },
  {
    q: "Kulüplerle iş birliği nasıl ilerliyor?",
    a: "Formdan talep bırakıyorsun; ortak takvim ve hedefleri netleştiren kısa bir toplantı planlanıyor.",
  },
  {
    q: "Online etkinliklere nasıl katılırım?",
    a: "Kayıt olduktan sonra e-posta ile bağlantı veya platform bilgisi paylaşılır. Kayıtlar genelde etkinlikten 24 saat önce kapanır.",
  },
];

export function FaqAccordion({ items = defaultItems }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border-4 border-[#0b1f3f] bg-white/95 p-4 shadow-[12px_12px_0_#0b1f3f] md:p-8">
      <ul className="space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={i} className="overflow-hidden rounded-xl border-2 border-[#0b1f3f] bg-[#f8fafc]">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-[15px] font-black uppercase tracking-tight text-[#0b1f3f] transition hover:bg-white"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {isOpen ? (
                <div className="border-t-2 border-dashed border-[#0b1f3f]/20 bg-white px-4 py-4 text-[14px] font-semibold leading-relaxed text-[#0b1f3f]/85">
                  {item.a}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
