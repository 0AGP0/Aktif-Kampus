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
  /** Ana sayfa üçüncü satır; yoksa speaker kullanılır */
  cardDetailLine?: string;
  /** Ana sayfa rozet metni (Ücretsiz / Kontenjanlı / Temsilciye özel vb.) */
  homepageBadge?: string;
  /** Ana sayfa kart şeridi rengi */
  homepageAccent?: "lime" | "blue";
  /** Detay şablonunda üçüncü meta etiketi (varsayılan: Konuşmacı) */
  metaThirdLabel?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

/** Ana sayfadaki “yaklaşan etkinlikler” kartları — sıra buradaki slugs ile belirlenir */
export const HOME_FEATURED_EVENT_SLUGS = [
  "ulusal-temsilciler-zirvesi-2026",
  "izmir-networking-coffee-2026",
  "ankara-temsilcilik-bulusmasi-2026",
] as const;

export type HomeFeaturedEventCard = {
  slug: string;
  title: string;
  venue: string;
  when: string;
  detailLine: string;
  mode: "online" | "fiziksel";
  badge: string;
  accent: "lime" | "blue";
};

export function getHomeFeaturedEventCards(): HomeFeaturedEventCard[] {
  return HOME_FEATURED_EVENT_SLUGS.map((slug) => {
    const e = events.find((x) => x.slug === slug);
    if (!e) {
      throw new Error(`HOME_FEATURED_EVENT_SLUGS içinde tanımsız slug: ${slug}`);
    }
    return {
      slug: e.slug,
      title: e.title,
      venue: e.venue,
      when: e.when,
      detailLine: e.cardDetailLine ?? e.speaker,
      mode: e.mode,
      badge: e.homepageBadge ?? "Etkinlik",
      accent: e.homepageAccent ?? "lime",
    };
  });
}

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

export type PostBodyFigure = {
  /** Bu indeksteki paragraftan hemen sonra gösterilir (0 = ilk paragraftan sonra) */
  afterParagraph: number;
  src: string;
  alt: string;
  caption?: string;
};

export type PostItem = {
  slug: string;
  kind: PostKind;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
  body: string;
  /** Makale içi görseller (opsiyonel) */
  bodyFigures?: PostBodyFigure[];
};

