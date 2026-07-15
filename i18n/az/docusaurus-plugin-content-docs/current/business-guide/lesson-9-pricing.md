---
title: 'Dərslik 9: Mənfəət üçün qiymətləndirmə'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Dərs 9: Mənfəət üçün Qiymətləndirmə

Dərs 5-də FitSite planları üçün ilkin qiymətlər təyin etmişdik. İndi isə gəlirə kömək edən, yüksəltmələri təşviq edən və müştərilərin platformadan ayrılmasının qarşısını alan texnikalarla qiymətləndirmə strategiyamızı təkmilləşdirəcəyik.

## Harada Qaldıq {#where-we-left-off}

FitSite-da planlar, şablonlar, ödəniş sistemi (checkout), brendlənmə və müştəri daxilolması (onboarding) yerindədir. İlkin qiymətləndirmə aylıq $49/$99/$199 idi. İndi isə bu qiymətləndirmənin daha çox iş görməsini təmin edəcəyik.

## Niş Platformalar üçün Qiymətləndirmə Prinsipləri {#pricing-principles-for-niche-platforms}

### Xərclə Deyil, Qiymətə Əsaslanın {#price-on-value-not-cost}

Hostinq xərcləriniz hər bir müştəri saytı üçün $5-$15 ola bilər. Bu, qiymətinizin $20 olması lazım olduğu anlamına gəlmir. Siz hostinq satmırsınız. Siz aşağıdakıları satırsınız:

- Xüsusi olaraq qurulması $2,000-$5,000 qiymətində olacaq peşəkar bir fitness veb saytı
- Müştərilərin düşünməli olmadığı davamlı texniki baxım, yeniləmələr və təhlükəsizlik
- Ümumi qurucuların təklif etmədiyi nişə xas xüsusiyyətlər
- Sənayeyə xüsusi qurulmuş bir platformanın etibarı

Qiyməti, onu təqdim etmək üçün olan xərclə deyil, təqdim etdiyiniz qiymətə əsaslandırın.

### Alternativlərlə Müqayisə Edin {#anchor-to-alternatives}

Bir fitness studiyası sahibi FitSite-ı qiymətləndirərkən, onu aşağıdakılarla müqayisə edir:

- **Veb developer tutmaq**: Başlanğıcda $2,000-$5,000 + aylıq $50-$100 texniki baxım
- **Wix/Squarespace**: Aylıq $16-$45, lakin fitness-ə xas xüsusiyyətləri yoxdur, özləri qururlar
- **Heç nə etməmək**: Onlayn tapıla bilməyən üzvlərin itirilməsi

Aylıq $49-$199 qiymətində FitSite, developerdən daha ucuz, ümumi quruculardan daha səlahiyyətli və heç bir sayt olmamasından sonsuz dərəcədə yaxşıdır.

## Qiymət Müxtəlifliklərini Tətbiq Etmək {#implementing-price-variations}

İllik qiymətləndirmə öhdəkarlığı təşviq edir və müştərilərin platformadan ayrılmasının qarşısını alır. Hər planın **Price Variations** (Qiymət Müxtəliflikləri) bölməsinə keçin və illik variantları əlavə edin:

| Plan | Aylıq | İllik (aylıq) | İllik Ümumi | Qənaət |
|------|---------|-------------------|--------------|---------|
| Starter | $49/ay | $39/ay | $468/il | 20% endirim |
| Growth | $99/ay | $79/ay | $948/il | 20% endirim |
| Pro | $199/ay | $159/ay | $1,908/il | 20% endirim |

Müştərilərin aylıq və illik ödəniş arasında keçid edə bilməsi üçün ödəniş formanıza **Period Selection** (Müddət Seçimi) sahəsi əlavə edin. [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) baxın.

### Niyə İllik Qiymətləndirmə İşləyir {#why-annual-pricing-works}

- **Sizin üçün**: Başlanğıcda pul axını, aşağı "churn" (müştərilərin platformadan ayrılması) (illik ödəniş edən müştərilərin müddət ərzində ləğv etmə ehtimalı azdır)
- **Onlar üçün**: Real qənaət, büdcənin proqnozlaşdırılması

## Qurulma Ödənişləri (Setup Fees) {#setup-fees}

Əl ilə qurulma tələb edən planlar üçün bir dəfəlik qurulma ödənişi nəzərdən keçirin:

- **Starter**: Qurulma ödənişi yoxdur (giriş maneələrini aradan qaldırır)
- **Growth**: $99 qurulma ödənişi (xüsusi domen qurulması və ilkin konsultasiyanı əhatə edir)
- **Pro**: $299 qurulma ödənişi (bir neçə yerləşmə qurulmasını və daxilolma zəngini əhatə edir)

