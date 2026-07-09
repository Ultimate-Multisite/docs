---
title: 'Ders 9: Kâr İçin Fiyatlandırma'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Ders 9: Kâr İçin Fiyatlandırma {#lesson-9-pricing-for-profit}

Ders 5'te FitSite planları için başlangıç fiyatlarını belirlemiştik. Şimdi ise geliri artıracak, yükseltmeleri teşvik edecek ve müşteri kaybını azaltacak tekniklerle fiyatlandırma stratejimizi rafine edeceğiz.

## Nereden Başlamıştık {#where-we-left-off}

FitSite'ta planlar, şablonlar, ödeme akışı (checkout), marka kimliği (branding) ve kullanıcı kabulü (onboarding) hazır durumda. Başlangıç fiyatlandırması aylık 49/99/199 dolardı. Şimdi bu fiyatlandırmayı daha verimli kullanacağız.

## Niş Platformlar İçin Fiyatlandırma İlkeleri {#pricing-principles-for-niche-platforms}

### Maliyete Değil, Değere Göre Fiyatlandırın {#price-on-value-not-cost}

Hosting maliyetleriniz müşteri başına 5-15 dolar olabilir. Bu, fiyatınızın 20 dolar olması gerektiği anlamına gelmez. Siz hosting satmıyorsunuz. Siz şunları satıyorsunuz:

- Özel olarak yapılması 2.000-5.000 dolara mal olacak profesyonel bir fitness web sitesi
- Düşünmek zorunda kalmayacakları sürekli bakım, güncelleme ve güvenlik
- Genel yapıcıların sunmadığı nişe özel özellikler
- Sektörleri için yapılmış bir platformun sağladığı güvenilirlik

Fiyatınızı, ürünü sunmanız için gereken maliyete değil, sunduğunuz değere göre belirleyin.

### Alternatiflere Bağlanın (Anchor to Alternatives) {#anchor-to-alternatives}

Bir fitness stüdyosu sahibi FitSite'ı değerlendirirken şunlarla karşılaştırır:

- **Bir web geliştiricisi tutmak**: 2.000-5.000 dolar peşin + aylık 50-100 dolar bakım
- **Wix/Squarespace**: Aylık 16-45 dolar ama fitness'a özel özellik yok, kendileri kuruyor
- **Hiçbir şey yapmamak**: Çevrimiçi bulamayan üyelerin kaybı

Aylık 49-199 dolar aralığında FitSite, bir geliştiriciden daha ucuz, genel yapıcılardan daha yetenekli ve hiç web sitesi olmamasından sonsuz derecede iyidir.

## Fiyat Varyasyonlarını Uygulama {#implementing-price-variations}

Yıllık fiyatlandırma, bağlılığı teşvik eder ve müşteri kaybını azaltır. Her planın **Price Variations** (Fiyat Varyasyonları) sekmesine gidin ve yıllık seçenekler ekleyin:

| Plan | Aylık | Yıllık (aylık) | Yıllık Toplam | Tasarruf |
|------|---------|-------------------|--------------|---------|
| Starter | $49/ay | $39/ay | $468/yıl | %20 indirim |
| Growth | $99/ay | $79/ay | $948/yıl | %20 indirim |
| Pro | $199/ay | $159/ay | $1,908/yıl | %20 indirim |

Müşterilerin aylık ve yıllık faturalandırma arasında geçiş yapabilmesi için ödeme formunuza bir **Period Selection** (Dönem Seçimi) alanı ekleyin. [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) bölümüne bakın.

### Yıllık Fiyatlandırma Neden İşe Yarar {#why-annual-pricing-works}

- **Sizin için**: Peşin nakit akışı, daha düşük müşteri kaybı (yıllık ödeme yapan müşteriler, orta vadede iptal etme olasılığı daha düşüktür)
- **Onlar için**: Gerçek tasarruf, bütçe öngörülebilirliği

## Kurulum Ücretleri (Setup Fees) {#setup-fees}

Elle yapılandırma gerektiren planlar için tek seferlik bir kurulum ücreti düşünün:

- **Starter**: Kurulum ücreti yok (giriş engellerini kaldırır)
- **Growth**: 99 dolarlık kurulum ücreti (özel alan adı yapılandırması ve ilk danışmanlığı kapsar)
- **Pro**: 299 dolarlık kurulum ücreti (çoklu lokasyon kurulumunu ve kabul çağrısını kapsar)

Kurulum ücretlerini her planın fiyatlandırma bölümünde yapılandırın. Detaylar için [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) bölümüne bakın.

## Deneme Süreleri (Trial Periods) {#trial-periods}

Bir deneme süresi sunmak kayıt sürecindeki engeli azaltır ancak dönüşüm sağlamama riskini beraberinde getirir. FitSite için:

- Yalnızca Starter planında **7 günlük ücretsiz deneme**
- Growth ve Pro planlarında deneme yok (bu müşteriler daha bağlıdır ve ödeme yapmayı beklerler)

Deneme süresini, Starter planının fiyatlandırma bölümünde **Offer Trial** (Deneme Sun) anahtarını etkinleştirerek ve süreyi 7 gün olarak ayarlayarak yapılandırın.

### Denemeleri Dönüşüme Çevirme {#making-trials-convert}

Bir deneme süresi, müşteri deneme süresi boyunca değer deneyimlemediği sürece işe yaramaz. Kullanıcı kabul (onboarding) akışınız (Ders 8) burada kritik öneme sahiptir; karşılama e-postaları, etkileşimi 7 günlük süre içinde artıracak şekilde zamanlanmalıdır.

## İndirim Kodları (Discount Codes) {#discount-codes}

Belirli amaçlar için stratejik indirim kodları oluşturun:

- **FITLAUNCH** -- İlk 3 ay %30 indirim (lansman promosyonu için)
- **ANNUAL20** -- Yıllık planlarda %20 indirim (zaten indirimli değilse)
- **REFERRAL** -- 1 ay ücretsiz (müşteri yönlendirmeleri için)

Bunları oluşturmak için **Ultimate Multisite > Discount Codes** yolunu izleyin. Tüm rehber için [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) bölümüne bakın.

:::tip Varsayılan Olarak İndirim Yapmayın
İndirimler, kalıcı unsurlar değil, stratejik araçlar olmalıdır. Herkes indirim alırsa, bu bir indirim değil, sizin gerçek fiyatınızdır. Bunları belirli kampanyalar, yönlendirmeler ve sınırlı süreli promosyonlar için kullanın.
:::

## Vergi Yönetimi (Tax Handling) {#tax-handling}

Vergi toplama zorunluluğu olan bir yargı alanında faaliyet gösteriyorsanız:

1. Vergi oranlarını **Ultimate Multisite > Settings > Taxes** bölümünde yapılandırın
2. Planlarınıza vergi kategorileri uygulayın
3. Faturaların vergiyi doğru gösterdiğinden emin olun

Detaylı yapılandırma için [Tax Handling](/user-guide/payment-gateways/tax-handling) bölümüne bakın. Uluslararası müşterilere hizmet veriyorsanız, AB uyumluluğu için [VAT addon](/addons/vat) özelliğini düşünün.

## Fiyatlandırmanızı Gözden Geçirme {#reviewing-your-pricing}

Lansmandan sonra, fiyatlandırmayı üç ayda bir tekrar gözden geçirin. Şunlara bakın:

- **Plan bazında dönüşüm oranı**: Starter iyi dönüşüm sağlarken Growth sağlamıyorsa, aralarındaki boşluk çok büyük olabilir.
- **Yükseltme oranı**: Eğer az sayıda müşteri Starter'dan Growth'a yükseliyorsa, Growth planı yeterli ek değeri sunmuyor olabilir.
- **Plan bazında müşteri kaybı**: Eğer yıllık müşteriler daha az müşteri kaybı yaşıyorsa, yıllık fiyatlandırmayı daha çok öne çıkarın.
- **Rakip fiyatlandırması**: Alternatifler ne fiyatlandırıyor? Doğru konumlanmış mısınız?

## Şu Ana Kadar Oluşturduğumuz FitSite Ağı {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (alt alan adı modu)
├── Ultimate Multisite (yapılandırılmış + markalanmış)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/ay veya $468/yıl) + 7 günlük deneme
│   ├── FitSite Growth ($99/ay veya $948/yıl) + 99 dolarlık kurulum ücreti
│   ├── FitSite Pro ($199/ay veya $1,908/yıl) + 299 dolarlık kurulum ücreti
│   └── Order Bumps + Discount Codes
├── Checkout Flow (dönem seçimi anahtarlı)
├── Branding (giriş, dashboard, e-postalar, faturalar, pazarlama sitesi)
├── Customer Onboarding (Hızlı Başlangıç, e-postalar, yardım kaynakları)
├── Pricing Strategy
│   ├── Yıllık indirimler (%20 indirim)
│   ├── Stratejik kurulum ücretleri
│   ├── Starter'da 7 günlük deneme
│   ├── Kampanyalar ve yönlendirmeler için indirim kodları
│   └── Vergi yapılandırması
└── Lansmana hazır (bir sonraki ders)
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Bağlılığı teşvik etmek için %20 indirimli **yıllık fiyatlandırma**
- Kabul çabasını karşılamak için daha yüksek katmanlarda **kurulum ücretleri**
- Kayıt engelini azaltmak için giriş seviyesi planda **bir deneme süresi**
- Lansman, yönlendirme ve kampanyalar için **stratejik indirim kodları**
- Uygun faturalandırma için **vergi yapılandırması**
- Sürekli optimizasyon için bir **fiyatlandırma inceleme çerçevesi**

---

**Sonraki:** [Ders 10: Lansman Günü](lesson-10-launch) -- lansman öncesi kontrol listesi ve yayına geçiş.