export const events: EventItem[] = [
  {
    slug: "ulusal-temsilciler-zirvesi-2026",
    title: "Aktif Kampüs: Ulusal Temsilciler Zirvesi",
    excerpt:
      "Türkiye genelinde kampüs temsilcileriyle online buluşma: vizyon, strateji ve «Her üniversitede bir ses» hedefi. Yalnızca kayıtlı temsilcilere açık Zoom / Google Meet oturumu.",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=900&q=85",
    when: "10 Mayıs 2026 (Pazar), 20:00 – 21:30",
    venue: "Online · Zoom veya Google Meet (bağlantı kayıtlı temsilcilere iletilir)",
    mode: "online",
    category: "Kampüs buluşması",
    speaker: "Yalnızca kayıtlı kampüs temsilcileri",
    cardDetailLine: "Katılım · kayıtlı temsilciler",
    homepageBadge: "Temsilciye özel",
    homepageAccent: "blue",
    metaThirdLabel: "Kayıt",
    ctaHref: "/basvuru/temsilci",
    ctaLabel: "Temsilcilik / bilgi",
    body: `Aktif Kampüs: Ulusal Temsilciler Zirvesi, yurt içindeki kampüs temsilcilerimizin çevrim içi bir araya geldiği, proje vizyonunu yenilediğimiz ve bir sonraki dönem kampüs stratejilerini birlikte tartıştığımız flagship etkinliktir. Oturumda temsilciler arası etkileşimi güçlendirmek, iyi uygulama örneklerini paylaşmak ve «Her üniversitede bir ses» sloganıyla uyumlu ortak hedefleri netleştirmek hedeflenir.

Program 20:00’de açılış ve gündem özeti ile başlar; ardından gelecek dönem öncelikleri, kampüs duyuruları ve iş birliği hatları masaya yatırılır. Soru–cevap için süre ayrılır.

Platform Zoom veya Google Meet üzerinden yapılır; katılım bağlantısı ve teknik bilgiler yalnızca önceden kayıtlı Aktif Kampüs temsilcilerine e-posta veya temsilci iletişim kanalları üzerinden iletilir. Kayıtlı olmayan katılımcılar için kontenjan bulunmaz.

Güncel tarih veya saatte değişiklik olması halinde duyuru kanallarından ve bu sayfa üzerinden bilgi güncellenir.`,
  },
  {
    slug: "ankara-temsilcilik-bulusmasi-2026",
    title: "Aktif Kampüs Ankara üniversite temsilcilik buluşması",
    excerpt:
      "Başkent’te üniversite temsilcileri ve topluluklarla yüz yüze networking: bölgesel fırsatlar, hibe programları ve ortak proje fikirleri. Bahçelievler’de kontenjanı 40 kişi ile sınırlı buluşma.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85",
    when: "23 Mayıs 2026 (Cumartesi), 13:00 – 16:30",
    venue: "Bahçelievler, Ankara · ayrıntılı adres kayıt sonrası iletilir",
    mode: "fiziksel",
    category: "Kampüs buluşması",
    speaker: "En fazla 40 kişi · kayıt ile",
    cardDetailLine: "Kontenjan · 40 kişi (sınırlı)",
    homepageBadge: "Kontenjan: 40",
    homepageAccent: "lime",
    metaThirdLabel: "Kontenjan",
    ctaHref: "/basvuru/genel",
    ctaLabel: "Ön kayıt / bilgi",
    body: `Ankara üniversite temsilcilik buluşması, Başkent’teki kampüs enerjisini Aktif Kampüs çatısı altında birleştirmek isteyen temsilciler ve öğrenci toplulukları için tasarlanmış yüz yüze bir randevudur. Etkinlikte bölgedeki eğitim ve sosyal fayda fırsatları, hibe ve destek programlarına dair bilgilendirme ve ortak proje fikirleri paylaşımı ön plandadır.

Buluşma 23 Mayıs 2026 Cumartesi günü 13:00–16:30 saatleri arasında Bahçelievler, Ankara’da gerçekleşir. Mekânın tam adresi ve yönlendirme, kayıt onayıyla birlikte katılımcılarla paylaşılır.

Kontenjan 40 kişi ile sınırlıdır; kayıt sırası ve uygunluk değerlendirmesi organizasyon ekibi tarafından yönetilir. İzmir veya diğer şehir buluşmalarından bağımsız olarak Başkent’e odaklanır.

Katkı ve iş birliği teklifleri için genel başvuru formundan veya iletişim kanallarından bize ulaşabilirsiniz.`,
  },
  {
    slug: "izmir-networking-coffee-2026",
    title: "Aktif Kampüs İzmir: Tanışma ve Networking Coffee",
    excerpt:
      "İzmir’de üniversite öğrencileri ve kulüp liderleriyle Alsancak’ta yüz yüze kahve buluşması. Sosyal fayda projeleri, yeni iş birlikleri ve güçlü İzmir kampüs ağı.",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=900&q=85",
    when: "6 Haziran 2026 (Cumartesi), 14:00 – 17:00",
    venue: "Alsancak, İzmir · ayrıntılı adres kayıt sonrası iletilir",
    mode: "fiziksel",
    category: "Kampüs buluşması",
    cardDetailLine: "Kontenjan · 40 kişi (sınırlı)",
    homepageBadge: "Kontenjan: 40",
    homepageAccent: "lime",
    metaThirdLabel: "Kontenjan",
    ctaHref: "/basvuru/genel",
    ctaLabel: "Ön kayıt / bilgi",
    speaker: "En fazla 40 kişi · kayıt ile",
    body: `Aktif Kampüs İzmir: Tanışma ve Networking Coffee, Ege kıyısındaki üniversite öğrencilerini ve kulüp liderlerini aynı masa etrafında buluşturmak için düzenlenir. Sosyal fayda projelerini yüz yüze konuşmak, yeni kampüs iş birlikleri kurmak ve İzmir ağını güçlendirmek isteyen katılımcılar için samimi, düşük tonlu bir networking formatıdır.

Etkinlik 6 Haziran 2026 Cumartesi günü 14:00–17:00 saatleri arasında Alsancak, İzmir’de yapılır; net buluşma noktası kayıt tamamlandıktan sonra paylaşılır.

Kontenjan 40 kişi ile sınırlıdır; yoğun ilgi halinde kayıtta öncelik sırası uygulanabilir. İzmir ve çevresindeki üniversitelerden katılım özellikle memnuniyetle karşılanır.

Başvuru ve ön kayıt için genel başvuru formunu kullanabilir veya etkinlik adını belirterek iletişime geçebilirsiniz.`,
  },
  {
    slug: "canva-egitimi-online",
    title: "Canva Eğitimi Online",
    excerpt:
      "Üniversite öğrencileri ve kulüp yöneticileri için online Canva atölyesi: sosyal medya görseli, etkinlik afişi ve sunum tasarımında hızlı sonuç. Canlı ekran paylaşımı ile uygulamalı üniversite etkinliği.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Canva eğitimi — canlı yayın (online)",
    venue: "Online yayın",
    mode: "online",
    category: "Eğitim",
    speaker: "Aktif Kampüs ekibi",
    body: `Bu online eğitim, kampüs duyurularında ve kulüp sosyal medya hesaplarında sık kullanılan görselleri hızlı üretmek isteyen öğrenciler için hazırlanmıştır. Canva arayüzünde şablon seçimi, marka renkleri, tipografi ve dışa aktarma (PNG, PDF) adımları birlikte uygulanır.

Kulüp başkanları için etkinlik afişi, hikâye formatı ve basit animasyon girişleri gibi pratik başlıklara odaklanılır; katılımcılar soru sorarak ekran üzerinden yönlendirilir.

Tarih ve saat duyurulduğunda kayıt linki ve yayın platformu (genellikle canlı yayın) paylaşılır. Ön kayıt için genel başvuru formundan “Canva eğitimi” başlığıyla talep iletebilirsiniz.`,
  },
  {
    slug: "almanyada-bilgisayar-muhendisi-olmak",
    title: "Almanya'da Bilgisayar Mühendisi Olmak",
    excerpt:
      "Yurtdışında eğitim ve kariyer arayan mühendis adayları için Almanya’da IT sektörü webinarı: tanınma süreçleri, iş arama kanalları, dil beklentisi ve başvuru belgeleri. Planlanan online yurtdışı eğitim etkinliği.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Almanya'da bilgisayar mühendisliği — canlı yayın",
    venue: "Online yayın",
    mode: "online",
    category: "Yurtdışı",
    speaker: "Konuk uzman (duyurulacak)",
    body: `Almanya’da bilgisayar mühendisi olarak çalışmak veya yüksek lisans sonrası IT alanında kariyer kurmak isteyen üniversite öğrencileri için bilgilendirme oturumudur. Oturumda genel çerçeve olarak mesleki tanınma, işveren beklentileri, Almanca ve İngilizce kullanımı ile yaygın başvuru belgeleri özetlenir.

Yurtdışı eğitim ve iş piyasasına dair sorularınız için soru–cevap bölümü ayrılır; resmi kurum ve güncel mevzuat için yönlendirme linkleri paylaşılır. Konuşmacı ve kesin program takvimi etkinlik öncesinde duyurulur.

Katılım genellikle ücretsiz veya kontenjanlıdır; kayıt için etkinlik duyurusunu veya genel başvuru formunu takip edebilirsiniz.`,
  },
  {
    slug: "europass-cv-hazirlama-online",
    title: "Europass CV Hazırlama Online",
    excerpt:
      "Staj, Erasmus ve yurtdışı başvuruları için Europass özgeçmiş atölyesi: bölüm sırası, beceri ifadeleri ve sık yapılan hatalar. Üniversite öğrencilerine yönelik online kariyer etkinliği.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Europass CV hazırlama — canlı yayın (online)",
    venue: "Online yayın",
    mode: "online",
    category: "Kariyer",
    speaker: "Aktif Kampüs ekibi",
    body: `Europass CV, Avrupa genelinde işveren ve eğitim kurumlarının tanıdığı standart bir özgeçmiş formatıdır. Bu online oturumda Europass editörü üzerinden profil oluşturma, deneyim ve eğitim bölümlerinin doldurulması ve dil seviyelerinin (CECRL) doğru işaretlenmesi adım adım gösterilir.

Kulüp ve gönüllülük deneyimlerini “beceri” diline çevirme, tekrarlayan filler ifadelerden kaçınma ve başvuruya özel kısa özet (summary) yazımı gibi pratik ipuçları paylaşılır. Oturum sonunda kontrol listesi ile kendi CV’nizi gözden geçirebilirsiniz.

Tarih netleştiğinde kayıt ve yayın bağlantısı duyurulur; sorularınızı önceden iletmek için genel başvuru formunu kullanabilirsiniz.`,
  },
  {
    slug: "almanyada-diyetisyen-olmak",
    title: "Almanya'da Diyetisyen Olmak",
    excerpt:
      "Sağlık bilimleri ve beslenme ve diyetetik öğrencileri için Almanya’da çalışma yolları: denklik, dil şartı ve çalışma izni süreçlerine giriş. Planlanan yurtdışı eğitim webinarı.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Almanya'da diyetisyenlik — canlı yayın",
    venue: "Online yayın",
    mode: "online",
    category: "Yurtdışı",
    speaker: "Konuk uzman (duyurulacak)",
    body: `Almanya’da diyetisyen olarak meslek icra etmek veya yüksek lisans sonrası sağlık sektöründe yer almak isteyen adaylar için genel çerçeve sunulur. Oturumda mesleki denklik başvurularına dair yönlendirme, dil yeterliliği beklentileri ve tipik belge seti üzerinden özet bilgi verilir.

Yurtdışında eğitim ve kariyer planı yapan öğrencilerin soruları için ayrılmış soru–cevap bölümü bulunur; güncel mevzuat ve resmi başvuru adresleri konuşmacı tarafından paylaşılır.

Etkinlik tarihi ve konuşmacısı yakında ilan edilir; haberdar olmak için genel başvuru veya etkinlik duyurularını takip edebilirsiniz.`,
  },
  {
    slug: "almanyada-hukuk-yuksek-lisans",
    title: "Almanya'da Hukuk Yüksek Lisans Okumak",
    excerpt:
      "Hukuk fakültesi ve ilgili bölüm öğrencileri için Almanya’da LL.M. ve benzeri yüksek lisans programları: üniversite seçimi, başvuru dosyası ve dil şartlarına giriş. Online yurtdışı eğitim semineri.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Hukuk yüksek lisans Almanya — canlı yayın",
    venue: "Online yayın",
    mode: "online",
    category: "Yurtdışı",
    speaker: "Konuk uzman (duyurulacak)",
    body: `Almanya’da hukuk alanında yüksek lisans yapmayı düşünen öğrenciler için program türleri, başvuru dönemleri ve motivasyon mektubu gibi dosya bileşenleri özetlenir. Oturumda ayrıca İngilizce veya Almanca ile yürütülen programlara göre dil yeterliliği beklentileri ve maliyet başlıklarına kısa değinilir.

Yurtdışında eğitim başvurusu hazırlayan katılımcılar, soru–cevap ile kendi durumlarına özel yönlendirme alabilir. Resmi üniversite ve konsolosluk kaynaklarına mutlaka bireysel teyit yapılması gerektiği oturumda vurgulanır.

Konuşmacı ve kesin takvim duyurulduğunda kayıt sayfası açılır; ön bildirim için genel başvuru formuna etkinlik adını yazmanız yeterlidir.`,
  },
  {
    slug: "istanbul-bulusmasi-enes-colluoglu",
    title: "İstanbul Buluşması · Enes Çöllüoğlu",
    excerpt:
      "İstanbul’daki üniversite öğrencileri ve Aktif Kampüs ağı için yüz yüze kampüs buluşması: tanışma, sohbet ve kulüp iş birliği fikirleri. Planlanan üniversite etkinliği formatında networking.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · İstanbul fiziksel buluşma — Enes Çöllüoğlu",
    venue: "İstanbul · mekân yakında",
    mode: "fiziksel",
    category: "Buluşma",
    speaker: "Enes Çöllüoğlu",
    body: `İstanbul buluşması, Marmara bölgesindeki üniversitelerden öğrencilerin Aktif Kampüs temsilcileri ve konuklarıyla tanıştığı yüz yüze bir kampüs etkinliğidir. Kısa açılışın ardından soru–cevap, kulüp duyuruları ve ortak proje fikirleri için serbest sohbet alanı hedeflenir.

Mekân, tarih ve saat kesinleştiğinde kayıt linki ve adres bilgisi duyurulur. Kontenjan veya ücretlendirme olması halinde ayrıca belirtilecektir.

İstanbul üniversite etkinlikleri ve kampüs networking arayan öğrencilerin takvimine eklemesi için sayfa düzenli güncellenir; bilgi almak için genel başvuru formundan “İstanbul buluşması” diye not düşebilirsiniz.`,
  },
  {
    slug: "sakarya-bulusmasi-sedanur-cimen",
    title: "Sakarya Buluşması · Sedanur Çimen",
    excerpt:
      "Sakarya ve çevre illerdeki öğrenciler için yüz yüze kampüs buluşması: tanışma, kulüp tanıtımları ve Aktif Kampüs programlarına kayıt yönlendirmesi. Planlanan üniversite etkinliği.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Sakarya fiziksel buluşma — Sedanur Çimen",
    venue: "Sakarya · mekân yakında",
    mode: "fiziksel",
    category: "Buluşma",
    speaker: "Sedanur Çimen",
    body: `Sakarya buluşması, bölgedeki üniversite öğrencilerinin Aktif Kampüs ekibi ve temsilcileriyle doğrudan iletişim kurabildiği yüz yüze bir etkinliktir. Kısa tanıtımın ardından kulüp liderleri için iş birliği kanalları, yaklaşan online ve kampüs programları hakkında bilgi paylaşımı yapılır.

Etkinlik saati, adresi ve varsa kayıt koşulları takvim netleşince bu sayfada ve duyuru kanallarında yayımlanır.

Sakarya üniversite etkinlikleri takvimine eklemek veya katılım bildirmek için genel başvuru formuna etkinlik adını yazabilirsiniz.`,
  },
  {
    slug: "kariyer-gunleri-stand",
    title: "Kariyer Günleri Stand",
    excerpt:
      "Üniversite kariyer fuarı ve kariyer günlerinde Aktif Kampüs standı: öğrencilere etkinlik takvimi, temsilcilik ve dil–yurtdışı programları hakkında yüz yüze bilgi. Kampüs içi kariyer etkinliği.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Kariyer günleri standı — tarih kampüs takvimine göre",
    venue: "Üniversite kampüsü · yer duyurusunda",
    mode: "fiziksel",
    category: "Kariyer",
    speaker: "Aktif Kampüs temsilcileri",
    body: `Kariyer günleri standı, ilgili üniversitenin fuar veya kariyer etkinliği programına bağlı olarak kampüste kurulan yüz yüze bilgilendirme noktasıdır. Öğrenciler; yaklaşan seminer ve webinarlar, kampüs temsilciliği, kulüp iş birlikleri ve dil kursu hatları hakkında broşür veya dijital yönlendirme alabilir.

Hangi üniversitede ve hangi tarihte olacağı, anlaşmalı kampüs takvimine göre duyurulur. Stand saatleri etkinlik gününün genel akışına göre netleştirilir.

Üniversitenizde Aktif Kampüs standı talep etmek veya gönüllü destek vermek için genel başvuru veya kulüp başvuru kanallarından iletişime geçebilirsiniz.`,
  },
  {
    slug: "cekilis-dil-kursu-online-almanca",
    title: "Çekiliş · Dil Kursu Online Almanca",
    excerpt:
      "Üniversite öğrencileri için online Almanca dil kursu çekilişi: katılım şartları, ödül kapsamı ve canlı yayın tarihi duyurulacak. Dil öğrenimi ve kampüs fırsatı odaklı etkinlik.",
    image:
      "https://images.unsplash.com/photo-1543109740-4bdb38fda756?auto=format&fit=crop&w=900&q=85",
    when: "Planlanan · Dil kursu çekilişi — canlı yayın (Almanca)",
    venue: "Online",
    mode: "online",
    category: "Dil",
    speaker: "Aktif Kampüs",
    body: `Bu etkinlik, partner dil eğitimi veya Aktif Kampüs programları kapsamında düzenlenecek çekilişin duyuru sayfasıdır. Çekilişe kimlerin katılabileceği (örneğin üniversite e-postası ile doğrulama), ödülün süresi ve seviye kapsamı ayrı metinle yayımlanır.

Canlı yayın veya sonuç ilanı için tarih ve platform bilgisi duyurulduğunda bu sayfa güncellenir; yasal çerçeve ve KVKK metni çekiliş şartlarında yer alır.

Haberdar olmak için genel başvuru formunda “Almanca çekiliş” notu bırakabilir veya kampüs temsilciniz üzerinden takip edebilirsiniz.`,
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
    title: "Yurtdışı başvurularında 5 sık hata ve nasıl kaçınılır",
    category: "Yurtdışı eğitim",
    date: "12 Mart 2026",
    excerpt:
      "Yüksek lisans ve lisans başvurularında belgeler, zamanlama ve motivasyon mektubunda en çok yapılan hatalar. Üniversite öğrencileri için kontrol listesi ve resmi kaynak uyarısı.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 1,
        src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=85",
        alt: "Başvuru belgeleri ve not defteri üzerinde çalışan öğrenci",
        caption: "Transkript, dil belgesi ve pasaport güncelliği başvurunun omurgasıdır; son güne bırakmayın.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
        alt: "Üniversite kampüsünde bir araya gelen öğrenciler",
        caption: "Kampüs kariyer merkezi ve danışmanlık hizmetlerinden ücretsiz geri bildirim almak mümkündür.",
      },
    ],
    body: `Yurtdışında üniversite başvurusu yapan öğrencilerin çoğu aynı tuzaklara düşüyor: eksik belge, yanlış zamanlama ve yüzeysel motivasyon mektubu. Bu rehberde en sık beş hatayı özetliyor; her maddeyi kendi dosyanız için bir kontrol sorusuna çevirebilirsiniz. Unutmayın: ülke, program ve kurum kuralları değişir; nihai doğrulamayı her zaman resmi üniversite ve konsolosluk sitelerinden yapın.

Birinci hata, transkript ve diploma ekinin güncel ve istenen formatta olmamasıdır. Çeviri gerekiyorsa yeminli çeviri veya kurumun kabul ettiği format netleştirilmeden başvuru göndermek reddi riskini artırır. İkinci hata, dil yeterlilik sonucunun (IELTS, TOEFL vb.) süresinin dolmuş olması veya hedef programa göre bant skorunun yetersiz kalmasıdır. Üçüncü hata, referans mektuplarının genel kalıplarla yazılması ve sizi akademik veya profesyonel olarak tanımlamamasıdır.

Dördüncü hata, motivasyon veya amaç beyanını (statement of purpose) özgeçmişin tekrarı gibi yazmaktır. Komite, “neden bu program, neden şimdi ve sizin katkınız ne olacak?” sorularına somut örneklerle yanıt bekler. Beşinci hata ise son güne bırakılan başvuru ve ödeme adımlarıdır; teknik kesinti veya belge yükleme hatası tüm emeği tehlikeye atar.

Bu riskleri azaltmak için en az sekiz hafta önce dosya listesini çıkarın, her belge için son kullanma tarihini not edin ve bir güvenilir kişiden (mümkünse kariyer merkezi veya danışman) motivasyon metnine geri bildirim alın. Aktif Kampüs üzerinden duyurulan yurtdışı eğitim oturumları ve üniversite temsilcileriyle yapılan buluşmalar da süreç hakkında güncel bilgi edinmek için kullanılabilir.

Özet kontrol listesi: transkript ve çeviriler tam mı? Dil belgesi geçerli mi? Referanslar imzalı ve programa özel mi? Motivasyon metni program ile bağlantılı mı? Başvuru ücreti ve ek belgeler zamanında yüklendi mi? Bu sorulara “evet” dendiğinde dosyanız çok daha güçlü bir zemine oturur.

Son olarak, reddedilme veya bekleme listesi normal bir parçasıdır; tek bir başvuruya tüm planı bağlamak yerine gerçekçi bir zaman çizelgesi ve yedek seçenekler belirlemek ruh sağlığı ve bütçe yönetimi açısından da önemlidir. Sorularınız için Aktif Kampüs etkinlik takvimindeki bilgi oturumlarını ve genel başvuru kanalını kullanabilirsiniz.`,
  },
  {
    slug: "kampuste-networking",
    kind: "blog",
    title: "Kampüste networking: ilk tanışmadan LinkedIn takibine rehber",
    category: "Kariyer",
    date: "2 Mart 2026",
    excerpt:
      "Üniversite kulüp etkinliklerinden mezun buluşmalarına: öğrenci networking için görünür olma, mesaj şablonu ve takip ritmi. Kariyer görünürlüğü için pratik adımlar.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
        alt: "Çalışma masasında el sıkışan profesyoneller",
        caption: "Kısa ve net tanışma; unutulmaz ilk izlenim için hazırlıklı olun.",
      },
      {
        afterParagraph: 5,
        src: "https://images.unsplash.com/photo-1611944212129-29977c1394bd?auto=format&fit=crop&w=1200&q=85",
        alt: "LinkedIn profili ve profesyonel ağ kavramı",
        caption: "Profil fotoğrafı, başlık ve özet alanı arama sonuçlarında öne çıkmanızı sağlar.",
      },
    ],
    body: `Networking, yalnızca kartvizit toplamak değil; güven oluşturup ilişkiyi sürdürülebilir kılmaktır. Üniversite öğrencileri için en erişilebilir sahalar kulüp etkinlikleri, seminerler, kariyer fuarları ve mezun buluşmalarıdır. Bu yazıda ilk tanışmadan dijital takibe kadar üç aşamalı basit bir rutin öneriyoruz.

İlk adım: görünür olmak. Etkinlik öncesi konuşmacı veya kulüp yönetiminin adlarını kısaca araştırın; soracağınız tek somut soru bile hatırlanır bir izlenim bırakır. Giyim kurallarını etkinlik türüne göre ayarlayın; profesyonel davranış, abartısız düzenli bir görünümle başlar.

İkinci adım: tanışma anında netlik. Kendinizi 20–30 saniyede (bölüm, ilgi alanı, neden bu etkinlikte olduğunuz) özetleyin. Karşı tarafın adını ve bağlamını not alın; “yarın LinkedIn’den yazacağım” demek yerine 48 saat içinde kısa bir mesaj göndermek disiplin oluşturur.

Üçüncü adım: takip mesajı. LinkedIn veya e-postada ilk cümlede ortak bağlamı hatırlatın (“X etkinliğinde Y konusunu sormuştum”). İsteğinizi açık yazın: bilgi görüşmesi, staj duyurusu veya portföy geri bildirimi. Uzun ve muğlak mesajlar yanıt oranını düşürür.

Dijital görünürlük için LinkedIn başlığınızı ve özetinizi güncelleyin; kulüp görevlerinizi ve projelerinizi madde madde ekleyin. GitHub, Behance veya kişisel site linki ilgili alanlarda güveni artırır. Gizlilik ayarlarınızın arama ve mesaj alımına uygun olduğundan emin olun.

Networking ahlakı: her mesajı kişiselleştirin, toplu kopyala-yapıştır kullanmayın ve yanıt gelmezse tek nazik hatırlatma yeterli sayılır. Red veya sessizlik kişisel algılanmamalıdır; yoğunluk ve algoritma gerçekleridir.

Kampüs içi fırsatları Aktif Kampüs etkinlik duyuruları ve kulüp iş birlikleri üzerinden takip ederek networking rutininizi besleyebilirsiniz. Küçük ama düzenli adımlar, mezuniyet sonrası iş ve staj sürecinde fark yaratır.`,
  },
  {
    slug: "ucretsiz-universite-etkinlikleri-rehberi",
    kind: "blog",
    title: "Üniversite öğrencileri için ücretsiz etkinlikleri nasıl bulursun?",
    category: "Kampüs hayatı",
    date: "28 Mart 2026",
    excerpt:
      "Seminer, webinar ve kampüs buluşmalarına ücretsiz katılım: öğrenci portalı, kulüp duyuruları ve şehir bazlı arama ipuçları. Üniversite etkinlikleri takvimini verimli kullanma rehberi.",
    image:
      "https://images.unsplash.com/photo-1540575467063-027aef8f229c?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 1,
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
        alt: "Konferans salonunda dinleyici kitlesi",
        caption: "Kampüs büyük salon etkinlikleri genelde ücretsiz; kayıt için erken kontrol edin.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
        alt: "Öğrenciler dizüstü bilgisayarla birlikte çalışıyor",
        caption: "Kulüp sosyal medya hesapları anlık duyuru için en hızlı kanallardan biridir.",
      },
    ],
    body: `Ücretsiz üniversite etkinlikleri; kariyer, yurtdışı eğitim, girişimcilik ve kişisel gelişim başlıklarında en düşük maliyetli öğrenme yollarından biridir. Bu yazıda etkinlikleri nerede arayacağınızı, kayıt ve kontenjan tuzaklarından nasıl kaçınacağınızı ve takvimi nasıl düzenleyeceğinizi adım adım özetliyoruz.

İlk kaynak her zaman kendi üniversitenizin öğrenci işleri, kariyer merkezi ve öğrenci kulübü birimlerinin web sayfası veya duyuru panosudur. Akademik takvime göre yoğunluk değişir; dönem başı ve final öncesi haftalarda etkinlik yoğunluğu artar, bu yüzden RSS veya takvim aboneliği varsa kullanın.

İkinci kaynak, kulüp ve toplulukların Instagram, X ve LinkedIn hesaplarıdır. Biyografide linktree veya kayıt formu olan hesapları önceliklendirin; etkinlik “ücretsiz” yazsa bile kontenjan sınırlı olabilir, erken kayıt şarttır.

Üçüncü kaynak, şehir ve üniversite adıyla arama yapan bağımsız platformlar ve sivil toplum etkinlikleridir. Burada üniversite dışı mekân ve saat bilgisini doğrulamayı unutmayın. Aktif Kampüs gibi kampüsler arası ağlar da bölgesel buluşma ve online oturumları tek yerden duyurmayı kolaylaştırır.

Kayıt sırasında kişisel verilerinizi paylaşırken KVKK metnini okuyun; gereksiz izinleri işaretlemeyin. Sahte “ücretsiz” etkinlikler bazen satış amaçlı oturumlara dönüşebilir; programda konuşmacı kurumları ve sponsorları kontrol edin.

Takvim disiplini için ayda bir kez “etkinlik taraması” yapın: ilgi alanlarınıza göre filtreleyin, takviminize ekleyin ve çakışmaları önceden görün. Böylece hem akademik iş yükünüzü korursunuz hem de fırsat kaçırmazsınız.

Özet: resmi kampüs kanalları birinci öncelik, kulüp sosyal medyası ikinci, güvenilir üçüncü taraf duyurular üçüncü. Kayıt onayı ve katılım kurallarını e-posta veya SMS ile saklayın. Daha fazla etkinlik tipi için Aktif Kampüs etkinlikler sayfasını ve bülten duyurularını takip edebilirsiniz.`,
  },
  {
    slug: "dil-ogreniminde-konusma-kaygisi",
    kind: "blog",
    title: "Dil öğrenirken konuşma kaygısını azaltmak: kulüp ve pratik rutin",
    category: "Dil",
    date: "18 Mart 2026",
    excerpt:
      "İngilizce ve diğer dillerde konuşma kaygısı, konuşma kulübü ve peer practice ile nasıl yönetilir? Üniversite öğrencileri için haftalık mini hedefler ve telaffuz ipuçları.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85",
        alt: "Grup halinde konuşma pratiği yapan öğrenciler",
        caption: "Düşük baskılı ortamda eşli pratik, hata yapma özgürlüğü sağlar.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
        alt: "Not defteri ve kalem ile dil çalışması",
        caption: "Günlük 10 dakikalık mini görevler telaffuz ve akıcılığı besler.",
      },
    ],
    body: `Yabancı dilde konuşma kaygısı, “hata yaparım” korkusundan kaynaklanır ve akıcılığı kilitler. Araştırmalar düşük riskli ortamlarda tekrarlı pratikle kaygının azaltılabildiğini gösteriyor. Üniversite öğrencileri için en uygun ortamlar konuşma kulüpleri, eşli çalışma grupları ve kampüs dil merkezleridir.

Kaygıyı yönetmenin ilk adımı hedefi küçültmektir: “akıcı konuşacağım” yerine “bu hafta üç dakika tanıtım yapacağım” gibi ölçülebilir hedefler koyun. İkinci adım, telaffuza takılmadan önce anlam ve bağlamı tamamlamaya odaklanmaktır; dinleyici çoğu zaman küçük hataları fark etmez, iletişim kopukluğu hisseder.

Üçüncü adım düzenli pratiktir. Haftada iki kez, 15’er dakikalık seanslar; mümkünse kulüp veya Aktif Kampüs duyurularındaki konuşma etkinliklerine katılım. Dördüncü adım geri bildirimdir: güvenilir bir arkadaştan veya eğitmenden tek bir iyileştirme maddesi istemek, onlarca düzeltme isteğinden daha etkilidir.

Kaygı arttığında nefes ve duraklama teknikleri kısa süreli rahatlama sağlar; konuşmadan önce 30 saniye hazırlık notu yazmak zihinsel yükü azaltır. Kayıt dinleme (kendi sesinizi dinlemek) ilk başta rahatsız edici olsa da telaffuz farkındalığı kazandırır.

Dil öğreniminde dijital araçlar yardımcıdır ancak yüz yüze etkileşimin yerini tam alamaz. Online dil partneri bulurken güvenlik için ilk görüşmeyi kampüs gibi kamusal bir ortamda veya grup oturumunda yapın.

Özet: küçük hedef, düzenli pratik, tek geri bildirim, güvenli ortam. Aktif Kampüs dil ve etkinlik duyurularından konuşma kulübü ve workshop oturumlarını takip ederek rutininizi sürdürülebilir kılabilirsiniz. Dil kursu ve sertifika programları için programlar sayfamızı da inceleyebilirsiniz.`,
  },
];

