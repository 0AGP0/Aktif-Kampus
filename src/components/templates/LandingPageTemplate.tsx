import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Lightbulb,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const titleStyle: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  textShadow:
    "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99",
};

const titleStyleOnLightPrimary: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#0b1f3f",
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.9), 2px 2px 0 rgba(204,255,0,0.45), 3px 3px 0 rgba(11,31,63,0.2), 4px 4px 0 rgba(11,31,63,0.12)",
};

const inner = "relative mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-14";

function splitHeading(title: string): { lineA: string; lineB: string } {
  const q = title.indexOf("?");
  if (q !== -1) {
    const lineA = title.slice(0, q).trim();
    const lineB = title.slice(q).trim();
    const restWord = lineB.replace(/[\?\.\!\s]/g, "");
    if (restWord.length === 0) return { lineA: title, lineB: "" };
    return { lineA, lineB };
  }
  const emDash = title.indexOf(" \u2014 ");
  if (emDash !== -1) {
    return { lineA: title.slice(0, emDash).trim(), lineB: title.slice(emDash + 3).trim() };
  }
  const words = title.trim().split(/\s+/);
  if (words.length < 4) return { lineA: title, lineB: "" };
  const mid = Math.ceil(words.length / 2);
  return { lineA: words.slice(0, mid).join(" "), lineB: words.slice(mid).join(" ") };
}

const introMiniCards: { title: string; blurb: string; icon: LucideIcon; ring: string; blob: string }[] = [
  {
    title: "Etkinlik",
    blurb: "Takvim ve kay\u0131t ak\u0131\u015f\u0131",
    icon: Calendar,
    ring: "ring-[#0038ff]/25",
    blob: "from-[#0038ff]/25 via-sky-400/10 to-transparent",
  },
  {
    title: "Kul\u00fcp",
    blurb: "Ortak program ve g\u00f6r\u00fcn\u00fcrl\u00fck",
    icon: UsersRound,
    ring: "ring-violet-400/30",
    blob: "from-violet-500/20 via-fuchsia-400/10 to-transparent",
  },
  {
    title: "\u0130\u00e7erik",
    blurb: "Duyuru ve rehber kanallar\u0131",
    icon: BookOpen,
    ring: "ring-emerald-400/30",
    blob: "from-emerald-400/25 via-teal-400/10 to-transparent",
  },
  {
    title: "Strateji",
    blurb: "\u00d6l\u00e7\u00fclebilir geri bildirim",
    icon: Lightbulb,
    ring: "ring-amber-400/35",
    blob: "from-amber-400/25 via-orange-400/10 to-transparent",
  },
];

export type LandingSection =
  | { kind: "intro"; title: string; body: string; tags?: string[] }
  | { kind: "bullets"; title: string; items: string[] }
  | { kind: "split"; title: string; body: string; image?: string; imageAlt?: string; reverse?: boolean }
  | { kind: "model"; title: string; body: string; steps?: string[] };

export type LandingPageTemplateProps = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta?: { label: string; href: string };
  heroSecondaryCta?: { label: string; href: string };
  heroStats?: { label: string; value: string }[];
  sections: LandingSection[];
  closing: { title: string; body: string; cta: { label: string; href: string } };
};

