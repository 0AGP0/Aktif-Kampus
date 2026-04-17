import React from "react";
import { ArrowRight, Calendar, MapPin, Monitor, User } from "lucide-react";

const titleStyle: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#0b1f3f",
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.85), 2px 2px 0 rgba(204,255,0,0.35), 3px 3px 0 rgba(11,31,63,0.15)",
};

export type DetailMetaItem = { icon?: "calendar" | "map" | "monitor" | "user"; label: string; value: string };

type Props = {
  eyebrow?: string;
  title: string;
  meta?: DetailMetaItem[];
  /** Ana metin — paragraflar \n\n ile ayrılır */
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const Icon = ({ type }: { type: NonNullable<DetailMetaItem["icon"]> }) => {
  const c = "h-4 w-4 shrink-0 text-[#0038ff]";
  if (type === "calendar") return <Calendar className={c} aria-hidden />;
  if (type === "map") return <MapPin className={c} aria-hidden />;
  if (type === "monitor") return <Monitor className={c} aria-hidden />;
  return <User className={c} aria-hidden />;
};

export function DetailPageTemplate({ eyebrow = "Detay", title, meta = [], body, ctaLabel, ctaHref }: Props) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean);

  return (
    <article className="w-full max-w-6xl mx-auto rounded-2xl border-4 border-[#0b1f3f] bg-white/95 shadow-[12px_12px_0_#0b1f3f] backdrop-blur-sm p-6 md:p-10">
      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0038ff]">{eyebrow}</p>
      <h1 className="mt-2 max-w-4xl text-[clamp(1.85rem,4.2vw,2.75rem)] font-black uppercase leading-tight tracking-tight" style={titleStyle}>
        {title}
      </h1>

      {meta.length > 0 ? (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {meta.map((m, i) => (
            <li
              key={`${m.label}-${i}`}
              className="flex gap-3 rounded-xl border-2 border-[#0b1f3f]/15 bg-[#f8fafc] px-4 py-3"
            >
              {m.icon ? <Icon type={m.icon} /> : null}
              <div>
                <p className="text-[10px] font-black uppercase tracking-wide text-[#0b1f3f]/55">{m.label}</p>
                <p className="text-[14px] font-bold text-[#0b1f3f]">{m.value}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="prose prose-neutral mt-10 max-w-none">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] font-semibold leading-relaxed text-[#0b1f3f]/88">
            {p.trim()}
          </p>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border-4 border-dashed border-[#0b1f3f]/25 bg-[#e8f2ff]/50 p-6 md:flex md:items-center md:justify-between md:gap-6">
        <p className="text-[14px] font-bold text-[#0b1f3f]/80">Hemen kayıt veya başvuru için tek tık.</p>
        <a
          href={ctaHref}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border-4 border-[#0b1f3f] bg-[#CCFF00] px-6 py-3 text-[14px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[5px_5px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 md:mt-0 md:w-auto"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}
