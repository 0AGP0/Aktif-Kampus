import React, { useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { EventItem, PostItem, ProgramItem } from "@/data/site-content";

const panelClass =
  "w-full rounded-2xl border-4 border-[#0b1f3f] bg-white/95 shadow-[12px_12px_0_#0b1f3f] backdrop-blur-sm p-6 md:p-10";

const ctaBannerShell =
  "relative overflow-hidden rounded-2xl border-4 border-[#0b1f3f] p-5 shadow-[14px_14px_0_#0b1f3f] md:p-6";

const titleStyle: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#0b1f3f",
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.85), 2px 2px 0 rgba(204,255,0,0.35), 3px 3px 0 rgba(11,31,63,0.15)",
};

const titleOnDark: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#ffffff",
  textShadow: "2px 2px 0 rgba(11,31,63,0.55), 3px 3px 0 rgba(204,255,0,0.28)",
};

/** Filtrelerde “hepsi” seçeneği — select içinde Unicode kaçışı kullanılmaz (metin bozulmasın). */
const FILTER_ALL = "Tümü";

const sidebarExploreImage =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=720&q=80";
const sidebarCampusImage =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=720&q=80";

const quickLinks: { href: string; label: string }[] = [
  { href: "/", label: "Ana sayfa" },
  { href: "/etkinlikler", label: "Etkinlikler" },
  { href: "/programlar", label: "Programlar" },
  { href: "/icerik/blog", label: "Blog" },
  { href: "/icerik/rehber", label: "Rehber" },
  { href: "/icerik/duyurular", label: "Duyurular" },
  { href: "/kampus", label: "Kampüs" },
  { href: "/basvuru", label: "Başvuru" },
];

type EventsProps = {
  variant: "events";
  title: string;
  description: string;
  items: EventItem[];
  detailPath: string;
  activeHref?: string;
};

type ProgramsProps = {
  variant: "programs";
  title: string;
  description: string;
  items: ProgramItem[];
  detailPath: string;
  activeHref?: string;
};

type PostsProps = {
  variant: "posts";
  title: string;
  description: string;
  items: PostItem[];
  detailPath: string;
  postsListKind?: "blog" | "rehber" | "duyuru";
  activeHref?: string;
};

export type ListPageTemplateProps = EventsProps | ProgramsProps | PostsProps;

const PAGE_SIZE = 6;

