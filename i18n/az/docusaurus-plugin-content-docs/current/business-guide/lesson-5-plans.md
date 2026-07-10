---
title: 'Dərs 5: Planlarınızı Dizayn Etmək'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Dərs 5: Planlarınızı Qurmaq {#lesson-5-designing-your-plans}

Plan səviyyələriniz sadəcə qiymətləndirmə səviyyələri deyil — onlar niş müştərilərinizin həqiqətən necə fəaliyyət göstərdiyinin əksidir. Bu dərslikdə, müxtəlif mərhələlərdəki fitness bizneslərinin real ehtiyaclarına uyğun məhsul səviyyələri quracaqsınız.

## Harada Qalmışdıq {#where-we-left-off}

FitSite-da üç hazır şablon var (Studio Essential, Gym Pro, Fitness Chain). İndi isə müştərilərin nəyə çıxış əldə etdiyini və nə ödədiyini müəyyən edən planları yaradırıq.

## Müştəri Segmentləri Üzrə Düşünmək {#thinking-in-customer-segments}

Əksər insanların etdiyi səhv, planları texniki xüsusiyyətlər ətrafında (yaddaş, bant genişliyi, səhifə sayı) qurmaqdır. Niş müştəriləriniz bu şəkildə düşünmürlər. Bir gimnastika salonu sahibi öz biznesini idarə etmək üçün nəyə ehtiyacı olduğuna baxır.

Fitness studiyaları üçün üç təbii segment mövcuddur:

| Segment | Kimlərdir | Nəyə Ehtiyacları Var |
|---------|-------------|----------------|
| **Solo trainerlər / kiçik studiyalar** | 1-3 işçi, tək yerləşmə, yeni başlayır | Peşəkar bir sayt, sinif məlumatları, əlaqə forması |
| **Təsis olunmuş gimnastika salonları** | 5-20 işçi, tək yerləşmə, böyüyür | Yuxarıdakı hər şey, əlavə olaraq kitabça, blog, qalereya, özəl domen |
| **Fitness zəncirləri** | Bir neçə yerləşmə, təsdiqlənmiş brend | Yuxarıdakı hər şey, əlavə olaraq multi-site, yerləşmə səhifələri, işçi kataloqu |

Planlarınız rastgicə xüsusiyyət paketlərinə deyil, bu segmentlərə uyğun gəlməlidir.

## FitSite Planlarını Yaratmaq {#creating-the-fitsite-plans}

Hər bir plan üçün **Ultimate Multisite > Products > Add Product** yolunu izləyin.

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**Hədəf**: Solo trainerlər və kiçik studiyalar

**Description tab**:
- Name: FitSite Starter
- Description: "Bir şəxsi trainer və ya kiçik studiyanın onlayn olaraq peşəkar görünməsi üçün lazım olan hər şey."

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

### Plan 2: FitSite Growth -- $99/month {#plan-2-fitsite-growth----99month}

**Hədəf**: Təsis olunmuş tək yerləşməli gimnastika salonları

**Description tab**:
- Name: FitSite Growth
- Description: "Onlayn mövcudluğunu böyütməyə və yeni üzvlər cəlb etməyə hazırlaşan təsis olunmuş gimnastika salonları üçün."

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Starter-dakı hər şey, əlavə olaraq:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month {#plan-3-fitsite-pro----199month}

**Hədəf**: Bir neçə yerləşməli fitness zəncirləri

**Description tab**:
- Name: FitSite Pro
- Description: "Bir neçə yerləşməsi olan fitness brendləri üçün tam platforma."

**Site Templates tab**:
- Available templates: All three templates

**Limitations**:
- Sites: 5 (one per location)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Growth-dakı hər şey, əlavə olaraq:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Plan Qrupunu Qurmaq {#setting-up-the-plan-group}

Plan qrupu müştərilərin FitSite plan ailəsi daxilində yalnız yüksəltmə və ya aşağı salma edə bilməsini təmin edir. Hər bir planın **Up & Downgrades** tabında:

1. **Plan Group**-u üç plan üçün də "FitSite Plans" olaraq təyin edin
2. **Product Order**-u 1 (Starter), 2 (Growth), 3 (Pro) olaraq təyin edin

Bu, aydın bir yüksəltmə yolu yaradır: Starter → Growth → Pro.

## Sifariş Artırıcılar Əlavə Etmək {#adding-order-bumps}

Sifariş artırıcılar (Order bumps), checkout zamanı təklif edilən əlavə məhsullardır. FitSite üçün nəzərdən keçirə bilərsiniz:

- **Extra Storage Pack** ($19/month) -- əlavə 5 GB disk sahəsi
- **Priority Support** ($29/month) -- daha sürətli cavab müddətləri
- **Additional Site** ($39/month) -- planlarının icazə verdiyindən daha çox sayta ehtiyacı olan müştərilər üçün

Bunları Ultimate Multisite-da **Package** növ məhsulları kimi yaradın və müvafiq planlarla əlaqələndirin.

## Bu Struktur Niyə İşləyir {#why-this-structure-works}

- **Starter** giriş maneələrini aradan qaldırır -- aşağı qiymət, sadə təklif, trainerləri tez onlayn edir
- **Growth** gimnastika salonlarının həqiqətən istədiyi xüsusiyyətləri əlavə edir -- booking, qalereyalar, özəl domenlər
- **Pro** multi-yerləşmə dəstəyinə ehtiyacı olan yüksək dəyərli segmentə xidmət edir
- **Sifariş artırıcılar** müştərilərə əsas planları mürəkkəbləşdirmədən özəlləşdirməyə imkan verir
- **Aydın yüksəltmə yolu** o deməkdir ki, müştərilər getmək əvəzinə sizinlə böyüyürlər

## FitSite Network (İndiyə Qədər) {#the-fitsite-network-so-far}

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

## Bu Dərslikdə Nə Qurduq {#what-we-built-this-lesson}

- Real fitness biznes segmentlərinə uyğunlaşdırılmış **üç plan səviyyəsi**
- Ultimate Multisite-ın plugin və template kontrollerindən istifadə edərək **xüsusiyyət məhdudiyyəti**
- Aydın bir yüksəltmə yolu olan **plan qrupu**
- Əlavə gəlir üçün **sifariş artırıcı məhsullar**
- Müştəri dəyətinə əsaslanan, texniki spesifikasiyalara deyil, qurulmuş **qiymətləndirmə strukturu**

---

**Növbəti:** [Dərs 6: Qeydiyyat Təcrübəsi](lesson-6-checkout) -- fitness studio sahiblərini ödəniş edən müştərilərə çevirən bir checkout axını qururuq.
