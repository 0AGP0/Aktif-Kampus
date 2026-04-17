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
    slug: "kariyer-sohbetleri-ilk-adim",
    title: "Kariyer Sohbetleri: İlk adım",
    excerpt: "İlk iş görüşmesinden LinkedIn’e: kampüs öğrencileri için uygulamalı oturum.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    when: "24 Nisan 2026 · 14:00",
    venue: "Boğaziçi Üniversitesi",
    mode: "fiziksel",
    category: "Kariyer",
    speaker: "Dr. Ayşe Yılmaz",
    body: `Bu oturumda kariyer yolculuğunun ilk adımlarını birlikte ele alıyoruz: özgeçmiş, görüşme soruları ve ağ kurma. Sorularınızı önceden iletebilirsiniz.`,
  },
  {
    slug: "yurtdisi-yuksek-lisans-bilgi-oturumu",
    title: "Yurtdışı yüksek lisans bilgi oturumu",
    excerpt: "Başvuru takvimi, belgeler ve burs fırsatları — mezun konuklarıyla soru-cevap.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
    when: "2 Mayıs 2026 · 19:30",
    venue: "Online yayın",
    mode: "online",
    category: "Yurtdışı",
    speaker: "Mezun konukları",
    body: `Program seçimi, motivasyon mektubu ve referans süreçlerine dair net bir yol haritası. Oturum sonunda kayıt linki paylaşılacaktır.`,
  },
  {
    slug: "ingilizce-konusma-kulubu",
    title: "İngilizce konuşma kulübü buluşması",
    excerpt: "Peer practice ve mini görevlerle konuşma pratiği — kayıt şart.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85",
    when: "8 Mayıs 2026 · 17:00",
    venue: "ODTÜ · öğrenci merkezi",
    mode: "fiziksel",
    category: "Dil",
    speaker: "Eğitmen: Can Demir",
    body: `Seviye ayrımı yapılmadan ortak konularla başlıyoruz; küçük gruplar halinde çalışılacak. Yanınızda kulüp kartını getirmeniz yeterli.`,
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
