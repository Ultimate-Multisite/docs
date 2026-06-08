---
title: 'Dars 8: Müştəri Qeydiyyatı'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Ders 8: Müşteri Başlangıç Süreci (Onboarding)

Bir müşteriyi kaydolmaya ikna etmek işin sadece yarısıdır. Eğer giriş yaparsa, bunalmış hisseder ve bir daha geri gelmezse, onu kaybetmişsiniz demektir. Bu ders, yeni bir kaydı aktif, ilgili bir müşteriye dönüştüren deneyimi tasarlıyor.

## Nereden Kalmıştık

FitSite, çalışan bir ödeme akışı ile tamamen markalanmış durumda. Şimdi, bir fitness stüdyosu sahibinin kaydını tamamlayıp ilk kez yeni sitesine geldiği anı ele alıyoruz.

## Onboarding Neden Önemli?

Kayıttan sonraki ilk 30 dakika, bir müşterinin kalıp kalmayacağını veya ayrılıp ayrılmayacağını belirler. Aşağıdaki gibi bir fitness stüdyosu sahibi:

- Giriş yapar ve zaten bir fitness sitesi gibi görünen bir site görür → kalır
- Ne yapması gerektiğini tam olarak bilir → kalır
- Genel bir WordPress dashboard'unda kaybolmuş hisseder → ayrılır

Niş (Niş) şablonlarınız (Ders 4) ilk noktayı hallediyor. Bu ders ise ikinci noktayı ele alıyor.

## İlk Giriş Deneyimi

### Hoş Geldiniz Dashboard Widget'ı

Yeni müşterileri karşılayan ve kurulum boyunca yönlendiren özel bir dashboard widget'ı oluşturun. Bu, ilk giriş yaptıklarında belirgin bir şekilde görünmelidir.

**FitSite Hızlı Başlangıç:**

1. **Stüdyo adınızı ve logonuzu ekleyin** -- Customizer veya Site Identity ayarlarına bağlantı
2. **Ders programınızı güncelleyin** -- Doğrudan Classes sayfa düzenleyicisine bağlantı
3. **Antrenörlerinizi ekleyin** -- Trainers sayfa düzenleyicisine bağlantı
4. **İletişim bilgilerinizi ayarlayın** -- Contact sayfa düzenleyicisine bağlantı
5. **Sitenizi önizleyin** -- Frontend'e bağlantı

Her adım, ilgili sayfaya veya ayarlara doğrudan bağlantı verir. Menülerde arama yapmaya gerek yok.

### Dashboard'u Basitleştirin

Yeni müşterilerin her WordPress menü öğesini görmesine gerek yok. Şunları düşünün:

- Fitness sitesi yönetimiyle ilgili olmayan menü öğelerini gizlemek (örneğin, kullanılmıyorsa Yorumlar)
- En çok kullanılan öğeleri başa almak için menüyü yeniden düzenlemek
- Nişe uygun anlamlı özel menü etiketleri eklemek ("Görünüm" yerine "Stüdyonuz" gibi)

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) eklentisi, müşterilerin ne göreceğini kontrol etmenize yardımcı olabilir.

## Hoş Geldiniz E-posta Dizisi (Welcome Email Sequence)

Tek bir hoş geldin e-postası yeterli değildir. Müşterileri ilk haftaları boyunca yönlendiren bir dizi kurun:

### E-posta 1: Hoş Geldiniz (Kayıttan hemen sonra)

- Konu: "FitSite'a Hoş Geldiniz -- stüdyo web siteniz yayında"
- İçerik: Giriş bağlantısı, hızlı başlangıç adımları, yardım kaynaklarına bağlantı
- Ton: Heyecanlı, teşvik edici, fitness odaklı

### E-posta 2: Hızlı Kazanımlar (1. Gün)

- Konu: "FitSite'ınızda ilk yapmanız gereken 3 şey"
- İçerik: Logonuzu ekleyin, ana sayfa kahraman görselini güncelleyin, ders programınızı ekleyin
- Nereye tıklayacağınızı gösteren ekran görüntüleri ekleyin

### E-posta 3: Kendinize Özelleştirin (3. Gün)

