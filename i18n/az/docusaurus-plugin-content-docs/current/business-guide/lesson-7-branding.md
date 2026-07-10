---
title: 'Dərslik 7: Özünə Uyğunlaşdırmaq'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Dərs 7: Özünüzün Etmək {#lesson-7-making-it-yours}

Müştərilərinizin heç vaxt "bir WordPress plugin-indən" istifadə etdiklərini hiss etməmələri lazımdır. Onlar FitSite istifadə etdiklərini, yəni öz sənayələri üçün hazırlanmış bir platformadan istifadə etdiklərini hiss etməlidirlər. Bu dərs markalaşdırma, white-labeling (markanı özün əlavə etmə) və platformanı bir məhsul kimi hiss etdirməyi əhatə edir.

## Harada Qaldıq {#where-we-left-off}

FitSite, fitness studiyası sahiblərini plan seçməsindən canlı sayta keçirən işləyən bir checkout axınına malikdir. İndi isə bütün təcrübəni bir-bütöv, markalanmış bir məhsul kimi hiss etdiririk.

## Platforma Domeniniz {#your-platform-domain}

Brendinizin təməli sizin domeninizdir. FitSite üçün:

- **Əsas domen**: `fitsite.com` (marketinq saytınız və şəbəkə kökü)
- **Müştəri saytları**: `studioname.fitsite.com` (alt-domenlər)
- **Özəl domenlər**: Growth və Pro planlarına sahib müştərilər öz domenlərini bağlaya bilərlər.

### Domeninizi Qurmaq {#setting-up-your-domain}

1. Platforma domeninizi qeydiyyatdan keçirin
2. Onu hosting provayuderinə yönləndirin
3. Müştəri alt-domenləri üçün wildcard DNS (`*.fitsite.com`) konfiqurasiya edin
4. Wildcard SSL-in aktiv olduğundan əmin olun

Ətraflı təlimatlar üçün [Domain Mapping-i Necə Konfiqurasiya Etmək](/user-guide/domain-mapping/how-to-configure-domain-mapping) hissəsinə baxın.

## Admin Təcrübəsini White-Label Etmək {#white-labeling-the-admin-experience}

Bir fitness studiyası sahibi öz saytının dashboard-una daxil olduqda, WordPress və ya Ultimate Multisite brendini deyil, sizin brendinizi görməlidir.

### Xüsusi Login Səhifəsi {#custom-login-page}

WordPress login səhifəsini aşağıdakıları göstərmək üçün fərdiləşdirin:

- FitSite loqonuz
- Fitness-ə uyğun fon şəkli
- Brend rəngləriniz

### Dashboard Brendi {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) addonundan və ya xüsusi CSS-dən istifadə edərək:

- WordPress loqosunu FitSite loqonuzla əvəz edin
- Admin rəng sxemini brendinizə uyğunlaşdırın
- Fitness-ə xas sürətli keçidlər və kömək resursları ilə xüsusi bir dashboard widget-ı əlavə edin

### Xüsusi Admin Səhifələri {#custom-admin-pages}

Fitness studiyası sahibləri üçün ən vacib əməliyyətləri önə çıxaran xüsusi admin səhifələri yaratmağı düşünün:

- "Sinif Cədvəlinizi Redaktə Edin"
- "Təlimatçı Profillərini Yeniləyin"
- "Saytınızı Görün"

Bu, standart WordPress menyusunda gizlətmək əvəzinə, nişə xas əməliyyətləri mərkəzləşdirdiyi üçün öyrənmə əyrisini azaldır.

## Kommunikasiyalarınızda Brendləşdirmə {#branding-your-communications}

Hər bir e-poçt, faktura və bildiriş sizin brendinizi gücləndirməlidir.

### Sistem E-poçtları {#system-emails}

**Ultimate Multisite > Settings > Emails** səhifəsinə keçin və bütün sistem e-poçtlarını fərdiləşdirin:

- **Kimdən**: FitSite
- **Kimdən e-poçt**: hello@fitsite.com
- **E-poçt şablonları**: Brend rənglərinizdən və loqonuzdan istifadə edin
- **Dil**: Fitness-ə xas, bütün mətnlərdə

Fərdiləşdirilməsi vacib e-poçtlar:

| E-poçt | Ümumi Versiya | FitSite Versiyası |
|-------|----------------|-----------------|
| Xoş gəlmisiniz | "Yeni saytınız hazırdır" | "Fitness studiyası saytınız yayındadır" |
| Ödəniş qəbzi | "Ödəniş alındı" | "FitSite abunə ödənişi təsdiqləndi" |
| Təcrübə bitməsi | "Təcrübəniz yaxın zamanda bitir" | "FitSite təcrübəniz 3 gün sonra bitir — studiya saytınızı yayında saxlayın" |

### Fakturalar {#invoices}

Faktura şablonlarını aşağıdakılarla fərdiləşdirin:

- FitSite loqonuz və brend rəngləriniz
- Şirkət detallarınız
- Fitness-ə xas məhsul adları (ümumi plan ID-ləri deyil)

## Müştəri Tərəfindən Görünən Sayt {#the-customer-facing-site}

Əsas domeniniz (`fitsite.com`) platformanı satdıran bir marketinq saytına ehtiyac duyur. Bu, Ultimate Multisite şəbəkə admin panelindən ayrıdır — bu, biznesinizin ictimai üzüdür.

Əsas səhifələr:

- **Ana Səhifə**: Fitness biznesləri üçün aydın dəyər təklifi
- **Xüsusiyyətlər**: FitSite-ın nə etdiyi, fitness terminləri ilə
- **Qiymətləndirmə**: Nişə xas xüsusiyyət müqayisələri ilə üç planınız
- **Nümunələr**: Platforma üzərində qurulmuş saytları göstərin
- **Qeydiyyat**: Checkout formunuza keçidlər

:::tip Marketinq Saytınız Şəbəkə Saytı Ola Bilər
Marketinq saytınızı öz şəbəkənizdə bir sayt kimi yaradın. Bu, onu eyni dashboard-dan idarə etməyinizə imkan verir və öz platformanızın imkanlıqlarını nümayiş etdirir.
:::

## Müştərilər üçün Xüsusi Domen {#custom-domain-for-customers}

Xüsusi domenlər daxil olan planlara sahib müştərilər üçün prosesi aydın şəkildə sənədləşdirin:

1. Müştəri domenini qeydiyyatdan keçirir və ya onu bir registratora köçürür.
2. Müştəri DNS-i platformanıza yönləndirmək üçün yeniləyir (dəqiq qeydləri təqdim edin).
3. Ultimate Multisite domen mapping və SSL-i idarə edir.

Bu proses üçün xüsusi bir kömək məqaləsi və ya bilik bazası girişi yaradın, bu məqalə texniki bilikləri olmayan fitness studiyası sahiblərinə yazılmalıdır.

## FitSite Şəbəkəsi İndiki Vəziyyətdə {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (alt-domen rejimində)
├── Ultimate Multisite (konfiqurasiya edilmiş + brendli)
├── Platform Domeni (fitsite.com + wildcard SSL)
├── Sayt Şablonları (Studio Essential, Gym Pro, Fitness Chain)
├── Məhsullar (Starter, Growth, Pro + Order Bumps)
├── Checkout Axını (nişə xas, test edilmiş)
├── Brendləşdirmə
│   ├── Xüsusi login səhifəsi
│   ├── Brendli admin dashboard
│   ├── Nişə xas sistem e-poçtları
│   ├── Brendli fakturalar
│   └── fitsite.com üzərində marketinq saytı
└── Onboarding axını üçün hazırdır (növbəti dərs)
```

## Bu Dərsdə Nə Qurduq {#what-we-built-this-lesson}

- Brendli təcrübə üçün konfiqurasiya edilmiş **Platforma domeni və DNS**
- FitSite brendli **White-label edilmiş admin**
- **Fərdiləşdirilmiş kommunikasiyalar** — e-poçtlar, fakturalar və bildirişlər hamısı brendə
- Fitness studiyası sahiblərinə FitSite satan bir **marketinq saytı**
- Öz domenini istəyən müştərilər üçün **xüsusi domen sənədləşdirməsi**

---

**Növbəti:** [Dərs 8: Müştəri Onboarding-i](lesson-8-onboarding) — yeni qeydiyyatı aktiv, xoşbəxt müştəriyə çevirən təcrübəni dizayn edirik.
