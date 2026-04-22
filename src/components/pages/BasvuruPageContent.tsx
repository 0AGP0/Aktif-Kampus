import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Send } from "lucide-react";
import type { BasvuruTur, BasvuruTurMeta } from "@/data/basvuru-config";
import { basvuruTurMeta } from "@/data/basvuru-config";
import { BASVURU_KVKK_BASLIK, BASVURU_KVKK_METNI, BASVURU_KVKK_ONAY_METNI } from "@/data/basvuru-kvkk";
import { extractFormFields, normalizeCommonFields, postFormToWebhook } from "@/lib/form-webhook";

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

const inp =
  "mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-white px-4 py-3.5 text-[15px] font-bold text-[#0b1f3f] placeholder:text-neutral-400 shadow-[4px_4px_0_#0b1f3f] outline-none focus:ring-2 focus:ring-[#0038ff]";

const lbl = "block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]";

function Req() {
  return <span className="text-red-600"> *</span>;
}

const alanUygunlukSecenekleri: { value: string; label: string }[] = [
  { value: "kampüs-temsilcisi", label: "Kampüs Temsilcisi Olmak İstiyorum" },
  { value: "kulup-isbirligi", label: "Üniversite Kulübü İş Birliği" },
  { value: "egitim-sertifika", label: "Eğitim ve Sertifika Programları" },
  { value: "dil-kurslari", label: "Dil Kursları" },
  { value: "yurtdisi-gezi", label: "Yurtdışı Eğitim & Gezi" },
  { value: "konusmaci-egitmen", label: "Konuşmacı / Eğitmen Ol" },
  { value: "marka-isbirligi", label: "Marka / İş Birliği" },
];

const temsilciSaatSecenekleri: { value: string; label: string }[] = [
  { value: "0-1", label: "0–1 saat" },
  { value: "1-3", label: "1–3 saat" },
  { value: "3-5", label: "3–5 saat" },
  { value: "5-7", label: "5–7 saat" },
];

function KvkkBlock({ idSuffix }: { idSuffix: string }) {
  return (
    <div className="space-y-4 rounded-xl border-4 border-[#0b1f3f]/20 bg-[#f8fafc] p-4 md:p-5">
      <p className="text-center text-[12px] font-black uppercase tracking-wide text-[#0038ff]">{BASVURU_KVKK_BASLIK}</p>
      <div className="max-h-52 overflow-y-auto rounded-lg border-2 border-[#0b1f3f]/15 bg-white p-4 text-[13px] font-medium leading-relaxed text-neutral-800 whitespace-pre-line">
        {BASVURU_KVKK_METNI}
      </div>
      <label className="flex cursor-pointer gap-3 rounded-lg border-2 border-dashed border-[#0b1f3f]/30 bg-white/90 p-3">
        <input
          id={`kvkk-onay${idSuffix}`}
          type="checkbox"
          name="kvkkAydinlatmaOnay"
          className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-[#0b1f3f] accent-[#0038ff]"
          required
        />
        <span className="text-[13px] font-semibold leading-snug text-[#0b1f3f]/90">
          {BASVURU_KVKK_ONAY_METNI} <span className="font-black text-red-600">*</span>
        </span>
      </label>
    </div>
  );
}

function GenelBasvuruForm({ idSuffix }: { idSuffix: string }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`g-ad${idSuffix}`} className={lbl}>
            Ad Soyad
            <Req />
          </label>
          <input id={`g-ad${idSuffix}`} name="full_name" type="text" autoComplete="name" required className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`g-email${idSuffix}`} className={lbl}>
            E-posta
            <Req />
          </label>
          <input id={`g-email${idSuffix}`} name="email" type="email" autoComplete="email" required className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`g-adres${idSuffix}`} className={lbl}>
            Adres
            <Req />
          </label>
          <textarea id={`g-adres${idSuffix}`} name="address" rows={3} required className={inp} />
        </div>
        <div>
          <label htmlFor={`g-tel${idSuffix}`} className={lbl}>
            Telefon numarası
            <Req />
          </label>
          <input id={`g-tel${idSuffix}`} name="phone" type="tel" autoComplete="tel" required className={inp} />
        </div>
        <div>
          <label htmlFor={`g-il${idSuffix}`} className={lbl}>
            Yaşadığınız il
            <Req />
          </label>
          <input id={`g-il${idSuffix}`} name="city" type="text" autoComplete="address-level1" required className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`g-uni${idSuffix}`} className={lbl}>
            Üniversite ve Bölüm
            <Req />
          </label>
          <input id={`g-uni${idSuffix}`} name="university" type="text" required className={inp} />
        </div>
      </div>

      <fieldset className="space-y-3 rounded-xl border-4 border-dashed border-[#0b1f3f]/25 bg-white/80 p-4">
        <legend className={`${lbl} px-1`}>
          Hangi alanda yer almak sizin için daha uygun?
          <Req />
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {alanUygunlukSecenekleri.map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-start gap-2 rounded-lg border-2 border-[#0b1f3f]/15 bg-[#f8fafc] p-3 text-[13px] font-semibold leading-snug text-[#0b1f3f] transition hover:border-[#0b1f3f]/40"
            >
              <input type="radio" name="alanUygunlugu" value={o.value} required className="mt-0.5 h-4 w-4 shrink-0 border-2 border-[#0b1f3f] accent-[#0038ff]" />
              <span>{o.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`g-katki${idSuffix}`} className={lbl}>
          Bize kendinden ve Aktif Kampüs&apos;e nasıl katkı sağlayabileceğinden bahseder misin?
          <Req />
        </label>
          <textarea id={`g-katki${idSuffix}`} name="contribution" rows={5} required className={inp} />
      </div>

      <KvkkBlock idSuffix={idSuffix} />
    </div>
  );
}