- Konu: "Fitness sitenizi öne çıkarın"
- İçerik: Renkleri özelleştirin, antrenör fotoğrafları ekleyin, stüdyo hikayenizi yazın
- Platformdaki harika fitness sitelerinden örneklere bağlantı verin

### E-posta 4: Yayına Hazır (7. Gün)

- Konu: "FitSite'ınızı dünyaya paylaşmaya hazır mısınız?"
- İçerik: Paylaşmadan önce kontrol edilmesi gerekenler listesi, özel alan adı nasıl bağlanır (Growth/Pro'daysa), sosyal paylaşım ipuçları

:::tip E-posta Otomasyonu
Bu e-postaları e-posta pazarlama platformunuz üzerinden tetiklemek için [Webhooks](/user-guide/integrations/webhooks) veya [Zapier](/user-guide/integrations/zapier) kullanın. Bu size zamanlama üzerinde daha fazla kontrol sağlar ve etkileşimi izlemenize olanak tanır.
:::

## Yardım Kaynakları

Fitness stüdyosu sahiplerinin gerçekten sorduğu soruları yanıtlayan nişe özel yardım içerikleri oluşturun:

### Bilgi Tabanı Makaleleri

- "Ders programınızı nasıl güncellersiniz"
- "Antrenör profilleri ekleme ve düzenleme"
- "Stüdyonuzun logosunu ve renklerini değiştirme"
- "Kendi alan adınızı bağlama" (Growth/Pro müşterileri için)
- "Sitenize bir rezervasyon widget'ı ekleme"

Bunları teknik olmayan kullanıcılar için yazın. Ekran görüntüleri kullanın. WordPress jargonundan kaçının.

### Video Rehberler

Kısa (2-3 dakikalık) ekran kayıtları şunları göstermeli:

- İlk giriş ve oryantasyon
- Ana sayfayı düzenleme
- Ders programını güncelleme
- Yeni bir antrenör ekleme

Bunlar cilalı yapımlar olmak zorunda değil. Önemli olan net, faydalı ve nişe özel olmasıdır.

## Hesap Sayfası

Ultimate Multisite, müşterilerin aboneliklerini yönettiği müşteri odaklı bir [Account Page](/user-guide/client-management/account-page) içerir. Bunu şu amaçlarla özelleştirin:

- Mevcut FitSite planlarını göstermek
- Fitness odaklı avantajlarla yükseltme seçenekleri sergilemek
- Faturalandırma geçmişi ve fatura indirmeleri sağlamak
- Yardım kaynaklarına bağlantı vermek

## Onboarding Başarısını Ölçme

Onboarding'inizin işe yarayıp yaramadığını anlamak için bu göstergeleri izleyin:

- **Aktivasyon oranı**: Kayıt olanların yüzde kaçı ilk hafta içinde sitelerini gerçekten özelleştiriyor?
- **İlk hafta girişleri**: Yeni bir müşteri ilk haftasında kaç kez giriş yapıyor?
- **Yeni müşterilerden gelen destek biletleri**: Yüksek hacim, onboarding'inizde eksiklikler olduğu anlamına gelir
- **Deneme-ücretli dönüşüm**: Deneme sunuyorsanız, yüzde kaçı dönüşüyor?

## FitSite Ağı Şu Ana Kadar

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

## Bu Derste Neler İnşa Ettik

- Hızlı Başlangıç widget'ı ile yönlendirilmiş bir ilk giriş deneyimi
- Fitness sitesi yönetimi görevlerine odaklanmış basitleştirilmiş bir dashboard
- Müşterileri ilk haftaları boyunca yönlendiren bir hoş geldin e-posta dizisi
- Teknik olmayan fitness stüdyosu sahipleri için yazılmış nişe özel yardım kaynakları
- Deneyimi izlemek ve geliştirmek için onboarding metrikleri

---

**Sonraki:** [Ders 9: Kâr İçin Fiyatlandırma](lesson-9-pricing) -- kârı en üst düzeye çıkarmak ve kaybı en aza indirmek için fiyatlandırma stratejisini rafine edeceğiz.
