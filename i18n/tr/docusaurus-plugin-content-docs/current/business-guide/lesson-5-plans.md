---
title: 'Ders 5: Planlarınızı Tasarlama'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Ders 5: Planlarınızı Tasarlama

Plan katmanlarınız sadece fiyat seviyeleri değil; niş müşterilerinizin gerçekte nasıl çalıştığının bir yansımasıdır. Bu derste, farklı aşamalardaki fitness işletmelerinin gerçek ihtiyaçlarına uygun ürün katmanları tasarlayacaksınız.

## Nerede Kalmıştık {#where-we-left-off}

FitSite'ın üç hazır şablonu var (Studio Essential, Gym Pro, Fitness Chain). Şimdi, müşterilerin neye erişebileceğini ve ne ödeyeceğini belirleyen planları oluşturacağız.

## Müşteri Segmentleri Üzerine Düşünmek {#thinking-in-customer-segments}

Çoğu insanın yaptığı hata, planları teknik özellikler (depolama, bant genişliği, sayfa sayısı) etrafında tasarlamaktır. Niş müşterileriniz bu terimlerle düşünmez. Bir spor salonu sahibi, işini yürütebilmek için neye ihtiyacı olduğunu düşünür.

Fitness stüdyoları için üç doğal segment bulunmaktadır:

| Segment | Kimler | Neye İhtiyaç Duyarlar |
|---------|-------------|----------------|
| **Solo eğitmenler / küçük stüdyolar** | 1-3 personel, tek lokasyon, yeni başlıyor | Profesyonel bir site, ders bilgileri, iletişim formu |
| **Kurulmuş spor salonları** | 5-20 personel, tek lokasyon, büyüyor | Yukarıdakilerin tümü artı rezervasyon, blog, galeri, özel alan adı |
| **Fitness zincirleri** | Birden çok lokasyon, köklü marka | Yukarıdakilerin tümü artı çoklu site, lokasyon sayfaları, personel dizini |

Planlarınız, keyfi özellik paketlerine değil, bu segmentlere göre eşleşmelidir.

## FitSite Planlarını Oluşturma {#creating-the-fitsite-plans}

Her plan için **Ultimate Multisite > Products > Add Product** yolunu izleyin.

### Plan 1: FitSite Starter -- Aylık 49 $ {#plan-1-fitsite-starter----49month}

**Hedef**: Solo eğitmenler ve küçük stüdyolar

**Description tab (Açıklama sekmesi)**:
- Name: FitSite Starter
- Description: "Bir kişisel eğitmen veya küçük stüdyonun çevrimiçi profesyonel görünmesi için ihtiyacı olan her şey."

**General tab (Genel sekme)**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab (Site Şablonları sekmesi)**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations (Sınırlamalar)**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab (Eklentiler sekmesi)**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab (Temalar sekmesi)**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- Aylık 99 $ {#plan-2-fitsite-growth----99month}

**Hedef**: Kurulmuş tek lokasyonlu spor salonları

**Description tab (Açıklama sekmesi)**:
- Name: FitSite Growth
- Description: "Çevrimiçi varlıklarını büyütmeye ve yeni üyeler çekmeye hazır kurulmuş spor salonları için."

**Site Templates tab (Site Şablonları sekmesi)**:
- Available templates: Studio Essential and Gym Pro

**Limitations (Sınırlamalar)**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab (Eklentiler sekmesi)**:
- Starter'daki her şey artı:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab (Yükseltme ve Düşürme sekmesi)**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- Aylık 199 $ {#plan-3-fitsite-pro----199month}

**Hedef**: Çok lokasyonlu fitness zincirleri

**Description tab (Açıklama sekmesi)**:
- Name: FitSite Pro
- Description: "Birden çok lokasyona sahip fitness markaları için eksiksiz platform."

**Site Templates tab (Site Şablonları sekmesi)**:
- Available templates: All three templates

**Limitations (Sınırlamalar)**:
- Sites: 5 (one per location)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab (Eklentiler sekmesi)**:
- Growth'daki her şey artı:
- All premium plugins: Force Activate

**Up & Downgrades tab (Yükseltme ve Düşürme sekmesi)**:
- Plan group: FitSite Plans
- Product order: 3

## Plan Grubunu Kurma {#setting-up-the-plan-group}

Plan grubu, müşterilerin yalnızca FitSite plan ailesi içinde yükseltme veya düşürme yapmasını sağlar. Her planın **Up & Downgrades** sekmesinde:

1. **Plan Group**'u üç plan için de "FitSite Plans" olarak ayarlayın
2. **Product Order**'ı sırasıyla 1 (Starter), 2 (Growth), 3 (Pro) olarak ayarlayın

Bu, net bir yükseltme yolu oluşturur: Starter → Growth → Pro.

## Sipariş Artırıcılar Ekleme {#adding-order-bumps}

Order bumps, ödeme sırasında sunulan ek ürünlerdir. FitSite için şunları düşünebilirsiniz:

- **Extra Storage Pack** (Aylık 19 $) -- ek 5 GB disk alanı
- **Priority Support** (Aylık 29 $) -- daha hızlı yanıt süreleri
- **Additional Site** (Aylık 39 $) -- planlarının izin verdiğinden daha fazla siteye ihtiyacı olan müşteriler için

Bunları Ultimate Multisite'ta **Package** tipi ürünler olarak oluşturun ve ilgili planlarla ilişkilendirin.

## Bu Yapı Neden Çalışıyor {#why-this-structure-works}

- **Starter**, giriş engellerini kaldırır -- düşük fiyat, basit teklif, eğitmenleri hızlıca çevrimiçi yapar
- **Growth**, spor salonlarının gerçekten talep ettiği özellikleri ekler -- rezervasyon, galeriler, özel alan adları
- **Pro**, çok lokasyon desteğine ihtiyaç duyan yüksek değerli segmenti karşılar
- **Order bumps**, müşterilerin temel planları karmaşıklaştırmadan özelleştirmesine olanak tanır
- **Net yükseltme yolu**, müşterilerin ayrılmak yerine sizinle birlikte büyümesini sağlar

## Şu Ana Kadar FitSite Ağı {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Bu Derste Neler Yaptık {#what-we-built-this-lesson}

- Gerçek fitness işletmesi segmentlerine eşlenmiş **üç plan katmanı**
- Ultimate Multisite'ın eklenti ve şablon kontrolleri kullanılarak **özellik kısıtlaması**
- Net bir yükseltme yolu içeren bir **plan grubu**
- Ek gelir için **sipariş artırıcı ürünler**
- Teknik özelliklere değil, müşteri değerine dayalı bir **fiyatlandırma yapısı**

---

**Sonraki:** [Ders 6: Kayıt Deneyimi](lesson-6-checkout) -- fitness stüdyosu sahiplerini ödeme yapan müşterilere dönüştürecek bir ödeme akışı oluşturuyoruz.