export function LandingPageTemplate({
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  heroCta,
  heroSecondaryCta,
  heroStats,
  sections,
  closing,
}: LandingPageTemplateProps) {
  let splitIndex = 0;
  const firstIntroIndex = sections.findIndex((s) => s.kind === "intro");

  return (
    <div className="flex w-full flex-col">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full py-16 text-center md:py-24 lg:py-28"
      >
        <div className={`${inner} relative`}>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#e8ff66] [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] md:text-[12px]">
            {heroEyebrow}
          </p>
          <h1
            className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,6.5vw,3.75rem)] font-black uppercase leading-[0.92] tracking-tighter text-white md:mt-5"
            style={titleStyle}
          >
            {heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] font-semibold leading-relaxed text-white/95 [text-shadow:0_2px_14px_rgba(0,0,0,0.4)] md:text-lg md:leading-relaxed">
            {heroSubtitle}
          </p>

          {(heroCta || heroSecondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
              {heroCta ? (
                <a
                  href={heroCta.href}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-8 py-3 text-[15px] font-bold leading-none text-neutral-950 shadow-[0_6px_28px_rgba(0,0,0,0.3)] ring-1 ring-black/15 transition hover:brightness-[1.06] active:scale-[0.98] md:px-10 md:text-[16px]"
                >
                  {heroCta.label}
                  <ArrowRight className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
                </a>
              ) : null}
              {heroSecondaryCta ? (
                <a
                  href={heroSecondaryCta.href}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/75 bg-white/12 px-8 py-3 text-[15px] font-bold leading-none text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:bg-white/22 active:scale-[0.98] md:text-[16px]"
                >
                  {heroSecondaryCta.label}
                </a>
              ) : null}
            </div>
          )}

          {heroStats && heroStats.length > 0 ? (
            <div className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 md:mt-14">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/30 bg-white/[0.12] px-5 py-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md md:py-6"
                >
                  <p className="text-3xl font-black tabular-nums text-white md:text-4xl">{s.value}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#e8ff66] md:text-[12px]">{s.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </motion.section>

      {sections.map((block, i) => {
        if (block.kind === "intro") {
          const { lineA, lineB } = splitHeading(block.title);
          const tags =
            block.tags ??
            ["\u015e" + "effaf s\u00fcre\u00e7", "Kamp\u00fcs a\u011f\u0131", "\u00d6\u011frenci \u00f6nceli\u011fi"];
          const isFirstIntro = i === firstIntroIndex;

          return (
            <section
              key={`intro-${i}`}
              className={`relative z-[1] w-full overflow-hidden bg-gradient-to-b from-white via-[#e8eefc] to-[#f0f5ff] pb-16 pt-14 text-neutral-950 md:pb-24 md:pt-20 ${
                isFirstIntro
                  ? "-mt-10 rounded-t-[2rem] shadow-[0_-28px_80px_rgba(0,56,255,0.18)] md:-mt-14 md:rounded-t-[3rem]"
                  : ""
              }`}
            >
              <div className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full bg-[#CCFF00]/30 blur-3xl" />
              <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#0038ff]/18 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0038ff08_1px,transparent_1px),linear-gradient(to_bottom,#0038ff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-50" />

              <div className={`${inner} relative`}>
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16"
                >
                  <div className="lg:col-span-5">
                    <h2 className="text-[clamp(1.75rem,4.8vw,2.85rem)] font-black uppercase leading-[0.92] tracking-tighter">
                      {lineB ? (
                        <>
                          <span className="block" style={titleStyleOnLightPrimary}>
                            {lineA}
                          </span>
                          <span className="mt-2 block text-[#CCFF00]" style={titleStyle}>
                            {lineB}
                          </span>
                        </>
                      ) : (
                        <span className="block" style={titleStyleOnLightPrimary}>
                          {lineA}
                        </span>
                      )}
                    </h2>
                    <p className="mt-8 max-w-xl text-[16px] font-normal leading-[1.75] text-neutral-900 md:text-lg">
                      {block.body}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#0b1f3f]/20 bg-white px-4 py-2.5 text-[13px] font-semibold text-neutral-900 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                      <h3 className="text-[clamp(1.35rem,3.5vw,2rem)] font-black uppercase leading-[0.95] tracking-tighter">
                        <span className="block" style={titleStyleOnLightPrimary}>
                          {"\u00d6ne \u00e7\u0131kan"}
                        </span>
                        <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
                          {"mod\u00fcller"}
                        </span>
                      </h3>
                      <p className="max-w-sm text-[14px] font-medium leading-snug text-neutral-800 md:text-[15px]">
                        {"Etkinlikten ileti\u015fime: ayn\u0131 g\u00f6rsel dil, tek ak\u0131\u015f."}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {introMiniCards.map((c, j) => {
                        const Icon = c.icon;
                        return (
                          <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: j * 0.05 }}
                            className={`group relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-[0_10px_32px_rgba(11,31,63,0.1)] ring-1 ${c.ring} transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(11,31,63,0.14)]`}
                          >
                            <div
                              className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${c.blob} opacity-90 blur-2xl transition group-hover:opacity-100`}
                            />
                            <div className="relative flex gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038ff] to-[#2258dc] text-white shadow-md ring-1 ring-white/40">
                                <Icon className="h-6 w-6" strokeWidth={2.25} aria-hidden />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-[15px] font-black uppercase leading-tight tracking-tight text-neutral-950">{c.title}</p>
                                <p className="mt-2 text-[14px] font-medium leading-snug text-neutral-800">{c.blurb}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-[#0b1f3f]/12 bg-gradient-to-r from-[#1548e8] to-[#1a5cff] p-5 text-white shadow-[0_14px_40px_rgba(11,31,63,0.28)] md:p-6">
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-white/40 bg-[#CCFF00] text-[#0b1f3f] shadow-lg">
                          <Sparkles className="h-7 w-7" strokeWidth={2.25} aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12px] font-black uppercase tracking-[0.16em] text-[#e8ff66] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
                            {"Sonraki ad\u0131m"}
                          </p>
                          <p className="mt-1 text-[16px] font-bold leading-snug [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
                            {"Ba\u015fvuru veya ileti\u015fim ile s\u00fcreci ba\u015flat."}
                          </p>
                        </div>
                      </div>
                      {heroCta ? (
                        <a
                          href={heroCta.href}
                          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#CCFF00] px-7 py-3 text-[13px] font-black uppercase tracking-wide text-neutral-950 shadow-lg transition hover:brightness-105"
                        >
                          {heroCta.label}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        }

        if (block.kind === "bullets") {
          const { lineA, lineB } = splitHeading(block.title);

          return (
            <section
              key={`bullets-${i}`}
              className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#152f52] py-16 text-white md:py-24"
            >
              <div className="pointer-events-none absolute -left-36 top-0 h-[22rem] w-[22rem] rounded-full bg-[#0038ff]/22 blur-3xl" />
              <div className="pointer-events-none absolute -right-28 bottom-0 h-[20rem] w-[20rem] rounded-full bg-[#CCFF00]/14 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff09_1px,transparent_1px),linear-gradient(to_bottom,#ffffff09_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-55" />

              <div className={`${inner} relative`}>
                <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                  <div className="max-w-2xl">
                    <h2 className="text-[clamp(1.75rem,4.8vw,2.85rem)] font-black uppercase leading-[0.92] tracking-tighter">
                      {lineB ? (
                        <>
                          <span className="block text-white" style={titleStyle}>
                            {lineA}
                          </span>
                          <span className="mt-2 block text-[#CCFF00]" style={titleStyle}>
                            {lineB}
                          </span>
                        </>
                      ) : (
                        <span className="block text-white" style={titleStyle}>
                          {lineA}
                        </span>
                      )}
                    </h2>
                    <p className="mt-6 max-w-xl text-[15px] font-medium leading-relaxed text-white/85 md:text-[16px]">
                      {"\u00d6ne \u00e7\u0131kan faydalar \u2014 tek bak\u0131\u015fta net liste."}
                    </p>
                  </div>
                  <div className="hidden h-24 w-px shrink-0 bg-gradient-to-b from-transparent via-white/25 to-transparent lg:block" aria-hidden />
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                  {block.items.map((item, j) => (
                    <motion.article
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: j * 0.06 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.28)] backdrop-blur-md ring-1 ring-white/10 transition hover:border-white/25 hover:bg-white/[0.1] md:p-8"
                    >
                      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#CCFF00]/15 blur-2xl transition group-hover:bg-[#CCFF00]/25" />
                      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#CCFF00] via-[#9fcc12] to-[#0038ff] opacity-90" />
                      <div className="relative flex gap-4 pt-2">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CCFF00] text-[#0b1f3f] shadow-[4px_4px_0_rgba(0,0,0,0.35)]">
                          <Check className="h-6 w-6" strokeWidth={3} aria-hidden />
                        </span>
                        <p className="pt-1 text-[16px] font-semibold leading-relaxed text-white/95 md:text-[17px]">{item}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (block.kind === "model") {
          const { lineA, lineB } = splitHeading(block.title);

          return (
            <section
              key={`model-${i}`}
              className="relative w-full overflow-hidden bg-gradient-to-b from-[#eaff4a] via-[#CCFF00] to-[#b8e020] py-16 text-[#0b1f3f] md:py-24"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.5),transparent_52%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_78%,rgba(0,56,255,0.14),transparent_48%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(-45deg,#0b1f3f_0,#0b1f3f_1px,transparent_1px,transparent_14px)]" />

              <div className={`${inner} relative`}>
                <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-none lg:text-left">
                  <p className="text-[12px] font-black uppercase tracking-[0.26em] text-[#0b1f3f]/65">{"S\u00fcre\u00e7"}</p>
                  <h2 className="mt-4 text-[clamp(1.85rem,5vw,3rem)] font-black uppercase leading-[0.92] tracking-tighter">
                    <span className="block text-[#0b1f3f]" style={titleStyle}>
                      {lineA}
                    </span>
                    {lineB ? (
                      <span className="mt-2 block text-white [text-shadow:2px_2px_0_#001A99,4px_4px_0_#001A99]" style={titleStyle}>
                        {lineB}
                      </span>
                    ) : null}
                  </h2>
                  <p className="mx-auto mt-8 max-w-2xl text-[16px] font-semibold leading-relaxed text-[#0b1f3f]/92 lg:mx-0 lg:max-w-3xl md:text-lg">
                    {block.body}
                  </p>
                </div>

                {block.steps && block.steps.length > 0 ? (
                  <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {block.steps.map((step, j) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.4, delay: j * 0.08 }}
                        className="relative overflow-hidden rounded-2xl border-4 border-[#0b1f3f] bg-white p-6 shadow-[10px_10px_0_#0b1f3f] md:p-8"
                      >
                        <span className="absolute right-4 top-4 text-5xl font-black leading-none text-[#0b1f3f]/[0.07]">
                          {j + 1}
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#0b1f3f] bg-[#CCFF00] text-sm font-black text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]">
                          {j + 1}
                        </span>
                        <p className="relative mt-5 text-[15px] font-bold leading-relaxed text-neutral-900 md:text-[16px]">{step}</p>
                      </motion.div>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          );
        }

        if (block.kind === "split") {
          const isReversed = block.reverse ?? splitIndex % 2 === 1;
          const isDark = splitIndex % 2 === 0;
          splitIndex += 1;
          const hasImage = Boolean(block.image);
          const { lineA, lineB } = splitHeading(block.title);

          return (
            <section
              key={`split-${i}`}
              className={`relative w-full overflow-hidden ${isDark ? "bg-[#0b1f3f] text-white" : "bg-white text-[#0b1f3f]"}`}
            >
              <div
                className={`flex min-h-[min(22rem,50dvh)] flex-col md:min-h-[24rem] md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`}
              >
                {hasImage ? (
                  <div className="relative h-64 w-full shrink-0 md:h-auto md:w-1/2 md:min-h-[26rem] lg:min-h-[28rem]">
                    <img
                      src={block.image}
                      alt={block.imageAlt ?? ""}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isDark
                          ? isReversed
                            ? "bg-gradient-to-l from-[#0b1f3f] via-[#0b1f3f]/40 to-transparent"
                            : "bg-gradient-to-r from-[#0b1f3f] via-[#0b1f3f]/35 to-transparent"
                          : isReversed
                            ? "bg-gradient-to-l from-white via-white/50 to-transparent"
                            : "bg-gradient-to-r from-white via-white/45 to-transparent"
                      }`}
                    />
                  </div>
                ) : null}

                <div
                  className={`flex flex-1 flex-col justify-center py-12 md:py-16 ${hasImage ? "px-5 md:px-10 lg:px-14 lg:py-20" : inner}`}
                >
                  <div className={hasImage ? "max-w-xl" : "max-w-3xl"}>
                    {!hasImage ? (
                      <>
                        <h2 className="text-[clamp(1.65rem,4vw,2.5rem)] font-black uppercase leading-tight tracking-tight">
                          <span className="text-[#0038ff]" style={titleStyleOnLightPrimary}>
                            {lineA}
                          </span>
                          {lineB ? (
                            <span className="mt-2 block text-[#CCFF00]" style={titleStyle}>
                              {lineB}
                            </span>
                          ) : null}
                        </h2>
                        <p className="mt-8 text-[16px] font-medium leading-relaxed text-neutral-800 md:text-lg">{block.body}</p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-[clamp(1.65rem,4.2vw,2.65rem)] font-black uppercase leading-[0.95] tracking-tight">
                          {isDark ? (
                            <>
                              <span className="text-[#CCFF00]" style={titleStyle}>
                                {lineA}
                              </span>
                              {lineB ? (
                                <span className="mt-2 block text-white" style={titleStyle}>
                                  {lineB}
                                </span>
                              ) : null}
                            </>
                          ) : (
                            <>
                              <span style={titleStyleOnLightPrimary}>{lineA}</span>
                              {lineB ? (
                                <span className="mt-2 block text-[#0038ff]" style={titleStyleOnLightPrimary}>
                                  {lineB}
                                </span>
                              ) : null}
                            </>
                          )}
                        </h2>
                        <p
                          className={`mt-8 text-[16px] font-medium leading-relaxed md:text-lg ${
                            isDark ? "text-white/88" : "text-neutral-800"
                          }`}
                        >
                          {block.body}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        }

  return null;
      })}

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#152f52] py-16 pb-20 text-white md:py-20 md:pb-24">
        <div className="pointer-events-none absolute -left-36 top-0 h-[22rem] w-[22rem] rounded-full bg-[#0038ff]/22 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-[20rem] w-[20rem] rounded-full bg-[#CCFF00]/14 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff09_1px,transparent_1px),linear-gradient(to_bottom,#ffffff09_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-55" />

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className={`${inner} relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-14`}
        >
          <div className="min-w-0 max-w-2xl">
            <h2 className="text-[clamp(1.65rem,4.5vw,2.65rem)] font-black uppercase leading-[0.92] tracking-tighter text-white" style={titleStyle}>
              {closing.title}
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-relaxed text-white/88 md:text-lg">{closing.body}</p>
          </div>
          <a
            href={closing.cta.href}
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#CCFF00] px-10 py-4 text-[15px] font-black uppercase tracking-wide text-neutral-950 shadow-[0_10px_36px_rgba(204,255,0,0.4)] transition hover:brightness-105 md:self-center md:text-[16px]"
          >
            {closing.cta.label}
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
