---
title: 'Dərslik 3: Şəbəkənizi Qurmaq'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Dərslik 3: Şəbəkənizi Qurmaq

İndi qurma vaxtıdır. Bu dərslikdə Ultimate Multisite-ı quraşdıracaq və FitSite şəbəkəsinin təməlini quracaqsınız. Burada verilən hər qərar fitnes nişinə uyğun nəzərdə tutulub.

## Harada Qaldıq {#where-we-left-off}

Biz fitnes studiyalarını nişimiz kimi seçdik və bu fürsəti təsdiqlədik. İndi bu ideyanı işləyən bir platformaya çeviririk.

## Hosting Seçimi {#choosing-your-hosting}

Hosting seçimi, tək bir sayt üçün deyil, niş bir platforma üçün daha vacibdir. Siz bir sayt yox, onlarla və ya yüzlərlə sayta böyüyəcək bir şəbəkə yayırsınız.

### Nəyə Diqqət Etməli {#what-to-look-for}

- **WordPress Multisite dəstəyi**: Bütün hostlar multisite-ı yaxşı idarə etmir.
- **Wildcard SSL**: Subdomain əsaslı şəbəkələr üçün vacibdir.
- **Ölçeklənə bilən resurslar**: Köçməyə ehtiyac duymadan böyüməyə imkanınız olmalıdır.
- **Ultimate Multisite inteqrasiyası**: Avtomatik domen xəritələməsi və SSL əməliyyat tələb olunan əməliyyat çətinliyini azaldır.

### Tövsiyə Olunan Yanaşma {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) siyahısından bir host seçin. Bunlar Ultimate Multisite ilə sınaqdan keçirilmişdir və domen xəritələməsi və SSL avtomatlaşdırması üçün lazım olan inteqrasiyaları təmin edir.

FitSite üçün biz subdomain konfiqurasiyasından istifadə edəcəyik. Bu o deməkdir ki, müştəri saytları əvvəlcə `studioname.fitsite.com` kimi görünəcək, daha sonra isə istəyərlərinə öz domenlərini xəritələyə biləcəklər.

## WordPress Multisite-ı Qurmaq {#installing-wordpress-multisite}

Hələ WordPress Multisite quraşdırmanız yoxdursa:

1. Hosting provayderinizdə WordPress-ı quraşdırın.
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) bələdçisinə əməl edin.
3. Tələb olunduqda **subdomain** konfiqurasiyasını seçin.

:::tip Niyə Subdomainlər?
Subdomainlər hər müştəri saytına özünəməxsus ünvan (`studio.fitsite.com`) verir, yoxsa bir yol (`fitsite.com/studio`). Bu, müştəriləriniz üçün daha peşəkar görünür və permalink toqqunluqlarından qaçınmağa kömək edir. Ətraflı müqayisə üçün [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) baxın.
:::

## Ultimate Multisite-ı Qurmaq {#installing-ultimate-multisite}

Aşağıdakıları etmək üçün [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) bələdçisinə əməl edin:

1. Plugin-i şəbəkə miqyasında yükləyin və aktivləşdirin.
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) işlədin.

Setup wizard zamanı FitSite nişini yadda saxlayın:

- **Currency (Valyuta)**: Fitnes studiyası müştərilərinizin istifadə etdiyi valyutaya təyin edin.
- **Company name (Şirkət adı)**: "FitSite" (və ya seçdiyiniz brend adı).
- **Company logo (Şirkət loqosu)**: Brend loqonuzu yükləyin -- bu, fakturalar və e-poçtlarda görünəcək.

## Fitnes Nişinə Uyğun Konfiqurasiya {#configuring-for-the-fitness-niche}

Ultimate Multisite quraşdırıldıqdan sonra, bu nişə xas konfiqurasiya seçimlərini edin:

### Ümumi Ayarlar (General Settings) {#general-settings}

**Ultimate Multisite > Settings** səhifəsinə keçin və aşağıdakıları konfiqurasiya edin:

- **Site name (Sayt adı)**: FitSite
- **Default role (Default rol)**: Administrator -- fitnes studiyası sahibləri öz sayt məzmunu üzərində tam nəzarətə ehtiyac duyurlar.
- **Registration (Qeydiyyat)**: Studiya sahiblərinin özləri qeydiyyatdan keçməsi üçün istifadəçi qeydiyyatını aktivləşdirin.

### E-poçt Konfiqurasiyası (Email Configuration) {#email-configuration}

Sistem e-poçtlarınız nişinizin dilini danışmalıdır. **Ultimate Multisite > Settings > Emails** səhifəsinə keçin və aşağıdakıları fərdiləşdirin:

- Ümumi "sizin yeni saytınız" dilini fitnesə xas mesajlarla əvəz edin.
- Nümunə xoş gəlmişik mövzusu: "Fitnes studiyası saytınız hazırdır"
- Nümunə xoş gəlmişik mətn: Onların studiyasına, siniflərə və fitnes saytlarında işə başlamağa istinad edin.

Bunu 8-ci Dərslikdə (Müştəri Onboarding) daha da təkmilləşdirəcəyik, lakin indi tonu təyin etmək, hətta ilk sınaq qeydiyyatları üçün belə nişə xas hiss yaratmasını təmin edir.

### Domen Konfiqurasiyası (Domain Configuration) {#domain-configuration}

Uyğun bir hosting provayderindən istifadə edirsinizsə, domen xəritələməsini indi konfiqurasiya edin:

1. **Ultimate Multisite > Settings > Domain Mapping** səhifəsinə keçin.
2. Öz hostunuz üçün inteqrasiya bələdçisinə əməl edin.
3. Yeni subsitelerin avtomatik SSL aldığını test edin.

Bu, növbəti dərslikdə şablonlar və sınaq saytları yaratmağa başladığımızda, hər şeyin uca-dan-uca işlədiyini təmin edir.

## FitSite Şəbəkəsi (İndi) {#the-fitsite-network-so-far}

Bu dərslik sonunda nəyə sahib olduğunuz:

```
FitSite Network
├── WordPress Multisite (subdomain rejimində)
├── Ultimate Multisite (quraşdırılıb və konfiqurasiya olunub)
├── Wildcard SSL-li Hosting
├── Konfiqurasiya olunmuş Domen Xəritələməsi
├── Nişə xas e-poçt şablonları (ilkin)
└── Sayt şablonları üçün hazır (növbəti dərslik)
```

## Bu Dərslikdə Nə Qurduq {#what-we-built-this-lesson}

- Subdomain rejimində işləyən bir WordPress Multisite quraşdırması
- FitSite brendlənməsi ilə quraşdırılmış və konfiqurasiya olunmuş Ultimate Multisite
- Böyüyən bir şəbəkə üçün qurulmuş Hosting və SSL
- Hosting provayderiniz üçün konfiqurasiya olunmuş Domen Xəritələməsi
- Birinci gündən etibarən təyin edilmiş nişə xas e-poçt tonu

---

**Növbəti:** [Dərslik 4: Niş Şablonları Qurmaq](lesson-4-templates) -- fitnes studiyası sahiblərinin həqiqətən istifadə etmək istəyəcəyi sayt şablonları yaradacağıq.
