import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const titleStyle: React.CSSProperties = {
  fontFamily: '"Arial Black", Impact, sans-serif',
  color: "#0b1f3f",
  textShadow:
    "1px 1px 0 rgba(255,255,255,0.85), 2px 2px 0 rgba(204,255,0,0.35), 3px 3px 0 rgba(11,31,63,0.15)",
};

export function ContactPageContent() {
  return (
    <div className="w-full max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-12">
      <header className="rounded-2xl border-4 border-[#0b1f3f] bg-white/95 p-6 shadow-[12px_12px_0_#0b1f3f] md:p-10">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0038ff]">Kurumsal</p>
        <h1 className="mt-2 text-[clamp(1.85rem,4vw,2.5rem)] font-black uppercase leading-tight tracking-tight" style={titleStyle}>
          İletişim
        </h1>
        <p className="mt-4 text-[15px] font-semibold leading-relaxed text-[#0b1f3f]/85">
          Soruların için buradayız. Aşağıdaki kanallardan ulaş veya formu doldur.
        </p>
        <ul className="mt-8 space-y-4">
          <li className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#0b1f3f] bg-[#CCFF00]">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase text-[#0b1f3f]/55">E-posta</p>
              <a href="mailto:iletisim@aktifkampus.org" className="text-[15px] font-bold text-[#0038ff] hover:underline">
                iletisim@aktifkampus.org
              </a>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#0b1f3f] bg-white">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase text-[#0b1f3f]/55">Telefon</p>
              <p className="text-[15px] font-bold text-[#0b1f3f]">+90 (212) 000 00 00</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#0b1f3f] bg-white">
              <MapPin className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-[11px] font-black uppercase text-[#0b1f3f]/55">Adres</p>
              <p className="text-[15px] font-bold leading-snug text-[#0b1f3f]/88">İstanbul, Türkiye</p>
            </div>
          </li>
        </ul>
      </header>

      <div className="rounded-2xl border-4 border-[#0b1f3f] bg-white/95 p-6 shadow-[12px_12px_0_#0b1f3f] md:p-10">
        <h2 className="text-[18px] font-black uppercase text-[#0b1f3f]">Mesaj gönder</h2>
        <form
          className="mt-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label htmlFor="iletisim-ad" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
              Ad soyad
            </label>
            <input
              id="iletisim-ad"
              name="adSoyad"
              type="text"
              required
              className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-[#f8fafc] px-4 py-3 text-[14px] font-bold shadow-[4px_4px_0_#0b1f3f] outline-none focus:bg-white focus:ring-2 focus:ring-[#0038ff]"
            />
          </div>
          <div>
            <label htmlFor="iletisim-email" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
              E-posta
            </label>
            <input
              id="iletisim-email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-[#f8fafc] px-4 py-3 text-[14px] font-bold shadow-[4px_4px_0_#0b1f3f] outline-none focus:bg-white focus:ring-2 focus:ring-[#0038ff]"
            />
          </div>
          <div>
            <label htmlFor="iletisim-konu" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
              Konu
            </label>
            <input
              id="iletisim-konu"
              name="konu"
              type="text"
              className="mt-2 w-full rounded-xl border-4 border-[#0b1f3f] bg-[#f8fafc] px-4 py-3 text-[14px] font-bold shadow-[4px_4px_0_#0b1f3f] outline-none focus:bg-white focus:ring-2 focus:ring-[#0038ff]"
            />
          </div>
          <div>
            <label htmlFor="iletisim-mesaj" className="block text-[11px] font-black uppercase tracking-wide text-[#0b1f3f]">
              Mesaj
            </label>
            <textarea
              id="iletisim-mesaj"
              name="mesaj"
              rows={4}
              required
              className="mt-2 w-full resize-y rounded-xl border-4 border-[#0b1f3f] bg-[#f8fafc] px-4 py-3 text-[14px] font-semibold leading-relaxed shadow-[4px_4px_0_#0b1f3f] outline-none focus:bg-white focus:ring-2 focus:ring-[#0038ff]"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-4 border-[#0b1f3f] bg-[#CCFF00] py-3.5 text-[14px] font-black uppercase tracking-wide text-[#0b1f3f] shadow-[6px_6px_0_#0b1f3f] transition hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <Send className="h-4 w-4" aria-hidden />
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
