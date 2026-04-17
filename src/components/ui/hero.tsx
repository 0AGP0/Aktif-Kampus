import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { footerColumns, mainNav } from "@/data/site-nav";
import { basvuruTurleri, basvuruTurLabels } from "@/data/basvuru-config";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  ClipboardList,
  Globe2,
  Handshake,
  Instagram,
  Languages,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPinned,
  Megaphone,
  Mic2,
  Monitor,
  Newspaper,
  Plane,
  FileText,
  User,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

/** Topluluk / kampüs birliktelik görselleri */
const imgCommunityA =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=88";
const imgCommunityB =
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=88";

const imgTemsilcilikHero =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85";
const imgKuluplerHero =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85";

const speakersShowcase: {
  name: string;
  role: string;
  tag: string;
  img: string;
  pop: string;
  shadow: string;
  tilt: string;
}[] = [
  {
    name: "Mehmet Kaya",
    role: "Kariyer koçu · mezun ağı",
    tag: "Kariyer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=85",
    pop: "bg-[#CCFF00]",
    shadow: "shadow-[8px_8px_0_#0b1f3f]",
    tilt: "-rotate-1",
  },
  {
    name: "Selin Aydın",
    role: "İngilizce eğitmeni · konuşma kulübü",
    tag: "Dil",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=85",
    pop: "bg-fuchsia-400",
    shadow: "shadow-[8px_8px_0_#86198f]",
    tilt: "rotate-2",
  },
  {
    name: "Burak Demir",
    role: "Yurtdışı eğitim danışmanı",
    tag: "Yurtdışı",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=85",
    pop: "bg-cyan-400",
    shadow: "shadow-[8px_8px_0_#155e75]",
    tilt: "-rotate-2",
  },
  {
    name: "Zeynep Arslan",
    role: "Sosyal girişimcilik · mentor",
    tag: "Gelişim",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=85",
    pop: "bg-amber-300",
    shadow: "shadow-[8px_8px_0_#b45309]",
    tilt: "rotate-1",
  },
];

/** Güvenilir Unsplash görselleri — dil / seyahat (önceki ID’ler bazı ağlarda yüklenmeyebiliyordu) */
const imgDilSection =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=88";
const imgYurtdisiSection =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=88";

const dilKurslariOzeti: { dil: string; not: string }[] = [
  { dil: "Almanca", not: "A1–C1 · sınav hazırlık" },
  { dil: "İngilizce", not: "Akademik & speaking club" },
  { dil: "İspanyolca", not: "Konuşma odaklı" },
  { dil: "İtalyanca", not: "Grup & kulüp sınıfları" },
];

const yurtdisiOzet: { t: string; d: string }[] = [
  { t: "Ülke & program rehberi", d: "Webinar ve bilgi oturumları" },
  { t: "Başvuru takvimi", d: "Seminer ve fuar duyuruları" },
  { t: "Burs & iş birlikleri", d: "Partner kurumlarla ön görüşme" },
];

const isBirligiPartnerler: { ad: string; alan: string; kisa: string }[] = [
  { ad: "EduVista", alan: "Yurtdışı eğitim", kisa: "EV" },
  { ad: "Konuş Kulübü", alan: "Dil partneri", kisa: "KK" },
  { ad: "Gençlik Vakfı", alan: "Sosyal etki", kisa: "GV" },
  { ad: "Campus Labs", alan: "Teknoloji", kisa: "CL" },
  { ad: "Akademi Plus", alan: "Sertifika", kisa: "AP" },
  { ad: "Yolcu Dergisi", alan: "Medya", kisa: "YD" },
];

const basvuruKatilimTurleri: { baslik: string; aciklama: string; icon: LucideIcon }[] = [
  {
    baslik: "Etkinlik kaydı",
    aciklama: "Seminer, buluşma ve online oturumlara katılım için ön kayıt.",
    icon: Calendar,
  },
  {
    baslik: "Temsilcilik başvurusu",
    aciklama: "Kendi üniversitende Aktif Kampüs temsilcisi olmak için başvuru.",
    icon: Users,
  },
  {
    baslik: "Kulüp & iş birliği",
    aciklama: "Ortak etkinlik, sponsorluk veya kulüp iş birliği görüşmesi.",
    icon: Handshake,
  },
  {
    baslik: "Bülten & duyuru",
    aciklama: "Yeni içerik, fırsat ve kampüs duyurularından haberdar ol.",
    icon: Megaphone,
  },
];

const blogRehberYazilari: { baslik: string; kategori: string; ozet: string; img: string }[] = [
  {
    baslik: "Yurtdışı başvurularında 5 sık hata",
    kategori: "Rehber",
    ozet: "Belgeler, zamanlama ve motivasyon mektubu — öğrenci gözüyle net kontrol listesi.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    baslik: "Kampüste networking: ilk tanışmadan takibe",
    kategori: "Kariyer",
    ozet: "Kulüp etkinliklerinden LinkedIn’e: görünür olmak için pratik adımlar.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  },
  {
    baslik: "Dil öğrenirken konuşma kaygısını azaltmak",
    kategori: "Dil",
    ozet: "Konuşma kulübü ve peer practice ile haftalık mini hedefler.",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85",
  },
];

const highlightCategories: {
  title: string;
  blurb: string;
  icon: LucideIcon;
  ring: string;
  blob: string;
}[] = [
  {
    title: "Üniversite seminerleri",
    blurb: "Kampüste yüz yüze gelişim ve kariyer oturumları",
    icon: Mic2,
    ring: "ring-[#0038ff]/25",
    blob: "from-[#0038ff]/20 via-[#2258dc]/10 to-transparent",
  },
  {
    title: "Dil kursları",
    blurb: "Konuşma kulüpleri ve sınıfa özel grup dersleri",
    icon: Languages,
    ring: "ring-[#CCFF00]/40",
    blob: "from-[#CCFF00]/35 via-[#b8e600]/15 to-transparent",
  },
  {
    title: "Yurtdışı eğitim",
    blurb: "Webinar, seminer ve fuarlarla net bilgi",
    icon: Globe2,
    ring: "ring-cyan-400/30",
    blob: "from-cyan-400/25 via-sky-400/10 to-transparent",
  },
  {
    title: "Kampüs temsilciliği",
    blurb: "Kendi üniversitende ağı büyüt, etkinlik düzenle",
    icon: Users,
    ring: "ring-violet-400/30",
    blob: "from-violet-500/20 via-fuchsia-400/10 to-transparent",
  },
  {
    title: "Sertifika programları",
    blurb: "Kısa sürede kazanımını belgeleyen programlar",
    icon: Award,
    ring: "ring-amber-400/35",
    blob: "from-amber-400/25 via-orange-400/10 to-transparent",
  },
  {
    title: "Gezi & kampüs turları",
    blurb: "Şehir ve kampüs keşifleriyle tanıtım turları",
    icon: MapPinned,
    ring: "ring-emerald-400/30",
    blob: "from-emerald-400/25 via-teal-400/10 to-transparent",
  },
  {
    title: "Topluluk iş birlikleri",
    blurb: "Kulüplerle ortak etkinlik ve sponsor desteği",
    icon: Handshake,
    ring: "ring-rose-400/30",
    blob: "from-rose-400/20 via-pink-400/10 to-transparent",
  },
  {
    title: "Kurumsal eğitimler",
    blurb: "Markalarla gençlik odaklı eğitim ve projeler",
    icon: Building2,
    ring: "ring-slate-400/25",
    blob: "from-slate-500/15 via-slate-400/5 to-transparent",
  },
];

/** Ana sayfa — Yaklaşan etkinlikler (örnek veri) */
const upcomingEvents: {
  title: string;
  venue: string;
  when: string;
  speaker: string;
  mode: "fiziksel" | "online";
  spot: "Ücretsiz" | "Kontenjanlı";
  accent: "lime" | "blue";
}[] = [
  {
    title: "Kariyer Sohbetleri: İlk adım",
    venue: "Boğaziçi Üniversitesi",
    when: "24 Nisan 2026 · 14:00",
    speaker: "Dr. Ayşe Yılmaz",
    mode: "fiziksel",
    spot: "Ücretsiz",
    accent: "lime",
  },
  {
    title: "Yurtdışı yüksek lisans bilgi oturumu",
    venue: "Online yayın",
    when: "2 Mayıs 2026 · 19:30",
    speaker: "Mezun konukları",
    mode: "online",
    spot: "Kontenjanlı",
    accent: "blue",
  },
  {
    title: "İngilizce konuşma kulübü buluşması",
    venue: "ODTÜ · öğrenci merkezi",
    when: "8 Mayıs 2026 · 17:00",
    speaker: "Eğitmen: Can Demir",
    mode: "fiziksel",
    spot: "Ücretsiz",
    accent: "lime",
  },
];

// --- Custom SVG Components for Hand-Drawn Accents ---

const ArrowGreenLeft = () => (
  <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible stroke-current text-[#CCFF00]" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
);

const ArrowGreenRight = () => (
  <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible stroke-current text-[#CCFF00]" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
);

const CircularBadge = () => (
  <a
    href="/basvuru/genel"
    aria-label="Genel başvuru formuna git"
    className="inline-flex rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-[#CCFF00]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2258dc]"
  >
    <div className="relative flex h-28 w-28 rotate-12 cursor-pointer items-center justify-center rounded-full border-[3px] border-black/5 bg-[#CCFF00] shadow-xl transition-transform hover:scale-105 md:h-36 md:w-36">
      <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
          <text className="text-[9px] font-black uppercase tracking-[0.14em] md:text-[11px] md:tracking-[0.18em]" fill="black">
            <textPath href="#circlePath" startOffset="0%">
              AKTİF KAMPÜS • HEMEN KATIL • AKTİF KAMPÜS • HEMEN KATIL •{" "}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-10 w-10 overflow-visible stroke-current text-black" fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20,80 Q 40,50 30,30 T 80,20" />
          <path d="M60,10 L80,20 L70,40" />
        </svg>
      </div>
    </div>
  </a>
);

const titleStyle: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  textShadow:
    "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 9px 9px 0 #001A99, 10px 10px 0 #001A99",
};

/** Açık zeminde ilk satır: parlak mavi yerine yüksek kontrastlı lacivert */
const titleStyleOnLightPrimary: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#0b1f3f",
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.9), 2px 2px 0 rgba(204,255,0,0.45), 3px 3px 0 rgba(11,31,63,0.2), 4px 4px 0 rgba(11,31,63,0.12)",
};

type HeroFloatCardProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  line: string;
  stat: string;
  statSuffix?: string;
  statLabel: string;
  rotationClass: string;
};

const HeroFloatCard = ({ image, imageAlt, eyebrow, line, stat, statSuffix = "+", statLabel, rotationClass }: HeroFloatCardProps) => (
  <div
    className={`relative w-[min(100%,10.75rem)] sm:w-44 md:w-[11.75rem] ${rotationClass} overflow-hidden rounded-[1.15rem] border-[2.5px] border-white/55 bg-white shadow-[0_18px_44px_rgba(5,25,80,0.42)] ring-1 ring-black/10 transition-transform duration-500 ease-out will-change-transform hover:rotate-0 hover:scale-[1.02]`}
  >
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" decoding="async" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#0b2a7a]/80 via-[#0b2a7a]/12 to-transparent" />
    </div>
    <div className="border-t border-white/35 bg-gradient-to-b from-[#174bd4]/98 to-[#103d99]/98 px-2.5 pb-2.5 pt-2 backdrop-blur-sm">
      <p className="text-center text-[9px] font-black uppercase tracking-[0.16em] text-[#e8ff66] [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">{eyebrow}</p>
      <p className="mt-1 text-center text-[11px] font-semibold leading-snug text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">{line}</p>
      <div className="mt-2 flex items-end justify-center gap-0.5 border-t border-white/25 pt-2">
        <span className="text-[1.5rem] font-black leading-none tabular-nums text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.45)] sm:text-[1.65rem]">{stat}</span>
        <span className="pb-0.5 text-xs font-black text-[#CCFF00] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">{statSuffix}</span>
      </div>
      <p className="mt-0.5 text-center text-[8px] font-bold uppercase tracking-[0.14em] text-white">{statLabel}</p>
    </div>
  </div>
);

