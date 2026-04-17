/** Başvuru türleri — URL: /basvuru/{tur} */

export const basvuruTurleri = ["genel", "temsilci", "kulup", "is-birligi"] as const;
export type BasvuruTur = (typeof basvuruTurleri)[number];

export function isBasvuruTur(s: string): s is BasvuruTur {
  return (basvuruTurleri as readonly string[]).includes(s);
}

export type BasvuruTurMeta = {
  /** Tarayıcı sekmesi + layout */
  layoutTitle: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  formIntro: string;
  mesajPlaceholder: string;
};

export const basvuruTurMeta: Record<BasvuruTur, BasvuruTurMeta> = {
  genel: {
    layoutTitle: "Genel başvuru",
    heroEyebrow: "Başvuru",
    heroTitle: "Genel",
    heroTitleAccent: "başvuru",
    heroSubtitle:
      "Etkinlik, program veya kampüs hakkında tek kanaldan yaz; ekibimiz talebine göre yönlendirir.",
    formIntro: "Aşağıdaki form genel talepler içindir. Gönderim ön kayıt niteliğindedir; kesin kayıt için sana dönüş yapılır.",
    mesajPlaceholder: "Kısaca ihtiyacını yaz: etkinlik adı, soru veya yönlendirme talebi…",
  },
  temsilci: {
    layoutTitle: "Temsilci başvurusu",
    heroEyebrow: "Başvuru",
    heroTitle: "Temsilci",
    heroTitleAccent: "başvurusu",
    heroSubtitle:
      "Kampüsünde Aktif Kampüs’ü temsil etmek için başvurunu bırak; kısa değerlendirme sonrası süreç paylaşılır.",
    formIntro: "Bu form yalnızca temsilcilik başvuruları içindir. Kampüsün, iletişim bilgilerin ve motivasyonunu net yaz.",
    mesajPlaceholder: "Hangi üniversitedesin, neden temsilci olmak istiyorsun, haftalık ayırabileceğin süre…",
  },
  kulup: {
    layoutTitle: "Kulüp başvurusu",
    heroEyebrow: "Başvuru",
    heroTitle: "Kulüp",
    heroTitleAccent: "başvurusu",
    heroSubtitle:
      "Kulüp veya topluluğunuzla etkinlik, içerik veya ortak program için başvurunu ilet.",
    formIntro: "Kulüp adı ve talep türünü formda belirt; ekibimiz kulüp koordinasyonu için dönüş yapar.",
    mesajPlaceholder: "Kulüp adı, üye sayısı, talep ettiğiniz iş birliği veya etkinlik özeti…",
  },
  "is-birligi": {
    layoutTitle: "İş birliği başvurusu",
    heroEyebrow: "Başvuru",
    heroTitle: "İş birliği",
    heroTitleAccent: "başvurusu",
    heroSubtitle:
      "Marka, kurum veya kampüs dışı iş birliği tekliflerin için doğrudan bu kanalı kullan.",
    formIntro: "Kurum / marka bilgisi ve iş birliği fikrini mesaj alanında özetle; iletişim e-postası zorunludur.",
    mesajPlaceholder: "Kurum adı, teklif özeti, hedef kitle veya kampanya beklentisi…",
  },
};

export const basvuruTurLabels: Record<BasvuruTur, string> = {
  genel: "Genel başvuru",
  temsilci: "Temsilci başvurusu",
  kulup: "Kulüp başvurusu",
  "is-birligi": "İş birliği başvurusu",
};
