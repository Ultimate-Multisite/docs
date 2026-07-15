---
title: 'Ders 8: Müşteri Başlangıç Süreci'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Ders 8: Müşteri Oryantasyonu

Bir müşteriyi kaydolmaya ikna etmek işin sadece yarısıdır. Eğer giriş yaparsa, bunalmış hisseder ve bir daha geri gelmezse, onu kaybetmişsiniz demektir. Bu ders, yeni bir kaydı aktif ve ilgili bir müşteriye dönüştüren deneyimi tasarlıyor.

## Nereden Kaldık {#where-we-left-off}

FitSite, çalışan bir ödeme akışı ile tamamen markalanmış durumda. Şimdi, bir fitness stüdyosu sahibinin kaydını tamamlayıp ilk kez yeni sitesine indiği anı ele alıyoruz.

## Oryantasyon Neden Önemli {#why-onboarding-matters}

Kayıttan sonraki ilk 30 dakika, bir müşterinin kalıp kalmayacağını veya ayrılıp ayrılmayacağını belirler. Şunları yapan bir fitness stüdyosu sahibi:

- Giriş yapar ve zaten bir fitness sitesi gibi görünen bir site görür → kalır
- Ne yapması gerektiğini tam olarak bilir → kalır
- Genel bir WordPress kontrol panelinde kaybolmuş hisseder → ayrılır

Niş şablonlarınız (Ders 4) ilk noktayı hallediyor. Bu ders ise ikinci noktayı hallediyor.

## İlk Giriş Deneyimi {#the-first-login-experience}

### Hoş Geldiniz Kontrol Paneli Widget'ı {#welcome-dashboard-widget}

Yeni müşterileri karşılayan ve onları kurulum boyunca yönlendiren özel bir kontrol paneli widget'ı oluşturun. Bu, ilk giriş yaptıklarında belirgin bir şekilde görünmelidir.

**FitSite Hızlı Başlangıç:**

1. **Stüdyo adınızı ve logonuzu ekleyin** -- Özelleştirici veya Site Kimliği ayarlarına bağlantı
2. **Ders programınızı güncelleyin** -- Doğrudan Dersler sayfa düzenleyicisine bağlantı
3. **Antrenörlerinizi ekleyin** -- Antrenörler sayfa düzenleyicisine bağlantı
4. **İletişim bilgilerinizi ayarlayın** -- İletişim sayfa düzenleyicisine bağlantı
5. **Sitenizi önizleyin** -- Ön yüze bağlantı

Her adım, ilgili sayfaya veya ayarlara doğrudan bağlantı verir. Menüler arasında arama yapmaya gerek yok.

### Kontrol Panelini Basitleştirin {#simplify-the-dashboard}

Yeni müşterilerin her WordPress menü öğesini görmesine gerek yok. Şunları düşünün:

- Fitness sitesi yönetimiyle ilgili olmayan menü öğelerini gizlemek (örneğin, kullanılmıyorsa Yorumlar)
- En çok kullanılan öğeleri başa almak için menüyü yeniden düzenlemek
- Nişe uygun anlamlı özel menü etiketleri eklemek ("Görünüm" yerine "Stüdyonuz" gibi)

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) eklentisi, müşterilerin ne göreceğini kontrol etmenize yardımcı olabilir.

## Hoş Geldiniz E-posta Dizisi {#welcome-email-sequence}

Tek bir hoş geldin e-postası yeterli değildir. Müşterileri ilk haftaları boyunca yönlendiren bir dizi kurun:

### E-posta 1: Hoş Geldiniz (Kayıttan hemen sonra) {#email-1-welcome-immediately-after-signup}

- Konu: "FitSite'a Hoş Geldiniz -- stüdyo web siteniz yayında"
- İçerik: Giriş bağlantısı, hızlı başlangıç adımları, yardım kaynaklarına bağlantı
- Ton: Heyecanlı, teşvik edici, fitness odaklı

### E-posta 2: Hızlı Kazanımlar (1. Gün) {#email-2-quick-wins-day-1}

- Konu: "FitSite'ınızda ilk yapmanız gereken 3 şey"
- İçerik: Logonuzu ekleyin, ana sayfa kahraman görselini güncelleyin, ders programınızı ekleyin
- Nereye tıklayacağınızı gösteren ekran görüntüleri ekleyin

### E-posta 3: Kendinize Özelleştirin (3. Gün) {#email-3-make-it-yours-day-3}

- Konu: "Fitness sitenizi öne çıkarın"
- İçerik: Renkleri özelleştirin, antrenör fotoğrafları ekleyin, stüdyo hikayenizi yazın
- Platformdaki harika fitness sitelerinden örneklere bağlantı verin

### E-posta 4: Yayına Hazır (7. Gün) {#email-4-go-live-day-7}

