---
title: Ultimate Multisite kurmak
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite Kurulama

:::note
Bu tutorial WordPress Multisite kurup we sozlamagyňiz bar bolmagyny kabul edýär. Näme etmelidigini bilmek üçin WP Beginner-iň [bu tutorialyny](https://www.wpbeginner.com/glossary/multisite/) okap görüň.
:::

## Plugin Kurmak

Ultimate Multisite [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) durynda bedava bar.

**Network Admin Dashboard**-dan **Plugins → Add New Plugin** bölümini geçiň.

![Network Admin Add New Plugin sayfası](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** diýlip gözleň (tam eşleşmek üçin ýaşyl tırnaklar bilen), ol ilkinji netije hökmünde görkeziljekdir. **Install Now** düwmenine basyň.

![Ultimate Multisite-i görkezýän gözleg netijeleri](/img/installation/search-ultimate-multisite.png)

Kurulandan soň, pluginini sizeň ähli ulgamanyzda işlemek üçin **Network Activate** düwmenine basyň.

![Network Activate düwmeni bilen kurulan plugin](/img/installation/plugin-installed.png)

Aktiwizden soň, siz awtomatiki we Setup Wizard (Kurulum Wizarady) bilen ýol berilip geçýärsiňiz.

![Plugin aktiw edildi we wizard bilen yöneltildi](/img/installation/plugin-activated.png)

## Kurulum Wizarady

Setup Wizard size Ultimate Multisite-i goşmak üçin manylyk 10 minutda howa goýar.

### Galkynçy Saz
Başlamak üçin **Get Started** düwmenine basyň.

![Kurulum Wizarady başlanmagy ekrany](/img/installation/wizard-welcome.png)

### Kurulama Öňü Barlaglary

Bu ädim size sistem maglumatlaryny we WordPress goşulmasyny barlap, ol Ultimate Multisite-i talaplaryna laýykdyr diýip barlap biler. Her zat dogry görünse, **Go to the Next Step** düwmenine basyň.

![Sistem talaplaryny görkezýän kurulum öňü barlaglary](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate düwmesi (v2.6.1+)
Eğer Ultimate Multisite yüklenmiş, ancak **henüz ağa aktivasiya edilmemişse** — örneğin, ağ eklentileri ekranından **Network Activate** yerine **Activate** (single-site) düğmesine tıkladıysanız — Pre-install Checks (Yükleme Öncesi Kontroller) adımı bunu algılayacak ve size bir **Network Activate** düwmesi gösterecektir.

**Network Activate**'a tıklamak, eklentiyi bütün multisite ağınızda avtomatik olarak aktive eder. Aktivasyon tamamlandıktan sonra sihirbaz normalde kurulum adımına devam eder. Aktivasyon durumunu düzeltmek için sihirbazdan ayrılmanıza gerek yoktur.
:::

### Kurulum

Kurucu (installer) Ultimate Multisite'ın işlemek için ihtiyaç duyduğu gerekli veritabanı tablolarını oluşturacak we `sunrise.php` dosyasını kurar. Devam etmek için **Install** (Kur)a tıklayın.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Şirketiniz

Şirketinizin bilgilerini doldurun ve varsayılan para biriminizi ayarlayın. Bu bilgiler WaaS platformunuz boyunca kullanılacaktır. İşiniz bittiğinde **Continue** (Devam et)a tıklayın.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Varsayılan İçerik

Bu adımda önceden tanımlanmış şablonları, ürünleri ve diğer başlangıç içeriklerini kurabilirsiniz. Bu, Ultimate Multisite'ın özelliklerine aşina olmanın harika bir yoludur. Varsayılan içeriği eklemek için **Install**a tıklayın veya sıfırdan başlamak isterseniz bu adımı atlayın.

![Default content installation step](/img/installation/wizard-default-content.png)

### Önerilen Eklentiler

İsteğe bağlı olarak önerilen eşlikçi eklentileri kurun. Onları eklemek için **Install**a tıklayın veya devam etmek için atlayın.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Hazır!

Bu dijiwar! Siziň Ultimate Multisite kurulumy tamamlandy. Indi **Network Admin Dashboard** arkaly Web sayt üçin Hizmet platformasyny quryp bilersiňiz.

![Kurulum tamamlandı - Hazır ekran](/img/installation/wizard-ready.png)

![Ultimate Multisite aktif olan Network Admin Dashboard](/img/installation/network-dashboard.png)

Indi özüňizden ene!