function TemsilciBasvuruForm({ idSuffix }: { idSuffix: string }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`t-ad${idSuffix}`} className={lbl}>
            Ad Soyad
            <Req />
          </label>
          <input id={`t-ad${idSuffix}`} name="full_name" type="text" autoComplete="name" required className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`t-email${idSuffix}`} className={lbl}>
            E-posta
            <Req />
          </label>
          <input id={`t-email${idSuffix}`} name="email" type="email" autoComplete="email" required className={inp} />
        </div>
        <div>
          <label htmlFor={`t-il${idSuffix}`} className={lbl}>
            Yaşadığınız İl
            <Req />
          </label>
          <input id={`t-il${idSuffix}`} name="city" type="text" required className={inp} />
        </div>
        <div>
          <label htmlFor={`t-tel${idSuffix}`} className={lbl}>
            Telefon numarası
          </label>
          <input id={`t-tel${idSuffix}`} name="phone" type="tel" autoComplete="tel" className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`t-uni${idSuffix}`} className={lbl}>
            Hangi üniversitede temsilcilik yapmak istiyorsun?
            <Req />
          </label>
          <input id={`t-uni${idSuffix}`} name="university" type="text" required className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`t-bolum${idSuffix}`} className={lbl}>
            Bölüm ve sınıf düzeyi
            <Req />
          </label>
          <input id={`t-bolum${idSuffix}`} name="department" type="text" required className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`t-neden${idSuffix}`} className={lbl}>
            Neden Kampüs Temsilcisi Olmak İstiyorsun?
            <Req />
          </label>
          <textarea id={`t-neden${idSuffix}`} name="nedenTemsilci" rows={4} required className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`t-kulup${idSuffix}`} className={lbl}>
            Üyesi Olduğunuz Kulüpler
            <Req />
          </label>
          <textarea id={`t-kulup${idSuffix}`} name="kulupUyeligi" rows={3} required className={inp} />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className={lbl}>
          Kampüsünde Daha Önce Etkinlik Düzenledin mi?
          <Req />
        </legend>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-[14px] font-bold text-[#0b1f3f]">
            <input type="radio" name="etkinlikDuzenledi" value="evet" required className="h-4 w-4 accent-[#0038ff]" />
            Evet
          </label>
          <label className="flex items-center gap-2 text-[14px] font-bold text-[#0b1f3f]">
            <input type="radio" name="etkinlikDuzenledi" value="hayir" className="h-4 w-4 accent-[#0038ff]" />
            Hayır
          </label>
        </div>
      </fieldset>

      <div>
        <label htmlFor={`t-adim${idSuffix}`} className={lbl}>
          Kampüsünde Aktif Kampüs İçin Hangi Adımları Atabilirsin?
          <Req />
        </label>
        <textarea id={`t-adim${idSuffix}`} name="aktifKampusAdimlari" rows={4} required className={inp} />
      </div>

      <fieldset className="space-y-2">
        <legend className={lbl}>
          Haftalık Kaç Saati Bu Gönüllü Göreve Ayırabilirsin?
          <Req />
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {temsilciSaatSecenekleri.map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-[#0b1f3f]/15 bg-white p-3 text-[13px] font-bold text-[#0b1f3f]"
            >
              <input type="radio" name="haftalikSaat" value={o.value} required className="h-4 w-4 accent-[#0038ff]" />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`t-sosyal${idSuffix}`} className={lbl}>
          Sosyal Medya Hesapların / Portfolyon
          <Req />
        </label>
        <textarea id={`t-sosyal${idSuffix}`} name="sosyalMedyaPortfoy" rows={3} required className={inp} placeholder="@kullanıcı veya bağlantılar" />
      </div>

      <KvkkBlock idSuffix={idSuffix} />
    </div>
  );
}

