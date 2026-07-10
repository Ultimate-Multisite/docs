---
title: 'Lesson 5: Plans-ing Your Designs'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Ders 5: Planlarınızı Tasarlamak {#lesson-5-designing-your-plans}

Plan katmanlarınız sadece fiyat seviyeleri değil; niş müşterilerinizin gerçekte nasıl çalıştığının bir yansımasıdır. Bu derste, farklı aşamalardaki fitness işletmelerinin gerçek ihtiyaçlarına uygun ürün katmanları tasarlayacaksınız.

## Nereden Başlamıştık {#where-we-left-off}

FitSite'ın üç hazır şablonu var (Studio Essential, Gym Pro, Fitness Chain). Şimdi, müşterilerin neye erişebileceğini ve ne ödeyeceğini belirleyen planları oluşturacağız.

## Müşteri Segmentleri Üzerine Düşünmek {#thinking-in-customer-segments}

Çoğu kişinin yaptığı hata, planları teknik özellikler (depolama, bant genişliği, sayfa sayısı) etrafında tasarlamaktır. Niş müşterileriniz bu terimlerle düşünmez. Bir spor salonu sahibi, işini yürütebilmek için neye ihtiyacı olduğunu düşünür.

Fitness stüdyoları için üç doğal segment var:

| Segment | Kimler | Neye İhtiyaç Duyuyorlar |
|---------|-------------|----------------|
| **Solo eğitmenler / küçük stüdyolar** | 1-3 personel, tek lokasyon, yeni başlıyorlar | Profesyonel bir site, ders bilgileri, iletişim formu |
| **Kurulmuş spor salonları** | 5-20 personel, tek lokasyon, büyüyorlar | Yukarıdakilerin hepsi artı rezervasyon, blog, galeri, özel alan adı |
| **Fitness zincirleri** | Birden çok lokasyon, köklü marka | Yukarıdakilerin hepsi artı multi-site, lokasyon sayfaları, personel dizini |

Planlarınız, keyfi özellik paketlerine değil, bu segmentlere göre haritalanmalıdır.

## FitSite Planlarını Oluşturma {#creating-the-fitsite-plans}

Her plan için **Ultimate Multisite > Products > Add Product** yolunu izleyin.

### Plan 1: FitSite Starter -- Aylık $49 {#plan-1-fitsite-starter----49month}

**Hedef**: Solo eğitmenler ve küçük stüdyolar

**Description tab**:
- Name: FitSite Starter
- Description: "Bir kişisel eğitmen veya küçük stüdyonun çevrimiçi profesyonel görünmesi için ihtiyacı olan her şey."

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- Aylık $99 {#plan-2-fitsite-growth----99month}

**Hedef**: Kurulmuş tek lokasyonlu spor salonları

**Description tab**:
- Name: FitSite Growth
- Description: "Çevrimiçi varlıklarını büyütmeye ve yeni üyeler çekmeye hazır kurulmuş spor salonları için."

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Starter'daki her şey artı:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- Aylık $199 {#plan-3-fitsite-pro----199month}

**Hedef**: Çok lokasyonlu fitness zincirleri

**Description tab**:
- Name: FitSite Pro
- Description: "Birden çok lokasyona sahip fitness markaları için eksiksiz platform."

**Site Templates tab**:
- Available templates: Tüm üç şablon

**Limitations**:
- Sites: 5 (lokasyon başına bir)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Growth'daki her şey artı:
- Tüm premium plugin'ler: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Plan Grubunu Kurma {#setting-up-the-plan-group}

Plan grubu, müşterilerin yalnızca FitSite plan ailesi içinde yükseltme veya düşürme yapmasını sağlar. Her planın **Up & Downgrades** sekmesinde:

1. **Plan Group**'u üç plan için de "FitSite Plans" olarak ayarlayın
2. **Product Order**'ı sırasıyla 1 (Starter), 2 (Growth), 3 (Pro) olarak ayarlayın

Bu, net bir yükseltme yolu oluşturur: Starter → Growth → Pro.

## Order Bump Ekleme {#adding-order-bumps}

Order bump'lar, ödeme sırasında sunulan ek ürünlerdir. FitSite için şunları düşünebilirsiniz:

- **Ek Depolama Paketi** (Aylık $19) -- ek 5 GB disk alanı
- **Öncelikli Destek** (Aylık $29) -- daha hızlı yanıt süreleri
- **Ek Site** (Aylık $39) -- planlarının izin verdiğinden daha fazla siteye ihtiyacı olan müşteriler için

Bunları Ultimate Multisite'ta **Package** tipi ürünler olarak oluşturun ve ilgili planlarla ilişkilendirin.

## Bu Yapı Neden İşe Yarıyor {#why-this-structure-works}

- **Starter**, giriş engellerini kaldırır -- düşük fiyat, basit teklif, eğitmenleri hızla çevrimiçi yapar
- **Growth**, spor salonlarının gerçekten sorduğu özellikleri ekler -- rezervasyon, galeriler, özel alan adları
- **Pro**, çok lokasyon desteğine ihtiyaç duyan yüksek değerli segmenti karşılar
- **Order bump'lar**, müşterilerin temel planları karmaşıklaştırmadan özelleştirmesine izin verir
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

- Gerçek fitness iş segmentlerine eşlenmiş **üç plan katmanı**
- Ultimate Multisite'ın plugin ve şablon kontrolleri kullanılarak **özellik kısıtlaması**
- Net bir yükseltme yolu içeren **bir plan grubu**
- Ek gelir için **order bump ürünleri**
- Teknik özelliklere değil, müşteri değerine dayalı bir **fiyatlandırma yapısı**

---

**Sonraki:** [Ders 6: Kayıt Deneyimi](lesson-6-checkout) -- fitness stüdyosu sahiplerini ödeme yapan müşterilere dönüştürecek bir checkout akışı oluşturuyoruz.
