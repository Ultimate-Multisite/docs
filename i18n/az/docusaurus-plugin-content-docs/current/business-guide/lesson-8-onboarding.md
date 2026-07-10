---
title: 'Dərslik 8: Müştəri Onboarding'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Dərs 8: Müştəri Onboarding (Təşkilatlaşdırma) {#lesson-8-customer-onboarding}

Müştəri qeydiyyatdan keçməsini təmin etmək işin yalnız yarısıdır. Əgər onlar daxil olub, özlərini çaşdırılmış hiss edirlərsə və heç vaxt geri qayıtmırlar, deməli onları itirmisiniz. Bu dərs isə yeni qeydiyyatdan keçmiş bir istifadəçini aktiv, bağlı bir müştəriyə çevirən təcrübəni dizayn etməyə kömək edir.

## Harada Qalmışdıq {#where-we-left-off}

FitSite artıq tam brendlənmiş və işləyən bir ödəniş axınına malikdir. İndi isə fitness studiyası sahibinin qeydiyyatı tamamlayıb ilk dəfə yeni saytına daxil olduğu an nə baş verdiyinə fokuslanırıq.

## Onboarding Niyə Vacibdir {#why-onboarding-matters}

Qeydiyyatdan keçdikdən sonraki ilk 30 dəqiqə müştərinin qalacağını yoxsa itiriləcəyini müəyyən edir. Belə bir fitness studiyası sahibi:

- Daxil olur və saytın artıq bir fitness saytı kimi görünməsini görür → qalır
- Növbəti addımının nə olduğunu dəqiq bilir → qalır
- Ümumi bir WordPress dashboard-unda itkin hiss edir → gedir

Sizin niş şablonlarınız (Dərs 4) ilk nöqtəni həll edir. Bu dərs isə ikinci nöqtəni həll edir.

## İlk Daxil Olma Təcrübəsi {#the-first-login-experience}

### Xoş Gəlmişsiniz Dashboard Widget-ı {#welcome-dashboard-widget}

Yeni müştəriləri qarşılayan və onları qurma prosesi boyunca yönləndirən fərdiləşdirilmiş bir dashboard widget-ı yaradın. Bu, ilk daxil olduqları zaman diqqət çəkici şəkildə görünməlidir.

**FitSite Tez Başlanğıcı:**

1. **Studiyanızın adını və loqosunu əlavə edin** -- Customizer və ya Site Identity ayarları ilə bağlı link
2. **Dərs cədvəlinizi yeniləyin** -- Birbaşa Classes səhifə redaktoru ilə bağlı link
3. **Təlimatçılarınızı əlavə edin** -- Trainers səhifə redaktoru ilə bağlı link
4. **Əlaqə məlumatlarınızı təyin edin** -- Contact səhifə redaktoru ilə bağlı link
5. **Saytınızı önizləyin** -- Frontend ilə bağlı link

Hər addım birbaşa müvafiq səhifəyə və ya ayara keçir. Menülərdə axtarmaq lazım deyil.

### Dashboard-u Sadələşdirmək {#simplify-the-dashboard}

Yeni müştərilərin hər bir WordPress menyu maddəsini görməsinə ehtiyacı yoxdur. Nəzərdən keçirin:

- Fitness saytı idarəetməsi ilə əlaqəli olmayan menyu maddələrini gizlətmək (məsələn, istifadə olunmursa Comments)
- Ən çox istifadə edilən maddələri ilk yerə qoymaq üçün menyunu yenidən sıralamaq
- Niş üçün mənalı olan fərdiləşdirilmiş menyu etiketləri əlavə etmək ("Appearance" əvəzinə "Studiyonuz")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon-u müştərilərin nə görməsinə nəzarət etməyə kömək edə bilər.

## Xoş Gəlmişsiniz E-poçt Ardıcıllığı {#welcome-email-sequence}

Yalnız bir xoş gəlmişsiniz e-poçtu kifayət deyil. Müştəriləri ilk həftələri boyunca yönləndirən bir ardıcıllıq qurun:

### E-poçt 1: Xoş Gəlmişsiniz (Qeydiyyatdan dərhal sonra) {#email-1-welcome-immediately-after-signup}

- Mövzu: "FitSite-a xoş gəlmisiniz -- studiya saytınız işlək vəziyyətdədir"
- Məzmun: Daxil olma linki, tez başlanğıc addımları, kömək resurslarına link
- Ton: Həyəcanlı, təşviq edici, fitness-ə xas

### E-poçt 2: Tez Qazanılan Üstünlüklər (1-ci Gün) {#email-2-quick-wins-day-1}

- Mövzu: "FitSite-da ilk etməli olduğunuz 3 şey"
- Məzmun: Loqonuzu əlavə edin, ana səhifənin hero şəklini yeniləyin, dərs cədvəlinizi əlavə edin
- Harada klik etməli olduqlarını göstərən skrinşotlar əlavə edin

### E-poçt 3: Özünüzə Uyğunlaşdırın (3-cü Gün) {#email-3-make-it-yours-day-3}

- Mövzu: "Fitness saytınızı fərqləndirin"
- Məzmun: Rəngləri fərdiləşdirin, təlimatçı şəkillərini əlavə edin, studiya hekayənizi yazın
- Platformada möhtəşəm fitness saytları nümunələrinə link

### E-poçt 4: Yayına Hazır (7-ci Gün) {#email-4-go-live-day-7}

- Mövzu: "FitSite-ınızı dünyaya göstərməyə hazırsınız?"
- Məzmun: Paylaşmadan əvvəl yoxlanılmalı olanlar siyahısı, öz domen adını necə qoşmaq (Growth/Pro-da olarsa), sosial paylaşım ipuçları

:::tip E-poçt Avtomatlaşdırması
Bu e-poçtları e-poçt marketinq platformanız vasitəsilə işə salmaq üçün [Webhooks](/user-guide/integrations/webhooks) və ya [Zapier](/user-guide/integrations/zapier) istifadə edin. Bu, sizə vaxtlama üzərində daha çox nəzarət verir və bağlılığı izləməyə imkan yaradır.
:::

## Kömək Resursları {#help-resources}

Fitness studiyası sahiblərinin əslində nə sual verdiyini cavablandıran nişə xas kömək məzmunu yaradın:

### Bilik Bazası Məqalələri {#knowledge-base-articles}

- "Dərs cədvəlinizi necə yeniləyə bilərsiniz"
- "Təlimatçı profilləri əlavə etmək və redaktə etmək"
- "Studiyanızın loqosunu və rənglərini dəyişmək"
- "Öz domen adınızı qoşmaq" (Growth/Pro müştəriləri üçün)
- "Saytınıza kitabçaq widget-ı əlavə etmək"

Bunları texniki olmayan istifadəçilər üçün yazın. Skrinşotlardan istifadə edin. WordPress jargonundan yayın.

### Video Nümayişləri {#video-walkthroughs}

Qısa (2-3 dəqiqəlik) skrin qeydləri ilə göstərin:

- İlk daxil olma və yönləndirmə
- Ana səhifəni redaktə etmək
- Dərs cədvəlinizi yeniləmək
- Yeni bir təlimatçı əlavə etmək

Bunlar cilalanmış istehsal olmaq lazım deyil. Əsas olan aydın, faydalı və nişə xas olmasıdır.

## Hesab Səhifəsi {#the-account-page}

Ultimate Multisite, müştərilərin abunəliklərini idarə etdiyi müştəri üçün nəzərdə tutulmuş bir [Account Page](/user-guide/client-management/account-page) ehtiva edir. Bunu aşağıdakılar üçün fərdiləşdirin:

- Hazır FitSite planlarını göstərmək
- Fitness-ə xas faydalarla yüksəltmə seçimlərini göstərmək
- Ödəniş tarixçəsi və faktura yükləmələrini təmin etmək
- Kömək resurslarına link vermək

## Onboarding Uğurunu Ölçmək {#measuring-onboarding-success}

Onboarding-inizin işlədiyini bilmək üçün bu göstəriciləri izləyin:

- **Aktivasiya nisbəti**: Qeydiyyatdan keçənlərin hansı faizi ilk həftə ərzində saytlarını faktiki olaraq fərdiləşdirir?
- **İlk həftə daxil olmaları**: Yeni müştəri ilk həftəsi ərzində neçə dəfə daxil olur?
- **Yeni müştərilərdən gələn dəstək ticketləri**: Yüksək həcm onboarding-inizdə boşluqlar olduğunu göstərir.
- **Sınaqdan ödənişliyə çevrilmə**: Əgər sınaq təklif edirsinizsə, hansı faiz çevrilir?

## FitSite Network (İndi) {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Bu Dərsdə Nə Qurduq {#what-we-built-this-lesson}

- Quick Start widget-ı ilə yönləndirilmiş ilk daxil olma təcrübəsi
- Fitness saytı idarəetmə vəzifələrinə fokuslanmış sadələşdirilmiş dashboard
- Müştəriləri ilk həftələri boyunca yönləndirən xoş gəlmişsiniz e-poçt ardıcıllığı
- Texniki olmayan fitness studiyası sahibləri üçün yazılmış nişə xas kömək resursları
- Təcrübəni izləmək və yaxşılaşdırmaq üçün onboarding metrikaları

---

**Növbəti:** [Dərs 9: Mənfəət üçün Qiymətləndirmə](lesson-9-pricing) -- gəlirəni maksimizə etmək və itkiləri minimuma endirmək üçün qiymətləndirmə strategiyasını təkmilləşdiririk.
