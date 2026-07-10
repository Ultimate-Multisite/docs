---
title: 'Dars 6: Tajriba-ye-Naw-kard'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Ders 6: Kayıt Olma Deneyimi {#lesson-6-the-signup-experience}

Ödeme (checkout) akışı, ilgiyi gelire dönüştürdüğünüz yerdir. Karmaşık veya genel bir kayıt süreci, müşterileri kaçırır. Müşterinin dilini konuşan ve zahmetsiz hissettiren niş odaklı bir akış ise onları dönüştürür.

## Nerede Kalmıştık {#where-we-left-off}

FitSite'ta şablonlar ve planlar ayarlandı. Şimdi, fitness stüdyosu sahiplerini ödeme yapan müşterilere dönüştürecek kayıt ve ödeme deneyimini inşa edeceğiz.

## Kayıt Akışını Anlamak {#understanding-the-registration-flow}

Ultimate Multisite'ın ödeme formları, tamamen özelleştirilebilir çok adımlı formlardır. FitSite için istediğimiz akış şudur:

1. Fitness işletmeleri için yapılmış gibi hissettirmeli
2. Sadece gerekli olanı toplamalı
3. Müşteriyi mümkün olduğunca hızlı bir şekilde çalışan bir siteye ulaştırmalı

Tüm teknik referans için [Kayıt Akışı](/user-guide/configuration/the-registration-flow) sayfasına bakın.

## FitSite Ödeme Sayfasını Tasarlamak {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** yolunu izleyerek yeni bir form oluşturun.

### Adım 1: Plan Seçimi {#step-1-plan-selection}

Bir fitness stüdyosu sahibi ilk gördüğü şeyin, anladığı terimlerle sunulmuş planlar olması gerekir.

- Bir **Pricing Table** alanı ekleyin
- Tüm üç FitSite planını gösterecek şekilde yapılandırın
- 5. Derste yazdığınız plan açıklamaları burada görünecek — bunların teknik özelliklerden çok, fitness iş ihtiyaçlarına odaklandığından emin olun.

:::tip Niş Dil Önemlidir
"1 GB depolama alanı" bir spor salonu sahibi için hiçbir şey ifade etmez. "Profesyonel bir stüdyo web sitesi için ihtiyacınız olan her şey" ise her şeyi ifade eder. Plan açıklamalarını müşterinizin dilinde yazın.
:::

### Adım 2: Şablon Seçimi {#step-2-template-selection}

Bir plan seçtikten sonra, müşteri başlangıç şablonunu seçer.

- Bir **Template Selection** alanı ekleyin
- Mevcut şablonlar, seçtikleri plana göre filtrelenir (bu, 5. Derste yapılandırıldı)
- Her şablon, fitness odaklı bir tasarım gösteren bir önizleme görseline sahip olmalıdır

### Adım 3: Hesap Oluşturma {#step-3-account-creation}

Bunu minimumda tutun. Sadece şunları toplayın:

- E-posta adresi
- Şifre
- Stüdyo/işletme adı (bu, onların site adı olacak)

Kayıt sırasında ihtiyacınız olmayan hiçbir bilgiyi istemeyin. Her fazladan alan, dönüşüm oranını düşürür.

### Adım 4: Site Kurulumu {#step-4-site-setup}

- **Site başlığı**: 3. Adımda girilen stüdyo adından otomatik doldurun
- **Site URL'si**: Stüdyo adından otomatik oluşturun (örneğin, `ironworks.fitsite.com`)

### Adım 5: Ödeme {#step-5-payment}

- **Payment** alanını ekleyin
- Ödeme ağ geçidinizi yapılandırın ([Stripe](/user-guide/payment-gateways/stripe) abonelik faturalandırması için önerilir)
- Eğer 5. Derste sipariş artırıcılar (order bumps) oluşturduysanız, ödeme adımından önce bir **Order Bump** alanı ekleyin

### Adım 6: Onaylama {#step-6-confirmation}

- Onay mesajını fitness odaklı bir dil ile özelleştirin
- Örnek: "Fitness stüdyosu web siteniz oluşturuluyor. Birkaç saniye içinde yeni sitenize yönlendirileceksiniz."

## Dönem Seçimi Anahtarı Ekleme {#adding-a-period-selection-toggle}

Planlarınızda fiyat varyasyonları ayarladıysanız (aylık vs. yıllık), müşterilerin faturalandırma dönemleri arasında geçiş yapabilmesi için ödeme formuna bir **Period Selection** alanı ekleyin. Talimatlar için [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) sayfasına bakın.

## Ödeme Yapılandırması {#configuring-payment}

Henüz bir ödeme ağ geçidi kurmadıysanız:

1. **Ultimate Multisite > Settings > Payment Gateways** yolunu izleyin
2. [Stripe kurulum kılavuzunu](/user-guide/payment-gateways/stripe) veya tercih ettiğiniz ağ geçidini takip edin
3. Test ödemesi ile tam bir ödeme akışını test edin

Paraların hesabınıza nasıl aktığı hakkında detaylar için [Getting Paid](/user-guide/payment-gateways/getting-paid) sayfasına bakın.

## Akışı Test Etme {#testing-the-flow}

Devam etmeden önce, tam bir test kaydı yapın:

1. Ödeme formunu gizli/özel bir tarayıcı penceresinde açın
2. Bir plan seçin
3. Bir şablon seçin
4. Bir hesap oluşturun
5. Ödemeyi tamamlayın (test modunu kullanın)
6. Sitenin doğru şablonla oluşturulduğunu doğrulayın

Şunları kontrol edin:

- [ ] Plan açıklamaları net ve niş odaklı mı
- [ ] Şablon önizlemeleri fitness için uygun tasarımlar gösteriyor mu
- [ ] Site URL'si stüdyo adından doğru şekilde oluşturuluyor mu
- [ ] Ödeme başarılı bir şekilde gerçekleşiyor mu
- [ ] Müşteri, seçilen şablonla çalışan bir siteye ulaşıyor mu
- [ ] Onay e-postaları fitness odaklı dil kullanıyor mu

## FitSite Ağı Şu Ana Kadar {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (yapılandırıldı)
├── Wildcard SSL + domain mapping ile Hosting
├── Site Şablonları (Studio Essential, Gym Pro, Fitness Chain)
├── Ürünler (Starter, Growth, Pro + Order Bumps)
├── Ödeme Akışı
│   ├── Niş odaklı açıklamalı plan seçimi
│   ├── Fitness önizlemeli şablon seçimi
│   ├── Minimal hesap oluşturma
│   ├── Stripe üzerinden ödeme
│   └── Fitness odaklı onaylama
└── Markalama için hazır (bir sonraki ders)
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Fitness stüdyosu sahiplerine özel bir **çok adımlı ödeme formu**
- Kayıt akışı boyunca **niş odaklı dil**
- **Minimum sürtünme** — sadece temel alanlar, çalışan bir siteye hızlı yol
- Test doğrulamalı **ödeme entegrasyonu**
- Plan seçiminden çalışan siteye kadar **test edilmiş uçtan uca bir akış**

---

**Sonraki:** [Ders 7: Kendin Yapmak](lesson-7-branding) — platformu beyaz etiketleyeceğiz ve FitSite'ı bir marka olarak kuracağız.
