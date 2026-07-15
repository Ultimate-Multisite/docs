---
title: Çokly site sozlamasy wizi
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Kurulum Sihirbazı

Ultimate Multisite, standart bir WordPress kurulumunu otomatik olarak bir WordPress Multisite ağına çeviren yerleşik bir sihirbaz içerir. Bu, `wp-config.php` dosyasını manuel olarak düzenleme veya veritabanı komutları çalıştırma ihtiyacını ortadan kaldırır.

:::tip
Eğer WordPress kurulumunuz zaten bir Multisite ağı olarak çalışıyorsa, bu adımı tamamen atlayabilirsiniz. Sihirbaz yalnızca Multisite henüz etkinleştirilmediğinde görünür.
:::

## Sihirbaz Ne Zaman Görünür? {#when-does-the-wizard-appear}

Standart (Multisite olmayan) bir WordPress kurulumunda Ultimate Multisite'ı etkinleştirdiğinizde, eklenti Multisite'ın etkinleştirilmediğini algılar ve sizi normal kurulum sihirbazı yerine otomatik olarak Multisite Kurulum Sihirbazına yönlendirir.

Buna ayrıca **WP Admin > Ultimate Multisite > Multisite Setup** adresinden de doğrudan erişebilirsiniz.

## Ön Koşullar {#prerequisites}

Sihirbazı çalıştırmadan önce şunlardan emin olun:

- WordPress kurulumunuz üzerinde **yönetici erişiminiz** olmalı
- Sunucunuzdaki `wp-config.php` dosyası web sunucusu tarafından **yazılabilir** olmalı
- Dosyalarınızın ve veritabanınızın **güncel bir yedeği** olmalı

:::warning
Sihirbaz, `wp-config.php` dosyanızı değiştirir ve yeni veritabanı tabloları oluşturur. Devam etmeden önce her zaman bir yedek alın.
:::

## Adım 1: Hoş Geldiniz {#step-1-welcome}

İlk ekran size WordPress Multisite'ın ne olduğunu ve sihirbazın ne yapacağını açıklar:

- WordPress yapılandırmanızda Multisite özelliğini etkinleştirin
- Gerekli ağ veritabanı tablolarını oluşturun
- `wp-config.php` dosyasına gerekli multisite sabitlerini ekleyin
- Ağı ağ genelinde Ultimate Multisite ile etkinleştirin

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Devam etmek için **Devam Et**'e tıklayın.

## Adım 2: Ağ Yapılandırması {#step-2-network-configuration}

Bu adımda ağ ayarlarınızı yapılandırmanızı isteriz.

### Site Yapısı {#site-structure}

Şirketinizdeki ağ sitelerini nasıl düzenleyeceğinizi seçin:

- **Alt alan adları (Sub-domains)** (Tavsiye edilen) — Siteler kendi alt alan adına sahip olur, örneğin `site1.yourdomain.com`
- **Alt dizinler (Sub-directories)** — Siteler yollar olarak oluşturulur, örneğin `yourdomain.com/site1`