const rehberPosts: PostItem[] = [
  {
    slug: "vize-basvuru-checklist",
    kind: "rehber",
    title: "Öğrenci vizesi: belge hazırlık kontrol listesi (2026 güncel çerçeve)",
    category: "Yurtdışı",
    date: "28 Şubat 2026",
    excerpt:
      "Kabul mektubu, finansal kanıt, sağlık sigortası, konaklama ve biyometrik randevu: öğrenci vizesi dosyasını ülkeye göre uyarlayabileceğiniz adım adım kontrol listesi ve resmi kaynak uyarısı.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1200&q=85",
        alt: "Pasaport ve seyahat belgeleri düzenli masa üstünde",
        caption: "Pasaport süresi ve boş sayfa sayısı çoğu konsoloslukta ayrı ayrı kontrol edilir.",
      },
      {
        afterParagraph: 5,
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
        alt: "Düzenli evrak klasörü ve imza alanları",
        caption: "Evrakları tarih sırasına dizmek ve mülakatta hızlı bulmak görünümü güçlendirir.",
      },
    ],
    body: `Öğrenci vizesi süreci ülkeye, programa ve başvuru kanalına göre değişir; bu rehber genel bir çerçeve sunar. Nihai belge listesi, form versiyonu ve ücretler için her zaman hedef ülkenin konsolosluğu veya yetkili vize merkezi sitesini esas alın. Aktif Kampüs içerikleri hukuki danışmanlık yerine geçmez.

İlk blok: kabul ve kayıt. Üniversiteden veya yurtdışındaki kurumdan gelen koşullu veya kesin kabul mektubu, program süresi, başlangıç tarihi ve öğrenim ücreti bilgileri tutarlı olmalıdır. Online kayıt onayı varsa çıktısını imzalı veya kurumsal e-posta ile doğrulatmayı unutmayın.

Finansal kanıt genelde bloke mevduat, burs yazısı veya sponsor taahhüdü ile desteklenir. Hesap dökümünde ani ve açıklanamayan hareketler soru işareti yaratabilir; gelir kaynağınızı kısa bir özet notla ilişkilendirmek faydalıdır. Döviz cinsi ve vade beklentilerini resmi siteden kontrol edin.

Randevu ve biyometrik adımları erken planlayın. Yoğun dönemlerde randevu tarihi ile program başlangıcı arasında yeterli tampon bırakın; pasaport teslim süreleri bazen birkaç haftayı bulur. Fotoğraf ölçüsü ve arka plan rengi ülkeye göre farklıdır; stüdyoda “öğrenci vizesi” diye belirtmek hata riskini azaltır.

Sağlık sigortası ve konaklama belgeleri bazı ülkelerde zorunludur. Poliçenin başlangıç–bitiş tarihlerinin vize süresiyle örtüştüğünden emin olun; öğrenci indirimli paketlerde kapsam maddelerini okuyun. Yurt veya ev sahibi sözleşmesinde adres, süre ve imza bilgileri net olmalıdır.

Mülakat veya ek sorularda tutarlılık kritiktir: başvuru formunda yazdığınız ile sözlü anlatımınız çelişmemeli. Kısa, net cümleler; “kim finanse ediyor, mezuniyet sonrası plan” gibi klasik sorulara hazırlıklı olun. Yanlış veya eksik bilgi ileride vize iptali riski doğurabilir.

Özet kontrol listesi: güncel pasaport, tamamlanmış formlar, biyometrik randevu çıktısı, kabul + ödeme makbuzu, finans belgeleri, sigorta, konaklama, uçuş rezervasyonu (isteniyorsa), fotoğraflar ve fotokopi seti. Her belge için bir yedek dijital kopya bulutta şifreli saklanabilir.

Son olarak reddedilme veya ek belge talebi olağan süreçlerdir; itiraz veya yeniden başvuru yollarını resmi siteden öğrenin. Aktif Kampüs yurtdışı eğitim etkinlikleri ve partner bilgilendirme oturumları genel süreç farkındalığı için kullanılabilir; kişisel dosyanızı mutlaka uzman kurumlarla doğrulayın.`,
  },
  {
    slug: "kulup-etkinlik-planlama",
    kind: "rehber",
    title: "Kulüp etkinliği planlama şablonu: bütçe, sponsor ve iletişim takvimi",
    category: "Kulüp",
    date: "10 Şubat 2026",
    excerpt:
      "Kulüp başkanı ve etkinlik komitesi için tek sayfalık çerçeve: hedef kitle, risk değerlendirmesi, sponsor teklifi, sosyal medya takvimi ve günübirlik kontrol listesi.",
    image:
      "https://images.unsplash.com/photo-1540575467063-027aef8f229c?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
        alt: "Konferans veya etkinlik salonunda hazırlık",
        caption: "Mekân kapasitesi, yangın çıkışları ve erişilebilirlik risk formunda yer almalıdır.",
      },
      {
        afterParagraph: 5,
        src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85",
        alt: "Ekip toplantısı ve not tutma",
        caption: "Görev dağılımı yazılı olunca gönüllü yorgunluğu ve son dakika kaosu azalır.",
      },
    ],
    body: `Başarılı bir kulüp etkinliği; net hedef, gerçekçi bütçe ve dağıtılmış sorumlulukla başlar. Bu şablonu kopyalayıp kendi üniversitenizin öğrenci işleri veya kulüp yönetmeliğine göre uyarlayın; izin formları ve KVKK metinleri kurumunuza özeldir.

Tanım aşamasında tek cümlelik amaç yazın: örneğin “yurtdışı yüksek lisans başvurusu hakkında bilgilendirme” veya “girişimcilik pitch antrenmanı”. Hedef kitleyi (sınıf, bölüm, şehir dışı konuk) ve beklenen katılımı sayısal tahmin edin; bu sponsor ve mekân seçimini kolaylaştırır.

Zaman çizelgesi en az sekiz hafta öncesinden başlamalıdır: T haftasında etkinlik ise T-8’de konu onayı, T-6’da mekân, T-4’te afiş ve kayıt formu, T-2’de hatırlatma paylaşımı, T-1’de teknik prova planlayın. Online etkinliklerde yayın linki ve yedek sunucu (ikinci moderatör) ayrı satırda dursun.

Bütçe tablosunda gelir (kontenjan ücreti, sponsor, üniversite desteği) ve gider (yemek, ulaşım, basılı malzeme, konuşmacı ücreti) ayrı sütunlarda toplansın. Küçük kulüplerde “gönüllü emek”i saat olarak not etmek ileride raporlamada işinize yarar.

Sponsorluk için tek sayfalık özet: kulübünüzün erişimi, geçmiş etkinlik fotoğrafları, logo kullanımı ve sosyal medya metrikleri. Marka güvenliği için onaylı hashtag ve görsel şablonları önceden paylaşın. Sözlü vaat yerine e-posta ile yazılı teyit alın.

İletişim planında en az üç kanal kullanın: duvar afişi, öğrenci mail listesi ve Instagram hikâyesi. Mesaj tonu kurumsal ile samimi arasında dengeli olsun; erişilebilirlik (altyazı, büyük punto) duyurularınıza ek not olarak eklenebilir.

Risk ve güvenlik: ilk yardım kişisi, acil durum numaraları ve kayıt listesi (KVKK’ya uygun) hazır bulunsun. Fiziksel etkinliklerde fotoğraf çekimi için açık rıza metni göstermek profesyonel bir adımdır.

Günü etkinlik sabahı son kontrol: ses, projeksiyon, su, isim yaka kartları, konuşmacı ödemesi varsa dekont. Etkinlik sonrası 48 saat içinde teşekkür postu ve kısa anket linki paylaşmak katılımcı sadakatini artırır.

Özet: amaç net, takvim geri sarılabilir şekilde yazılı, bütçe şeffaf, iletişim çok kanallı. Aktif Kampüs etkinlik duyuruları ve kulüp iş birliği kanallarından benzer formatlarda ilham alabilir; üniversite içi prosedürler için mutlaka öğrenci işleriyle son onayı alın.`,
  },
  {
    slug: "genel-basvuru-formu-rehberi",
    kind: "rehber",
    title: "Aktif Kampüs genel başvuru formu: alanları doğru doldurma rehberi",
    category: "Başvuru",
    date: "5 Mart 2026",
    excerpt:
      "Temsilcilik, etkinlik ön kaydı ve iş birliği talepleri için form alanları; iletişim tercihleri, üniversite bilgisi ve KVKK onayı. Reddedilme riskini azaltan pratik ipuçları.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 1,
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
        alt: "Dizüstü bilgisayarda form dolduran kullanıcı",
        caption: "Kısa ve doğrulanabilir cümleler, değerlendirme süresini hızlandırır.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
        alt: "İmza ve belge kabul süreci",
        caption: "KVKK ve iletişim onaylarını işaretlemeden göndermeyin; eksik onay başvuruyu askıya alabilir.",
      },
    ],
    body: `Genel başvuru formu; temsilcilik, etkinlik ön kaydı, kulüp iş birliği veya bilgi taleplerini tek kanaldan toplamak için tasarlanmıştır. Bu rehberde hangi alanların neden sorulduğunu ve sık yapılan doldurma hatalarını özetliyoruz.

İletişim bilgilerinde üniversite e-postanızı tercih edin; kurumsal yanıtların güvenilirliği artar. Telefon numarasında ülke kodunu ekleyin; acil durumda ulaşılamayan başvurular gecikebilir.

Üniversite, bölüm ve sınıf alanlarını güncel yazın; mezun adayları “mezuniyet tarihi” notunu açıkça eklemelidir. Birden fazla talep varsa (örneğin hem temsilcilik hem etkinlik) tek formda öncelik sıranızı belirtin; ayrı formlar karışıklığa yol açabilir.

Serbest metin alanında beklentinizi üç maddede özetleyin: ne istiyorsunuz, hangi tarih aralığında, hangi kanaldan dönüş bekliyorsunuz. Uzun motivasyon yazıları yerine somut örnekler (düzenlediğiniz etkinlik, kulüp rolünüz) daha hızlı okunur.

Dosya eki isteniyorsa boyut ve format sınırlarına uyun; PDF tek dosyada birleştirilmiş olmalıdır. Kişisel veri içeren belgeleri halka açık linklerle paylaşmayın; şifreli veya süreli indirme linkleri tercih edin.

KVKK aydınlatma metnini okuyun; iletişim izinlerini ihtiyacınıza göre işaretleyin. İzin vermediğiniz kanallardan mesaj gönderilmez; fırsat duyurularını kaçırmamak için en azından e-posta iznini değerlendirin.

Gönderim sonrası otomatik teyit e-postası gelmezse spam klasörünü kontrol edin. Belirtilen süre içinde dönüş alamazsanız aynı konu başlığıyla nazikçe hatırlatma yapılabilir; günde birden fazla mesaj genelde işe yaramaz.

Özet: doğrulanabilir iletişim, net talep, uygun ek, onay kutuları tam. Başvuru sonrası süreçler için /basvuru alt sayfaları ve etkinlik takvimimizi de inceleyebilirsiniz.`,
  },
  {
    slug: "staj-basvuru-ve-portfolyo-rehberi",
    kind: "rehber",
    title: "Üniversite öğrencisi için staj başvurusu ve portföy sayfası rehberi",
    category: "Kariyer",
    date: "18 Mart 2026",
    excerpt:
      "CV, ön yazı, GitHub veya Behance bağlantısı, referans ve mülakat provası: staj başvurusunda öne çıkmak için kontrol listesi ve kampüs kariyer merkezi ile uyum.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=85",
        alt: "Özgeçmiş ve iş başvurusu evrakları",
        caption: "Tek sayfalık CV, okuyucu için hız kazandırır; proje detayları portföy linkinde derinleşir.",
      },
      {
        afterParagraph: 5,
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
        alt: "Ofis ortamında iş görüşmesi",
        caption: "STAR yöntemi (durum, görev, eylem, sonuç) ile proje anlatımı mülakatta netlik sağlar.",
      },
    ],
    body: `Staj başvurusu, mezuniyet öncesi en somut iş deneyimi kapısıdır. Bu rehber; mühendislikten iletişime farklı disiplinlerde ortak işleyen bir çerçeve sunar; sektörünüze özel formatları kariyer merkezinizden doğrulayın.

İlk adım hedef netleştirmektir: yaz stajı mı, zorunlu uzun dönem mi, uzaktan çalışma kabul eden firmalar mı? Liste çıkarırken büyük şirketlerle KOBİ’leri dengelemek, dönüş oranını artırır.

CV’de eğitim ve teknik becerilerden sonra üç proje seçin; her birinde rolünüz, kullandığınız araç ve ölçülebilir sonuç (süre kısaltma, kullanıcı sayısı vb.) yazın. Kulüp liderliği ve gönüllülük “yumuşak beceri” kanıtıdır; tek satırla değil kısa bağlamla anlatın.

Ön yazıda şirketi ve ilanı kişiselleştirin; “Sayın yetkili” yerine mümkünse ilgili kişinin adı veya “İnsan kaynakları ekibi” kullanın. Neden bu takıma katılmak istediğinizi iki paragrafta, abartısız bağlayın.

Portföy için GitHub’da okunabilir README, Behance’de süreç ekran görüntüleri veya basit bir kişisel site yeterli olabilir. Linklerin çalıştığını ve herkese açık olduğunu göndermeden test edin.

Referans olarak akademisyen veya kulüp danışmanından izin alın; referansın telefonunu başvuruya yazmadan önce paylaşmayın. Mülakat öncesi şirketin son haberlerine ve ürününe bakın; soracağınız iki akıllı soru hazırlayın.

Red cevabı almak normaldir; kısa teşekkür maili profesyonel ağı genişletir. Aktif Kampüs networking etkinlikleri ve kariyer oturumları görünürlük için ek kanallar sunar; takvimden uygun buluşmaları seçebilirsiniz.

Özet: hedef listesi, tek sayfa CV, kişiselleştirilmiş ön yazı, çalışan portföy linki, prova. Kampüs kariyer merkezi ve mentorluk programlarından geri bildirim almak başvuru kalitenizi ölçülebilir şekilde yükseltir.`,
  },
  {
    slug: "online-toplanti-moderasyon-rehberi",
    kind: "rehber",
    title: "Kulüp ve temsilcilik için online toplantı moderasyonu rehberi",
    category: "Kulüp",
    date: "22 Mart 2026",
    excerpt:
      "Zoom veya Google Meet ile üniversite toplantısı: gündem, kayıt izni, chat yönetimi, oylama ve toplantı özeti. Katılım ve verimliliği artıran pratik kurallar.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 1,
        src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=85",
        alt: "Video konferans ekranı ve kulaklık",
        caption: "Yedek moderatör ve ekran kaydı izni önceden yazılı olsun.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
        alt: "Uzaktan çalışan ekip toplantısı",
        caption: "Chat’te tek konuşma kuralı ve el kaldırma özelliği karmaşayı azaltır.",
      },
    ],
    body: `Online kulüp veya temsilci toplantıları; coğrafi dağılımı avantaja çevirir ancak dikkat dağınıklığı riski taşır. Bu rehber, 60–90 dakikalık verimli oturumlar için moderasyon iskeleti sunar.

Önceden gündemi ve süreleri (dakika bazında) paylaşın. Açılışta kayıt veya ekran paylaşımı yapılacaksa KVKK ve katılımcı onayı hatırlatın; kayıt linki yalnızca yetkili kişilerle sınırlı olmalıdır.

Teknik kontrol: internet yedeklemesi (mobil hotspot), sessize alma kuralı, sunum dosyasının çevrimdışı kopyası. İki kişi moderasyon yaparsa biri chat ve Q&A, diğeri zaman ve konuşmacı geçişlerini yönetir.

Konuşma süresi eşitliği için “el kaldır” veya sıra listesi kullanın. Uzun monologları nazikçe kesmek için zaman uyarısı (örneğin son iki dakika) göstermek işe yarar.

Oylama gerekiyorsa platform anket özelliği veya önceden hazırlanmış Google Form tek seferlik linki kullanın. Sonuçları ekranda okuyup tartışmaya bağlayın; belirsiz oylamalarda erteleme kararı alın.

Toplantı sonunda üç maddelik özet ve aksiyon sahibi + tarih atayın. Özet notu 24 saat içinde e-posta veya kulüp drive’ına koymak hesap verebilirliği artırır.

Erişilebilirlik: altyazı açma, sunumlarda yeterli kontrast ve büyük punto. Katılımcıların isimlerini okumak ve kamera zorunluluğunu önceden duyurmak psikolojik güvenliği destekler.

Aktif Kampüs online etkinlik ve temsilci zirveleri benzer akışlar kullanır; kendi toplantınızda uyarlayabilirsiniz. Üniversite bilgi işlem kurallarına aykırı yazılım kullanmayın.

Özet: gündem + süre, teknik prova, çift moderasyon, net aksiyonlar. Düzenli ritim kuran kulüpler üye bağlılığını ve dış paydaş güvenini güçlendirir.`,
  },
  {
    slug: "yurtdisinda-konut-arama-checklist",
    kind: "rehber",
    title: "Yurtdışında öğrenci konutu: sözleşme, depozito ve dolandırıcılıktan korunma",
    category: "Yurtdışı",
    date: "8 Nisan 2026",
    excerpt:
      "Öğrenci yurdu, paylaşımlı daire veya ev sahibi ile kiralama: depozito kanıtı, fatura hesabı, kayıt defteri ve güvenli ödeme. 2026 için pratik kontrol listesi.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=85",
        alt: "Modern öğrenci dairesi oturma alanı",
        caption: "Fotoğrafların gerçek mekâna ait olduğunu mümkünse canlı görüntülü tur ile doğrulayın.",
      },
      {
        afterParagraph: 5,
        src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85",
        alt: "Anahtar teslimi ve kira sözleşmesi",
        caption: "Yazılı sözleşme ve ödeme dekontları vize ve ikamet dosyasında da istenebilir.",
      },
    ],
    body: `Yurtdışında barınma bulmak; bütçe, güvenlik ve vize belgeleriyle doğrudan bağlantılıdır. Bu metin hukuki tavsiye değildir; ülkenizin tüketici ve kira hukuku kaynaklarına mutlaka başvurun.

Erken başlamak en güçlü stratejidir. Üniversitenin resmi yurt veya partner platformları genelde daha şeffaf fiyatlandırma sunar; bekleme listesi varsa yedek şehir veya kısa süreli konaklama planı yapın.

Paylaşımlı daire ilanlarında “çok ucuz ve acil” uyarısı risk işaretidir. Ev sahibi kimliğini, adresi ve mülkiyeti doğrulamadan depozito göndermeyin; mümkünse yerel öğrenci topluluğundan referans isteyin.

Sözleşmede kira tutarı, depozito, fatura (utilities) paylaşımı, fesih bildirim süresi ve mobilya durumu satır satır yazılmalıdır. Sözlü vaatleri yazılı hale getirmek için takip e-postası atın.

Ödeme yönteminde banka havalesi ve resmi makbuz tercih edin; anonim kripto veya kişisel Western Union talepleri genelde güvensizdir. Vize başvurusunda konaklama kanıtı olarak hangi belgenin kabul edildiğini konsolosluk sitesinden kontrol edin.

Güvenlik: kapı güvenliği, mahalle gece ulaşımı ve yangın çıkışı gibi pratik konuları yerinde veya güvenilir kaynakla araştırın. Ev arkadaşı seçiminde uyku düzeni ve misafir kurallarını önceden konuşmak sonradan çatışmayı azaltır.

Öğrenci birlikleri ve Aktif Kampüs duyuruları bazen ortak konaklama veya bilgilendirme oturumları paylaşır; yine de sözleşmeyi kendi adınıza okuyun.

Özet: resmi kanallar öncelik, yazılı sözleşme, şüpheli ilandan kaçınma, dekont saklama. Stresi azaltmak için varıştan önce en az iki haftalık geçici konaklama yedeği düşünün.`,
  },
];