Qurulma ödənişlərini hər planın qiymətləndirmə bölməsində təyin edin. Detallar üçün [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) baxın.

## Sınaq Müddətləri (Trial Periods) {#trial-periods}

Sınaq müddəti təklif etmək qeydiyyat prosesindəki çətinliyi azaldır, lakin konversiyaya çevrilməmə riski yaradır. FitSite üçün:

- Yalnız Starter planında **7 günlük pulsuz sınaq**
- Growth və Pro-da sınaq yoxdur (bu müştərilər daha öhdəkar və ödəniş etməyi gözləyirlər)

Sınaq müddətini Starter planının qiymətləndirmə bölməsində **Offer Trial** (Sınaq Təklif Et) düyməsini aktivləşdirərək və müddəti 7 gün təyin edərək təyin edin.

### Sınaqları Konversiyaya Çevirmək {#making-trials-convert}

Sınaq yalnız müştəri sınaq müddətində dəyər hiss edərsə işləyir. Sizin daxilolma ardıcıllığınız (Lesson 8) burada kritikdir — xoş gəlmişsiniz məktupları 7 günlük müddət ərzində marağı artırmaq üçün vaxtlandırılmalıdır.

## Endirim Kodları (Discount Codes) {#discount-codes}

Müəyyən məqsədlər üçün strateji endirim kodları yaradın:

- **FITLAUNCH** — ilk 3 ay üçün 30% endirim (başlanğıc təşviqi üçün)
- **ANNUAL20** — illik planlar üçün 20% endirim (əgər artıq endirimdə deyilsə)
- **REFERRAL** — 1 ay pulsuz (müştəri tövsiyələri üçün)

Bunları yaratmaq üçün **Ultimate Multisite > Discount Codes** bölməsinə keçin. Tam bələdçi üçün [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) baxın.

:::tip Default olaraq endirim etməyin
Endirimlər strateji vasitələr olmalıdır, daimi xüsusiyyətlər yox. Hər kəs endirim alsa, bu endirim deyil — bu sizin real qiymətinizdir. Onlardan yalnız müəyyən kampaniyalar, tövsiyələr və müddət məhdudiyyətli təşviqlər üçün istifadə edin.
:::

## Vergi İşlənməsi (Tax Handling) {#tax-handling}

Əgər fəaliyyət göstərdiyiniz ərazi vergi toplamağı tələb edirsə:

1. Vergi dərəcələrini **Ultimate Multisite > Settings > Taxes**-də təyin edin.
2. Planlarınıza vergi kateqoriyaları tətbiq edin.
3. Fakturaların vergini düzgün göstərdiyinə əmin olun.

Daha ətraflı konfiqurasiya üçün [Tax Handling](/user-guide/payment-gateways/tax-handling) baxın. Əgər beynəlxalq müştərilərə xidmət edirsinizsə, EU uyğunluğu üçün [VAT addon](/addons/vat) nəzərdən keçirin.

## Qiymətləndirmənizi Nəzərdən Keçirmək {#reviewing-your-pricing}

Başladıqdan sonra, qiymətləndirməni rüblük olaraq nəzərdən keçirin. Aşağılarını yoxlayın:

- **Plan üzrə konversiya dərəcəsi**: Əgər Starter yaxşı konversiya edir, amma Growth etmirsə, aralarındakı fərq çox böyük ola bilər.
- **Yüksəltmə dərəcəsi**: Əgər az müştəri Starter-dan Growth-a yüksəlirlərsə, Growth planı kifayət qədər əlavə dəyər təklif etmir.
- **Plan üzrə churn**: Əgər illik müştərilər daha az "churn" edirsə, illik qiymətləndirməni daha çox vurğulayın.
- **Rəqib qiymətləndirməsi**: Alternativlər nə qədər qiymətləndirir? Doğru mövqeydəsinizmi?

## FitSite Network (İndi) {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Bu Dərsdə Nə Qurduq {#what-we-built-this-lesson}

- Öhdəkarlığı təşviq etmək üçün 20% endirimli **illik qiymətləndirmə**
- Daxilolma səyini əhatə etmək üçün yüksək səviyyələrdə **qurulma ödənişləri**
- Qeydiyyat çətinliyini azaltmaq üçün giriş səviyyəli planında **sınaq müddəti**
- Başlanğıc, tövsiyələr və kampaniyalar üçün **strateji endirim kodları**
- Uyğun fakturalaşdırma üçün **vergi konfiqurasiyası**
- Davamlı optimallaşdırma üçün **qiymətləndirmə nəzərdən keçirmə çərçivəsi**

---

**Növbəti:** [Lesson 10: Launch Day](lesson-10-launch) — başlanğıcdan əvvəl yoxlama və onlayn olma.
