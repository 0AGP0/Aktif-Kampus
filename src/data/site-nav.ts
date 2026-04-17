/** Site ağacı — navbar ve footer tek kaynak */

export type NavDropdownItem = { label: string; href: string };

export type NavEntry =
  | { kind: "link"; label: string; href: string }
  | { kind: "dropdown"; label: string; items: NavDropdownItem[] };

export const mainNav: NavEntry[] = [
  { kind: "link", label: "Ana Sayfa", href: "/" },
  { kind: "link", label: "Etkinlikler", href: "/etkinlikler" },
  { kind: "link", label: "Programlar", href: "/programlar" },
  {
    kind: "dropdown",
    label: "Kampüs",
    items: [
      { label: "Kampüs ana sayfa", href: "/kampus" },
      { label: "Kampüs Temsilciliği", href: "/kampus/temsilcilik" },
      { label: "Kulüpler / Topluluklar", href: "/kampus/kulupler-topluluklar" },
    ],
  },
  {
    kind: "dropdown",
    label: "İçerik",
    items: [
      { label: "Blog", href: "/icerik/blog" },
      { label: "Rehber", href: "/icerik/rehber" },
      { label: "Duyurular", href: "/icerik/duyurular" },
    ],
  },
  {
    kind: "dropdown",
    label: "Kurumsal",
    items: [
      { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { label: "İletişim", href: "/kurumsal/iletisim" },
      { label: "SSS", href: "/kurumsal/sss" },
    ],
  },
  {
    kind: "dropdown",
    label: "Başvuru Yap",
    items: [
      { label: "Başvuru sayfası", href: "/basvuru" },
      { label: "Genel başvuru", href: "/basvuru/genel" },
      { label: "Temsilci başvurusu", href: "/basvuru/temsilci" },
      { label: "Kulüp başvurusu", href: "/basvuru/kulup" },
      { label: "İş birliği başvurusu", href: "/basvuru/is-birligi" },
    ],
  },
];

/** Ana sayfa footer sütunları (hero ile uyumlu başlıklar) */
export const footerColumns: { baslik: string; linkler: NavDropdownItem[] }[] = [
  {
    baslik: "Keşfet",
    linkler: [
      { label: "Etkinlikler", href: "/etkinlikler" },
      { label: "Programlar", href: "/programlar" },
      { label: "Kampüs", href: "/kampus" },
    ],
  },
  {
    baslik: "İçerik",
    linkler: [
      { label: "Blog", href: "/icerik/blog" },
      { label: "Rehber", href: "/icerik/rehber" },
      { label: "Duyurular", href: "/icerik/duyurular" },
    ],
  },
  {
    baslik: "Kurumsal",
    linkler: [
      { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { label: "İletişim", href: "/kurumsal/iletisim" },
      { label: "SSS", href: "/kurumsal/sss" },
    ],
  },
  {
    baslik: "Katılım",
    linkler: [
      { label: "Başvuru Yap", href: "/basvuru" },
      { label: "Temsilci başvurusu", href: "/basvuru/temsilci" },
      { label: "Kulüp başvurusu", href: "/basvuru/kulup" },
    ],
  },
];
