import React from "react";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { footerColumns } from "@/data/site-nav";

const titleStyleOnLight: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#0b1f3f",
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.9), 2px 2px 0 rgba(204,255,0,0.45), 3px 3px 0 rgba(11,31,63,0.2), 4px 4px 0 rgba(11,31,63,0.12)",
};

const titleStyleBlue: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  textShadow:
    "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99",
};

export const SiteFooter = () => (
  <footer id="footer" className="relative z-20 mt-auto w-full overflow-hidden bg-[#0b1f3f]">
    <div className="relative bg-gradient-to-br from-[#d4f836] via-[#CCFF00] to-[#9fcc12] px-2 pb-2 pt-8 sm:px-3 md:px-4 md:pb-3 md:pt-12 lg:px-5">
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.45),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(90deg,#0b1f3f_0,#0b1f3f_1px,transparent_1px,transparent_28px)]" />

      <div className="relative w-full">
        <div className="overflow-hidden rounded-xl border-4 border-[#0b1f3f] bg-white shadow-[14px_14px_0_#0b1f3f] sm:rounded-2xl md:rounded-[2rem]">
          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            <div className="relative flex flex-1 flex-col justify-between border-b-4 border-[#0b1f3f] bg-[#CCFF00] p-6 md:p-8 lg:border-b-0 lg:border-r-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0b1f3f]/70">Ağa katıl</p>
                <h2 className="mt-3 text-[clamp(1.65rem,4vw,2.5rem)] uppercase leading-[0.88] tracking-tighter">
                  <span className="block text-[#0b1f3f]" style={titleStyleOnLight}>
                    Aktif
                  </span>
                  <span className="mt-1 block text-[#0038ff]" style={titleStyleBlue}>
                    kampüs
                  </span>
                </h2>
                <p className="mt-4 max-w-[20rem] text-[14px] font-bold leading-relaxed text-[#0b1f3f]/85">
                  Etkinlik, dil, yurtdışı ve topluluk — hepsi bağlantılı.
                </p>
              </div>
              <a
                href="/basvuru"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-2xl border-4 border-[#0b1f3f] bg-white px-5 py-3 text-[12px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[5px_5px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#0b1f3f]"
              >
                Başvuru Yap
                <span aria-hidden>→</span>
              </a>
            </div>

            <div className="flex min-h-[200px] flex-1 flex-col justify-between gap-6 bg-white p-6 md:min-h-0 md:p-8 lg:max-w-md lg:flex-none xl:max-w-lg">
              <p className="text-[15px] font-bold leading-relaxed text-[#0b1f3f]/88">
                Soruların için iletişim kanallarımız açık; sayfa haritası aşağıda.
              </p>
              <div className="flex flex-col gap-4 border-t-2 border-dashed border-[#0b1f3f]/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
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
            <nav aria-label="Sayfa haritası" className="relative mx-auto max-w-[1600px]">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {footerColumns.map((grup) => (
                  <div key={grup.baslik} className="min-w-0">
                    <h3 className="inline-block max-w-full border-2 border-[#0b1f3f] bg-[#CCFF00] px-2.5 py-1.5 text-[10px] font-black uppercase leading-tight tracking-wide text-[#0b1f3f] shadow-[3px_3px_0_#0b1f3f]">
                      {grup.baslik}
                    </h3>
                    <ul className="mt-4 space-y-0 border-l-[4px] border-[#0b1f3f] pl-3">
                      {grup.linkler.map((l) => (
                        <li key={l.href + l.label}>
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
);
