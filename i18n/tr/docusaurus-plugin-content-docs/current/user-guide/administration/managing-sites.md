---
title: Siteleri Yönetme
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Siteleri Yönetme

Siteler (veya alt siteler), WaaS işinizin temelini oluşturur. Ultimate Multisite'ta 3 tür site bulunur:

- **Müşteriye ait** — Belirli müşterilere ait siteler
- **Site Şablonları** — Müşterilerin başlangıç noktası olarak seçebileceği önceden tanımlanmış siteler
- **Ana Site** — Birincil ağ siteniz

## Siteleri Görüntüleme

Ağınızdaki tüm alt siteleri görmek için **Ultimate Multisite → Sites** bölümüne gidin. Her site türüne göre etiketlenmiştir ve Tüm Siteler, Müşteriye Ait, Şablonlar veya Beklemede seçeneklerine göre filtreleme yapabilirsiniz.

![Site listesi sayfası](/img/admin/sites-list.png)

## Yeni Site Ekleme

Yeni bir site oluşturmak için **Add Site** düğmesine tıklayın. Şu bilgileri girmeniz gerekecek:

- **Site Title** — Yeni sitenin adı
- **Site URL** — Sitenin alan adı/yolu
- **Site Type** — Müşteri sitesi mi, şablon mu yoksa normal site mi olduğu

**Copy Site** seçeneği, mevcut bir site şablonuna dayalı yeni bir site oluşturmanızı sağlar. Bu seçenek etkinleştirildiğinde, başlangıç noktası olarak hangi şablonu kullanacağınızı seçebilirsiniz. Medya dosyalarını da dahil etmek için **Copy Media on Duplication** seçeneğinin etkin olduğundan emin olun.

## Mevcut Bir Siteyi Yönetme

Herhangi bir sitede **Manage** düğmesine tıklayarak **Edit Site** sayfasını açın. Burada şunları bulacaksınız:

### Temel Bilgiler

Site adı, türü, site kimliği ve açıklaması. Ayrıca eşlenmiş alan adını, ilişkili üyeliği ve siteye sahip olan müşteri hesabını da göreceksiniz.

### Site Seçenekleri

Sitenin özelliklerini ve limitlerini yapılandırın:

- **Ziyaret limitleri** — Maksimum site ziyareti sayısı
- **Kullanıcı hesabı limitleri** — Kullanıcı rolüne göre limitler
- **Disk alanı** — Site için depolama kotası
- **Özel alan adı** — Bu site için alan adı eşlemeyi etkinleştirin
- **Plugin ve tema görünürlüğü** — Hangi plugin ve temaların görünür, gizli veya önceden etkinleştirilmiş olacağını kontrol edin

Varsayılan olarak siteler, üyelik seviyesinde belirlenen limitleri takip eder. Site seviyesinde limit belirlemek, üyelik ayarlarını geçersiz kılar.

### İlişkilendirmeler

Site seçeneklerinin altında şu bilgileri bulacaksınız:

- Siteyle ilişkili **eşlenmiş alan adları**
- Sitenin bağlı olduğu **üyelik**
- Siteyle bağlantılı **müşteri hesabı**

### Sağ Kenar Çubuğu

Sağ tarafta şunları yapabilirsiniz:

- Bir geçiş düğmesiyle **siteyi etkinleştirin/devre dışı bırakın**
- **Site türünü değiştirin** veya sahipliği yeniden atayın
- **Bir site görseli/küçük resmi belirleyin** (site şablonları için ön yüzde görüntülenir)
- Siteyi **kalıcı olarak silin**

:::warning
Bir siteyi silmek geri alınamaz. Site ve tüm içeriği kalıcı olarak kaldırılacaktır.
:::
