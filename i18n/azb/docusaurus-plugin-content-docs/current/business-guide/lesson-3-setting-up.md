---
title: 'Lesson 3: Your Network Setup'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Ders 3: Ağınızı Kurmak

İnşa etme zamanı. Bu derste Ultimate Multisite'ı kuracak ve FitSite ağının temelini oluşturacağız. Buradaki her karar, fitness nişine uygun düşünülerek veriliyor.

## Nereden Kaldık

Nişimizi fitness stüdyoları olarak belirledik ve bu fırsatı doğruladık. Şimdi bu fikri çalışan bir platforma dönüştürüyoruz.

## Hosting Seçimi

Hosting seçimin, tek bir web sitesi için olmasından çok, niş bir platform için önemlidir. Tek bir site barındırmıyorsunuz; onlarca veya yüzlerce siteye büyüyecek bir ağ barındırıyorsunuz.

### Nelere Bakmalısınız

- **WordPress Multisite desteği**: Tüm hosting sağlayıcıları multisite'ı iyi yönetemez.
- **Wildcard SSL**: Alt alan adına dayalı ağlar için çok önemlidir.
- **Ölçeklenebilir kaynaklar**: Taşınmadan büyüyecek alanınız olmalı.
- **Ultimate Multisite entegrasyonu**: Otomatik alan eşleştirme ve SSL, operasyonel çabayı önemli ölçüde azaltır.

### Önerilen Yaklaşım

[Compatible Providers](/user-guide/host-integrations/closte) listesindeki bir sağlayıcı seçin. Bunlar Ultimate Multisite ile test edilmiş ve alan eşleştirme ile SSL otomasyonu için ihtiyacınız olan entegrasyonları sağlar.

FitSite için, bir alt alan adı (subdomain) yapılandırması kullanacağız. Bu, müşteri sitelerinin başlangıçta isteğe bağlı olarak kendi alan adlarını eşleştirmeden önce `stüdyoadı.fitsite.com` olarak görünmesi anlamına gelir.

## WordPress Multisite Kurulumu

Eğer zaten bir WordPress Multisite kurulumunuz yoksa:

1. Hosting sağlayıcınızda WordPress kurun.
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) kılavuzunu takip edin.
3. İstenildiğinde **subdomain** yapılandırmasını seçin.

:::tip Neden Subdomain?
Subdomain'ler, her müşteri sitesine bir yol (`fitsite.com/stüdyo`) yerine kendine özgü bir adres (`stüdyo.fitsite.com`) verir. Bu, müşterileriniz için daha profesyoneldir ve permalink çakışmalarını önler. Detaylı bir karşılaştırma için [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101)'e bakın.
:::

## Ultimate Multisite Kurulumu

Aşağıdaki adımları izleyerek [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kılavuzunu takip edin:

1. Eklentiyi (plugin) ağ çapında yükleyin ve etkinleştirin.
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)'ı çalıştırın.

Kurulum sihirbazı sırasında, FitSite nişini aklınızda tutun:

- **Currency (Para Birimi)**: Fitness stüdyosu müşterilerinizin kullandığı para birimini ayarlayın.
- **Company name (Şirket adı)**: "FitSite" (veya seçtiğiniz marka adı).
- **Company logo (Şirket logosu)**: Marka logonuzu yükleyin -- bu, faturalarda ve e-postalarda görünür.

## Fitness Nişine Göre Yapılandırma

Ultimate Multisite kurulduktan sonra, bu nişe özel yapılandırma seçimlerini yapın:

### Genel Ayarlar

**Ultimate Multisite > Settings** bölümüne gidin ve şunları yapılandırın:

- **Site name (Site adı)**: FitSite
- **Default role (Varsayılan rol)**: Administrator -- fitness stüdyosu sahiplerinin site içerikleri üzerinde tam kontrole ihtiyacı var.
- **Registration (Kayıt)**: Stüdyo sahiplerinin kendilerinin kaydolabilmesi için kullanıcı kaydını etkinleştirin.

### E-posta Yapılandırması

Sistem e-postalarınız nişinizin dilini konuşmalı. **Ultimate Multisite > Settings > Emails** bölümüne gidin ve şunları özelleştirin:

- Genel "yeni siteniz" dilini fitness'a özel mesajlarla değiştirin.
- Örnek hoş geldiniz konusu: "Fitness stüdyosu web siteniz hazır"
- Örnek hoş geldiniz metni: Stüdyolarına, derslerine ve fitness sitelerine nasıl başlayacaklarına atıfta bulunun.

Bunları 8. Derste (Müşteri Kaydı) daha da geliştireceğiz, ancak tonu şimdi ayarlamak, erken test kayıtları bile nişe özel hissettirir.

### Alan Adı Yapılandırması

Uyumlu bir hosting sağlayıcısı kullanıyorsanız, alan eşleştirmeyi (domain mapping) şimdi yapılandırın:

1. **Ultimate Multisite > Settings > Domain Mapping** bölümüne gidin.
2. Belirli hosting sağlayıcınız için entegrasyon kılavuzunu takip edin.
3. Yeni subsitelerin otomatik olarak SSL aldığından emin olun.

Bu, bir sonraki derste şablonlar ve test siteleri oluşturmaya başladığımızda, her şeyin uçtan uca çalıştığından emin olur.

## FitSite Ağı Şu Ana Kadar

Bu dersin sonunda sahip olduklarınız şunlardır:

```
FitSite Ağı
├── WordPress Multisite (subdomain modunda)
├── Ultimate Multisite (kurulmuş ve yapılandırılmış)
├── Wildcard SSL'li Hosting
├── Yapılandırılmış Alan Eşleştirme
├── Nişe özel e-posta şablonları (başlangıç)
└── Site şablonlarına hazır (bir sonraki ders)
```

## Bu Derste Neler Yaptık

- Subdomain modunda çalışan bir WordPress Multisite kurulumu
- FitSite markasıyla kurulmuş ve yapılandırılmış Ultimate Multisite
- Büyüyen bir ağ için kurulmuş Hosting ve SSL
- Hosting sağlayıcınız için yapılandırılmış Alan Eşleştirme
- İlk günden itibaren belirlenmiş nişe özel e-posta tonu

---

**Sonraki:** [Ders 4: Niş Şablonları Oluşturma](lesson-4-templates) -- fitness stüdyosu sahiplerinin gerçekten kullanmak isteyeceği site şablonları oluşturacağız.