/** Logo — neo-brutalist kutu + DM Sans wordmark (menü ile aynı aile) */
const HeaderNavBrand = () => (
  <a
    href="/"
    className="group flex shrink-0 items-center gap-2 sm:gap-2.5"
    aria-label="Aktif Kampüs — ana sayfa"
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-[2.5px] border-[#0b1f3f] bg-[#CCFF00] font-sans text-[17px] font-extrabold leading-none tracking-tight text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f] transition group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0_#0b1f3f] sm:h-10 sm:w-10 sm:text-lg">
      A
    </span>
    <span className="font-sans text-[15px] font-bold leading-tight tracking-tight text-[#0b1f3f] sm:text-base">
      Aktif <span className="font-bold text-[#0038ff]">Kampüs</span>
    </span>
  </a>
);

export const Component = () => {
  const [navDropdown, setNavDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!navDropdown) return;
    const onDoc = () => setNavDropdown(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavDropdown(null);
    };
    const t = window.setTimeout(() => document.addEventListener("click", onDoc), 0);
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [navDropdown]);

  return (
    <div
      id="top"
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden overflow-y-visible bg-gradient-to-br from-[#2a62e8] via-[#2258dc] to-[#1848c4] font-sans selection:bg-[#CCFF00] selection:text-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <header className="sticky top-0 z-[70] w-full overflow-visible">
        <div className="relative px-2 pb-8 pt-3 sm:px-3 md:px-4 md:pb-10 md:pt-4 lg:px-5 lg:pb-12">
          <div
            className="relative flex w-full flex-col overflow-visible rounded-2xl border-4 border-[#0b1f3f] bg-white/95 shadow-[12px_12px_0_#0b1f3f] backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-1.5 w-full shrink-0 rounded-t-[0.65rem] bg-gradient-to-r from-[#CCFF00] via-[#9fcc12] to-[#0038ff] sm:rounded-t-[0.85rem]"
              aria-hidden
            />
            <div className="flex flex-wrap items-center gap-3 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3 md:px-5">
              <HeaderNavBrand />

              <nav
                className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-2 font-sans text-[#0b1f3f] antialiased lg:flex [&_button]:font-sans [&_a]:font-sans"
                aria-label="Site ağacı"
              >
                <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-1 rounded-xl border-2 border-[#0b1f3f] bg-[#f8fafc] px-1.5 py-1 shadow-[3px_3px_0_rgba(11,31,63,0.12)] sm:gap-1.5 sm:px-2">
                  {mainNav.map((entry) =>
                    entry.kind === "link" ? (
                      <a
                        key={entry.href}
                        href={entry.href}
                        className="rounded-lg border-2 border-transparent px-2.5 py-2 font-sans text-[14px] font-medium leading-normal tracking-[0.01em] transition hover:border-[#0b1f3f]/25 hover:bg-white xl:px-3 xl:text-[15px]"
                      >
                        {entry.label}
                      </a>
                    ) : (
                      <div key={entry.label} className="relative">
                        <button
                          type="button"
                          className={`inline-flex max-w-[11rem] items-center gap-1 rounded-lg border-2 border-transparent px-2.5 py-2 text-left font-sans text-[14px] font-medium leading-normal tracking-[0.01em] transition sm:max-w-[13rem] xl:max-w-none xl:px-3 xl:text-[15px] ${
                            navDropdown === entry.label
                              ? "border-[#0b1f3f] bg-[#CCFF00] font-semibold shadow-[2px_2px_0_#0b1f3f]"
                              : "hover:border-[#0b1f3f]/25 hover:bg-white"
                          }`}
                          aria-expanded={navDropdown === entry.label}
                          aria-haspopup="true"
                          onClick={(e) => {
                            e.stopPropagation();
                            setNavDropdown((d) => (d === entry.label ? null : entry.label));
                          }}
                        >
                          <span className="min-w-0 truncate xl:whitespace-normal">{entry.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 opacity-70 transition ${navDropdown === entry.label ? "rotate-180" : ""}`}
                            aria-hidden
                          />
                        </button>
                        {navDropdown === entry.label ? (
                          <div
                            className="absolute left-0 top-[calc(100%+8px)] z-[100] min-w-[min(18rem,calc(100vw-2rem))] rounded-xl border-4 border-[#0b1f3f] bg-white py-2 font-sans shadow-[6px_6px_0_rgba(11,31,63,0.2)]"
                            role="menu"
                          >
                            <p className="border-b-2 border-dashed border-[#0b1f3f]/15 px-3 pb-2.5 pt-1.5 text-[13px] font-semibold leading-normal tracking-wide text-[#0b1f3f]/70">
                              {entry.label}
                            </p>
                            {entry.items.map((l) => (
                              <a
                                key={`${entry.label}-${l.href}`}
                                href={l.href}
                                role="menuitem"
                                className="block px-4 py-2.5 text-[15px] font-normal leading-relaxed tracking-[0.01em] text-[#0b1f3f] transition hover:bg-[#eff6ff] hover:font-medium hover:text-[#0038ff]"
                                onClick={() => setNavDropdown(null)}
                              >
                                {l.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ),
                  )}
                </div>
                <a
                  href="/basvuru"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border-4 border-[#0b1f3f] bg-[#CCFF00] px-3 py-2.5 font-sans text-[14px] font-bold leading-none tracking-[0.02em] text-[#0b1f3f] shadow-[4px_4px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-[#d4f836] hover:shadow-[2px_2px_0_#0b1f3f] xl:px-4 xl:text-[15px]"
                >
                  Başvuru Yap
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
                </a>
              </nav>

              <button
                type="button"
                className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#0b1f3f] bg-white text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f] transition hover:bg-[#CCFF00] lg:hidden"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-site-tree"
                onClick={() => {
                  setMobileMenuOpen((o) => !o);
                  setMobileAccordion(null);
                }}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
                <span className="sr-only">Site ağacı</span>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div
            id="mobile-site-tree"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[85] bg-black/45 backdrop-blur-[2px] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="absolute bottom-0 left-2 right-2 max-h-[88dvh] overflow-y-auto rounded-t-3xl border-4 border-b-0 border-[#0b1f3f] bg-[#f1f5f9] p-3 shadow-[0_-12px_48px_rgba(0,0,0,0.35)] sm:left-3 sm:right-3 md:left-4 md:right-4 lg:left-5 lg:right-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto max-h-full max-w-lg overflow-hidden rounded-2xl border-4 border-[#0b1f3f] bg-white shadow-[8px_8px_0_#0b1f3f]">
                <div className="h-1 w-full bg-gradient-to-r from-[#CCFF00] via-[#9fcc12] to-[#0038ff]" aria-hidden />
                <div className="p-4 font-sans text-[#0b1f3f] antialiased">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0b1f3f]/50">Site ağacı</p>
                  <div className="mt-4 space-y-2">
                    {mainNav.map((entry) =>
                      entry.kind === "link" ? (
                        <a
                          key={entry.href}
                          href={entry.href}
                          className="block rounded-xl border-2 border-[#0b1f3f]/15 bg-[#f8fafc] px-4 py-3.5 text-[16px] font-medium leading-snug tracking-[0.01em]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {entry.label}
                        </a>
                      ) : (
                        <div key={entry.label} className="overflow-hidden rounded-xl border-2 border-[#0b1f3f] bg-[#f8fafc]">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between px-4 py-3.5 text-left text-[16px] font-medium leading-snug tracking-[0.01em]"
                            aria-expanded={mobileAccordion === entry.label}
                            onClick={() => setMobileAccordion((a) => (a === entry.label ? null : entry.label))}
                          >
                            {entry.label}
                            <ChevronDown
                              className={`h-4 w-4 shrink-0 transition ${mobileAccordion === entry.label ? "rotate-180" : ""}`}
                              aria-hidden
                            />
                          </button>
                          {mobileAccordion === entry.label ? (
                            <ul className="border-t-2 border-dashed border-[#0b1f3f]/20 bg-white px-2 py-2">
                              {entry.items.map((l) => (
                                <li key={l.href}>
                                  <a
                                    href={l.href}
                                    className="block rounded-lg px-3 py-2.5 text-[16px] font-normal leading-relaxed tracking-[0.01em] hover:bg-[#eff6ff] hover:font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {l.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ),
                    )}
                  </div>
                  <a
                    href="/basvuru"
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl border-4 border-[#0b1f3f] bg-[#CCFF00] py-3.5 text-center text-[16px] font-bold leading-snug tracking-[0.02em] shadow-[4px_4px_0_#0b1f3f]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Başvuru Yap
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main className="relative z-10 mx-auto min-h-0 w-full max-w-[1440px] flex-1 px-4 pb-32 pt-10 md:px-8 md:pb-48 md:pt-16">
        <div className="relative z-40 mx-auto mb-6 mt-2 flex w-full max-w-5xl flex-col items-center text-center md:mb-8 md:mt-3">
          <div className="relative flex w-full flex-col items-center space-y-1.5 md:space-y-3">
            <div className="flex w-full justify-start pl-[5%] sm:pl-[8%] md:pl-[12%] lg:pl-[14%]">
              <h1 className="m-0 p-0 text-[clamp(3.65rem,10vw,138px)] font-black uppercase leading-[0.85] tracking-tighter text-[#CCFF00] sm:text-[clamp(4rem,11vw,152px)]" style={titleStyle}>
                #AKTİF
              </h1>
            </div>

            <div className="flex w-full justify-center pr-6 sm:pr-10 md:pr-16 lg:pr-24 xl:pr-32">
              <h1
                className="m-0 inline-block translate-x-1 p-0 text-[clamp(3.25rem,10.5vw,160px)] font-black uppercase leading-[0.85] tracking-tighter text-white sm:translate-x-2 sm:text-[clamp(3.55rem,11.5vw,176px)] md:translate-x-3 lg:translate-x-4"
                style={titleStyle}
              >
                KAMPÜS
              </h1>
            </div>

            <div className="flex w-full justify-end pl-[22%] pr-2 sm:pl-[30%] sm:pr-3 md:pl-[38%] md:pr-4 lg:pl-[46%] lg:pr-6 xl:pl-[54%] xl:pr-10">
              <h1 className="m-0 max-w-[95vw] p-0 text-[clamp(3.65rem,10vw,138px)] font-black uppercase leading-[0.85] tracking-tighter text-white sm:text-[clamp(4rem,11vw,152px)]" style={titleStyle}>
                TOPLULUK
              </h1>
            </div>
          </div>

          <p
            className="mx-auto mt-5 max-w-xl px-3 text-[15px] font-semibold leading-relaxed text-white md:mt-6 md:max-w-2xl md:text-base md:leading-relaxed"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.35)" }}
          >
            Öğrencileri, kulüpleri ve fırsatları tek çatıda buluşturuyoruz. Etkinlikler, dil kursları ve yurtdışı programlarına buradan ulaş.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:mt-5 md:gap-4">
            <a
              href="/etkinlikler"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#CCFF00] px-7 py-2.5 text-[14px] font-bold leading-none text-neutral-950 shadow-[0_4px_24px_rgba(0,0,0,0.25)] ring-1 ring-black/15 transition hover:brightness-[1.05] active:scale-[0.98] md:min-h-[48px] md:px-9 md:text-[15px]"
            >
              Etkinliklere göz at
            </a>
            <a
              href="/basvuru/temsilci"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-white/70 bg-white/20 px-7 py-2.5 text-[14px] font-bold leading-none text-white shadow-[0_2px_12px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:bg-white/30 active:scale-[0.98] md:min-h-[48px] md:px-9 md:text-[15px]"
            >
              Temsilci ol
            </a>
            <div className="pointer-events-auto flex shrink-0 scale-[0.88] items-center md:scale-95 lg:scale-100">
              <CircularBadge />
            </div>
          </div>
        </div>

        {/* Sol kart + oklar: başlığın üstünde (z-40) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[4.5rem] z-[42] md:top-[5.5rem]">
          <div className="pointer-events-none relative mx-auto h-full w-full max-w-[1440px]">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-auto absolute left-2 top-[20%] z-[43] hidden sm:left-4 sm:top-[22%] md:left-7 md:top-[23%] md:block lg:left-11 lg:top-[24%] xl:left-14 xl:top-[25%] 2xl:left-20"
            >
              <HeroFloatCard
                image={imgCommunityA}
                imageAlt="Kampüste bir araya gelen öğrenci topluluğu"
                eyebrow="Topluluk"
                line="Birlikte öğren, birlikte büyü"
                stat="50"
                statLabel="iş birliği"
                rotationClass="rotate-[-10deg]"
              />
            </motion.div>

            <div className="absolute bottom-[2%] left-[2%] z-20 hidden h-20 w-20 sm:left-4 md:bottom-[0%] md:left-[6%] md:block md:h-28 md:w-28 lg:left-[8%]">
              <ArrowGreenLeft />
            </div>

            <div className="absolute right-[2%] top-[8%] z-20 hidden h-20 w-20 sm:right-4 md:right-[6%] md:top-[6%] md:block md:h-28 md:w-28 lg:right-[8%]">
              <ArrowGreenRight />
            </div>
          </div>
        </div>

        {/* Sağ kart: z-30 ile başlık bloğunun (z-40) altında; konum: sağ ve üst */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[4.5rem] z-30 md:top-[5.5rem]">
          <div className="pointer-events-none relative mx-auto h-full w-full max-w-[1440px]">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="pointer-events-auto absolute -top-2 right-1 z-30 hidden max-sm:left-auto sm:-top-2 sm:right-2 md:right-[7%] md:-top-1 md:block lg:right-[9%] lg:-top-1.5 xl:right-[11%] xl:-top-2 2xl:right-[13%] 2xl:-top-2.5"
            >
              <HeroFloatCard
                image={imgCommunityB}
                imageAlt="Üniversite öğrencileri çalışma grubu"
                eyebrow="Kampüs ağı"
                line="Şehirler arası bağlantı"
                stat="120"
                statLabel="temsilci"
                rotationClass="rotate-[10deg]"
              />
            </motion.div>
          </div>
        </div>
      </main>

      <section
        id="hakkimizda"
        className="relative z-20 mt-auto scroll-mt-[5.5rem] w-full overflow-hidden rounded-t-[2.5rem] bg-gradient-to-b from-white via-[#e8eefc] to-[#f5f8ff] px-5 py-14 text-neutral-950 shadow-[0_-24px_60px_rgba(0,56,255,0.12)] md:rounded-t-[3.5rem] md:px-10 md:py-20"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#CCFF00]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#0038ff]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0038ff06_1px,transparent_1px),linear-gradient(to_bottom,#0038ff06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14"
          >
            <div className="lg:col-span-5">
              <h2 className="text-[clamp(1.65rem,4.5vw,2.65rem)] font-black uppercase leading-[0.92] tracking-tighter">
                <span className="block" style={titleStyleOnLightPrimary}>
                  Aktif Kampüs
                </span>
                <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
                  nedir?
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] font-normal leading-[1.7] text-neutral-900 md:text-base">
                Öğrencileri, kulüpleri ve markaları sosyal fayda odaklı biçimde bir araya getiren bir platformuz. Seminer ve atölyelerden dil kurslarına, yurtdışı etkinliklerinden kampüs temsilciliğine kadar içerikler tek yerde toplanır.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Topluluk öncelikli", "Erişilebilir içerik", "Kampüsler arası ağ"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0b1f3f]/20 bg-white px-3.5 py-2 text-[12px] font-semibold text-neutral-900 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { n: "50+", l: "iş birliği" },
                  { n: "120+", l: "temsilci" },
                  { n: "2.000+", l: "katılımcı" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-neutral-200/80 bg-white p-4 text-center shadow-[0_6px_24px_rgba(11,31,63,0.08)]"
                  >
                    <p className="text-2xl font-black tabular-nums text-[#0b3d9e] md:text-3xl">{s.n}</p>
                    <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-700">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div id="egitim-programlari" className="scroll-mt-[5.5rem]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-[clamp(1.35rem,3.5vw,2rem)] font-black uppercase leading-[0.95] tracking-tighter">
                      <span className="block" style={titleStyleOnLightPrimary}>
                        Öne çıkan
                      </span>
                      <span className="mt-0.5 block text-[#CCFF00]" style={titleStyle}>
                        kategoriler
                      </span>
                    </h3>
                  </div>
                  <p className="max-w-sm text-[14px] font-medium leading-snug text-neutral-800 md:text-[15px]">
                    Seminerden dile, yurtdışından temsilciliğe: tüm başlıklar tek yerde.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlightCategories.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className={`group relative overflow-hidden rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_8px_28px_rgba(11,31,63,0.08)] ring-1 ${c.ring} transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(11,31,63,0.12)]`}
                    >
                      <div
                        className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${c.blob} opacity-90 blur-2xl transition group-hover:opacity-100`}
                      />
                      <div className="relative flex gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038ff] to-[#2258dc] text-white shadow-md ring-1 ring-white/40">
                          <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[14px] font-black uppercase leading-tight tracking-tight text-neutral-950">{c.title}</p>
                          <p className="mt-1.5 text-[13px] font-medium leading-snug text-neutral-800">{c.blurb}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#0b1f3f]/10 bg-gradient-to-r from-[#1548e8] to-[#1a5cff] p-4 text-white shadow-[0_12px_36px_rgba(11,31,63,0.25)] md:p-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white/70 bg-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                    <img src={imgCommunityA} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-black uppercase tracking-[0.14em] text-[#e8ff66] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
                      Kampüs temsilciliği
                    </p>
                    <p className="mt-0.5 text-[15px] font-bold leading-snug [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
                      Her üniversitede bir Aktif Kampüs temsilcisi
                    </p>
                  </div>
                </div>
                <a
                  href="/basvuru/genel"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#CCFF00] px-6 py-3 text-[13px] font-black uppercase tracking-wide text-neutral-950 shadow-lg transition hover:brightness-105"
                >
                  Başvuru
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="yaklasan-etkinlikler"
        className="relative z-20 w-full overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#152f52] px-5 py-16 text-white md:px-10 md:py-24"
      >
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0038ff]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#CCFF00]/12 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-[clamp(1.65rem,4.5vw,2.65rem)] font-black uppercase leading-[0.92] tracking-tighter">
                <span className="block text-white" style={titleStyle}>
                  Yaklaşan
                </span>
                <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
                  etkinlikler
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] font-medium leading-relaxed text-white/85">
                Üniversite veya online; tarih, konuşmacı ve ücretsiz / kontenjan bilgisi tek bakışta. Kartlardan detaya geç.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border-2 border-white/35 bg-white/10 px-6 py-2.5 text-[13px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Tüm etkinlikler
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {upcomingEvents.map((ev, i) => (
              <motion.article
                key={ev.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] shadow-[0_16px_48px_rgba(0,0,0,0.25)] backdrop-blur-md ring-1 ring-white/10 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.1]"
              >
                <div
                  className={`h-1.5 w-full ${ev.accent === "lime" ? "bg-[#CCFF00]" : "bg-gradient-to-r from-[#0038ff] to-[#2a62e8]"}`}
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[15px] font-black uppercase leading-snug tracking-tight text-white">{ev.title}</h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wide ${
                        ev.spot === "Ücretsiz" ? "bg-[#CCFF00] text-neutral-950" : "bg-white/15 text-[#e0edff] ring-1 ring-white/25"
                      }`}
                    >
                      {ev.spot}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2.5 text-[13px] font-medium text-white/90">
                    <div className="flex items-start gap-2">
                      {ev.mode === "online" ? (
                        <Monitor className="mt-0.5 h-4 w-4 shrink-0 text-[#CCFF00]" aria-hidden />
                      ) : (
                        <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#CCFF00]" aria-hidden />
                      )}
                      <span>
                        {ev.venue}
                        <span className="text-white/55"> · </span>
                        <span className="text-white/80">{ev.mode === "online" ? "online" : "yüz yüze"}</span>
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-[#8eb8ff]" aria-hidden />
                      <span>{ev.when}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <User className="mt-0.5 h-4 w-4 shrink-0 text-[#8eb8ff]" aria-hidden />
                      <span>{ev.speaker}</span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#CCFF00] py-3 text-[12px] font-black uppercase tracking-wider text-neutral-950 shadow-[0_4px_20px_rgba(204,255,0,0.25)] transition group-hover:brightness-105"
                  >
                    Detay
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="temsilcilik-ve-kulupler"
        className="relative z-20 w-full overflow-hidden bg-gradient-to-b from-[#eaff4a] via-[#CCFF00] to-[#b8e020] px-5 py-20 text-[#0b1f3f] md:px-10 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.45),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(0,56,255,0.12),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(-45deg,#0b1f3f_0,#0b1f3f_1px,transparent_1px,transparent_12px)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#0b1f3f]/70">Kampüs & topluluk</p>
            <h2 className="mt-4 text-[clamp(1.85rem,5vw,3rem)] font-black uppercase leading-[0.92] tracking-tighter">
              <span className="block text-[#0b1f3f]" style={titleStyle}>
                Ağa katıl
              </span>
              <span className="mt-2 block text-white [text-shadow:2px_2px_0_#001A99,4px_4px_0_#001A99]" style={titleStyle}>
                iki yolla
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] font-semibold leading-relaxed text-[#0b1f3f]/90 md:text-base">
              Temsilci olarak kampüsün sesi ol; kulüp olarak etkinliği çoğalt. Aynı yeşil çizgi, farklı roller.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[2rem] border-4 border-[#0b1f3f] bg-[#0b1f3f] shadow-[0_24px_0_0_rgba(11,31,63,0.15)]"
            >
              <div className="flex flex-col md:flex-row md:items-stretch">
                <div className="relative h-56 w-full shrink-0 md:h-auto md:w-[42%] lg:w-[40%]">
                  <img
                    src={imgTemsilcilikHero}
                    alt="Salonda sunum ve dinleyici kitlesi"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b1f3f]/90 md:bg-gradient-to-l" />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-5 px-6 py-8 md:px-10 md:py-10">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#CCFF00] px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#0b1f3f]">
                    <Megaphone className="h-3.5 w-3.5" aria-hidden />
                    Temsilcilik
                  </div>
                  <h3 className="text-[clamp(1.5rem,3.5vw,2.15rem)] font-black uppercase leading-[0.95] tracking-tight text-white">
                    <span className="text-[#CCFF00]">Her üniversitede</span>
                    <br />
                    bir temsilci
                  </h3>
                  <p className="max-w-md text-[15px] font-medium leading-relaxed text-white/85">
                    Duyuru, etkinlik ve topluluk büyütme — kampüsünde Aktif Kampüs’ü temsil et. Başvurunu bırak, sana özel adımları konuşalım.
                  </p>
                  <a
                    href="#"
                    className="inline-flex w-fit min-h-[48px] items-center justify-center rounded-full bg-[#0038ff] px-8 py-3 text-[14px] font-bold text-white shadow-[0_8px_0_#001A99] transition hover:translate-y-0.5 hover:shadow-[0_4px_0_#001A99]"
                  >
                    Temsilci başvurusu
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-[0_24px_0_0_rgba(11,31,63,0.12)]"
            >
              <div className="flex flex-col md:flex-row-reverse md:items-stretch">
                <div className="relative h-56 w-full shrink-0 md:h-auto md:w-[42%] lg:w-[40%]">
                  <img
                    src={imgKuluplerHero}
                    alt="Birlikte çalışan öğrenci grubu"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-5 px-6 py-8 md:px-10 md:py-10">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#0b1f3f] bg-[#CCFF00] px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#0b1f3f]">
                    <UsersRound className="h-3.5 w-3.5" aria-hidden />
                    Kulüpler
                  </div>
                  <h3 className="text-[clamp(1.45rem,3.2vw,2rem)] font-black uppercase leading-[0.95] tracking-tight text-[#0b1f3f]">
                    Kulüp etkinliğini
                    <br />
                    <span className="text-[#0038ff]">sahneye taşı</span>
                  </h3>
                  <p className="max-w-md text-[15px] font-medium leading-relaxed text-neutral-800">
                    Listele, ortak program öner, sponsorluk için yönlendirme al. Topluluğun görünürlüğü burada büyür.
                  </p>
                  <ul className="flex flex-col gap-2 text-[14px] font-bold text-[#0b1f3f]">
                    <li className="flex items-center gap-2 border-b border-neutral-200/80 pb-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#CCFF00] text-xs font-black">✓</span>
                      Platformda duyuru & liste
                    </li>
                    <li className="flex items-center gap-2 border-b border-neutral-200/80 pb-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#CCFF00] text-xs font-black">✓</span>
                      Ortak etkinlik & iş birliği
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#CCFF00] text-xs font-black">✓</span>
                      Sponsorluk kanalları
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="inline-flex w-fit min-h-[48px] items-center justify-center rounded-full border-2 border-[#0b1f3f] bg-[#0b1f3f] px-8 py-3 text-[14px] font-black uppercase tracking-wide text-[#CCFF00] transition hover:bg-[#152a45]"
                  >
                    Kulüp kaydı / iş birliği
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="konusmacilar"
        className="relative z-20 w-full overflow-hidden bg-gradient-to-br from-[#fef9c3] via-[#dbeafe] to-[#fae8ff] px-4 py-20 text-[#0b1f3f] md:px-8 md:py-28"
      >
        <div className="pointer-events-none absolute -left-24 top-20 h-[28rem] w-[28rem] rounded-full bg-[#CCFF00] opacity-40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-fuchsia-400 opacity-35 blur-[90px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-300 opacity-30 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230038ff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-8">
            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 16 }}
              whileInView={{ opacity: 1, rotate: -1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex min-h-0 flex-1 flex-col rounded-[2rem] border-4 border-[#0b1f3f] bg-[#CCFF00] p-6 shadow-[12px_12px_0_#0b1f3f] md:p-8 lg:max-w-[58%]"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#0b1f3f] bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#0b1f3f] shadow-sm">
                <Mic2 className="h-3.5 w-3.5" aria-hidden />
                Konuşmacılar
              </div>
              <h2 className="mt-5 text-[clamp(2rem,5.5vw,3.25rem)] font-black uppercase leading-[0.88] tracking-tighter text-[#0b1f3f]">
                <span className="text-[#0b1f3f]">Renkli</span>
                <br />
                <span className="font-black text-[#0038ff] [text-shadow:2px_2px_0_#fff,3px_3px_0_#0b1f3f] md:[text-shadow:3px_3px_0_#fff,5px_5px_0_#0b1f3f]">
                  sahne
                </span>
              </h2>
              <p className="mt-5 text-[15px] font-bold leading-relaxed text-[#0b1f3f]">
                Kariyerden dile, yurtdışından girişimciliğe — uzmanlar kampüste ve online buluşuyor. Her isim farklı bir renk, aynı Aktif Kampüs enerjisi.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Seminer & panel", "Atölye & workshop", "Canlı yayın"].map((x) => (
                  <span
                    key={x}
                    className="rounded-xl border-2 border-[#0b1f3f]/80 bg-white/90 px-3 py-2 text-[11px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]"
                  >
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 rounded-2xl border-2 border-[#0b1f3f]/30 bg-white/50 p-4 backdrop-blur-[2px]">
                <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[#0038ff]">Bu ay öne çıkan</p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[14px] font-black text-[#0b1f3f]">Kariyer & yurtdışı haftası</p>
                    <p className="text-[12px] font-semibold text-[#0b1f3f]/75">4 oturum · ücretsiz kayıt</p>
                  </div>
                  <span className="rounded-lg bg-[#0b1f3f] px-2.5 py-1 text-[10px] font-black uppercase text-[#CCFF00]">Yakında</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex flex-1 flex-col justify-between rounded-[2rem] border-4 border-[#0b1f3f] bg-gradient-to-br from-[#0b1f3f] via-[#152a52] to-[#0038ff] p-6 text-white shadow-[10px_10px_0_rgba(204,255,0,0.9)] md:p-8"
            >
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#CCFF00]">Çağrı</p>
                <p className="mt-3 text-[22px] font-black uppercase leading-tight tracking-tight md:text-2xl">
                  Sen de
                  <br />
                  <span className="text-[#CCFF00]">sahneye çık</span>
                </p>
                <p className="mt-4 text-[14px] font-semibold leading-relaxed text-white/85">
                  Uzmanlığını paylaş: başvurunu bırak, formatı birlikte seçelim. Kulüp ve kampüs iş birlikleri için de kapı açık.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#CCFF00] text-lg font-black text-[#0b1f3f]">1</span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-white/90">Formu doldur</p>
                    <p className="text-[11px] font-medium text-white/65">Konu & örnek içerik</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 py-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#CCFF00] text-sm font-black text-[#CCFF00]">2</span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-white/90">Takvim & format</p>
                    <p className="text-[11px] font-medium text-white/65">Online / kampüs</p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="mt-8 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#0b1f3f] bg-[#CCFF00] py-3.5 text-[14px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[0_6px_0_#0b1f3f] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_#0b1f3f]"
              >
                Konuşmacı başvurusu
                <span aria-hidden className="text-lg">
                  →
                </span>
              </a>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {speakersShowcase.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative flex flex-col ${s.tilt}`}
              >
                <div className="relative">
                  <div className={`absolute -inset-1.5 -z-10 rounded-[1.75rem] ${s.pop} opacity-95`} />
                  <div
                    className={`relative flex flex-col overflow-hidden rounded-[1.75rem] border-4 border-[#0b1f3f] bg-white ${s.shadow} transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none`}
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                      <img
                        src={s.img}
                        alt={s.name}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105 group-hover:contrast-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/25 via-transparent to-cyan-400/30 mix-blend-overlay" />
                      <span className="absolute left-2 top-2 rotate-[-8deg] rounded-lg border-2 border-[#0b1f3f] bg-[#CCFF00] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#0b1f3f] shadow-sm">
                        {s.tag}
                      </span>
                      <span className="absolute bottom-3 right-3 text-2xl opacity-40">★</span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0038ff]">Sahne konuğu</p>
                      <h3 className="mt-2 text-[16px] font-black uppercase leading-tight tracking-tight text-[#0b1f3f]">{s.name}</h3>
                      <p className="mt-2 text-[13px] font-bold leading-snug text-neutral-700">{s.role}</p>
                      <a
                        href="#"
                        className="mt-4 inline-flex w-fit items-center rounded-full bg-[#0b1f3f] px-4 py-2 text-[11px] font-black uppercase tracking-wide text-[#CCFF00] transition hover:bg-[#0038ff]"
                      >
                        Oturumlar →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-12 text-center text-[13px] font-bold uppercase tracking-[0.2em] text-[#0b1f3f]/50">★ Seminer · atölye · canlı yayın ★</p>
        </div>
      </section>

      <section
        id="dil-yurtdisi"
        className="relative z-20 w-full overflow-hidden bg-gradient-to-b from-[#0c1929] via-[#0f2847] to-[#152f52] px-5 py-20 text-white md:px-10 md:py-24"
      >
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#0038ff]/30 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#CCFF00]/15 blur-[110px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:2.75rem_2.75rem] opacity-40" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#CCFF00] backdrop-blur-sm">
              <Languages className="h-3.5 w-3.5" aria-hidden />
              Dil & yurtdışı
            </div>
            <h2 className="text-[clamp(1.85rem,4.5vw,2.85rem)] font-black uppercase leading-[0.92] tracking-tighter">
              <span className="block text-white" style={titleStyle}>
                Dil kursları
              </span>
              <span className="mt-2 block text-[#CCFF00]" style={titleStyle}>
                yurtdışı yolu
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-medium leading-relaxed text-white/80">
              Kampüste ve online dil programları; yurtdışı eğitim için webinar, seminer ve fuar takvimi — tek çatı altında.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
            >
              <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden bg-neutral-800">
                <img
                  src={imgDilSection}
                  alt="Sınıfta dil öğrenen öğrenciler"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1929] via-[#0c1929]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-[#CCFF00] px-3 py-2 text-[11px] font-black uppercase text-[#0b1f3f]">
                  <BookOpen className="h-4 w-4" aria-hidden />
                  Dil kursları
                </div>
              </div>
              <div className="space-y-4 p-6 md:p-8">
                <p className="text-[14px] font-semibold leading-relaxed text-white/85">
                  Konuşma kulüpleri, üniversiteye özel grup dersleri ve online sınıflar — seviye ve hedefe göre rota.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {dilKurslariOzeti.map((d) => (
                    <div
                      key={d.dil}
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 transition hover:border-[#CCFF00]/40 hover:bg-white/10"
                    >
                      <p className="text-[14px] font-black uppercase text-[#CCFF00]">{d.dil}</p>
                      <p className="mt-1 text-[12px] font-medium text-white/70">{d.not}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#CCFF00] py-3 text-[14px] font-black uppercase tracking-wide text-[#0b1f3f] transition hover:brightness-105 sm:w-auto sm:px-8"
                >
                  Dil programları
                </a>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
            >
              <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden bg-neutral-800">
                <img
                  src={imgYurtdisiSection}
                  alt="Uçak ve yolculuk"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1929] via-[#0c1929]/35 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/30 bg-[#0038ff] px-3 py-2 text-[11px] font-black uppercase text-white">
                  <Plane className="h-4 w-4" aria-hidden />
                  Yurtdışı eğitim
                </div>
              </div>
              <div className="space-y-4 p-6 md:p-8">
                <p className="text-[14px] font-semibold leading-relaxed text-white/85">
                  Ülke seçimi, başvuru süreçleri ve kampüs buluşmaları için düzenli içerik ve uzman oturumları.
                </p>
                <ul className="space-y-3">
                  {yurtdisiOzet.map((y) => (
                    <li
                      key={y.t}
                      className="flex gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-[#CCFF00]" aria-hidden />
                      <div>
                        <p className="text-[14px] font-bold text-white">{y.t}</p>
                        <p className="text-[12px] font-medium text-white/65">{y.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-[#CCFF00] bg-transparent py-3 text-[14px] font-black uppercase tracking-wide text-[#CCFF00] transition hover:bg-[#CCFF00] hover:text-[#0b1f3f] sm:w-auto sm:px-8"
                >
                  Yurtdışı etkinlikler
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section
        id="is-birligi"
        className="relative z-20 w-full overflow-hidden bg-gradient-to-b from-[#eaff52] via-[#CCFF00] to-[#b5dc20] px-5 py-20 text-[#0b1f3f] md:px-10 md:py-24"
      >
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-8 h-80 w-80 rounded-full bg-[#0038ff]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(45deg,#0b1f3f_0,#0b1f3f_1px,transparent_1px,transparent_14px)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#0b1f3f] bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]">
                <Handshake className="h-3.5 w-3.5" aria-hidden />
                İş birliği
              </div>
              <h2 className="mt-5 text-[clamp(1.85rem,4.5vw,2.85rem)] font-black uppercase leading-[0.92] tracking-tighter">
                <span className="block" style={titleStyleOnLightPrimary}>
                  Destekleyen
                </span>
                <span className="mt-1 block text-[#0038ff]" style={titleStyle}>
                  kurumlar
                </span>
              </h2>
              <p className="mt-5 text-[15px] font-bold leading-relaxed text-[#0b1f3f]/90">
                Markalar, eğitim kurumları ve gençlik odaklı partnerlerle kampüs programlarını büyütüyoruz. Logolar örnek isimlerdir — gerçek iş birlikleriyle güncellenir.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center self-start rounded-2xl border-4 border-[#0b1f3f] bg-white px-8 py-3 text-[13px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[8px_8px_0_#0038ff] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0_#0038ff] lg:self-end"
            >
              Partner ol
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {isBirligiPartnerler.map((p, i) => (
              <motion.div
                key={p.ad}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className={`flex flex-col items-center justify-center rounded-2xl border-4 border-[#0b1f3f] bg-white px-3 py-6 text-center shadow-[6px_6px_0_#0b1f3f] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#0038ff] ${i % 3 === 1 ? "lg:-translate-y-2" : ""}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#CCFF00] text-lg font-black text-[#0b1f3f] ring-2 ring-[#0b1f3f]">
                  {p.kisa}
                </span>
                <p className="mt-3 text-[12px] font-black uppercase leading-tight text-[#0b1f3f]">{p.ad}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-[#0038ff]">{p.alan}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-[12px] font-black uppercase tracking-[0.2em] text-[#0b1f3f]/55">
            Marka görünürlüğü · ortak etkinlik · sponsorluk
          </p>
        </div>
      </section>

      <section
        id="blog-rehber"
        className="relative z-20 w-full overflow-hidden bg-gradient-to-br from-[#fffef8] via-[#f3f8ff] to-[#fdf4ff] px-5 py-22 text-neutral-950 md:px-10 md:py-28"
      >
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#fde68a]/60 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#a5d8ff]/45 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#f5d0fe]/50 blur-[85px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.85),transparent)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:repeating-linear-gradient(-12deg,transparent,transparent_40px,rgba(0,56,255,0.04)_40px,rgba(0,56,255,0.04)_41px)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="flex flex-1 flex-col justify-center rounded-[2rem] border-4 border-[#0b1f3f] bg-white p-8 shadow-[10px_10px_0_#0038ff] md:p-10"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#0b1f3f] bg-[#CCFF00] px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#0b1f3f]">
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                Blog & rehber
              </div>
              <h2 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] font-black uppercase leading-[0.88] tracking-tighter">
                <span className="text-[#0b1f3f]">Okuyup</span>
                <br />
                <span className="text-[#0038ff] [text-shadow:2px_2px_0_#fff,4px_4px_0_#CCFF00]">ilerle</span>
              </h2>
              <p className="mt-6 text-[15px] font-bold leading-relaxed text-neutral-800">
                Rehber yazıları, kampüs ipuçları ve duyurular — hepsi açık zeminde, okunaklı ve arşivlenebilir.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["SEO içerik", "Öğrenci rehberi", "Duyurular"].map((x) => (
                  <span key={x} className="rounded-xl border-2 border-dashed border-[#0038ff]/35 bg-[#eff6ff] px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-[#0038ff]">
                    {x}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="relative flex flex-1 flex-col gap-6 overflow-hidden rounded-[2rem] border-4 border-[#0b1f3f] bg-gradient-to-br from-[#e0f2fe] to-[#fce7f3] p-8 shadow-[10px_10px_0_#0b1f3f] md:p-10"
            >
              <div className="pointer-events-none absolute -right-8 top-6 h-28 w-28 rotate-12 rounded-2xl border-4 border-[#0b1f3f]/15 bg-white/40" />
              <div className="pointer-events-none absolute -right-3 top-14 h-24 w-24 rotate-6 rounded-2xl border-4 border-[#0b1f3f]/10 bg-[#CCFF00]/25" />
              <div className="pointer-events-none absolute bottom-24 right-4 h-16 w-20 -rotate-6 rounded-xl border-2 border-dashed border-[#0b1f3f]/20" />

              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#0b1f3f] bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]">
                  Arşiv
                </span>
                <h3 className="mt-4 text-[22px] font-black uppercase leading-tight tracking-tight text-[#0b1f3f] md:text-[26px]">
                  Okumaya devam
                </h3>
                <p className="mt-3 text-[14px] font-bold leading-relaxed text-[#0b1f3f]/85">
                  Yeni yazılar bülten ve kampüs duyurularıyla paylaşılır; rehberleri tek listede topla, kategoriye göre gez.
                </p>
              </div>

              <ul className="relative space-y-2.5 border-y-2 border-dashed border-[#0b1f3f]/20 py-4">
                {[
                  { Icon: BookOpen, t: "Rehber & nasıl yapılır yazıları", d: "Başvuru, kampüs, kariyer ipuçları" },
                  { Icon: Megaphone, t: "Duyurular & etkinlik özetleri", d: "Tarihli güncellemeler, tek bakışta" },
                  { Icon: FileText, t: "Blog & SEO içerik", d: "Uzun form, paylaşılabilir başlıklar" },
                ].map(({ Icon, t, d }) => (
                  <li key={t} className="flex gap-3 rounded-xl bg-white/55 px-3 py-2.5 ring-2 ring-[#0b1f3f]/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#0b1f3f] bg-[#CCFF00] text-[#0b1f3f]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-black uppercase leading-snug text-[#0b1f3f]">{t}</span>
                      <span className="mt-0.5 block text-[11px] font-semibold text-[#0b1f3f]/65">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative grid grid-cols-3 gap-2">
                {[
                  { k: "Güncel", v: "Liste" },
                  { k: "Kategori", v: "Filtre" },
                  { k: "Mobil", v: "Okuma" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-xl border-2 border-[#0b1f3f] bg-white/70 px-2 py-2.5 text-center shadow-[3px_3px_0_#0b1f3f]/30"
                  >
                    <p className="text-[15px] font-black leading-none text-[#0038ff]">{x.v}</p>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-wide text-[#0b1f3f]/70">{x.k}</p>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="relative inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl border-4 border-[#0b1f3f] bg-[#CCFF00] py-3.5 text-[14px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[6px_6px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#0b1f3f]"
              >
                <Newspaper className="h-4 w-4 shrink-0" aria-hidden />
                Tüm yazılar
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {blogRehberYazilari.map((y, i) => {
              const accents = [
                { pop: "bg-fuchsia-300", border: "border-fuchsia-500", shadow: "shadow-[10px_10px_0_#86198f]", tilt: "-rotate-1" },
                { pop: "bg-cyan-300", border: "border-cyan-500", shadow: "shadow-[10px_10px_0_#0e7490]", tilt: "rotate-1" },
                { pop: "bg-amber-300", border: "border-amber-500", shadow: "shadow-[10px_10px_0_#b45309]", tilt: "-rotate-1" },
              ];
              const a = accents[i % 3];
              return (
                <motion.article
                  key={y.baslik}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className={`group relative ${a.tilt}`}
                >
                  <div className={`absolute -inset-1.5 -z-10 rounded-[1.75rem] ${a.pop} opacity-90`} />
                  <div
                    className={`flex flex-col overflow-hidden rounded-[1.75rem] border-4 ${a.border} bg-white ${a.shadow} transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none`}
                  >
                    <div className="relative aspect-[16/10] min-h-[170px] w-full overflow-hidden bg-neutral-100">
                      <img
                        src={y.img}
                        alt={y.baslik}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1f3f]/40 via-transparent to-fuchsia-400/20 mix-blend-multiply" />
                      <span className="absolute left-3 top-3 rotate-[-6deg] rounded-lg border-2 border-[#0b1f3f] bg-[#CCFF00] px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#0b1f3f]">
                        {y.kategori}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col border-t-4 border-[#0b1f3f]/10 bg-gradient-to-b from-white to-[#fafafa] p-5 md:p-6">
                      <h3 className="text-[15px] font-black uppercase leading-snug tracking-tight text-[#0b1f3f] md:text-[16px]">{y.baslik}</h3>
                      <p className="mt-3 flex-1 text-[14px] font-semibold leading-relaxed text-neutral-700">{y.ozet}</p>
                      <a
                        href="#"
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#0b1f3f] px-4 py-2 text-[12px] font-black uppercase tracking-wide text-[#CCFF00] transition hover:bg-[#0038ff]"
                      >
                        Devamını oku
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-14 text-center text-[12px] font-black uppercase tracking-[0.25em] text-[#0038ff]/60">Rehber · blog · duyuru</p>
        </div>
      </section>

      <section
        id="basvuru-katilim"
        className="relative z-20 w-full overflow-hidden border-t-[6px] border-[#CCFF00]/50 bg-gradient-to-b from-[#0c1929] via-[#0f2847] to-[#0a1424] px-5 py-20 text-white md:px-10 md:py-28"
      >
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#0038ff]/35 blur-[100px]" />
        <div className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-[#CCFF00]/20 blur-[100px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.75rem_2.75rem] opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(0,56,255,0.12),transparent)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#CCFF00] shadow-[3px_3px_0_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <ClipboardList className="h-3.5 w-3.5" aria-hidden />
                Başvuru & katılım
              </div>
              <h2 className="mt-6 text-[clamp(1.85rem,4.2vw,2.75rem)] font-black uppercase leading-[0.92] tracking-tighter">
                <span className="block text-white" style={titleStyle}>
                  Başvurunu ilet,
                </span>
                <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
                  biz yönlendirelim
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] font-bold leading-relaxed text-white/80">
                Her başvuru türünün kendi form sayfası var. Sağdaki kartlardan türünü seç; ön kayıt ve yönlendirme aynı akışla devam eder.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {basvuruKatilimTurleri.map((row, i) => {
                  const Icon = row.icon;
                  return (
                  <motion.div
                    key={row.baslik}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className={`flex gap-3 rounded-2xl border-2 border-white/15 bg-white/[0.07] p-4 shadow-[6px_6px_0_rgba(0,0,0,0.45)] backdrop-blur-md transition hover:border-[#CCFF00]/35 hover:bg-white/[0.1] ${i % 2 === 1 ? "sm:translate-y-2" : ""}`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#CCFF00]/50 bg-[#CCFF00]/15 text-[#CCFF00]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12px] font-black uppercase leading-snug tracking-tight text-white">{row.baslik}</p>
                      <p className="mt-1 text-[12px] font-semibold leading-snug text-white/70">{row.aciklama}</p>
                    </div>
                  </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative rounded-[2rem] border-4 border-[#0b1f3f] bg-white p-6 shadow-[12px_12px_0_#0038ff] md:p-9"
            >
              <div className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 rounded-full border-4 border-[#0b1f3f] bg-[#CCFF00]" />
              <p className="text-[13px] font-black uppercase tracking-wide text-[#0038ff]">Başvuru formları</p>
              <p className="mt-2 text-[13px] font-semibold text-[#0b1f3f]/75">
                Türüne göre ayrı sayfa açılır; gönderim ön kayıt içindir — ekibimiz geri döner.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {basvuruTurleri.map((tur) => (
                  <li key={tur}>
                    <a
                      href={`/basvuru/${tur}`}
                      className="flex min-h-[3.25rem] items-center justify-between gap-2 rounded-xl border-4 border-[#0b1f3f] bg-[#f8fafc] px-3 py-2.5 text-left text-[12px] font-black uppercase leading-snug tracking-wide text-[#0b1f3f] shadow-[4px_4px_0_#0b1f3f] transition hover:bg-white hover:shadow-[2px_2px_0_#0b1f3f] sm:text-[11px]"
                    >
                      <span className="min-w-0">{basvuruTurLabels[tur]}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="/basvuru"
                className="mt-6 inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-2xl border-4 border-dashed border-[#0b1f3f]/35 bg-white px-4 py-3 text-[13px] font-black uppercase tracking-wide text-[#0b1f3f] transition hover:border-[#0b1f3f]/55 hover:bg-[#f8fafc]"
              >
                Tüm türler — başvuru merkezi
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
            </motion.div>
          </div>

          <p className="mt-16 text-center text-[12px] font-black uppercase tracking-[0.22em] text-white/40">
            Ön kayıt · yönlendirme · geri dönüş
          </p>
        </div>
      </section>

      <footer id="footer" className="relative z-20 w-full overflow-hidden bg-[#0b1f3f]">
        <div className="relative bg-gradient-to-br from-[#d4f836] via-[#CCFF00] to-[#9fcc12] px-2 pb-2 pt-10 sm:px-3 md:px-4 md:pb-3 md:pt-14 lg:px-5">
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(90deg,#0b1f3f_0,#0b1f3f_1px,transparent_1px,transparent_28px)]" />

          <div className="relative w-full">
            <div className="overflow-hidden rounded-xl border-4 border-[#0b1f3f] bg-white shadow-[14px_14px_0_#0b1f3f] sm:rounded-2xl md:rounded-[2rem]">
              <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
                <div className="relative flex flex-1 flex-col justify-between border-b-4 border-[#0b1f3f] bg-[#CCFF00] p-8 md:p-10 lg:border-b-0 lg:border-r-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0b1f3f]/70">Ağa katıl</p>
                    <h2 className="mt-3 text-[clamp(1.85rem,4.5vw,2.75rem)] uppercase leading-[0.88] tracking-tighter">
                      <span className="block text-[#0b1f3f]" style={titleStyleOnLightPrimary}>
                        Aktif
                      </span>
                      <span className="mt-1 block text-[#0038ff]" style={titleStyle}>
                        kampüs
                      </span>
                    </h2>
                    <p className="mt-4 max-w-[20rem] text-[14px] font-bold leading-relaxed text-[#0b1f3f]/85">
                      Etkinlik, dil, yurtdışı ve topluluk — hepsi bağlantılı.
                    </p>
                  </div>
                  <a
                    href="/basvuru"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl border-4 border-[#0b1f3f] bg-white px-5 py-3 text-[12px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[5px_5px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#0b1f3f]"
                  >
                    Başvuru formu
                    <span aria-hidden>→</span>
                  </a>
                </div>

                <div className="flex min-h-[260px] flex-1 flex-col justify-between gap-8 bg-white p-8 md:min-h-0 md:p-10 lg:max-w-md lg:flex-none xl:max-w-lg">
                  <p className="text-[15px] font-bold leading-relaxed text-[#0b1f3f]/88">
                    İletişim için buradan yaz; tüm sayfa ve bölüm linkleri aşağıda gruplu — yeni rotalar tek veri listesinden büyür.
                  </p>

                  <div className="flex flex-col gap-4 border-t-2 border-dashed border-[#0b1f3f]/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <a
                      href="mailto:iletisim@aktifkampus.org"
                      className="inline-flex items-center gap-2 text-[13px] font-black text-[#0b1f3f] transition hover:text-[#0038ff]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#0b1f3f] bg-[#CCFF00]">
                        <Mail className="h-4 w-4" aria-hidden />
                      </span>
                      iletisim@aktifkampus.org
                    </a>
                    <div className="flex items-center gap-2">
                      {[
                        { Icon: Instagram, label: "Instagram", href: "#" },
                        { Icon: Linkedin, label: "LinkedIn", href: "#" },
                      ].map(({ Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#0b1f3f] bg-white text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f] transition hover:bg-[#0038ff] hover:text-white"
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-4 border-[#0b1f3f] bg-gradient-to-b from-[#e8f2ff] via-white to-[#f4f7fb] px-4 py-8 sm:px-6 md:px-8 md:py-10">
                <nav aria-label="Sayfa bölüm linkleri" className="relative mx-auto max-w-[1600px]">
                  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-5 xl:gap-x-5 2xl:gap-x-8">
                    {footerColumns.map((grup) => (
                      <div key={grup.baslik} className="min-w-0">
                        <h3 className="inline-block max-w-full border-2 border-[#0b1f3f] bg-[#CCFF00] px-2.5 py-1.5 text-[10px] font-black uppercase leading-tight tracking-wide text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]">
                          {grup.baslik}
                        </h3>
                        <ul className="mt-4 max-h-[min(55vh,22rem)] space-y-0 overflow-y-auto overscroll-y-contain border-l-[4px] border-[#0b1f3f] pl-3 pr-1 [scrollbar-color:#0038ff_#e2e8f0] [scrollbar-width:thin]">
                          {grup.linkler.map((l, i) => (
                            <li key={`${grup.baslik}-${i}-${l.label}`}>
                              <a
                                href={l.href}
                                className="group flex items-start gap-2 border-b border-[#0b1f3f]/0 py-2 text-[12px] font-bold leading-snug text-[#0b1f3f] transition hover:border-[#0038ff]/30 hover:pl-0.5 hover:text-[#0038ff]"
                              >
                                <span
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-[1px] bg-[#0038ff] opacity-50 transition group-hover:opacity-100"
                                  aria-hidden
                                />
                                <span className="min-w-0">{l.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </nav>
              </div>

              <div className="flex flex-col items-start justify-between gap-3 border-t-4 border-[#0b1f3f] bg-[#f1f5f9] px-4 py-4 sm:flex-row sm:items-center sm:px-5 md:px-6">
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] font-bold text-[#0b1f3f]/75">
                  <a href="#" className="transition hover:text-[#0038ff]">
                    Gizlilik
                  </a>
                  <span className="text-[#0b1f3f]/30" aria-hidden>
                    ·
                  </span>
                  <a href="#" className="transition hover:text-[#0038ff]">
                    KVKK
                  </a>
                  <span className="text-[#0b1f3f]/30" aria-hidden>
                    ·
                  </span>
                  <a href="#" className="transition hover:text-[#0038ff]">
                    Kullanım koşulları
                  </a>
                </div>
                <a
                  href="#top"
                  className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#0038ff] transition hover:text-[#0b1f3f]"
                >
                  Başa dön
                  <span aria-hidden className="text-base">
                    ↑
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-[#CCFF00] bg-[#0b1f3f] px-3 py-5 sm:px-4 md:px-5">
          <p className="w-full text-center text-[11px] font-black uppercase tracking-[0.2em] text-white/55">
            © {new Date().getFullYear()} Aktif Kampüs — öğrenci topluluğu & kampüs ağı
          </p>
        </div>
      </footer>
    </div>
  );
};
