---
title: Multisite Kurulum Sihirbazı
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Çoklu Site Kurulum Sihirbazı

Ultimate Multisite, standart bir WordPress kurulumunu otomatik olarak WordPress Multisite ağına dönüştüren yerleşik bir sihirbaz içerir. Bu sayede `wp-config.php` dosyasını manuel olarak düzenlemenize veya veritabanı komutları çalıştırmanıza gerek kalmaz.

:::tip
WordPress kurulumunuz zaten bir Multisite ağı olarak çalışıyorsa bu adımı tamamen atlayabilirsiniz. Sihirbaz yalnızca Multisite henüz etkinleştirilmemişse görünür.
:::

## Sihirbaz Ne Zaman Görünür?

Ultimate Multisite'ı standart (Multisite olmayan) bir WordPress kurulumunda etkinleştirdiğinizde, eklenti Multisite'ın etkin olmadığını algılar ve sizi normal kurulum sihirbazı yerine otomatik olarak Çoklu Site Kurulum Sihirbazı'na yönlendirir.

Ayrıca **WP Admin > Ultimate Multisite > Multisite Setup** yolundan doğrudan erişebilirsiniz.

## Ön Koşullar

Sihirbazı çalıştırmadan önce şunlardan emin olun:

- WordPress kurulumunuza **yönetici erişiminiz** var
- Sunucunuzdaki `wp-config.php` dosyası web sunucusu tarafından **yazılabilir** durumda
- Dosyalarınızın ve veritabanınızın **güncel bir yedeği** var

:::warning
Sihirbaz, `wp-config.php` dosyanızı değiştirir ve yeni veritabanı tabloları oluşturur. Devam etmeden önce mutlaka yedek alın.
:::

## Adım 1: Hoş Geldiniz

İlk ekran, WordPress Multisite'ın ne olduğunu ve sihirbazın neler yapacağını açıklar:

- WordPress yapılandırmanızda Multisite özelliğini etkinleştirir
- Gerekli ağ veritabanı tablolarını oluşturur
- Gerekli multisite sabitlerini `wp-config.php` dosyasına ekler
- Ultimate Multisite'ı ağ genelinde etkinleştirir

![Çoklu Site Kurulum Sihirbazı - Hoş Geldiniz adımı](/img/installation/multisite-wizard/wizard-welcome.png)

Devam etmek için **Continue** düğmesine tıklayın.

## Adım 2: Ağ Yapılandırması

Bu adım, ağ ayarlarınızı yapılandırmanızı ister.

### Site Yapısı

Ağ sitelerinizin nasıl düzenleneceğini seçin:

- **Alt alan adları** (Önerilen) — Siteler kendi alt alan adını alır, örneğin `site1.sizinalanadiniz.com`
- **Alt dizinler** — Siteler yol olarak oluşturulur, örneğin `sizinalanadiniz.com/site1`

:::note
Alt alan adlarını seçerseniz, alan adınız için **wildcard DNS** ve **wildcard SSL sertifikası** yapılandırmanız gerekecektir. Çoğu yönetilen WordPress sunucusu bunu otomatik olarak halleder. Ayrıntılı karşılaştırma için [Ultimate Multisite 101](./ultimate-multisite-101) sayfasına bakın.
:::

### Ağ Başlığı

Ağınız için bir ad girin. Varsayılan olarak mevcut site başlığınıza "Network" eklenerek oluşturulur. Bunu daha sonra ağ ayarlarından değiştirebilirsiniz.

### Ağ Yöneticisi E-postası

Ağ yönetimi bildirimleri için kullanılacak e-posta adresi. Varsayılan olarak mevcut kullanıcının e-posta adresidir.

![Çoklu Site Kurulum Sihirbazı - Ağ Yapılandırması](/img/installation/multisite-wizard/wizard-network-configuration.png)

Alanları doldurduktan sonra devam etmek için **Continue** düğmesine tıklayın.

## Adım 3: Kurulum

Başlamak için **Install** düğmesine tıklayın. Sihirbaz, her birinin ilerlemesini gerçek zamanlı olarak gösteren beş otomatik adımı sırayla gerçekleştirir:

![Çoklu Site Kurulum Sihirbazı - Kurulum bekliyor](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Adım | Açıklama |
|------|----------|
| **Enable Multisite** | `wp-config.php` dosyasına `WP_ALLOW_MULTISITE` sabitini ekler |
| **Create Network** | Multisite veritabanı tablolarını (`wp_site`, `wp_sitemeta`, `wp_blogs`, vb.) oluşturur ve ağ yapılandırmanızla doldurur |
| **Update Configuration** | `wp-config.php` dosyasına son multisite sabitlerini ekler (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, vb.) |
| **Fix Cookies** | Etkinleştirme sonrası kimlik doğrulama sorunlarını önlemek için ağ meta verilerinde site URL'sinin doğru olduğundan emin olur |
| **Network Activate Plugin** | Ultimate Multisite'ı ağ genelinde etkinleştirerek tüm ağda çalışmasını sağlar |

Her adım şu durumlardan birini gösterir:

- **Pending** — İşlenmeyi bekliyor
- **Installing...** — Şu anda çalışıyor
- **Success!** — Başarıyla tamamlandı
- **Hata mesajı** — Bir hata oluştu (mesaj sorunu açıklayacaktır)

Tüm adımlar başarıyla tamamlandığında, her öğe için yeşil bir "Success!" durumu göreceksiniz:

![Çoklu Site Kurulum Sihirbazı - Kurulum tamamlandı](/img/installation/multisite-wizard/wizard-installation-complete.png)

Ardından sihirbaz otomatik olarak tamamlanma ekranına geçecektir.

## Adım 4: Tamamlandı

Kurulum tamamlandığında, WordPress Multisite'ın etkinleştirildiğini onaylayan bir başarı mesajı göreceksiniz.

![Çoklu Site Kurulum Sihirbazı - Kurulum Tamamlandı](/img/installation/multisite-wizard/wizard-complete.png)

Artık WaaS platformunuzu yapılandırmak (şirket bilgileri, varsayılan içerik, ödeme ağ geçitleri, vb.) için Ultimate Multisite kurulum sihirbazına devam edebilirsiniz.

:::note
Multisite kurulumu tamamlandıktan sonra, tarayıcınız yeni etkinleştirilen ağ yöneticisi üzerinden yönlendirilecektir. Kimlik doğrulama çerezleri multisite ortamı için güncellendiğinden tekrar giriş yapmanız gerekebilir.
:::

## Manuel Kurulum Alternatifi

Sihirbaz `wp-config.php` dosyanıza yazamıyorsa (dosya izinleri veya sunucu kısıtlamaları nedeniyle), manuel olarak eklemeniz gereken tam kodu görüntüleyecektir:

1. `/* That's all, stop editing! */` satırının üstüne eklenmesi gereken **wp-config.php sabitleri**
2. Seçtiğiniz site yapısına (alt alan adı veya alt dizin) uygun **.htaccess yönlendirme kuralları**

Manuel değişiklikleri yaptıktan sonra sayfayı yenileyin; sihirbaz multisite'ın artık etkin olduğunu algılayacaktır.

## Sorun Giderme

### Sihirbaz wp-config.php dosyasının yazılabilir olmadığını söylüyor

Web sunucusu işleminin `wp-config.php` dosyasına yazma izni olması gerekir. Şunlardan birini yapabilirsiniz:

- Dosya izinlerini geçici olarak `644` veya `666` olarak değiştirin
- Sihirbaz tarafından sağlanan manuel kurulum alternatifi talimatlarını kullanın
- Barındırma sağlayıcınızdan yardım isteyin

### Kurulumdan sonra sitelere erişilemiyor (alt alan adları)

Alt alan adı yapısını seçtiyseniz, alan adınız için **wildcard DNS** yapılandırmanız gerekir. Bir DNS kaydı ekleyin:

```
Type: A (or CNAME)
Host: *
Value: [sunucu IP adresiniz]
```

Bunu nasıl yapılandıracağınızdan emin değilseniz barındırma sağlayıcınıza danışın.

### Kurulumdan sonra kimlik doğrulama sorunları

Multisite kurulumundan sonra oturumunuz kapatılıyorsa veya çerez hataları yaşıyorsanız:

1. Site için tarayıcı çerezlerinizi temizleyin
2. `sizinalanadiniz.com/wp-login.php` adresinden tekrar giriş yapın
3. Sorun devam ederse, `wp-config.php` dosyanızda `COOKIE_DOMAIN` değerinin `false` olarak ayarlanmadığından emin olun — bu, alt alan adı multisite kurulumlarında bilinen bir sorundur

### Kurulum sırasında bir adım başarısız oldu

Kurulum adımlarından biri hata gösteriyorsa:

1. Görüntülenen hata mesajını not edin
2. Yapılandırma adımına geri dönün ve tekrar deneyin
3. Hata devam ederse, daha fazla ayrıntı için sunucunuzun PHP hata günlüğünü kontrol edin
4. Zaten tamamlanmış adımlar sonraki çalıştırmalarda atlanacaktır (yükleyici idempotent'tir)
