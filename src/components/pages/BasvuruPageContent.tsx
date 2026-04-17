import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Send } from "lucide-react";

const turOptions = [
  { value: "genel", label: "Genel başvuru" },
  { value: "temsilci", label: "Temsilci başvurusu" },
  { value: "kulup", label: "Kulüp başvurusu" },
  { value: "is-birligi", label: "İş birliği başvurusu" },
] as const;

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

export function BasvuruPageContent() {
  const [tur, setTur] = useState<string>("genel");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("tur");
    if (q && turOptions.some((o) => o.value === q)) setTur(q);
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
            Başvuru yap
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] font-semibold leading-relaxed text-white/95 [text-shadow:0_2px_14px_rgba(0,0,0,0.4)] md:text-lg">
            Talebini seç; ekibimiz en kısa sürede dönüş yapsın. Form ön kayıt içindir, kesin kayıt için sana yönlendirme yapılır.
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
        aria-labelledby="basvuru-form-baslik"
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
            id="basvuru-form-baslik"
            className="text-[clamp(1.5rem,4vw,2.25rem)] font-black uppercase leading-tight tracking-tight text-[#0b1f3f]"
          >
            <span style={titleStyleOnLightPrimary}>Başvuru türü</span>
            <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
              ve form
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] font-medium leading-relaxed text-neutral-800 md:text-[16px]">
            Aşağıdan türünü seçip mesajını gönder; URL&apos;deki{" "}
            <span className="font-semibold text-[#0b1f3f]">?tur=</span> parametresi otomatik eşlenir.
          </p>

          <form
            className="mt-10 max-w-3xl space-y-6 md:mt-12"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label htmlFor="basvuru-tur" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
                Başvuru türü
              </label>
              <select
                id="basvuru-tur"
                name="tur"
                value={tur}
                onChange={(e) => setTur(e.target.value)}
                className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-3.5 text-[15px] font-bold text-[#0b1f3f] shadow-[4px_4px_0_#0b1f3f] outline-none focus:ring-2 focus:ring-[#0038ff]"
              >
                {turOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="basvuru-ad" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
                  Ad soyad
                </label>
                <input
                  id="basvuru-ad"
                  name="adSoyad"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Örn. Ayşe Yılmaz"
                  className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-3.5 text-[15px] font-bold text-[#0b1f3f] placeholder:text-neutral-400 shadow-[4px_4px_0_#0b1f3f] outline-none focus:ring-2 focus:ring-[#0038ff]"
                />
              </div>
              <div>
                <label htmlFor="basvuru-email" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
                  E-posta
                </label>
                <input
                  id="basvuru-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="ornek@edu.tr"
                  className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-3.5 text-[15px] font-bold text-[#0b1f3f] placeholder:text-neutral-400 shadow-[4px_4px_0_#0b1f3f] outline-none focus:ring-2 focus:ring-[#0038ff]"
                />
              </div>
              <div>
                <label htmlFor="basvuru-uni" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
                  Üniversite <span className="font-semibold normal-case text-[#0b1f3f]/50">(isteğe bağlı)</span>
                </label>
                <input
                  id="basvuru-uni"
                  name="universite"
                  type="text"
                  autoComplete="organization"
                  placeholder="Kampüs adı"
                  className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-3.5 text-[15px] font-bold text-[#0b1f3f] placeholder:text-neutral-400 shadow-[4px_4px_0_#0b1f3f] outline-none focus:ring-2 focus:ring-[#0038ff]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="basvuru-mesaj" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
                Mesaj
              </label>
              <textarea
                id="basvuru-mesaj"
                name="mesaj"
                rows={5}
                required
                placeholder="Kısaca talebini yaz: kulüp adı, iş birliği fikri veya temsilcilik motivasyonun…"
                className="mt-2 w-full resize-y rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-3.5 text-[15px] font-semibold leading-relaxed text-[#0b1f3f] placeholder:text-neutral-400 shadow-[4px_4px_0_#0b1f3f] outline-none focus:ring-2 focus:ring-[#0038ff]"
              />
            </div>

            <label className="flex cursor-pointer gap-3 rounded-xl border-2 border-dashed border-[#0b1f3f]/35 bg-white/90 px-4 py-4">
              <input type="checkbox" name="kvkk" className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-[#0b1f3f] accent-[#0038ff]" required />
              <span className="text-[13px] font-semibold leading-snug text-[#0b1f3f]/85">
                İletişim ve başvuru bilgilerimin işlenmesine ilişkin bilgilendirmeyi okudum, onaylıyorum.
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex min-h-[56px] w-full max-w-xl items-center justify-center gap-2 rounded-2xl border-4 border-[#0b1f3f] bg-[#CCFF00] py-4 text-[15px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[6px_6px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#0b1f3f]"
            >
              <Send className="h-5 w-5 shrink-0" aria-hidden />
              Gönder
            </button>
          </form>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0f2240] to-[#152f52] py-16 pb-20 text-white md:py-20 md:pb-24"
      >
        <div className="pointer-events-none absolute -left-36 top-0 h-[22rem] w-[22rem] rounded-full bg-[#0038ff]/22 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-[20rem] w-[20rem] rounded-full bg-[#CCFF00]/14 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff09_1px,transparent_1px),linear-gradient(to_bottom,#ffffff09_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-55" />

        <div className={`${inner} relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-14`}>
          <div className="min-w-0 max-w-2xl">
            <h2 className="text-[clamp(1.65rem,4.5vw,2.65rem)] font-black uppercase leading-[0.92] tracking-tighter text-white" style={titleStyle}>
              Önce konuşalım mı?
            </h2>
            <p className="mt-5 text-[16px] font-medium leading-relaxed text-white/88 md:text-lg">
              Formdan gitmek istemezsen doğrudan iletişim kanallarından da ulaşabilirsin.
            </p>
          </div>
          <a
            href="/kurumsal/iletisim"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#CCFF00] px-10 py-4 text-[15px] font-black uppercase tracking-wide text-neutral-950 shadow-[0_10px_36px_rgba(204,255,0,0.4)] transition hover:brightness-105 md:self-center md:text-[16px]"
          >
            İletişim sayfası
            <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
          </a>
        </div>
      </motion.section>
    </div>
  );
}
