export type EventItem = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  when: string;
  venue: string;
  mode: "online" | "fiziksel";
  category: string;
  speaker: string;
  body: string;
};

export type ProgramItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: "dil kursu" | "sertifika" | "eğitim";
  mode: "online" | "offline";
  body: string;
  whoFor: string;
  outcomes: string;
  format: string;
};

export type PostKind = "blog" | "rehber" | "duyuru";

export type PostItem = {
  slug: string;
  kind: PostKind;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  body: string;
};

export const events: EventItem[] = [
  {
    slug: "canva-egitimi-online",
    title: "Canva Eğitimi Online",
    excerpt: "Sosyal medya ve sunum görselleri için Canva ile hızlı tasarım — canlı uygulamalı oturum.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Canva eğitimi — canlı yayın (online)",
    venue: "Online yayın",
    mode: "online",
    category: "Eğitim",
    speaker: "Aktif Kampüs ekibi",
    body: `Katılımcılarla birlikte şablon seçimi, marka renkleri ve dışa aktarma adımları üzerinden ilerleyeceğiz. Bağlantı etkinlik öncesinde paylaşılacaktır.`,
  },
  {
    slug: "almanyada-bilgisayar-muhendisi-olmak",
    title: "Almanya'da Bilgisayar Mühendisi Olmak",
    excerpt: "Tanınma, iş arama ve başvuru süreçleri — planlanan bilgilendirme oturumu.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Almanya'da bilgisayar mühendisliği — canlı yayın",
    venue: "Online yayın",
    mode: "online",
    category: "Yurtdışı",
    speaker: "Konuk uzman (duyurulacak)",
    body: `Almanya'da IT alanında kariyer yolları, dil ve belge beklentileri özetlenecek; soru-cevap için süre ayrılacaktır.`,
  },
  {
    slug: "europass-cv-hazirlama-online",
    title: "Europass CV Hazırlama Online",
    excerpt: "Avrupa formatında özgeçmiş; bölümler ve yaygın hatalar üzerinden rehberlik.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Europass CV hazırlama — canlı yayın (online)",
    venue: "Online yayın",
    mode: "online",
    category: "Kariyer",
    speaker: "Aktif Kampüs ekibi",
    body: `Europass editörü ile adım adım ilerleyeceğiz; başvurularınıza uyarlama ipuçları ve kontrol listesi sunulacaktır.`,
  },
  {
    slug: "almanyada-diyetisyen-olmak",
    title: "Almanya'da Diyetisyen Olmak",
    excerpt: "Denklik ve çalışma izni başlıklarında genel çerçeve — planlanan online oturum.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Almanya'da diyetisyenlik — canlı yayın",
    venue: "Online yayın",
    mode: "online",
    category: "Yurtdışı",
    speaker: "Konuk uzman (duyurulacak)",
    body: `Süreç özetinin ardından katılımcı sorularına yanıt verilecek; resmi kurum linkleri paylaşılacaktır.`,
  },
  {
    slug: "izmir-bulusmasi-ilgaz-yaman",
    title: "İzmir Buluşması · Ilgaz Yaman",
    excerpt: "Fiziksel buluşma — şehir ve mekân etkinlik yakınında duyurulacak.",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · İzmir fiziksel buluşma — Ilgaz Yaman",
    venue: "İzmir · mekân yakında",
    mode: "fiziksel",
    category: "Buluşma",
    speaker: "Ilgaz Yaman",
    body: `Kayıt ve katılım koşulları buluşma tarihi netleşince açıklanacaktır. Yerinde tanışma ve soru-cevap için kısa bir program hedefleniyor.`,
  },
  {
    slug: "almanyada-hukuk-yuksek-lisans",
    title: "Almanya'da Hukuk Yüksek Lisans Okumak",
    excerpt: "Program seçimi ve başvuru dosyası için planlanan online bilgi oturumu.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Hukuk yüksek lisans Almanya — canlı yayın",
    venue: "Online yayın",
    mode: "online",
    category: "Yurtdışı",
    speaker: "Konuk uzman (duyurulacak)",
    body: `Hukuk alanında yüksek lisans yolları ve dil yeterliliği gibi başlıklar ele alınacak; sorularınızı önceden iletebilirsiniz.`,
  },
  {
    slug: "istanbul-bulusmasi-enes-colluoglu",
    title: "İstanbul Buluşması · Enes Çöllüoğlu",
    excerpt: "Fiziksel buluşma — İstanbul'da yüz yüze tanışma ve sohbet.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · İstanbul fiziksel buluşma — Enes Çöllüoğlu",
    venue: "İstanbul · mekân yakında",
    mode: "fiziksel",
    category: "Buluşma",
    speaker: "Enes Çöllüoğlu",
    body: `Katılım için kayıt linki ve adres bilgisi etkinlik öncesinde paylaşılacaktır.`,
  },
  {
    slug: "ankara-bulusmasi-yusuf-cengiz",
    title: "Ankara Buluşması · Yusuf A. Cengiz",
    excerpt: "Fiziksel buluşma — Ankara'da kampüs buluşması formatında.",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Ankara fiziksel buluşma — Yusuf A. Cengiz",
    venue: "Ankara · mekân yakında",
    mode: "fiziksel",
    category: "Buluşma",
    speaker: "Yusuf A. Cengiz",
    body: `Kontenjan ve kayıt koşulları duyuru ile birlikte açıklanacaktır.`,
  },
  {
    slug: "sakarya-bulusmasi-sedanur-cimen",
    title: "Sakarya Buluşması · Sedanur Çimen",
    excerpt: "Fiziksel buluşma — Sakarya'da yüz yüze etkinlik.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Sakarya fiziksel buluşma — Sedanur Çimen",
    venue: "Sakarya · mekân yakında",
    mode: "fiziksel",
    category: "Buluşma",
    speaker: "Sedanur Çimen",
    body: `Buluşma saati ve adres bilgisi yakında paylaşılacaktır.`,
  },
  {
    slug: "kariyer-gunleri-stand",
    title: "Kariyer Günleri Stand",
    excerpt: "Üniversite kariyer günlerinde Aktif Kampüs standı — yüz yüze tanıtım ve kayıt.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Kariyer günleri standı — tarih kampüs takvimine göre",
    venue: "Üniversite kampüsü · yer duyurusunda",
    mode: "fiziksel",
    category: "Kariyer",
    speaker: "Aktif Kampüs temsilcileri",
    body: `Stand programı ilgili üniversitenin kariyer günü takvimine bağlıdır; güncel tarihler sosyal medya ve siteden paylaşılacaktır.`,
  },
  {
    slug: "cekilis-dil-kursu-online-almanca",
    title: "Çekiliş · Dil Kursu Online Almanca",
    excerpt: "Online Almanca dil kursu çekilişi — katılım koşulları yakında.",
    image:
      "https://images.unsplash.com/photo-1543109740-4bdb38fda756?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Dil kursu çekilişi — canlı yayın (Almanca)",
    venue: "Online",
    mode: "online",
    category: "Dil",
    speaker: "Aktif Kampüs",
    body: `Çekiliş kuralları, ödül kapsamı ve katılım linki ayrı bir duyuru ile yayınlanacaktır.`,
  },
];

