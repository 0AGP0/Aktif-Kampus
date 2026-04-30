import React from "react";
import { ArrowRight, Calendar, MapPin, Monitor, User } from "lucide-react";
import type { PostBodyFigure } from "@/data/site-content";

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
  /** Liste kartlarıyla aynı görsel (opsiyonel) — kompakt blok + başlık yanında */
  image?: string;
  imageAlt?: string;
  /** Görsel köşesinde sarı etiket (örn. kategori) */
  imageTag?: string;
  meta?: DetailMetaItem[];
  /** Ana metin — paragraflar \n\n ile ayrılır */
  body: string;
  /** Paragraflar arası makale içi görseller */
  bodyFigures?: PostBodyFigure[];
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

export function DetailPageTemplate({
  eyebrow = "Detay",
  title,
  image,
  imageAlt,
  imageTag,
  meta = [],
  body,
  bodyFigures,
  ctaLabel,
  ctaHref,
}: Props) {
  const paragraphs = body.split(/\n\n+/).filter(Boolean);
  const coverAlt = imageAlt?.trim() || title;

  const titleBlock = (
    <div className={`min-w-0 flex-1 ${image ? "text-center md:text-left" : ""}`}>
      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0038ff]">{eyebrow}</p>
      <h1
        className={`mt-2 max-w-4xl font-black uppercase leading-tight tracking-tight ${image ? "text-[clamp(1.5rem,3.8vw,2.35rem)] md:mt-1" : "text-[clamp(1.85rem,4.2vw,2.75rem)]"}`}
        style={titleStyle}
      >
        {title}
      </h1>
    </div>
  );

  return (
    <article className="w-full max-w-6xl mx-auto rounded-2xl border-4 border-[#0b1f3f] bg-white/95 shadow-[12px_12px_0_#0b1f3f] backdrop-blur-sm p-6 md:p-10">
      {image ? (
        <header className="mb-8 flex flex-col items-center gap-5 border-b-2 border-dashed border-[#0b1f3f]/15 pb-8 md:mb-10 md:flex-row md:items-start md:gap-8 md:pb-10">
          <figure className="relative w-full max-w-[220px] shrink-0 overflow-hidden rounded-2xl border-4 border-[#0b1f3f] bg-neutral-200 shadow-[6px_6px_0_rgba(11,31,63,0.2)] md:max-w-[260px] md:shadow-[8px_8px_0_rgba(11,31,63,0.22)]">
            <div className="relative aspect-[16/10] w-full">
              <img
                src={image}
                alt={coverAlt}
                className="absolute inset-0 h-full w-full object-cover"
                width={520}
                height={325}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            {imageTag ? (
              <span className="pointer-events-none absolute left-2.5 top-2.5 rounded-lg border-2 border-[#0b1f3f] bg-[#CCFF00] px-2 py-1 text-[9px] font-black uppercase leading-none text-[#0b1f3f] shadow-sm sm:text-[10px]">
                {imageTag}
              </span>
            ) : null}
          </figure>
          {titleBlock}
        </header>
      ) : (
        <header className="mb-2">{titleBlock}</header>
      )}

      {meta.length > 0 ? (
        <ul className={`grid gap-3 sm:grid-cols-2 ${image ? "mt-6" : "mt-8"}`}>
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

      <div className={`prose prose-neutral max-w-none ${image ? "mt-8" : "mt-10"}`}>
        {paragraphs.map((p, i) => (
          <React.Fragment key={`p-${i}`}>
            <p className="mb-5 text-[15px] font-semibold leading-relaxed text-[#0b1f3f]/88 md:mb-6">
              {p.trim()}
            </p>
            {(bodyFigures ?? [])
              .filter((f) => f.afterParagraph === i)
              .map((f, j) => (
                <figure
                  key={`fig-${i}-${j}`}
                  className="my-8 overflow-hidden rounded-xl border-4 border-[#0b1f3f] bg-neutral-100 shadow-[6px_6px_0_rgba(11,31,63,0.15)]"
                >
                  <div className="relative aspect-[16/9] w-full bg-neutral-200">
                    <img
                      src={f.src}
                      alt={f.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      width={960}
                      height={540}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {f.caption ? (
                    <figcaption className="border-t-2 border-dashed border-[#0b1f3f]/15 bg-[#f8fafc] px-4 py-3 text-[12px] font-bold text-[#0b1f3f]/75">
                      {f.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
          </React.Fragment>
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