- Konu: "FitSite'ınızı dünyaya paylaşmaya hazır mısınız?"
- İçerik: Paylaşmadan önce kontrol edilmesi gerekenler listesi, özel alan adı nasıl bağlanır (Growth/Pro kullanıyorsa), sosyal paylaşım ipuçları

:::tip E-posta Otomasyonu
Bu e-postaları e-posta pazarlama platformunuz üzerinden tetiklemek için [Webhooks](/user-guide/integrations/webhooks) veya [Zapier](/user-guide/integrations/zapier) kullanın. Bu, zamanlama üzerinde size daha fazla kontrol sağlar ve etkileşimi izlemenize olanak tanır.
:::

## Yardım Kaynakları {#help-resources}

Fitness stüdyosu sahiplerinin gerçekten sorduğu soruları yanıtlayan nişe özel yardım içerikleri oluşturun:

### Bilgi Tabanı Makaleleri {#knowledge-base-articles}

- "Ders programınızı nasıl güncellersiniz"
- "Antrenör profili ekleme ve düzenleme"
- "Stüdyonuzun logosunu ve renklerini değiştirme"
- "Kendi alan adınızı bağlama" (Growth/Pro müşterileri için)
- "Sitenize rezervasyon widget'ı ekleme"

Bunları teknik olmayan kullanıcılar için yazın. Ekran görüntüleri kullanın. WordPress jargonu kullanmaktan kaçının.

### Video Rehberler {#video-walkthroughs}

Kısa (2-3 dakikalık) ekran kayıtları ile şunları gösterin:

- İlk giriş ve oryantasyon
- Ana sayfayı düzenleme
- Ders programını güncelleme
- Yeni bir antrenör ekleme

Bunlar cilalı yapımlar olmak zorunda değil. Önemli olan, net, faydalı ve nişe özel olmasıdır.

## Hesap Sayfası {#the-account-page}

Ultimate Multisite, müşterilerin aboneliklerini yönettiği müşteri odaklı bir [Hesap Sayfası](/user-guide/client-management/account-page) içerir. Bunu şu amaçlarla özelleştirin:

- Mevcut FitSite planlarını göstermek
- Fitness odaklı avantajlarla yükseltme seçenekleri sergilemek
- Faturalandırma geçmişi ve fatura indirmeleri sağlamak
- Yardım kaynaklarına bağlantı vermek

## Oryantasyon Başarısını Ölçme {#measuring-onboarding-success}

Oryantasyonunuzun işe yarayıp yaramadığını anlamak için bu göstergeleri izleyin:

- **Aktivasyon oranı**: Kayıt olanların yüzde kaçı ilk hafta içinde sitelerini gerçekten özelleştiriyor?
- **İlk hafta girişleri**: Yeni bir müşteri ilk haftasında kaç kez giriş yapıyor?
- **Yeni müşterilerden gelen destek biletleri**: Yüksek hacim, oryantasyonunuzda eksiklikler olduğu anlamına gelir.
- **Deneme-ücretli dönüşüm**: Deneme sürümü sunuyorsanız, yüzde kaçı dönüşüyor?

## FitSite Ağı Şu Ana Kadar {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (alt alan adı modu)
├── Ultimate Multisite (yapılandırılmış + markalanmış)
├── Platform Alan Adı (fitsite.com + wildcard SSL)
├── Site Şablonları (Studio Essential, Gym Pro, Fitness Chain)
├── Ürünler (Starter, Growth, Pro + Sipariş Artırıcılar)
├── Ödeme Akışı (nişe özel, test edilmiş)
├── Markalama (giriş, kontrol paneli, e-postalar, faturalar, pazarlama sitesi)
├── Müşteri Oryantasyonu
│   ├── Hızlı Başlangıç kontrol paneli widget'ı
│   ├── Fitness sitesi yönetimine odaklanmış basitleştirilmiş kontrol paneli
│   ├── 4 e-mazlı hoş geldin dizisi
│   ├── Nişe özel bilgi tabanı
│   ├── Video rehberler
│   └── Özelleştirilmiş hesap sayfası
└── Fiyatlandırma stratejisi için hazır (bir sonraki ders)
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Hızlı Başlangıç widget'ı ile yönlendirilmiş bir ilk giriş deneyimi
- Fitness sitesi yönetimi görevlerine odaklanmış basitleştirilmiş bir kontrol paneli
- Müşterileri ilk haftaları boyunca yönlendiren bir hoş geldin e-posta dizisi
- Teknik olmayan fitness stüdyosu sahipleri için yazılmış nişe özel yardım kaynakları
- Deneyimi izlemek ve geliştirmek için oryantasyon metrikleri

---

**Sonraki:** [Ders 9: Kâr İçin Fiyatlandırma](lesson-9-pricing) -- gelirleri en üst düzeye çıkarmak ve kaybı en aza indirmek için fiyatlandırma stratejisini rafine edeceğiz.
