---
title: Kurulum ve Sağlayıcı Yapılandırması
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Alan Adı Satıcısı: Kurulum ve Sağlayıcı Yapılandırması

Domain Seller eklentisi, gerekli her adımı gösteren rehberli bir kurulum sihirbazı ile birlikte gelir. Bu sayfa, sihirbaz akışını ve sonrasında sağlayıcıları nasıl yapılandıracağınızı veya yeniden yapılandıracağınızı ele almaktadır.

## Gereksinimler

- **Multisite Ultimate** v2.4.12 veya üzeri, ağ düzeyinde etkinleştirilmiş
- **PHP** 7.4+
- En az bir desteklenen kayıt kuruluşu için API kimlik bilgileri

## İlk Çalıştırma Kurulum Sihirbazı

Kurulum sihirbazı, eklentiyi ağ düzeyinde etkinleştirdiğiniz ilk sefer otomatik olarak başlar. Ayrıca istediğiniz zaman **Ağ Yöneticisi › Ultimate Multisite › Domain Seller Kurulumu** yolundan erişilebilir.

### Adım 1 — Bir sağlayıcı seçin

Bağlamak istediğiniz kayıt kuruluşunu seçin. Desteklenen seçenekler:

| Sağlayıcı | DNS yönetimi | WHOIS gizliliği |
|---|---|---|
| OpenSRS | Evet | Evet |
| Namecheap | Hayır | Evet (WhoisGuard, ücretsiz) |
| GoDaddy | Hayır | Hayır |
| ResellerClub | Evet | Hayır |
| NameSilo | Hayır | Hayır |
| Enom | Evet | Hayır |

### Adım 2 — Kimlik bilgilerini girin

Her sağlayıcının farklı kimlik bilgisi alanları vardır:

**OpenSRS** — Kullanıcı adı ve özel anahtar (OpenSRS Reseller Kontrol Panelinden)

**Namecheap** — Kullanıcı adı ve API anahtarı (Hesap › Araçlar › API Erişimi'nden)

**GoDaddy** — API anahtarı ve gizli anahtar (developer.godaddy.com'dan)

**ResellerClub** — Reseller ID ve API anahtarı (ResellerClub kontrol panelinden)

**NameSilo** — API anahtarı (namesilo.com › Hesap › API Yöneticisi'nden)

**Enom** — Hesap Kimliği ve API belirteci

Mümkün olduğunda, canlıya geçmeden önce sağlayıcının test ortamına karşı test yapmak için **Sandbox modu**'nu kontrol edin.

### Adım 3 — Bağlantıyı test edin

**Bağlantıyı Test Et** düğmesine tıklayın. Sihirbaz, kimlik bilgileri ve bağlantıyı doğrulamak için hafif bir API çağrısı gönderir. Devam etmeden önce herhangi bir kimlik bilgisi sorununu düzeltin.

### Adım 4 — TLD'leri İçe Aktarın

Bağlı sağlayıcıdan tüm mevcut TLD'leri ve toptan fiyatlandırmayı çekmek için **TLD'leri İçe Aktar** düğmesine tıklayın. Bu, alan adı ürünleri tarafından kullanılan TLD listesini doldurur. İçe aktarma, büyük TLD kataloglarına sahip sağlayıcılar için 30–60 saniye sürebilir.

TLD'ler ayrıca günlük olarak bir zamanlanmış cron işi aracılığıyla otomatik olarak yeniden senkronize edilir.

### Adım 5 — Bir alan adı ürünü oluşturun

Sihirbaz, %10 kar marjlı varsayılan bir yakalama (catch-all) alan adı ürünü oluşturur. Bu ürünü hemen düzenleyebilir veya atlayıp **Ultimate Multisite › Ürünler** altından ürünleri manuel olarak oluşturabilirsiniz.

Tam ürün yapılandırma kılavuzu için [Alan Adı Ürünleri ve Fiyatlandırması](./domain-products)'na bakın.

---

## Bir Sağlayıcıyı Yeniden Yapılandırma

**Ağ Yöneticisi › Ultimate Multisite › Ayarlar › Domain Seller**'a gidin (veya eklenti listesindeki **Ayarlar**'a tıklayın).

Ayarlar sayfası şunları içerir:

- **Alan adı satışını etkinleştir** — tüm özelliği açma/kapama düğmesi
- **Varsayılan sağlayıcı** — alan adı aramaları ve yeni ürünler için kullanılan sağlayıcı
- **Aramadaki maksimum TLD** — bir müşteri arama yaptığında kontrol edilecek TLD sayısı; daha yüksek değerler daha fazla seçenek gösterir ancak daha yavaştır
- **Müsaitlik önbellek süresi** — müsaitlik ve fiyatlandırma sonuçlarının ne kadar süreyle önbellekte tutulacağı; daha düşük değerler daha doğrudur ancak API çağrılarını artırır
- **Alan adı ürünlerini yönet** — Ürünler listesine hızlı bağlantı
- **Sağlayıcıları yapılandır** — sağlayıcı eklemek veya yeniden yapılandırmak için Entegrasyon Sihirbazını açar

### İkinci bir sağlayıcı ekleme

**Sağlayıcıları Yapılandır**'a tıklayın ve yeni kayıt kuruluşu için sihirbazı tekrar çalıştırın. Aynı anda birden fazla sağlayıcı yapılandırabilirsiniz. Her alan adı ürününü belirli bir sağlayıcıya atayın veya varsayılan olarak bırakın.

### TLD'leri manuel senkronize etme

Ayarlar sayfasında, envanterde bulunan herhangi bir sağlayıcının yanındaki **TLD'leri Senkronize Et** düğmesine tıklayarak en son fiyatlandırmayı çekin. Bu, bir sağlayıcı toptan fiyatlandırmayı güncellediğinde veya yeni TLD'ler eklediğinde kullanışlıdır.

---

## Günlükler (Logs)

Her sağlayıcı kendi günlük kanalına yazar. Günlükler **Ağ Yöneticisi › Ultimate Multisite › Günlükler** altında görüntülenebilir:

| Günlük kanalı | İçerik |
|---|---|
| `domain-seller-registration` | Tüm kayıt denemeleri (başarılı ve başarısız) |
| `domain-seller-renewal` | Yenileme işi sonuçları |
| `domain-seller-opensrs` | Ham OpenSRS API etkinliği |
| `domain-seller-namecheap` | Ham Namecheap API etkinliği |
| `domain-seller-godaddy` | Ham GoDaddy API etkinliği |
| `domain-seller-resellerclub` | Ham ResellerClub API etkinliği |
| `domain-seller-namesilo` | Ham NameSilo API etkinliği |
| `domain-seller-enom` | Ham Enom API etkinliği |
