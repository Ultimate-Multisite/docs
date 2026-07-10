---
title: 'Dərslik 6: Qeydiyyat Təcrübəsi'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Dərs 6: Qeydiyyat Təcrübəsi {#lesson-6-the-signup-experience}

Ödəniş axını (checkout flow) marağın gəlirə çevrildiyi yerdir. Qarışıq və ya ümumi bir qeydiyyat prosesi müştəriləri itirir. Onların dilində danışan və asan gələn bir nişəyə xas axın (flow) onları müştəriyə çevirir.

## Harada Qaldıq {#where-we-left-off}

FitSite-da şablonlar və planlar qurulub. İndi isə fitnes studiyası sahiblərini ödəniş edən müştərilərə çevirən qeydiyyat və ödəniş təcrübəsini quracağıq.

## Qeydiyyat Axınını Anlamaq {#understanding-the-registration-flow}

Ultimate Multisite-ın ödəniş formaları tam şəkildə özəilləşdirilə bilən çoxaddımlı formalarıdır. FitSite üçün biz belə bir axın istəyirik ki:

1. Fitnes biznesləri üçün qurulmuş kimi görünsün
2. Yalnız lazım olan məlumatları toplayın
3. Müştəridi mümkün qədər tez işləyən bir sayta çatdırsın

Tam texniki istinad üçün [The Registration Flow](/user-guide/configuration/the-registration-flow) səhifəsinə baxın.

## FitSite Ödənişini Dizayn Etmək {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** səhifəsinə keçin və yeni bir forma yaradın.

### Addım 1: Plan Seçimi {#step-1-plan-selection}

Fitnes studiyası sahibinin ilk gördüyü şey, onların başa düşdüyü terminlərlə təqdim edilmiş planlar olmalıdır.

- Bir **Pricing Table** sahəsi əlavə edin
- Üç FitSite planını göstərmək üçün onu qurun
- 5-ci dərslərdə yazdığınız plan təsvirləri burada görünür — onların texniki xüsusiyyətlər deyil, fitnes biznesinin ehtiyaclarına cavab verdiyinə əmin olun.

:::tip Nişə Dili Vacibdir
"1 GB yaddaş" bir gimnastika sahibinə heç nə demək deyil. "Peşəkar studiya veb saytı üçün lazım olan hər şey" isə hər şeyi deməkdir. Plan təsvirlərini müştərinin dilində yazın.
:::

### Addım 2: Şablon Seçimi {#step-2-template-selection}

Plan seçdikdən sonra müştəri öz başlanğıc şablonunu seçir.

- Bir **Template Selection** sahəsi əlavə edin
- Mövcud şablonlar seçilmiş planla (5-ci dərslərdə qurulmuş) filtr edilir
- Hər şablon fitnesə xas bir dizayn göstərən bir önizləmə şəkli olmalıdır

### Addım 3: Hesab Yaratmaq {#step-3-account-creation}

Bunu minimumda saxlayın. Yalnız toplayın:

- E-poçt ünvanı
- Şifrə
- Studiya/biznes adı (bu onların sayt adı olacaq)

Qeydiyyat zamanı lazım olmayan məlumatları soruşmayın. Hər əlavə sahə konversiyanı azaldır.

### Addım 4: Sayt Qurulması {#step-4-site-setup}

- **Site title**: 3-cü addımda daxil edilmiş studiya adından avtomatik doldurun
- **Site URL**: Studiya adından avtomatik yaradın (məsələn, `ironworks.fitsite.com`)

### Addım 5: Ödəniş {#step-5-payment}

- **Payment** sahəsini əlavə edin
- Ödəniş qapınızı qurun ([Stripe](/user-guide/payment-gateways/stripe) abunəlik ödənişləri üçün tövsiyə olunur)
- Əgər 5-ci dərslərdə sifariş artırıcılar (order bumps) yaratmısınızsa, ödəniş addımından əvvəl bir **Order Bump** sahəsi əlavə edin

### Addım 6: Təsdiq {#step-6-confirmation}

- Təsdiq mesajını fitnesə xas dil ilə özəilləşdirin
- Nümunə: "Fitnes studiyası veb saytınız yaradılır. Bir neçə saniyə ərzində yeni saytınıza yönləndiriləcəksiniz."

## Period Seçimi Toggle Əlavə Etmək {#adding-a-period-selection-toggle}

Əgər planlarınızda qiymət fərqlilikləri (aylıq vs. illik) qurmusunuzsa, müştərilərin ödəniş dövrləri arasında keçid edə bilməsi üçün ödəniş formasına bir **Period Selection** sahəsi əlavə edin. Təlimatlar üçün [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) səhifəsinə baxın.

## Ödənişləri Qurmaq {#configuring-payment}

Hələ ödəniş qapınızı qurmamısınızsa:

1. **Ultimate Multisite > Settings > Payment Gateways** səhifəsinə keçin
2. [Stripe setup guide](/user-guide/payment-gateways/stripe) və ya üstün tutduğunuz qapı ilə izləyin
3. Test ödənişləri ilə tam bir ödəniş axınını yoxlayın

Pulun hesabınıza necə çatacağına dair detallar üçün [Getting Paid](/user-guide/payment-gateways/getting-paid) səhifəsinə baxın.

## Axını Test Etmək {#testing-the-flow}

Davam etməzdən əvvəl, tam bir test qeydiyyatı tamamlayın:

1. Ödəniş formasını incognito/private brauzer pəncərəsində açın
2. Bir plan seçin
3. Bir şablon seçin
4. Hesab yaradın
5. Ödənişi tamamlayın (test rejimindən istifadə edin)
6. Saytın düzgün şablonla yaradıldığını yoxlayın

Yoxlayın ki:

- [ ] Plan təsvirləri aydın və nişəyə xasdır
- [ ] Şablon önizləmələri fitnesə uyğun dizaynlar göstərir
- [ ] Sayt URL-i studiya adından düzgün şəkildə yaradılır
- [ ] Ödəniş uğurla baş verir
- [ ] Müştəri seçilmiş şablonla işləyən bir sayta çatır
- [ ] Təsdiq e-poçtları fitnesə xas dil istifadə edir

## FitSite Şəbəkəsi (İndi) {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Bu Dərsdə Nə Qurduq {#what-we-built-this-lesson}

- Fitnes studiyası sahiblərinə uyğunlaşdırılmış **çoxaddımlı ödəniş forması**
- Qeydiyyat axını boyunca **nişəyə xas dil**
- **Minimum sürtünmə** — yalnız vacib sahələr, işləyən sayta sürətli yol
- Test yoxlaması ilə **ödəniş inteqrasiyası**
- Plan seçimindən işləyən sayta qədər **test edilmiş ucu-ucu axın**

---

**Növbəti:** [Dərs 7: Özünə Etmək](lesson-7-branding) — platformanı özünüzün markası kimi istifadə edəcəyik və FitSite-ı bir brend kimi quracağıq.
