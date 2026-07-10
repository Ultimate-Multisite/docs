---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Kurulum Sihirbazı {#multisite-setup-wizard}

Ultimate Multisite, standart bir WordPress kurulumunu otomatik olarak bir WordPress Multisite ağına dönüştüren yerleşik bir sihirbaz içerir. Bu sayede `wp-config.php` dosyasını manuel olarak düzenleme veya veritabanı komutları çalıştırma ihtiyacınız ortadan kalkar.

:::tip
Eğer WordPress kurulumunuz zaten bir Multisite ağı olarak çalışıyorsa, bu adımı tamamen atlayabilirsiniz. Sihirbaz yalnızca Multisite henüz etkinleştirilmediğinde görünür.
:::

## Sihirbaz Ne Zaman Görünür? {#when-does-the-wizard-appear}

Ultimate Multisite'ı standart (Multisite olmayan) bir WordPress kurulumunda etkinleştirdiğinizde, eklenti Multisite'ın etkinleştirilmediğini algılar ve sizi normal kurulum sihirbazı yerine otomatik olarak Multisite Kurulum Sihirbazı'na yönlendirir.

Ayrıca buraya doğrudan erişebilirsiniz: **WP Admin > Ultimate Multisite > Multisite Setup**.

## Ön Koşullar {#prerequisites}

Sihirbazı çalıştırmadan önce şunlardan emin olun:

- WordPress kurulumunuzda **yönetici erişiminiz** olmalı
- Sunucunuzun `wp-config.php` dosyası web sunucusu tarafından **yazılabilir** olmalı
- Dosyalarınızın ve veritabanınızın **güncel bir yedeği** olmalı

:::warning
Sihirbaz, `wp-config.php` dosyanızı değiştirir ve yeni veritabanı tabloları oluşturur. Devam etmeden önce her zaman bir yedek oluşturun.
:::

## Adım 1: Hoş Geldiniz {#step-1-welcome}

İlk ekran, WordPress Multisite'ın ne olduğunu ve sihirbazın ne yapacağını açıklar:

- WordPress yapılandırmasında Multisite özelliğini etkinleştirme
- Gerekli ağ veritabanı tablolarını oluşturma
- Gerekli multisite sabitlerini `wp-config.php` dosyasına ekleme
- Ultimate Multisite'ı ağ genelinde etkinleştirme

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Devam etmek için **Continue**'a tıklayın.

## Adım 2: Ağ Yapılandırması {#step-2-network-configuration}

Bu adımda ağ ayarlarınızı yapılandırmanız istenir.

### Site Yapısı {#site-structure}

Ağ sitelerinizin nasıl organize edileceğini seçin:

- **Alt Alan Adları** (Önerilir) — Siteler kendi alt alan adlarına sahip olur, örn: `site1.alanadiniz.com`
- **Alt Dizinler** — Siteler yol olarak oluşturulur, örn: `alanadiniz.com/site1`

:::note
Alt alan adlarını seçerseniz, alan adınız için **wildcard DNS** ve **wildcard SSL sertifikası** yapılandırmanız gerekir. Çoğu yönetilen WordPress barındırma hizmeti bunu otomatik olarak halleder. Detaylı bir karşılaştırma için [Ultimate Multisite 101](./ultimate-multisite-101) adresine bakın.
:::

### Ağ Başlığı {#network-title}

Ağınız için bir isim girin. Bu, varsayılan olarak mevcut site başlığınız olur ve sonuna "Network" eklenir. Bunu daha sonra ağ ayarlarından değiştirebilirsiniz.

### Ağ Yönetici E-postası {#network-admin-email}

Ağ yönetimi bildirimleri için kullanılan e-posta adresi. Bu, mevcut kullanıcının e-posta adresine varsayılan olarak ayarlanır.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Alanları doldurduktan sonra devam etmek için **Continue**'a tıklayın.

## Adım 3: Kurulum {#step-3-installation}

Başlamak için **Install** düğmesine tıklayın. Sihirbaz, sırayla beş otomatik adım gerçekleştirir ve her adım ilerlemesini gerçek zamanlı olarak gösterir:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Adım | Açıklama |
|------|-------------|
| **Enable Multisite** | `wp-config.php` dosyasına `WP_ALLOW_MULTISITE` sabitini ekler |
| **Create Network** | Multisite veritabanı tablolarını (`wp_site`, `wp_sitemeta`, `wp_blogs` vb.) oluşturur ve bunları ağ yapılandırmanızla doldurur |
| **Update Configuration** | Son multisite sabitlerini `wp-config.php` dosyasına ekler (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` vb.) |
| **Fix Cookies** | Aktivasyondan sonra kimlik doğrulama sorunlarını önlemek için site URL'sinin ağ meta verilerinde doğru olduğundan emin olur |
| **Network Activate Plugin** | Ultimate Multisite'ı ağ genelinde etkinleştirir |

Her adım bu durumlardan birini gösterir:

- **Pending** — İşlenmeyi bekliyor
- **Installing...** — Şu anda çalışıyor
- **Success!** — Başarıyla tamamlandı
- **Error message** — Bir hata oluştu (mesaj sorunu açıklayacaktır)

Tüm adımlar başarıyla tamamlandığında, her öğe için yeşil bir "Success!" durumu göreceksiniz:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sihirbaz daha sonra otomatik olarak tamamlama ekranına geçecektir.

## Adım 4: Tamamlandı {#step-4-complete}

Kurulum tamamlandığında, WordPress Multisite'ın etkinleştirildiğini doğrulayan bir başarı mesajı göreceksiniz.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Artık WaaS platformunuzu yapılandırmak için Ultimate Multisite kurulum sihirbazına devam edebilir (şirket detayları, varsayılan içerik, ödeme ağ geçitleri vb.).

:::note
Multisite kurulumu tamamlandıktan sonra, tarayıcınız yeni etkinleştirilen ağ yöneticisi üzerinden yönlendirilecektir. Multisite ortamı için kimlik doğrulama çerezleri güncellendiği için tekrar oturum açmanız gerekebilir.
:::

## Manuel Kurulum Yedeklemesi {#manual-setup-fallback}

Sihirbaz, `wp-config.php` dosyanıza yazamıyorsa (dosya izinleri veya sunucu kısıtlamaları nedeniyle), manuel olarak eklemeniz gereken kodu tam olarak gösterecektir:

1. `/* That's all, stop editing! */` satırının üzerine eklenmesi gereken **wp-config.php sabitleri**
2. Seçtiğiniz site yapısına (alt alan adı veya alt dizin) uygun **.htaccess yeniden yazma kuralları**

Manuel değişiklikleri yaptıktan sonra sayfayı yenileyin ve sihirbaz Multisite'ın artık aktif olduğunu algılayacaktır.

## Sorun Giderme {#troubleshooting}

### Sihirbaz wp-config.php'nin yazılabilir olmadığını söylüyor {#the-wizard-says-wp-configphp-is-not-writable}

Web sunucusu işleminin `wp-config.php` dosyasına yazma iznine ihtiyacı var. Ya şunlardan birini yapabilirsiniz:

- Dosya izinlerini geçici olarak `644` veya `666` olarak değiştirmek
- Sihirbaz tarafından sağlanan manuel kurulum yedekleme talimatlarını kullanmak
- Barındırma sağlayıcınızdan yardım istemek

### Kurulumdan sonra sitelere erişilemiyor (alt alan adları) {#sites-are-not-accessible-after-setup-subdomains}

Alt alan adı yapısını seçtiyseniz, alan adınız için **wildcard DNS** yapılandırmanız gerekir. Bir DNS kaydı ekleyin:

```
Type: A (veya CNAME)
Host: *
Value: [sunucu IP'niz]
```

Nasıl yapılandıracağınızdan emin değilseniz barındırma sağlayıcınızla kontrol edin.

### Kurulumdan sonra kimlik doğrulama sorunları {#authentication-issues-after-setup}

Multisite kurulumundan sonra oturumunuz kapalıysa veya çerez hataları yaşıyorsanız:

1. Tarayıcınızdaki site çerezlerini temizleyin
2. Tekrar `yourdomain.com/wp-login.php` adresinden giriş yapın
3. Sorun devam ederse, `wp-config.php` dosyanızda `COOKIE_DOMAIN`'in `false` olarak ayarlanmadığından emin olun — bu, alt alan adı multisite kurulumlarında bilinen bir sorundur.

### Kurulum sırasında bir adım başarısız oldu {#a-step-failed-during-installation}

Kurulum adımlarından biri hata gösterirse:

1. Görüntülenen hata mesajını not alın
2. Yapılandırma adımına geri dönün ve tekrar deneyin
3. Hata devam ederse, daha fazla ayrıntı için sunucunuzun PHP hata günlüklerini kontrol edin
4. Daha önce tamamlanmış adımlar, sonraki çalıştırmalarda atlanacaktır (kurucu idempotent'tir)
