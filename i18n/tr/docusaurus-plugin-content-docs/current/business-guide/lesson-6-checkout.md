---
title: 'Ders 6: Kayıt Olma Deneyimi'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Ders 6: Kayıt Deneyimi {#lesson-6-the-signup-experience}

Ödeme akışı, ilgiyi gelire dönüştürdüğünüz yerdir. Karmaşık veya genel bir kayıt süreci müşterileri kaçırır. Müşterinin dilini konuşan ve zahmetsiz hissettiren niş odaklı bir akış ise dönüşümü sağlar.

## Nerede Kalmıştık {#where-we-left-off}

FitSite'ta şablonlar ve planlar yapılandırıldı. Şimdi, fitness stüdyosu sahiplerini ödeme yapan müşterilere dönüştürecek kayıt ve ödeme deneyimini oluşturuyoruz.

## Kayıt Akışını Anlamak {#understanding-the-registration-flow}

Ultimate Multisite'ın ödeme formları, tamamen özelleştirilebilir çok adımlı formlardır. FitSite için istediğimiz akış şudur:

1. Fitness işletmeleri için yapılmış gibi hissettirmeli
2. Yalnızca gerekli olanı toplamalı
3. Müşteriyi mümkün olan en kısa sürede çalışan bir siteye ulaştırmalı

Tüm teknik referans için [Kayıt Akışı](/user-guide/configuration/the-registration-flow)'na bakın.

## FitSite Ödeme Sayfasını Tasarlamak {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** bölümüne gidin ve yeni bir form oluşturun.

### Adım 1: Plan Seçimi {#step-1-plan-selection}

Bir fitness stüdyosu sahibinin ilk görmesi gereken şey, anladığı terimlerle sunulmuş planlar olmalıdır.

- Bir **Pricing Table** (Fiyatlandırma Tablosu) alanı ekleyin
- Tüm üç FitSite planını gösterecek şekilde yapılandırın
- 5. Derste yazdığınız plan açıklamaları burada görünmeli — bunların teknik özelliklere değil, fitness iş ihtiyaçlarına hitap ettiğinden emin olun

:::tip Niş Dil Önemlidir
"1 GB depolama alanı" bir spor salonu sahibi için hiçbir şey ifade etmez. "Profesyonel bir stüdyo web sitesi için ihtiyacınız olan her şey" ise her şeyi ifade eder. Plan açıklamalarını müşterinizin dilinde yazın.
:::

### Adım 2: Şablon Seçimi {#step-2-template-selection}

Bir plan seçtikten sonra, müşteri başlangıç şablonunu seçer.

- Bir **Template Selection** (Şablon Seçimi) alanı ekleyin
- Mevcut şablonlar, seçtikleri plana göre filtrelenir (5. Derste yapılandırıldı)
- Her şablon, fitness odaklı bir tasarımı gösteren bir önizleme görseline sahip olmalıdır

### Adım 3: Hesap Oluşturma {#step-3-account-creation}

Bunu minimumda tutun. Yalnızca şunları toplayın:

- E-posta adresi
- Şifre
- Stüdyo/işletme adı (bu onların site adı olacaktır)

Kayıt sırasında ihtiyacınız olmayan bilgileri sormayın. Her fazladan alan, dönüşüm oranını düşürür.

### Adım 4: Site Kurulumu {#step-4-site-setup}

- **Site title**: 3. Adımda girilen stüdyo adından otomatik doldurun
- **Site URL**: Stüdyo adından otomatik oluşturun (örneğin, `ironworks.fitsite.com`)

### Adım 5: Ödeme {#step-5-payment}

- **Payment** (Ödeme) alanını ekleyin
- Ödeme ağ geçidinizi yapılandırın ([Stripe](/user-guide/payment-gateways/stripe) abonelik faturalandırması için önerilir)
- Eğer 5. Derste sipariş artırıcılar (order bumps) oluşturduysanız, ödeme adımından önce bir **Order Bump** alanı ekleyin

### Adım 6: Onaylama {#step-6-confirmation}

- Onay mesajını fitness odaklı bir dil ile özelleştirin
- Örnek: "Fitness stüdyosu web siteniz oluşturuluyor. Birkaç saniye içinde yeni sitenize yönlendirileceksiniz."

## Dönem Seçimi Anahtarı Ekleme {#adding-a-period-selection-toggle}

Planlarınızda fiyat varyasyonları (aylık vs. yıllık) ayarladıysanız, müşterilerin faturalandırma dönemleri arasında geçiş yapabilmesi için ödeme formuna bir **Period Selection** (Dönem Seçimi) alanı ekleyin. Talimatlar için [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle)'a bakın.

## Ödeme Yapılandırması {#configuring-payment}

Henüz bir ödeme ağ geçidi kurmadıysanız:

1. **Ultimate Multisite > Settings > Payment Gateways** bölümüne gidin
2. [Stripe kurulum kılavuzunu](/user-guide/payment-gateways/stripe) veya tercih ettiğiniz ağ geçidini izleyin
3. Test ödemesi ile tam bir ödeme akışını test edin

Ödemelerin hesabınıza nasıl aktığına dair ayrıntılar için [Getting Paid](/user-guide/payment-gateways/getting-paid)'a bakın.

## Akışı Test Etme {#testing-the-flow}

İlerlemeye geçmeden önce, tam bir test kaydı tamamlayın:

1. Ödeme formunu gizli/özel bir tarayıcı penceresinde açın
2. Bir plan seçin
3. Bir şablon seçin
4. Bir hesap oluşturun
5. Ödemeyi tamamlayın (test modunu kullanın)
6. Sitenin doğru şablonla oluşturulduğunu doğrulayın

Şunları kontrol edin:

- [ ] Plan açıklamaları açık ve nişe özgü mü
- [ ] Şablon önizlemeleri fitness'a uygun tasarımlar gösteriyor mu
- [ ] Site URL'si stüdyo adından doğru şekilde oluşturuluyor mu
- [ ] Ödeme başarılı bir şekilde işleniyor mu
- [ ] Müşteri, seçilen şablonla çalışan bir siteye ulaşıyor mu
- [ ] Onay e-postaları fitness odaklı dil kullanıyor mu

## Şu Ana Kadar FitSite Ağı {#the-fitsite-network-so-far}

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

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Fitness stüdyosu sahiplerine özel hazırlanmış **çok adımlı bir ödeme formu**
- Kayıt akışı boyunca **nişe özgü dil**
- **Minimum sürtünme** — yalnızca temel alanlar, çalışan bir siteye hızlı yol
- Test doğrulamalı **ödeme entegrasyonu**
- Plan seçiminden çalışan siteye kadar **test edilmiş uçtan uca bir akış**

---

**Sıradaki:** [Ders 7: Kendin Yap](lesson-7-branding) — platformu beyaz etiketleyeceğiz ve FitSite'ı bir marka olarak kuracağız.
