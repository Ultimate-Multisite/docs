---
title: Ultimate Multisite'ın Kurulumu
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite'in Kurulumu

:::note
Bu eğitim, WordPress Multisite'ın zaten kurulu ve yapılandırılmış olduğunu varsayar. Nasıl yapılacağını öğrenmek için WP Beginner tarafından hazırlanan [bu eğitime](https://www.wpbeginner.com/glossary/multisite/) göz atın.
:::

## Eklentinin Kurulumu {#installing-the-plugin}

Ultimate Multisite, [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) adresinde ücretsiz olarak mevcuttur.

**Ağ Yöneticisi Paneli'nden**, **Eklentiler → Yeni Eklenti Ekle** bölümüne gidin.

![Ağ Yöneticisi, Yeni Eklenti Ekle sayfası](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (tam eşleşme için tırnak işaretleri içinde) araması yapın; ilk sonuç olarak görünecektir. **Şimdi Kurun**'a tıklayın.

![Arama sonuçları, Ultimate Multisite'ı gösteriyor](/img/installation/search-ultimate-multisite.png)

Kurulduktan sonra, eklentiyi tüm ağınızda etkinleştirmek için **Ağ Üzerinde Etkinleştir**'e tıklayın.

![Eklenti kuruldu ve Ağ Üzerinde Etkinleştir düğmesi var](/img/installation/plugin-installed.png)

Etkinleştirdikten sonra otomatik olarak Kurulum Sihirbazı'na yönlendirileceksiniz.

![Eklenti etkinleştirildi ve sihirbaza yönlendirildi](/img/installation/plugin-activated.png)

## Kurulum Sihirbazı {#setup-wizard}

Kurulum Sihirbazı, Ultimate Multisite'ı yaklaşık 10 dakika içinde yapılandırmanız için size yol gösterecektir.

### Hoş Geldiniz {#welcome}

Başlamak için **Başla**'ya tıklayın.

![Kurulum Sihirbazı hoş geldiniz ekranı](/img/installation/wizard-welcome.png)

### Ön Kurulum Kontrolleri {#pre-install-checks}

Bu adım, sistem bilgilerinizin ve WordPress kurulumunuzun Ultimate Multisite'ın gereksinimlerini karşılayıp karşılamadığını kontrol eder. Her şey yolundaysa **Sonraki Adıma Git**'e tıklayın.

![Ön kurulum kontrolleri, sistem gereksinimlerini gösteriyor](/img/installation/wizard-pre-install-checks.png)

:::note Ağ Üzerinde Etkinleştir düğmesi (v2.6.1+)
Ultimate Multisite kuruldu ancak **henüz ağ üzerinde etkinleştirilmediyse** (örneğin, ağ eklentileri ekranından **Etkinleştir**'e (tek site için) tıkladıysanız), Ön Kurulum Kontrolleri adımı bunu algılayacak ve bir **Ağ Üzerinde Etkinleştir** düğmesi görüntüleyecektir.

**Ağ Üzerinde Etkinleştir**'e tıklamak, eklentiyi tüm çoklu sitenizin ağında otomatik olarak etkinleştirir. Etkinleştirdikten sonra sihirbaz normal şekilde kurulum adımına devam eder. Etkinleştirme durumunu düzeltmek için sihirbazdan ayrılmanız gerekmez.
:::

### Kurulum {#installation}

Kurulum aracı, gerekli veritabanı tablolarını oluşturacak ve Ultimate Multisite'ın çalışması için ihtiyaç duyduğu `sunrise.php` dosyasını yükleyecektir. Devam etmek için **Yükle**'ye tıklayın.

![Kurulum adımı, veritabanı tablolarını ve sunrise.php dosyasını gösteriyor](/img/installation/wizard-installation.png)

### Şirketiniz {#your-company}

Şirket bilgilerini girin ve varsayılan para biriminizi ayarlayın. Bu bilgiler WaaS platformunuzun her yerinde kullanılacaktır. İşlemi tamamladığınızda **Devam Et**'e tıklayın.

![Şirket Bilgileri yapılandırma adımı](/img/installation/wizard-your-company.png)

### Varsayılan İçerik {#default-content}

Bu adım, önceden tanımlanmış şablonları, ürünleri ve diğer başlangıç içeriğini yüklemenize olanak tanır. Bu, Ultimate Multisite'ın özelliklerine aşina olmanın harika bir yoludur. Varsayılan içeriği eklemek için **Yükle**'ye tıklayın veya tercih ederseniz bu adımı atlayın.

![Varsayılan içerik kurulum adımı](/img/installation/wizard-default-content.png)

### Önerilen Eklentiler {#recommended-plugins}

İsteğe bağlı olarak önerilen tamamlayıcı eklentileri yükleyin. Bunları eklemek için **Yükle**'ye tıklayın veya devam etmek için atlayın.

![Önerilen eklentiler adımı](/img/installation/wizard-recommended-plugins.png)

### Hazır! {#ready}

İşte bu kadar! Ultimate Multisite kurulumunuz tamamlandı. Artık **Ağ Yöneticisi Paneli**'nden Web Sitesi olarak Hizmet platformunuzu oluşturmaya başlayabilirsiniz.

![Kurulum tamamlandı - Hazır ekran](/img/installation/wizard-ready.png)

![Ağ Yöneticisi Paneli, Ultimate Multisite etkin durumda](/img/installation/network-dashboard.png)

Haydi eğlenin!
