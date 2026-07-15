---
title: 'Ders 3: Ağınızı Kurma'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Ders 3: Ağınızı Kurmak

Artık inşa etme zamanı. Bu derste Ultimate Multisite'ı kuracak ve FitSite ağının temelini oluşturacaksınız. Buradaki her karar, fitness nişine uygun düşünülerek veriliyor.

## Nerede Kalmıştık {#where-we-left-off}

Nişimizi fitness stüdyoları olarak belirledik ve bu fırsatı doğruladık. Şimdi bu fikri çalışan bir platforma dönüştürüyoruz.

## Barındırma (Hosting) Seçimi {#choosing-your-hosting}

Barındırma seçimi, tek bir web sitesi için olmasından çok, bir niş platform için önemlidir. Tek bir site barındırmıyorsunuz; onlarca veya yüzlerce siteye ulaşacak bir ağ barındırıyorsunuz.

### Nelere Bakmalısınız {#what-to-look-for}

- **WordPress Multisite desteği**: Tüm barındırma sağlayıcıları multisite'ı iyi yönetemez.
- **Wildcard SSL**: Alt alan adına dayalı ağlar için çok önemlidir.
- **Ölçeklenebilir kaynaklar**: Taşınma yapmadan büyümeye alanınız olmalı.
- **Ultimate Multisite entegrasyonu**: Otomatik alan adı eşleştirme ve SSL, önemli operasyonel çabayı azaltır.

### Önerilen Yaklaşım {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) listesindeki bir sağlayıcı seçin. Bunlar Ultimate Multisite ile test edilmiş ve alan adı eşleştirme ile SSL otomasyonu için ihtiyacınız olan entegrasyonları sağlamaktadır.

FitSite için, bir alt alan adı (subdomain) yapılandırması kullanacağız. Bu, müşteri sitelerinin başlangıçta isteğe bağlı olarak kendi alan adlarını eşleştirmeden önce `stüdyoadı.fitsite.com` olarak görünmesi anlamına gelir.

## WordPress Multisite Kurulumu {#installing-wordpress-multisite}

Eğer henüz bir WordPress Multisite kurulumunuz yoksa:

1. WordPress'i barındırma sağlayıcınızda kurun.
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) kılavuzunu takip edin.
3. İstendiğinde **alt alan adı (subdomain)** yapılandırmasını seçin.

:::tip Alt Alan Adları Neden?
Alt alan adları, her müşteri sitesine bir yol (`fitsite.com/stüdyo`) yerine kendine özgü bir adres (`stüdyo.fitsite.com`) verir. Bu, müşterileriniz için daha profesyoneldir ve kalıcı bağlantı (permalink) çakışmalarını önler. Detaylı bir karşılaştırma için [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101)'e bakın.
:::

## Ultimate Multisite Kurulumu {#installing-ultimate-multisite}

Şu adımları izlemek için [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kılavuzunu takip edin:

1. Eklentiyi ağ çapında yükleyin ve etkinleştirin.
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)'ı çalıştırın.

Kurulum sihirbazı sırasında, FitSite nişini aklınızda bulundurun:

- **Para Birimi (Currency)**: Fitness stüdyosu müşterilerinizin kullandığı para birimini ayarlayın.
- **Şirket adı (Company name)**: "FitSite" (veya seçtiğiniz marka adı).
- **Şirket logosu (Company logo)**: Marka logonuzu yükleyin -- bu, faturalarda ve e-postalarda görünür.

## Fitness Nişine Göre Yapılandırma {#configuring-for-the-fitness-niche}

Ultimate Multisite kurulduktan sonra, bu nişe özel yapılandırma seçimlerini yapın:

### Genel Ayarlar {#general-settings}

**Ultimate Multisite > Settings** bölümüne gidin ve şunları yapılandırın:

- **Site adı (Site name)**: FitSite
- **Varsayılan rol (Default role)**: Administrator -- fitness stüdyosu sahiplerinin site içerikleri üzerinde tam kontrole ihtiyacı var.
- **Kayıt (Registration)**: Stüdyo sahiplerinin kendilerinin kaydolabilmesi için kullanıcı kaydını etkinleştirin.

### E-posta Yapılandırması {#email-configuration}

Sistem e-postalarınız nişinizin dilini konuşmalıdır. **Ultimate Multisite > Settings > Emails** bölümüne gidin ve şunları özelleştirin:

- Genel "yeni siteniz" dilini fitness'a özel mesajlarla değiştirin.
- Örnek hoş geldiniz konusu: "Fitness stüdyosu web siteniz hazır"
- Örnek hoş geldiniz metni: Stüdyolarına, derslerine ve fitness sitelerine nasıl başlanacağına dair referanslar verin.

Bunları 8. Derste (Müşteri Kaydı) daha da geliştireceğiz, ancak tonu şimdi ayarlamak, erken test kayıtları bile nişe özel hissettirecektir.

### Alan Adı Yapılandırması {#domain-configuration}

Uyumlu bir barındırma sağlayıcısı kullanıyorsanız, alan adı eşleştirmesini şimdi yapılandırın:

1. **Ultimate Multisite > Settings > Domain Mapping** bölümüne gidin.
2. Belirli barındırıcınız için entegrasyon kılavuzunu takip edin.
3. Yeni alt sitelerin otomatik olarak SSL aldığından emin olun.

Bu, bir sonraki derste şablonlar ve test siteleri oluşturmaya başladığımızda her şeyin uçtan uca çalıştığından emin olur.

## Şu Ana Kadar FitSite Ağı {#the-fitsite-network-so-far}

Bu dersin sonunda sahip olduklarınız şunlardır:

```
FitSite Ağı
├── WordPress Multisite (alt alan adı modunda)
├── Ultimate Multisite (kurulmuş ve yapılandırılmış)
├── Wildcard SSL'li Barındırma
├── Yapılandırılmış alan adı eşleştirmesi
├── Nişe özel e-posta şablonları (başlangıç)
└── Site şablonlarına hazır (bir sonraki ders)
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Alt alan adı modunda çalışan bir WordPress Multisite kurulumu
- FitSite markalamasıyla kurulmuş ve yapılandırılmış Ultimate Multisite
- Büyüyen bir ağ için kurulmuş Barındırma ve SSL
- Barındırma sağlayıcınız için yapılandırılmış alan adı eşleştirmesi
- İlk günden itibaren belirlenmiş nişe özel e-posta tonu

---

**Sonraki:** [Ders 4: Niş Şablonları Oluşturma](lesson-4-templates) -- fitness stüdyosu sahiplerinin gerçekten kullanmak isteyeceği site şablonları oluşturacağız.