const duyuruPosts: PostItem[] = [
  {
    slug: "bahar-donemi-basvurulari",
    kind: "duyuru",
    title: "Bahar dönemi kampüs temsilciliği başvuruları açıldı",
    category: "Duyuru",
    date: "1 Nisan 2026",
    excerpt:
      "Son başvuru 30 Nisan 2026; değerlendirme, kısa liste ve mülakat takvimi. Hangi üniversitelerin öncelikli olduğu ve beklenen zaman bağlılığı bu duyuruda özetlenir.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 1,
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
        alt: "Öğrenciler birlikte çalışıyor",
        caption: "Kulüp ve temsilci işleri ekip çalışmasına dayanır; başvuruda ekip deneyiminizi vurgulayın.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
        alt: "Takvim ve planlama notları",
        caption: "Mülakat ve eğitim oturumları için takvim çakışmalarınızı önceden not edin.",
      },
    ],
    body: `Aktif Kampüs, bahar dönemi için kampüs temsilcisi adaylarını değerlendirmeye başlamıştır. Başvurular 1 Nisan–30 Nisan 2026 tarihleri arasında genel başvuru formu üzerinden alınır; eksik iletişim bilgisi olan dosyalar işleme alınmayabilir.

Temsilcilik; kendi üniversitenizde etkinlik duyurusu, kulüplerle köprü ve öğrenci geri bildirimini merkeze taşıyan gönüllü veya yarı zamanlı bir rol olarak tanımlanır. Haftalık ortalama zaman bağlılığı başvuru formunda sorulur; gerçekçi cevap vermeniz sürdürülebilirlik açısından önemlidir.

Değerlendirme süreci üç aşamalıdır: form ön eleme, kısa yazılı görev veya mini proje, çevrim içi mülakat. Kısa liste 5 iş günü içinde e-posta ile duyurulur; spam klasörünü kontrol etmeyi unutmayın.

Öncelik verilen üniversiteler ve bölgeler dönemsel ihtiyaca göre güncellenir; formda “ikinci tercih kampüs” alanını doldurmanız önerilir. Önceki dönem temsilcileri yeniden başvuruda öncelikli değerlendirilebilir; performans notları gizlilik kuralları çerçevesinde tutulur.

Eğitim oturumları Nisan sonu veya Mayıs başında planlanmaktadır; katılım zorunludur. Takvim çakışması olan adaylar alternatif oturum talep edebilir; kontenjan sınırlıdır.

Başvuru sonrası süreç hakkında sorularınızı iletişim sayfamızdan “temsilcilik” başlığıyla iletebilirsiniz. Telefonla acil bilgi için çalışma saatleri içinde yanıt hedeflenir.

Özet: son tarih 30 Nisan, form eksiksiz, mülakat için sessiz ortam ve stabil internet hazırlayın. Kampüsünüzde Aktif Kampüs’ü büyütmek isteyen öğrenci liderlerini bekliyoruz.`,
  },
  {
    slug: "yeni-is-birligi-eduvista",
    kind: "duyuru",
    title: "Yeni iş birliği: EduVista ile yurtdışı eğitim bilgilendirme oturumları",
    category: "İş birliği",
    date: "25 Mart 2026",
    excerpt:
      "Almanya, Hollanda ve İtalya başlıklarında öğrencilere özel online bilgilendirme; kayıt, KVKK kapsamı ve kampüs duyuru kanalları.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85",
        alt: "Dünya haritası ve eğitim kavramı",
        caption: "Ülke seçiminde resmi üniversite siteleri birincil kaynak olmalıdır.",
      },
      {
        afterParagraph: 5,
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        alt: "Toplantı ve networking ortamı",
        caption: "Partner oturumları kayıtlı katılımcılara özel bağlantı ile yapılır.",
      },
    ],
    body: `Aktif Kampüs, yurtdışında lisans ve yüksek lisans yolculuğunda öğrencilere şeffaf bilgi sunmayı hedefleyen EduVista ile iş birliği duyurur. Ortak çalışma; ücretli danışmanlık satışı yerine bilgilendirme oturumları ve kaynak yönlendirmesi etrafında şekillenir.

İlk oturumlar Almanya, Hollanda ve İtalya program yapılarına odaklanacaktır: başvuru zaman çizelgesi, dil gereksinimleri ve yaşam maliyeti kabaca çerçevelenecektir. Oturumlar kayıtlı katılımcılara özel bağlantı ile yapılır; kayıt formları KVKK metinleriyle birlikte paylaşılır.

EduVista uzmanları, resmi üniversite ve kurum sitelerine yönlendirme yapar; nihai başvuru kararı öğrenciye aittir. Aktif Kampüs, partner içeriklerini editoryal olarak etiketler; reklam ile editoryal içerik ayrımına dikkat edilir.

Kampüs temsilcileri, kendi üniversitelerinde bu duyuruyu kulüp kanalları ve duvar panolarıyla paylaşabilir. Görseller ve kısa metinler için iletişimden “EduVista iş birliği” başlığıyla marka kullanım kılavuzu talep edilebilir.

Takvim Nisan ayı içinde açıklanacaktır; etkinlikler sayfasına eklenen her oturum için ayrı slug ve kayıt linki kullanılacaktır. Oturumlar genelde 60 dakika + soru–cevap formatındadır.

Öğrenci birlikleri toplu katılım planlıyorsa en az on iş günü önceden haber verilmesi teknik hazırlık için önemlidir. Canlı yayın kaydı yalnızca tüm katılımcıların onayı ve yasal çerçeve sağlandığında paylaşılır.

İş birliği kapsamı dönemsel olarak gözden geçirilecek; geri bildirimlerinizi iletişim formundan iletebilirsiniz.

Özet: EduVista ile ülke bazlı bilgilendirme oturumları yakında takvimde; kayıtları kaçırmamak için etkinlikler ve duyurular sayfalarını takip edin.`,
  },
  {
    slug: "online-kariyer-fuari-mayis-2026",
    kind: "duyuru",
    title: "Online kariyer fuarı: Mayıs 2026 kayıtları açılıyor",
    category: "Etkinlik",
    date: "12 Nisan 2026",
    excerpt:
      "Üniversite öğrencileri ve yeni mezunlar için sanal stantlar, CV hızlı geri bildirimi ve sektör buluşmaları. Kayıt kontenjanı ve katılım kuralları.",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 1,
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
        alt: "Kariyer ve iş fuarı ortamı",
        caption: "Sanal stantlar için önceden firma listesini inceleyin.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
        alt: "Online iş görüşmesi",
        caption: "Kamera açık oturumlarda profesyonel arka plan ve ışık kullanın.",
      },
    ],
    body: `Aktif Kampüs Online Kariyer Fuarı, Mayıs 2026 içinde çok oturumlu bir program olarak planlanmaktadır. Katılım ücretsizdir; kayıt kontenjanı oturum başına sınırlı olabilir.

Fuarda sanal stantlar, kısa firma tanıtımları ve bireysel “hızlı görüşme” slotları hedeflenmektedir. Öğrenciler etkinlik öncesi yüklenen firma listesinden öncelik belirleyerek zamanını verimli kullanabilir.

CV hızlı geri bildirim köşesi için PDF formatında tek sayfa özgeçmiş yüklemeniz istenecektir. Kişisel veriler yalnızca oturum süresi boyunca değerlendirme amacıyla işlenir; detaylar KVKK metninde yer alır.

Teknik gereksinimler: güncel tarayıcı, stabil internet ve mümkünse kulaklık. Oturum kaydı yalnızca duyurulan şartlar altında paylaşılabilir; katılımcılara önceden bildirilir.

Temsilciler, kendi kampüslerinde duvar afişi ve kulüp mail listeleriyle kayıt bağlantısını yayabilir. Yoğun ilgi halinde ek tarih açılabilir.

Net tarih, saat ve platform bilgisi etkinlikler sayfasında yayımlandığında bu duyuru güncellenecektir.

Özet: Mayıs içinde online kariyer fuarı; ücretsiz kayıt, sınırlı kontenjan, CV için hazırlıklı olun. Sorularınız için genel başvuru formunu kullanabilirsiniz.`,
  },
  {
    slug: "dil-programlari-yaz-erken-kayit",
    kind: "duyuru",
    title: "Dil programları: yaz dönemi erken kayıt duyurusu",
    category: "Program",
    date: "3 Nisan 2026",
    excerpt:
      "Konuşma kulübü, yoğunlaştırılmış modüller ve online seçenekler. Erken kayıtta kontenjan ve grup oluşturma önceliği.",
    image:
      "https://images.unsplash.com/photo-1543109740-4bdb38fda756?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
        alt: "Dil öğrenimi ve notlar",
        caption: "Seviye yerleştirme testi çoğu programda kayıt öncesinde yapılır.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
        alt: "Online eğitim ve dizüstü bilgisayar",
        caption: "Online modüller canlı + kayıt kombinasyonu ile sunulabilir.",
      },
    ],
    body: `Yaz dönemi dil ve iletişim programları için erken kayıt süreci başlamıştır. Kampüs ortaklıkları ve online modüller bir arada duyurulacaktır; kesin katalog /programlar sayfasında listelenecektir.

Erken kayıt döneminde kontenjan ayrımı ve grup oluşturma önceliği tanınır. Seviye yerleştirme anketi veya kısa sınav, uyumsuz sınıf riskini azaltmak için kullanılabilir.

Programlar arasında konuşma kulübü, iş İngilizcisi giriş modülü ve sunum becerileri atölyesi gibi başlıklar yer alabilir. Her başlık için süre, haftalık saat ve sertifika durumu ayrı sayfada netleştirilecektir.

Ücret ve taksit bilgisi partner kurumlara göre değişir; ödeme öncesi iptal koşullarını yazılı okumanız önerilir. Aktif Kampüs yalnızca bilgilendirme ve yönlendirme rolündedir; sözleşme öğrenci ile eğitim sağlayıcı arasındadır.

Burs veya kulüp indirimi duyuruları varsa ayrı duyuru metni ile yayımlanır; bu sayfayı düzenli kontrol edin.

Özet: yaz dil programları için erken kayıt açık; detaylar /programlar ve yakında güncellenecek etkinlik duyurularında. Sorular için iletişim kanalını kullanın.`,
  },
  {
    slug: "kulup-liderleri-bulusmasi-haziran-2026",
    kind: "duyuru",
    title: "Kulüp liderleri buluşması: Haziran 2026 ön kayıt",
    category: "Etkinlik",
    date: "20 Nisan 2026",
    excerpt:
      "İstanbul veya çevrim içi hibrit format; kulüp başkanları için networking, sponsorluk paylaşımı ve Aktif Kampüs iş birliği hatları.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 1,
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
        alt: "İş birliği ve el sıkışma",
        caption: "Kulüpler arası iş birliği fikirleri oturumda paylaşılacaktır.",
      },
      {
        afterParagraph: 3,
        src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
        alt: "Konferans salonunda dinleyiciler",
        caption: "Hibrit formatta online katılımcılar için ayrı soru sırası ayrılır.",
      },
    ],
    body: `Üniversite kulüp başkanları ve etkinlik sorumluları için düzenlenecek Kulüp Liderleri Buluşması’nın Haziran 2026 ön kayıtları açılmıştır. Format; İstanbul’da yüz yüze veya çevrim içi hibrit olacak şekilde netleştirilecektir; kesin mekân ve saat duyurusu Mayıs içinde yapılacaktır.

Buluşmada kulüpler arası iş birliği örnekleri, sponsorluk deneyim paylaşımı ve Aktif Kampüs kampanya takvimi sunulması hedeflenir. Oturumlar Chatham House kuralına yakın samimi tartışma formatında planlanabilir.

Ön kayıt için genel başvuru formunda “Kulüp liderleri buluşması” notu bırakın; kulüp adı ve üye sayısı bilgisini eklemek değerlendirmeye yardımcı olur.

Kontenjan sınırlıdır; öncelik farklı şehirlerden çeşitlilik sağlamak ve daha önce platform etkinliğine katılmamış kulüplere verilebilir.

Ulaşım desteği veya konaklama gibi maddeler sponsorluk durumuna bağlıdır; duyuru metni güncellendiğinde bu sayfada belirtilecektir.

Özet: Haziran buluşması için ön kayıt açık; format ve adres Mayıs duyurusunda. Kulüp ekosistemini güçlendirmek isteyen liderleri bekliyoruz.`,
  },
  {
    slug: "kvkk-guncelleme-iletisim-tercihleri",
    kind: "duyuru",
    title: "KVKK aydınlatma metni ve iletişim tercihleri güncellendi",
    category: "Yasal",
    date: "28 Nisan 2026",
    excerpt:
      "Kişisel verilerin işlenmesi, çerez politikası ve ticari elektronik ileti izinleri. Öğrenci başvurularında hangi alanların zorunlu olduğu özeti.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    bodyFigures: [
      {
        afterParagraph: 2,
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85",
        alt: "Güvenlik ve veri koruması kavramı",
        caption: "Şifreli bağlantı ve güçlü parola hesap güvenliğinin temelidir.",
      },
      {
        afterParagraph: 4,
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
        alt: "Uyumluluk ve dokümantasyon",
        caption: "Güncellenen metinlere formların altındaki linklerden ulaşabilirsiniz.",
      },
    ],
    body: `6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında yürütülen süreçlerde şeffaflığı artırmak için aydınlatma metnimiz ve iletişim tercihleri bölümümüz güncellenmiştir. Değişiklikler; hangi verilerin hangi amaçla işlendiğini ve saklama sürelerini daha anlaşılır tablolarla özetler.

Başvuru formlarında zorunlu alanlar yalnızca sürecin yürütülmesi için gereken minimum bilgileri kapsar. Pazarlama ve bülten izinleri ayrı onay kutularıdır; işaretlenmezse yalnızca talebinize dönüş mesajı gönderilir.

Çerez ve analitik kullanımı hakkında bilgi web sitemizin alt bilgisindeki çerez politikası bağlantısında yer alır. Üçüncü taraf gömülü içerik (örneğin harita veya video) varsa veri aktarımı politikada ayrıca belirtilir.

Veri sorumlusuna başvuru hakkınız saklıdır; iletişim kanallarımızdan “KVKK talebi” başlığıyla yönlendirme alabilirsiniz. Kimlik teyidi için ek belge istenebilir.

Güncelleme yürürlük tarihi bu duyurunun tarihidir; önceki başvurularınız mevcut hukuki çerçevede işlenmeye devam eder; yeni izinler yalnızca yeni formlar için geçerlidir.

Özet: metinleri okuyun, iletişim izinlerini bilinçli seçin; sorularınız için kurumsal iletişim sayfamızı kullanın.`,
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
