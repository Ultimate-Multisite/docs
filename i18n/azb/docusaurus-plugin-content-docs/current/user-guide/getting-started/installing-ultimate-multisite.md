---
title: Ultimate Multisite-ni quraş qilish
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite Kurulumu

:::note
Bu rehber, Ultimate Multisite'ın zaten kurulmuş ve yapılandırılmış olduğunu varsaymaktadır. Nasıl yapılacağını öğrenmek için WP Beginner tarafından hazırlanan [bu rehbere](https://www.wpbeginner.com/glossary/multisite/) göz atabilirsiniz.
:::

## Plugin Kurulumu

Ultimate Multisite, [WordPress.org'da](https://wordpress.org/plugins/ultimate-multisite/) ücretsiz olarak mevcuttur.

**Ağ Yöneticisi Paneli'niz'nden** (Network Admin Dashboard), **Eklentiler → Yeni Eklenti Ekle** yolunu izleyin.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Arama çubuğuna **"Ultimate Multisite"** yazın (tam eşleşme için tırnak işaretleri kullanın) ve bu, ilk sonuç olarak görünecektir. **Şimdi Yükle** (Install Now) butonuna tıklayın.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Yüklendikten sonra, eklentiyi tüm ağınızda etkinleştirmek için **Ağda Etkinleştir** (Network Activate) butonuna tıklayın.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Etkinleştirme tamamlandıktan sonra, otomatik olarak Kurulum Sihirbazı'na (Setup Wizard) yönlendirileceksiniz.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Kurulum Sihirbazı

Kurulum Sihirbazı, Ultimate Multisite'ı yaklaşık 10 dakika içinde yapılandırmanızda size rehberlik edecektir.

### Hoş Geldiniz

Başlamak için **Başla** (Get Started) butonuna tıklayın.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Ön Kurulum Kontrolleri

Bu adım, Ultimate Multisite'ın gereksinimlerini karşılayıp karşılamadığını kontrol etmek için sistem bilgilerinizi ve WordPress kurulumunuzu kontrol eder. Her şey yolundaysa, **Sonraki Adıma Git** (Go to the Next Step) butonuna tıklayın.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Ağda Etkinleştir Butonu (v2.6.1+)
Eğer Ultimate Multisite yüklendi ancak **henüz ağda etkinleştirilmediyse** — örneğin, ağ eklentileri ekranından **Ağda Etkinleştir** yerine **Etkinleştir** (tek site) butonuna tıkladıysanız — Ön Kurulum Kontrolleri adımı bunu algılayacak ve bir **Ağda Etkinleştir** butonu gösterecektir.

**Ağda Etkinleştir** butonuna tıklamak, eklentiyi tüm multisite ağınızda otomatik olarak etkinleştirir. Etkinleştirildikten sonra, sihirbaz normal bir şekilde kurulum adımına devam eder. Aktivasyon durumunu düzeltmek için sihirbazdan ayrılmanıza gerek yoktur.
:::

### Kurulum

Kurulum aracı, gerekli veritabanı tablolarını oluşturacak ve Ultimate Multisite'ın çalışması için ihtiyaç duyduğu `sunrise.php` dosyasını kuracaktır. Devam etmek için **Kur** (Install) butonuna tıklayın.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Şirketiniz

Şirket bilgilerinizi doldurun ve varsayılan para biriminizi ayarlayın. Bu bilgiler, WaaS platformunuz boyunca kullanılacaktır. İşiniz bittiğinde **Devam Et** (Continue) butonuna tıklayın.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Varsayılan İçerik

Bu adım, önceden tanımlanmış şablonlar, ürünler ve diğer başlangıç içeriklerini kurmanıza olanak tanır. Bu, Ultimate Multisite'ın özelliklerine alışmak için harika bir yoldur. Varsayılan içeriği eklemek için **Kur** (Install) butonuna tıklayın veya sıfırdan başlamayı tercih ederseniz bu adımı atlayın.

![Default content installation step](/img/installation/wizard-default-content.png)

### Önerilen Eklentiler

İsteğe bağlı olarak önerilen yardımcı eklentileri kurun. Bunları eklemek için **Kur** (Install) butonuna tıklayın veya devam etmek için atlayın.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Hazır!

İşte bu kadar! Ultimate Multisite kurulumunuz tamamlandı. Artık **Ağ Yöneticisi Paneli'nden** (Network Admin Dashboard) Web Sitesi Hizmeti (Website as a Service) platformunuzu oluşturmaya başlayabilirsiniz.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Şimdi eğlenmeye başlayabilirsiniz!