function BasitBasvuruForm({ idSuffix, meta }: { idSuffix: string; meta: BasvuruTurMeta }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`s-ad${idSuffix}`} className={lbl}>
            Ad soyad
            <Req />
          </label>
          <input id={`s-ad${idSuffix}`} name="full_name" type="text" autoComplete="name" required className={inp} />
        </div>
        <div>
          <label htmlFor={`s-email${idSuffix}`} className={lbl}>
            E-posta
            <Req />
          </label>
          <input id={`s-email${idSuffix}`} name="email" type="email" autoComplete="email" required className={inp} />
        </div>
        <div>
          <label htmlFor={`s-uni${idSuffix}`} className={lbl}>
            Üniversite <span className="font-semibold normal-case text-[#0b1f3f]/50">(isteğe bağlı)</span>
          </label>
          <input id={`s-uni${idSuffix}`} name="university" type="text" autoComplete="organization" className={inp} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`s-mesaj${idSuffix}`} className={lbl}>
            Mesaj
            <Req />
          </label>
          <textarea id={`s-mesaj${idSuffix}`} name="message" rows={5} required placeholder={meta.mesajPlaceholder} className={inp} />
        </div>
      </div>
      <KvkkBlock idSuffix={idSuffix} />
    </div>
  );
}

export type BasvuruPageContentProps = {
  variant: BasvuruTur;
};

export function BasvuruPageContent({ variant }: BasvuruPageContentProps) {
  const meta = basvuruTurMeta[variant];
  const idSuffix = `-${variant}`;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const allFields = extractFormFields(formData);

    try {
      setStatus("sending");
      const payload = normalizeCommonFields(formData, {
        ...allFields,
        form_type: `application_${variant}`,
        variant,
        raw_fields: JSON.stringify(allFields),
      });
      await postFormToWebhook(payload);
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

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
            {meta.heroEyebrow}
          </p>
          <h1
            className="mx-auto mt-4 max-w-4xl text-[clamp(2rem,6.5vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tighter text-white md:mt-5"
            style={titleStyle}
          >
            <span className="block text-white">{meta.heroTitle}</span>
            <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
              {meta.heroTitleAccent}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] font-semibold leading-relaxed text-white/95 [text-shadow:0_2px_14px_rgba(0,0,0,0.4)] md:text-lg">
            {meta.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
            <a
              href="/basvuru"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/75 bg-white/12 px-8 py-3 text-[15px] font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:bg-white/22"
            >
              Tüm başvuru türleri
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
        aria-labelledby={`basvuru-form-baslik${idSuffix}`}
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
            id={`basvuru-form-baslik${idSuffix}`}
            className="text-[clamp(1.5rem,4vw,2.25rem)] font-black uppercase leading-tight tracking-tight text-[#0b1f3f]"
          >
            <span style={titleStyleOnLightPrimary}>Başvuru</span>
            <span className="mt-1 block text-[#CCFF00]" style={titleStyle}>
              formu
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] font-medium leading-relaxed text-neutral-800 md:text-[16px]">{meta.formIntro}</p>

          <form
            className="mt-10 max-w-3xl space-y-6 md:mt-12"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="formType" value={`application_${variant}`} />
            <input type="hidden" name="variant" value={variant} />

            {variant === "genel" ? <GenelBasvuruForm idSuffix={idSuffix} /> : null}
            {variant === "temsilci" ? <TemsilciBasvuruForm idSuffix={idSuffix} /> : null}
            {variant === "kulup" ? <BasitBasvuruForm idSuffix={idSuffix} meta={basvuruTurMeta.kulup} /> : null}
            {variant === "is-birligi" ? <BasitBasvuruForm idSuffix={idSuffix} meta={basvuruTurMeta["is-birligi"]} /> : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex min-h-[56px] w-full max-w-xl items-center justify-center gap-2 rounded-2xl border-4 border-[#0b1f3f] bg-[#CCFF00] py-4 text-[15px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[6px_6px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#0b1f3f]"
            >
              <Send className="h-5 w-5 shrink-0" aria-hidden />
              {status === "sending" ? "Gonderiliyor..." : "Gonder"}
            </button>
            {status === "success" ? (
              <p className="text-[13px] font-bold text-emerald-700">Basvurun alindi. Ekibimiz en kisa surede seninle iletisime gececek.</p>
            ) : null}
            {status === "error" ? (
              <p className="text-[13px] font-bold text-red-700">Gonderim sirasinda bir hata olustu. Lutfen tekrar dene.</p>
            ) : null}
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