export const programs: ProgramItem[] = [
  {
    slug: "ingilizce-speaking-club",
    title: "İngilizce Speaking Club",
    excerpt: "Haftalık konuşma pratiği ve geri bildirim — kampüs ortaklıklarıyla.",
    category: "dil kursu",
    mode: "offline",
    body: `Kulüp temelli speaking club; her hafta farklı tema ve konuşmacı desteği.`,
    whoFor: "Konuşma pratiği arayan lisans ve yüksek lisans öğrencileri.",
    outcomes: "Akıcılık, telaffuz ve özgüven; katılım sertifikası (opsiyonel).",
    format: "8 hafta · haftada 1 oturum · yüz yüze",
  },
  {
    slug: "dijital-pazarlama-sertifikasi",
    title: "Dijital Pazarlama Temelleri Sertifikası",
    excerpt: "Kısa sürede ölçülebilir kazanımlar — proje teslimi ile tamamlanır.",
    category: "sertifika",
    mode: "online",
    body: `Temel kavramlar, içerik stratejisi ve analitik özetleri; son hafta proje sunumu.`,
    whoFor: "Kulüp yöneticileri ve girişimci adayı öğrenciler.",
    outcomes: "Sertifika + portföy için örnek kampanya çıktısı.",
    format: "6 hafta · canlı yayın + kayıt",
  },
  {
    slug: "kisisel-marka-atolyesi",
    title: "Kişisel Marka Atölyesi",
    excerpt: "CV, LinkedIn ve görünürlük — mentor eşliğinde atölye çalışması.",
    category: "eğitim",
    mode: "offline",
    body: `Grup egzersizleri ve bire bir geri bildirim seansları.`,
    whoFor: "Staj ve iş başvurusuna hazırlanan öğrenciler.",
    outcomes: "Güncellenmiş profil ve görüşme hazırlığı kontrol listesi.",
    format: "1 gün · yoğun yüz yüze",
  },
];