:::note
Eğer alt alan adlarını seçerseniz, alan adınız için **wildcard DNS** ve **wildcard SSL sertifikası** yapılandırmanız gerekecek. Çoğu yönetilen WordPress ana xatırlı bu işi avtomatik halleder. Detaylı karşılaştırma için [Ultimate Multisite 101](https://ultimate-multisite.com/docs/101) adresine bakın.
:::

### Ağ Başlığı (Network Title) {#network-title}

Ağınız için bir isim girin. Bu, varsayılan olarak mevcut site başlığınızın sonuna "Network" eklenmiş halidir. Bunu daha sonra ağ ayarlarından değiştirebilirsiniz.

### Ağ Yöneticisi E-postası (Network Admin Email) {#network-admin-email}

Ağ yönetimi bildirimleri için kullanılan e-posta adresi. Bu, varsayılan olarak mevcut kullanıcının e-posta adresidir.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Alanları doldurduktan sonra ilerlemek için **Devam et** butonuna tıklayın.

## Adım 3: Kurulum (Installation) {#step-3-installation}

Başlamak için **Kur** butonuna tıklayın. Sihirbaz, her bir adımın ilerlemesini gerçek zamanlı olarak gösteren beş otomatik adımı sırayla gerçekleştirir:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Aşama | Taryh |
|---|---|
| **Multisite'ı Etkinleştir** | `wp-config.php` fayluna `WP_ALLOW_MULTISITE` sabitini əlavə edin |
| **Şəbəkəni Yaradın** | Multisite verilənlər bazası cədvəllərini (`wp_site`, `wp_sitemeta`, `wp_blogs` və s.) yaradın və onları şəbəkə konfiqurasiyanızla doldurun |
| **Konfiqurasiyanı Yenilə** | Son multisite sabitlərini `wp-config.php`-ə əlavə edin (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` və s.) |
| **Cookie'ləri Düzəldin** | Aktivləşdirmədən sonra autentifikasiya problemlərini qarşımalıdırsa, şəbəkə metadata-sında sayt URL-sinin düzgün olduğundan əmin olun |
| **Şəbəkəni Aktiv Et Plugini** | Ultimate Multisite-ı şəbəkə üzrə işləməsi üçün aktivləşdirin |

Hər bir addım bu statuslardan birini göstərəcək:

- **Pending (Gözləyir)** — Emal edilməyi gözləyir
- **Installing... (Quraşdırılır...)** — Hazırda işləyir
- **Success! (Uğurlu!)** — Uğurla tamamlandı
- **Error message (Xəta mesajı)** — Bir xəta baş verdi (mesaj problemi təsvir edəcək)

Bütün addımlar uğurla bitdikdən sonra, hər bir item üçün yaşıl "Success!" statusunu görəcəksiniz:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sonra wizard avtomatik olaraq tamamlanma ekranına keçəcək.

## 4-cü Addım: Tamamla {#step-4-complete}

Quraşdırma bitdikdən sonra, WordPress Multisite-ın aktivləşdirildiyini təsdiq edən uğur mesajını görəcəksiniz.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

İndi WaaS platformunuzu (şirkət detalları, default məzmun, ödəniş portalı və s.) konfiqurasiya etmək üçün Ultimate Multisite qurucusu ilə davam edə bilərsiniz.

:::note
Multisite kurmak tamamlandan sonra brauzeriniz yeni etkinleştirilmiş ağ administratoru arkaly geçdirilip gidecek. Multisite mühiti üçin autentifikatsiya cookie'leri güncellelenýär, şonuň üç sizden ýa-daşygyň girizilmegi gerek biler.
:::

## Manual Setup Fallback (Manual Kurmakda Alternatiwa) {#manual-setup-fallback}

Eger wizard `wp-config.php` faylyna ýazyp bilmese (faylym resselleri ýa-da server cheklendirmeleri sebäpli), ol size maneden girmeli bolan dogry kodu görkezýär:

1. `/* That's all, stop editing! */` satyrından öň goşmalydygysy **wp-config.php konstantalary**
2. Saýlan wep sayt strukturan (subdomain ýa-da subdirektori) üçin laýyk **.htaccess rewrite kurallary**

Manual üýtgeşmelerden soň, sahypany ýa-daçalmagyň we wizard multisite şu wagtda işledikdigini anyklap biljekdir.

## Troubleshooting (Sorynlylyk Üstüni) {#troubleshooting}

### Wizard wp-config.php ýazyp bilmese diýip aýdýar {#the-wizard-says-wp-configphp-is-not-writable}

Siziň web server prosesi `wp-config.php` faylyna ýazma wezipesi bolmaly. Siz şu zatlary edip bilerisiz:

- Fayl ressellerini geçiji we `644` ýa-da `666` üçin üýtgedip bilersiňiz
- Wizard tarapyndan berilýän manual kurulum alternatiwa nusgalarından peimanylyk almak
- Hosting provayderiňizden kömek soraýarsyňyz

### Kurmakdan soň saytlara girilip bilmez (subdomainler) {#sites-are-not-accessible-after-setup-subdomains}

Eger siz subdomain strukturasyny saýlaýan bolsaňyz, öz domainiňiz üçin **wildcard DNS** kurallaryny görkezmeli. DNS rekkordy goşdirin:

```
Type: A (ýa-da CNAME)
Host: *
Value: [siziň server IP-si]
```

Bu nähili kurmak bar, diýip bilmese, hosting provayderiňiz bilen maslahatlaşyň.

### Kurmakdan soň autentifikasiýa meseleleri {#authentication-issues-after-setup}

Eger siz multisite kurulumundan soň girilip bilmesen ýa-da cookie hatalaryny görseňiz:

1. Brauzeriniz üçin sahypanyň cookie-lerini temizleň
2. `yourdomain.com/wp-login.php` bilen ýa-daşygy giriziň
3. Sorag dowam etse, `COOKIE_DOMAIN`-i `false` üçin set edilmeýändigini barlap görüň — bu subdomain multisite kurulumlarynda biliniptilýän meseledir

### Kurmak dowamynda bir ädim ýitdi {#a-step-failed-during-installation}

Eğer kurulumdan bir adımda hata oluşsa:

1. Görünen hata mesajını not edin.
2. Yapılandırma adımına geri dönün ve tekrar deneyin.
3. Hata devam ederse, daha fazla detay için sunucunuzun PHP hata kaydını (PHP error log) kontrol edin.
4. Daha önce tamamlanmış adımlar sonraki çalıştırmalarda atlanacaktır (kurulum aracı aynı sonucu verir).
