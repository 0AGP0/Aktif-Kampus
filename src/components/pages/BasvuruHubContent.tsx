import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { basvuruTurleri, basvuruTurLabels, isBasvuruTur } from "@/data/basvuru-config";

const titleStyle: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  textShadow:
    "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99",
};

const titleStyleOnLightPrimary: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#0b1f3f",
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.85), 2px 2px 0 rgba(204,255,0,0.35), 3px 3px 0 rgba(11,31,63,0.15)",
};

const inner = "relative mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-14";

export function BasvuruHubContent() {
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("tur");
    if (q && isBasvuruTur(q)) {
      window.location.replace(`/basvuru/${q}`);
    }
  }, []);

  return (
    <div className="flex w-full flex-col">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full py-16 text-center md:py-24 lg:py-28"
      >
        <div className={`${inner} relative`}>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#e8ff66] [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] md:text-[12px]">
            Başvuru
          </p>
          <h1
            className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,6.5vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tighter text-white md:mt-5"
            style={titleStyle}
          >
            <span className="block text-white">Başvuru türü</span>
            <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
              ve seçim
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] font-semibold leading-relaxed text-white/95 [text-shadow:0_2px_14px_rgba(0,0,0,0.4)] md:text-lg">
            Aşağıdan türünü seçip ilgili forma geç. Eski{" "}
            <span className="font-bold text-[#CCFF00]">?tur=</span> bağlantıları otomatik olarak doğru sayfaya
            yönlendirilir.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
            <a
              href="/etkinlikler"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/75 bg-white/12 px-8 py-3 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:bg-white/22"
            >
              Etkinlikler
            </a>
            <a
              href="/kurumsal/iletisim"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-8 py-3 text-[15px] font-bold text-neutral-950 shadow-[0_6px_28px_rgba(0,0,0,0.25)] ring-1 ring-black/10 transition hover:brightness-105"
            >
              İletişim
              <ArrowRight className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
            </a>
          </div>
        </div>
      </motion.section>

      <section
        aria-labelledby="basvuru-hub-form-baslik"
        className="relative z-[1] -mt-10 w-full overflow-hidden rounded-t-[2rem] bg-gradient-to-b from-white via-[#e8eefc] to-[#f0f5ff] pb-16 pt-14 shadow-[0_-28px_80px_rgba(0,56,255,0.18)] md:-mt-14 md:rounded-t-[3rem] md:pb-24 md:pt-20"
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#CCFF00]/28 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#0038ff]/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0038ff08_1px,transparent_1px),linear-gradient(to_bottom,#0038ff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-45" />

        <div className={`${inner} relative`}>
          <div
            className="mb-8 h-1.5 w-full max-w-2xl rounded-full bg-gradient-to-r from-[#CCFF00] via-[#9fcc12] to-[#0038ff] md:mb-10"
            aria-hidden
          />
          <h2
            id="basvuru-hub-form-baslik"
            className="text-[clamp(1.5rem,4vw,2.25rem)] font-black uppercase leading-tight tracking-tight text-[#0b1f3f]"
          >
            <span style={titleStyleOnLightPrimary}>Başvuru türü</span>
            <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
              ve form
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] font-medium leading-relaxed text-neutral-800 md:text-[16px]">
            Her tür için ayrı form sayfası var; karttan seçerek mesajını ilgili ekibe iletirsin.
          </p>

          <ul className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:mt-12">
            {basvuruTurleri.map((tur, i) => (
              <motion.li
                key={tur}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <a
                  href={`/basvuru/${tur}`}
                  className="group flex min-h-[120px] flex-col justify-between rounded-2xl border-4 border-[#0b1f3f] bg-white p-5 shadow-[8px_8px_0_#0b1f3f] transition hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#0b1f3f]"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0038ff]">Form</p>
                    <p className="mt-2 text-[17px] font-black uppercase leading-snug text-[#0b1f3f]">{basvuruTurLabels[tur]}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-black uppercase tracking-wide text-[#0b1f3f]">
                    Sayfaya git
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
