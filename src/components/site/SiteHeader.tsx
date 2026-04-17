import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/data/site-nav";

const HeaderNavBrand = () => (
  <a href="/" className="group flex shrink-0 items-center gap-2 sm:gap-2.5" aria-label="Aktif Kampüs — ana sayfa">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-[2.5px] border-[#0b1f3f] bg-[#CCFF00] font-sans text-[17px] font-extrabold leading-none tracking-tight text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f] transition group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-[1px_1px_0_#0b1f3f] sm:h-10 sm:w-10 sm:text-lg">
      A
    </span>
    <span className="font-sans text-[15px] font-bold leading-tight tracking-tight text-[#0b1f3f] sm:text-base">
      Aktif <span className="font-bold text-[#0038ff]">Kampüs</span>
    </span>
  </a>
);

type Props = {
  /** Örn. "/etkinlikler" — aktif link vurgusu için */
  currentPath?: string;
};

export const SiteHeader = ({ currentPath = "" }: Props) => {
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

  const linkActive = (href: string) => currentPath === href || (href !== "/" && currentPath.startsWith(href));

  return (
    <header className="sticky top-0 z-[70] w-full overflow-visible">
      <div className="relative px-2 pb-6 pt-3 sm:px-3 md:px-4 md:pb-8 md:pt-4 lg:px-5">
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
              aria-label="Ana menü"
            >
              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-1 rounded-xl border-2 border-[#0b1f3f] bg-[#f8fafc] px-1.5 py-1 shadow-[3px_3px_0_rgba(11,31,63,0.12)] sm:gap-1.5 sm:px-2">
                {mainNav.map((entry) =>
                  entry.kind === "link" ? (
                    <a
                      key={entry.href}
                      href={entry.href}
                      className={`rounded-lg border-2 border-transparent px-2.5 py-2 text-[14px] font-medium leading-normal tracking-[0.01em] transition sm:px-3 xl:text-[15px] ${
                        linkActive(entry.href) ? "border-[#0b1f3f] bg-[#CCFF00]/90 font-semibold shadow-[2px_2px_0_#0b1f3f]" : "hover:border-[#0b1f3f]/25 hover:bg-white"
                      }`}
                    >
                      {entry.label}
                    </a>
                  ) : (
                    <div key={entry.label} className="relative">
                      <button
                        type="button"
                        className={`inline-flex max-w-[11rem] items-center gap-1 rounded-lg border-2 border-transparent px-2.5 py-2 text-left text-[14px] font-medium leading-normal tracking-[0.01em] transition sm:max-w-[13rem] xl:max-w-none xl:px-3 xl:text-[15px] ${
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
                          className="absolute left-0 top-[calc(100%+8px)] z-[100] min-w-[min(18rem,calc(100vw-2rem))] rounded-xl border-4 border-[#0b1f3f] bg-white py-2 shadow-[6px_6px_0_rgba(11,31,63,0.2)]"
                          role="menu"
                        >
                          <p className="border-b-2 border-dashed border-[#0b1f3f]/15 px-3 pb-2.5 pt-1.5 font-sans text-[13px] font-semibold leading-normal tracking-wide text-[#0b1f3f]/70">
                            {entry.label}
                          </p>
                          {entry.items.map((l) => (
                            <a
                              key={`${entry.label}-${l.href}`}
                              href={l.href}
                              role="menuitem"
                              className="block px-4 py-2.5 font-sans text-[15px] font-normal leading-relaxed tracking-[0.01em] text-[#0b1f3f] transition hover:bg-[#eff6ff] hover:font-medium hover:text-[#0038ff]"
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
              aria-controls="mobile-main-nav"
              onClick={() => {
                setMobileMenuOpen((o) => !o);
                setMobileAccordion(null);
              }}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
              <span className="sr-only">Menü</span>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div
          id="mobile-main-nav"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[85] bg-black/45 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute bottom-0 left-2 right-2 max-h-[88dvh] overflow-y-auto rounded-t-3xl border-4 border-b-0 border-[#0b1f3f] bg-[#f1f5f9] p-3 shadow-[0_-12px_48px_rgba(0,0,0,0.35)] sm:left-3 sm:right-3 md:left-4 md:right-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto max-h-full max-w-lg overflow-hidden rounded-2xl border-4 border-[#0b1f3f] bg-white shadow-[8px_8px_0_#0b1f3f]">
              <div className="h-1 w-full bg-gradient-to-r from-[#CCFF00] via-[#9fcc12] to-[#0038ff]" aria-hidden />
              <div className="p-4 font-sans text-[#0b1f3f] antialiased">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0b1f3f]/50">Menü</p>
                <div className="mt-4 space-y-2">
                  {mainNav.map((entry) =>
                    entry.kind === "link" ? (
                      <a
                        key={entry.href}
                        href={entry.href}
                        className={`block rounded-xl border-2 px-4 py-3.5 text-[16px] font-medium leading-snug tracking-[0.01em] ${
                          linkActive(entry.href) ? "border-[#0b1f3f] bg-[#CCFF00]" : "border-[#0b1f3f]/15 bg-[#f8fafc]"
                        }`}
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
  );
};