const blogPosts: PostItem[] = [
  {
    slug: "yurtdisi-basvurularinda-5-sik-hata",
    kind: "blog",
    title: "Yurtdışı başvurularında 5 sık hata",
    category: "Rehber",
    date: "12 Mart 2026",
    excerpt: "Belgeler, zamanlama ve motivasyon mektubu — öğrenci gözüyle kontrol listesi.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
    body: `Başvuru sürecinde en çok tekrarlanan hataları kısa maddelerle özetledik. Sonunda kontrol listesi ile kendi dosyanızı gözden geçirebilirsiniz.`,
  },
  {
    slug: "kampuste-networking",
    kind: "blog",
    title: "Kampüste networking: ilk tanışmadan takibe",
    category: "Kariyer",
    date: "2 Mart 2026",
    excerpt: "Kulüp etkinliklerinden LinkedIn’e: görünür olmak için pratik adımlar.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    body: `Networking bir “etkinlik sonrası takip” disiplinidir. Bu yazıda 3 adımlı basit bir rutin öneriyoruz.`,
  },
];

const rehberPosts: PostItem[] = [
  {
    slug: "vize-basvuru-checklist",
    kind: "rehber",
    title: "Öğrenci vizesi: belge hazırlık kontrol listesi",
    category: "Yurtdışı",
    date: "28 Şubat 2026",
    excerpt: "Finansal kanıt, kabul mektubu ve randevu — adım adım.",
    body: `Ülkeye göre değişen maddeleri genel hatlarıyla topladık; resmi kaynaklara mutlaka teyit edin.`,
  },
  {
    slug: "kulup-etkinlik-planlama",
    kind: "rehber",
    title: "Kulüp etkinliği planlama şablonu",
    category: "Kulüp",
    date: "10 Şubat 2026",
    excerpt: "Bütçe, sponsor ve iletişim zaman çizelgesi tek sayfada.",
    body: `Şablonu kopyalayıp kendi kulübünüze göre uyarlayabilirsiniz.`,
  },
];

const duyuruPosts: PostItem[] = [
  {
    slug: "bahar-donemi-basvurulari",
    kind: "duyuru",
    title: "Bahar dönemi temsilcilik başvuruları açıldı",
    category: "Duyuru",
    date: "1 Nisan 2026",
    excerpt: "Son başvuru 30 Nisan; kısa form ve mülakat tarihleri içeride.",
    body: `Başvurularınızı tamamlayın; kısa liste 5 iş günü içinde e-posta ile duyurulur.`,
  },
  {
    slug: "yeni-is-birligi-eduvista",
    kind: "duyuru",
    title: "Yeni iş birliği: EduVista",
    category: "İş birliği",
    date: "25 Mart 2026",
    excerpt: "Yurtdışı eğitim danışmanlığında öğrencilere özel oturumlar.",
    body: `Partner oturumları takvimden takip edilebilir; kampüs bazlı duyurular yakında.`,
  },
];

export const postsByKind = {
  blog: blogPosts,
  rehber: rehberPosts,
  duyuru: duyuruPosts,
} as const;

export function getPostBySlug(kind: PostKind, slug: string): PostItem | undefined {
  return postsByKind[kind].find((p) => p.slug === slug);
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export function getProgramBySlug(slug: string): ProgramItem | undefined {
  return programs.find((p) => p.slug === slug);
}
