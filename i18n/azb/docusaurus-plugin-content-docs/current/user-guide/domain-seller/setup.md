---
title: Kurulum ve Sağlayıcı Yapılandırması
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Kurulum ve Sağlayıcı Yapılandırması

Domain Seller eklentisi, gerekli tüm adımları gösteren rehberli bir kurulum sihirbazı ile birlikte gelir. Bu sayfa, sihirbazın akışını ve daha sonra sağlayıcıları nasıl yapılandıracağınızı veya yeniden yapılandıracağınızı anlatıyor.

## Gereksinimler

- **Multisite Ultimate** v2.4.12 veya üzeri, network seviyesinde etkinleştirilmiş
- **PHP** 7.4+
- En az bir desteklenen kayıt kuruluşu için API kimlik bilgileri

## İlk Çalıştırma Kurulum Sihirbazı

Kurulum sihirbazı, eklentiyi network seviyesinde ilk kez etkinleştirdiğinizde otomatik olarak başlar. Ayrıca, istediğiniz zaman **Network Admin › Ultimate Multisite › Domain Seller Setup** adresinden de ulaşabilirsiniz.

### Adım 1 — Bir sağlayıcı seçin

Bağlamak istediğiniz kayıt kuruluşunu seçin. Desteklenen seçenekler:

| Provider | DNS yönetimi | WHOIS gizliliği |
|---|---|---|
| OpenSRS | Evet | Evet |
| Namecheap | Hayır | Evet (WhoisGuard, ücretsiz) |
| GoDaddy | Hayır | Hayır |
| ResellerClub | Evet | Hayır |
| NameSilo | Hayır | Hayır |
| Enom | Evet | Hayır |

### Adım 2 — Kimlik bilgilerini girin

Her sağlayıcının farklı kimlik bilgisi alanları vardır:

**OpenSRS** — Kullanıcı adı ve özel anahtar (OpenSRS Reseller Control Panel'den alınır)

**Namecheap** — Kullanıcı adı ve API anahtarı (Account › Tools › API Access'ten alınır)

**GoDaddy** — API anahtarı ve gizli anahtar (developer.godaddy.com'dan alınır)

**ResellerClub** — Reseller ID ve API anahtarı (ResellerClub kontrol panelinden alınır)

**NameSilo** — API anahtarı (namesilo.com › Account › API Manager'dan alınır)

**Enom** — Hesap Kimliği ve API token'ı

Mümkün olduğunda, canlı kullanmadan önce sağlayıcının test ortamında test yapmak için **Sandbox mode**'u kontrol edin.

### Adım 3 — Bağlantıyı test edin

**Test Connection** butonuna tıklayın. Sihirbaz, kimlik bilgileri ve bağlantıyı doğrulamak için hafif bir API çağrısı yapar. Devam etmeden önce herhangi bir kimlik bilgisi sorununu düzeltin.

### Adım 4 — TLD'leri içe aktarın

Bağlı sağlayıcıdan tüm mevcut TLD'leri ve toptan fiyatlandırmayı çekmek için **Import TLDs** butonuna tıklayın. Bu, domain ürünleri tarafından kullanılan TLD listesini doldurur. Büyük TLD kataloglarına sahip sağlayıcılar için bu işlem 30–60 saniye sürebilir.

TLD'ler ayrıca her gün bir zamanlanmış cron job aracılığıyla otomatik olarak yeniden senkronize edilir.

### Adım 5 — Bir domain ürünü oluşturun

Sihirbaz, %10 kar marjlı varsayılan bir "catch-all" domain ürünü oluşturur. Bu ürünü hemen düzenleyebilir veya atlayıp **Ultimate Multisite › Products** altından ürünleri manuel olarak oluşturabilirsiniz.

Tam ürün yapılandırma kılavuzu için [Domain Products and Pricing](./domain-products) sayfasına bakın.

---

## Bir sağlayıcıyı yeniden yapılandırma

**Network Admin › Ultimate Multisite › Settings › Domain Seller** adresine gidin (veya eklenti listesindeki **Settings** butonuna tıklayın).

Ayarlar sayfası şunları içerir:

- **Enable domain selling** — tüm özelliği açma/kapama anahtarı
- **Default provider** — domain aramaları ve yeni ürünler için kullanılan sağlayıcı
- **Max TLDs per search** — bir müşteri arama yaptığında kaç TLD kontrol edileceği; yüksek değerler daha fazla seçenek gösterir ancak daha yavaştır
- **Availability cache duration** — kullanılabilirlik ve fiyatlandırma sonuçlarının ne kadar süreyle önbellekte tutulacağı; düşük değerler daha doğru ancak API çağrısını artırır
- **Manage domain products** — Ürünler listesine hızlı bağlantı
- **Configure providers** — Sağlayıcı eklemek veya yeniden yapılandırmak için Entegrasyon Sihirbazını açar

### İkinci bir sağlayıcı ekleme

**Configure providers** butonuna tıklayın ve yeni kayıt kuruluşu için sihirbazı tekrar çalıştırın. Aynı anda birden fazla sağlayıcı yapılandırabilirsiniz. Her domain ürününü belirli bir sağlayıcıya atayabilir veya varsayılan olarak bırakabilirsiniz.

### TLD'leri manuel senkronize etme

Ayarlar sayfasında, envanterde bulunan herhangi bir sağlayıcının yanındaki **Sync TLDs** butonuna tıklayarak en son fiyatlandırmayı çekin. Bu, bir sağlayıcı toptan fiyatlandırmayı güncellediğinde veya yeni TLD'ler eklediğinde kullanışlıdır.

---

## Loglar

Her sağlayıcı kendi log kanalına yazar. Loglar **Network Admin › Ultimate Multisite › Logs** adresinden görüntülenebilir:

| Log kanalı | İçerik |
|---|---|
| `domain-seller-registration` | Tüm kayıt denemeleri (başarılı ve başarısız) |
| `domain-seller-renewal` | Yenileme işi sonuçları |
| `domain-seller-opensrs` | Ham OpenSRS API aktivitesi |
| `domain-seller-namecheap` | Ham Namecheap API aktivitesi |
| `domain-seller-godaddy` | Ham GoDaddy API aktivitesi |
| `domain-seller-resellerclub` | Ham ResellerClub API aktivitesi |
| `domain-seller-namesilo` | Ham NameSilo API aktivitesi |
| `domain-seller-enom` | Ham Enom API aktivitesi |