function ListPageChrome({ activeHref, children }: { activeHref: string; children: React.ReactNode }) {
  return (
    <div className="w-full px-3 sm:px-4 md:px-5 xl:pl-6 xl:pr-4">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(15rem,17rem)_minmax(0,1fr)] xl:items-start xl:gap-8">
        <aside className="order-2 flex flex-col gap-5 xl:order-1 xl:sticky xl:top-20 xl:self-start">
          <div className={`${ctaBannerShell} bg-gradient-to-br from-[#feff9a] via-[#CCFF00] to-[#86efac]`}>
            <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/55 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-28 rounded-full bg-[#0038ff]/15 blur-2xl" />
            <p className="relative text-[10px] font-black uppercase tracking-[0.28em] text-[#0038ff]">{"H\u0131zl\u0131 s\u0131\u00e7rama"}</p>
            <h2
              className="relative mt-1 text-[clamp(1.2rem,2.4vw,1.6rem)] font-black uppercase leading-[1.05] tracking-tight"
              style={titleStyle}
            >
              {"Ke\u015fif modu"}
            </h2>
            <p className="relative mt-2 text-[13px] font-bold leading-snug text-[#0b1f3f]/82">
              {"T\u00fcm site bir t\u0131k uza\u011f\u0131nda; neon rota \u00fczerinden dola\u015f."}
            </p>
            <nav className="relative mt-4 flex flex-wrap gap-2" aria-label={"Site b\u00f6l\u00fcmleri"}>
              {quickLinks.map((l) => {
                const active = activeHref === l.href || (l.href !== "/" && activeHref.startsWith(l.href));
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`inline-flex items-center gap-1.5 rounded-full border-2 border-[#0b1f3f] px-3 py-2 text-[11px] font-black uppercase tracking-wide shadow-[4px_4px_0_#0b1f3f] transition hover:-translate-y-0.5 ${
                      active ? "bg-[#0b1f3f] text-[#CCFF00]" : "bg-white/95 text-[#0b1f3f] hover:bg-white"
                    }`}
                  >
                    <span>{l.label}</span>
                    <ArrowRight className={`h-3 w-3 shrink-0 ${active ? "text-[#CCFF00]" : "opacity-70"}`} aria-hidden />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className={`${ctaBannerShell} bg-gradient-to-br from-[#0b1f3f] via-[#0f2857] to-[#0038ff] text-white`}>
            <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#CCFF00]/25 blur-3xl" />
            <p className="relative text-[10px] font-black uppercase tracking-[0.26em] text-[#CCFF00]">{"Kamp\u00fcs enerjisi"}</p>
            <h2 className="relative mt-2 text-[clamp(1.15rem,2.2vw,1.5rem)] font-black uppercase leading-[1.05]" style={titleOnDark}>
              {"Kamp\u00fcse dal"}
            </h2>
            <p className="relative mt-2 text-[13px] font-semibold leading-relaxed text-white/88">
              {"Topluluklar, temsilcilik ve kamp\u00fcs ritmi; listeyi kapatmadan devam et."}
            </p>
            <div className="relative mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href="/basvuru"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-4 border-[#0b1f3f] bg-[#CCFF00] px-4 py-3 text-[12px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[6px_6px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 sm:flex-none"
              >
                {"\u00d6n kay\u0131t a\u00e7"}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="/kampus"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-4 border-white/80 bg-white/10 px-4 py-3 text-[12px] font-black uppercase tracking-wide text-white shadow-[6px_6px_0_rgba(11,31,63,0.35)] backdrop-blur-sm transition hover:bg-white/15 sm:flex-none"
              >
                {"Kamp\u00fcste gez"}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </aside>

        <div className="order-1 min-w-0 xl:order-2">{children}</div>
      </div>
    </div>
  );
}

export function ListPageTemplate(props: ListPageTemplateProps) {
  const [page, setPage] = useState(0);

  const chrome = (inner: React.ReactNode, variant: "events" | "programs" | "posts", postsListKind?: "blog" | "rehber" | "duyuru") => {
    const activeHref =
      props.activeHref ??
      (props.variant === "events"
        ? "/etkinlikler"
        : props.variant === "programs"
          ? "/programlar"
          : props.detailPath);
    return (
      <ListPageChrome activeHref={activeHref}>
        {inner}
      </ListPageChrome>
    );
  };

  if (props.variant === "events") {
    return chrome(
      <EventsList
        title={props.title}
        description={props.description}
        items={props.items}
        detailPath={props.detailPath}
        page={page}
        setPage={setPage}
      />,
      "events",
    );
  }
  if (props.variant === "programs") {
    return chrome(
      <ProgramsList
        title={props.title}
        description={props.description}
        items={props.items}
        detailPath={props.detailPath}
        page={page}
        setPage={setPage}
      />,
      "programs",
    );
  }
  return chrome(
    <PostsList
      title={props.title}
      description={props.description}
      items={props.items}
      detailPath={props.detailPath}
      page={page}
      setPage={setPage}
    />,
    "posts",
    props.variant === "posts" ? props.postsListKind : undefined,
  );
}

function EventsList({
  title,
  description,
  items,
  detailPath,
  page,
  setPage,
}: {
  title: string;
  description: string;
  items: EventItem[];
  detailPath: string;
  page: number;
  setPage: (n: number) => void;
}) {
  const months = useMemo(() => {
    const set = new Set<string>();
    items.forEach((e) => {
      const m = e.when.split("·")[0]?.trim() ?? "";
      if (m) set.add(m);
    });
    return ["T\u00fcm\u00fc", ...Array.from(set).sort()];
  }, [items]);

  const categories = useMemo(() => ["T\u00fcm\u00fc", ...Array.from(new Set(items.map((i) => i.category)))], [items]);

  const [month, setMonth] = useState("T\u00fcm\u00fc");
  const [mode, setMode] = useState<"T\u00fcm\u00fc" | "online" | "fiziksel">("T\u00fcm\u00fc");
  const [category, setCategory] = useState("T\u00fcm\u00fc");

  const filtered = useMemo(() => {
    return items.filter((e) => {
      const dateLine = e.when.split("·")[0]?.trim() ?? "";
      const okMonth = month === "T\u00fcm\u00fc" || dateLine === month;
      const okMode = mode === "T\u00fcm\u00fc" || e.mode === mode;
      const okCat = category === "T\u00fcm\u00fc" || e.category === category;
      return okMonth && okMode && okCat;
    });
  }, [items, month, mode, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const slice = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className={panelClass}>
      <header className="max-w-3xl">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0038ff]">Liste</p>
        <h1 className="mt-2 text-[clamp(1.75rem,4vw,2.5rem)] font-black uppercase leading-tight tracking-tight" style={titleStyle}>
          {title}
        </h1>
        <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#0b1f3f]/85">{description}</p>
      </header>

      <div className="mt-8 grid gap-4 rounded-xl border-2 border-dashed border-[#0b1f3f]/25 bg-[#f8fafc] p-4 md:grid-cols-3">
        <label className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
          Tarih
          <select
            className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-3 py-2.5 text-[14px] font-bold text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
              setPage(0);
            }}
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
          Ortam
          <select
            className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-3 py-2.5 text-[14px] font-bold text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]"
            value={mode}
            onChange={(e) => {
              setMode(e.target.value as typeof mode);
              setPage(0);
            }}
          >
            <option value="T\u00fcm\u00fc">T\u00fcm\u00fc</option>
            <option value="online">Online</option>
            <option value="fiziksel">Fiziksel</option>
          </select>
        </label>
        <label className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
          Kategori
          <select
            className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-3 py-2.5 text-[14px] font-bold text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(0);
            }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {slice.map((e) => (
          <li
            key={e.slug}
            className="flex flex-col overflow-hidden rounded-2xl border-4 border-[#0b1f3f] bg-white shadow-[6px_6px_0_rgba(11,31,63,0.18)] transition hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
              <img src={e.image} alt="" className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute left-3 top-3 rounded-lg border-2 border-[#0b1f3f] bg-[#CCFF00] px-2 py-1 text-[10px] font-black uppercase text-[#0b1f3f]">
                {e.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h2 className="text-[18px] font-black uppercase leading-snug text-[#0b1f3f]">{e.title}</h2>
              <p className="text-[14px] font-semibold leading-relaxed text-[#0b1f3f]/75">{e.excerpt}</p>
              <div className="mt-auto space-y-1 border-t-2 border-dashed border-[#0b1f3f]/15 pt-3 text-[13px] font-bold text-[#0b1f3f]/80">
                <p>{e.when}</p>
                <p>{e.venue}</p>
              </div>
              <a
                href={`${detailPath}/${e.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-4 border-[#0b1f3f] bg-[#CCFF00] px-4 py-2.5 text-[13px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[4px_4px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5"
              >
                Detay
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-[15px] font-bold text-[#0b1f3f]/60">Bu filtrelere uygun etkinlik yok.</p>
      ) : null}

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

function ProgramsList({
  title,
  description,
  items,
  detailPath,
  page,
  setPage,
}: {
  title: string;
  description: string;
  items: ProgramItem[];
  detailPath: string;
  page: number;
  setPage: (n: number) => void;
}) {
  const categories = useMemo(
    () => ["T\u00fcm\u00fc", "dil kursu", "sertifika", "e\u011fitim"] as const,
    [],
  );

  const [cat, setCat] = useState<(typeof categories)[number]>("T\u00fcm\u00fc");
  const [mode, setMode] = useState<"T\u00fcm\u00fc" | "online" | "offline">("T\u00fcm\u00fc");

  const filtered = useMemo(() => {
    return items.filter((p) => {
      const okCat = cat === "T\u00fcm\u00fc" || p.category === cat;
      const okMode = mode === "T\u00fcm\u00fc" || p.mode === mode;
      return okCat && okMode;
    });
  }, [items, cat, mode]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const slice = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className={panelClass}>
      <header className="max-w-3xl">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0038ff]">Liste</p>
        <h1 className="mt-2 text-[clamp(1.75rem,4vw,2.5rem)] font-black uppercase leading-tight tracking-tight" style={titleStyle}>
          {title}
        </h1>
        <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#0b1f3f]/85">{description}</p>
      </header>

      <div className="mt-8 grid gap-4 rounded-xl border-2 border-dashed border-[#0b1f3f]/25 bg-[#f8fafc] p-4 md:grid-cols-2">
        <label className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
          Kategori
          <select
            className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-3 py-2.5 text-[14px] font-bold capitalize text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]"
            value={cat}
            onChange={(e) => {
              setCat(e.target.value as (typeof categories)[number]);
              setPage(0);
            }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "T\u00fcm\u00fc" ? "T\u00fcm\u00fc" : c}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
          Format
          <select
            className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-3 py-2.5 text-[14px] font-bold text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]"
            value={mode}
            onChange={(e) => {
              setMode(e.target.value as typeof mode);
              setPage(0);
            }}
          >
            <option value="T\u00fcm\u00fc">T\u00fcm\u00fc</option>
            <option value="online">Online</option>
            <option value="offline">Y\u00fcz y\u00fcze</option>
          </select>
        </label>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {slice.map((p) => (
          <li
            key={p.slug}
            className="flex flex-col rounded-2xl border-4 border-[#0b1f3f] bg-white p-6 shadow-[6px_6px_0_rgba(11,31,63,0.18)] transition hover:-translate-y-0.5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border-2 border-[#0b1f3f] bg-[#e8f2ff] px-2 py-1 text-[10px] font-black uppercase text-[#0b1f3f]">{p.category}</span>
              <span className="rounded-lg border-2 border-[#0b1f3f]/30 bg-[#f8fafc] px-2 py-1 text-[10px] font-bold uppercase text-[#0b1f3f]/70">
                {p.mode === "online" ? "Online" : "Y\u00fcz y\u00fcze"}
              </span>
            </div>
            <h2 className="mt-4 text-[18px] font-black uppercase leading-snug text-[#0b1f3f]">{p.title}</h2>
            <p className="mt-2 flex-1 text-[14px] font-semibold leading-relaxed text-[#0b1f3f]/75">{p.excerpt}</p>
            <a
              href={`${detailPath}/${p.slug}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border-4 border-[#0b1f3f] bg-[#CCFF00] px-4 py-2.5 text-[13px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[4px_4px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5"
            >
              Detay
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-[15px] font-bold text-[#0b1f3f]/60">Bu filtrelere uygun program yok.</p>
      ) : null}

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

function PostsList({
  title,
  description,
  items,
  detailPath,
  page,
  setPage,
}: {
  title: string;
  description: string;
  items: PostItem[];
  detailPath: string;
  page: number;
  setPage: (n: number) => void;
}) {
  const categories = useMemo(() => ["T\u00fcm\u00fc", ...Array.from(new Set(items.map((i) => i.category)))], [items]);
  const [category, setCategory] = useState("T\u00fcm\u00fc");

  const filtered = useMemo(() => {
    return items.filter((p) => category === "T\u00fcm\u00fc" || p.category === category);
  }, [items, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const slice = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <div className={panelClass}>
      <header className="max-w-3xl">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0038ff]">Liste</p>
        <h1 className="mt-2 text-[clamp(1.75rem,4vw,2.5rem)] font-black uppercase leading-tight tracking-tight" style={titleStyle}>
          {title}
        </h1>
        <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#0b1f3f]/85">{description}</p>
      </header>

      <div className="mt-8 max-w-md rounded-xl border-2 border-dashed border-[#0b1f3f]/25 bg-[#f8fafc] p-4">
        <label className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
          Kategori
          <select
            className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-3 py-2.5 text-[14px] font-bold text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(0);
            }}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {slice.map((post) => (
          <li
            key={post.slug}
            className="flex flex-col overflow-hidden rounded-2xl border-4 border-[#0b1f3f] bg-white shadow-[6px_6px_0_rgba(11,31,63,0.18)] transition hover:-translate-y-0.5"
          >
            {post.image ? (
              <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-200">
                <img src={post.image} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ) : (
              <div className="h-2 w-full bg-gradient-to-r from-[#CCFF00] via-[#0038ff] to-[#0b1f3f]" />
            )}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-[#0b1f3f]/65">
                <span className="rounded-md border-2 border-[#0b1f3f] bg-[#CCFF00] px-2 py-0.5 text-[10px] font-black uppercase">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-[17px] font-black uppercase leading-snug text-[#0b1f3f]">{post.title}</h2>
              <p className="flex-1 text-[14px] font-semibold leading-relaxed text-[#0b1f3f]/75">{post.excerpt}</p>
              <a
                href={`${detailPath}/${post.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-4 border-[#0b1f3f] bg-[#0038ff] px-4 py-2.5 text-[13px] font-black uppercase tracking-wide text-white shadow-[4px_4px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5"
              >
                Detay
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-[15px] font-bold text-[#0b1f3f]/60">{"Bu kategoride i\u00e7erik yok."}</p>
      ) : null}

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: (n: number) => void;
}) {
  if (totalPages <= 1) return null;
  return (
    <nav className="mt-12 flex flex-wrap items-center justify-center gap-3" aria-label="Sayfalama">
      <button
        type="button"
        disabled={page <= 0}
        className="inline-flex items-center gap-1 rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-2 text-[13px] font-black uppercase text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f] disabled:opacity-40"
        onClick={() => setPage(Math.max(0, page - 1))}
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
        {"\u00d6nceki"}
      </button>
      <span className="text-[13px] font-bold text-[#0b1f3f]">
        {page + 1} / {totalPages}
      </span>
      <button
        type="button"
        disabled={page >= totalPages - 1}
        className="inline-flex items-center gap-1 rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-2 text-[13px] font-black uppercase text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f] disabled:opacity-40"
        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
      >
        Sonraki
        <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </nav>
  );
}
