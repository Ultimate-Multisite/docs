---
title: Site Yönetimi
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Site Yönetimi {#managing-sites}

Site'lar (veya alt site'lar), WaaS işinizin temelini oluşturur. Ultimate Multisite'ın 3 tür site yapısı vardır:

- **Müşteri'ye Ait** — Belirli müşterilere ait site'lar
- **Site Şablonları** — Müşterilerin başlangıç noktası olarak seçebileceği önceden tanımlanmış site'lar
- **Ana Site** — Sizin ana ağ siteniz

## Site Görüntüleme {#viewing-sites}

Tüm alt sitelerinizi görmek için **Ultimate Multisite → Sites** yolunu izleyin. Her site türüyle etiketlenmiştir ve Tüm Site'lar, Müşteri'ye Ait, Şablonlar veya Beklemede filtreleyerek arama yapabilirsiniz.

![Sites list page](/img/admin/sites-list.png)

## Yeni Site Ekleme {#adding-a-new-site}

Yeni bir site oluşturmak için **Site Ekle** düğmesine tıklayın. Şu bilgileri sağlamanız gerekecek:

- **Site Başlığı** — Yeni sitenin adı
- **Site URL'si** — Site için alan adı/yol
- **Site Türü** — Müşteri sitesi mi, şablon mu yoksa normal bir site mi olduğu

**Site Kopyala** seçeneği, mevcut bir site şablonuna dayalı yeni bir site oluşturmanıza olanak tanır. Bu özellik etkinleştirildiğinde, başlangıç noktası olarak hangi şablonu kullanacağınızı seçebilirsiniz. Medya dosyalarını dahil etmek için **Kopyalanırken Medya Kopyala** seçeneğinin etkin olduğundan emin olun.

## Mevcut Bir Siteyi Yönetme {#managing-an-existing-site}

Herhangi bir siteye **Yönet**'e tıklayarak **Site Düzenle** sayfasına ulaşabilirsiniz. Burada şunları bulacaksınız:

### Temel Bilgiler {#basic-information}

Site adı, türü, site ID'si ve açıklaması. Ayrıca eşlenmiş alan adını, ilişkili üyeliği ve siteye sahip olan müşteri hesabını da göreceksiniz.

### Site Seçenekleri {#site-options}

Sitenin yeteneklerini ve limitlerini yapılandırın:

- **Ziyaret limitleri** — Maksimum site ziyaret sayısı
- **Kullanıcı hesabı limitleri** — Kullanıcı rolüne göre limitler
- **Disk alanı** — Site için depolama kotası
- **Özel alan adı** — Bu site için alan adı eşlemesini etkinleştirme
- **Plugin ve tema görünürlüğü** — Hangi plugin ve temaların görünür, gizli veya önceden etkinleştirileceğini kontrol etme

Varsayılan olarak, siteler üyelik seviyesinde belirlenen limitlere uyar. Site düzeyinde limitler belirlemek, üyelik ayarlarını geçersiz kılacaktır.

### İlişkiler {#associations}

Site seçeneklerinin altında şunlarla ilgili bilgileri bulacaksınız:

- Siteye bağlı **Eşlenmiş alan adları**
- Sitenin bağlı olduğu **Üyelik**
- Siteye bağlı **Müşteri hesabı**

### Sağ Kenar Çubuğu {#right-sidebar}

Sağ tarafta şunları yapabilirsiniz:

- Bir anahtarla **siteyi etkinleştirme/devre dışı bırakma**
- **Site türünü değiştirme** veya sahipliği yeniden atama
- **Site görseli/küçük resim** belirleme (site şablonları için ön yüzde gösterilir)
- Siteyi kalıcı olarak **silme**

:::warning
Bir siteyi silmek geri alınamaz. Site ve tüm içeriği kalıcı olarak kaldırılacaktır.
:::
