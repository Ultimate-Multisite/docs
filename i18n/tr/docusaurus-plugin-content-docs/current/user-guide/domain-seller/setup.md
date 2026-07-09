---
title: Kurulum ve Sağlayıcı Yapılandırması
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Kurulum ve Sağlayıcı Yapılandırması

Domain Seller eklentisi, sizi gerekli her adımda yönlendiren rehberli bir kurulum sihirbazıyla gelir. Bu sayfa, sihirbaz akışını ve sonrasında sağlayıcıları nasıl yapılandıracağınızı veya yeniden yapılandıracağınızı kapsar.

## Gereksinimler

- **Multisite Ultimate** v2.4.12 veya üzeri, ağda etkinleştirilmiş
- **PHP** 7.4+
- En az bir desteklenen kayıt kuruluşu için API kimlik bilgileri

## İlk çalıştırma kurulum sihirbazı

Kurulum sihirbazı, plugin’i ağda ilk kez etkinleştirdiğinizde otomatik olarak başlatılır. Ayrıca istediğiniz zaman **Network Admin › Ultimate Multisite › Domain Seller Setup** üzerinden de kullanılabilir.

### Adım 1 — Bir sağlayıcı seçin

Bağlanmak istediğiniz kayıt kuruluşunu seçin. Desteklenen seçenekler:

| Sağlayıcı | DNS yönetimi | WHOIS gizliliği |
|---|---|---|
| OpenSRS | Evet | Evet |
| Namecheap | Hayır | Evet (WhoisGuard, ücretsiz) |
| HostAfrica | Evet | Evet (ID koruması) |
| Openprovider | Evet | Evet |
| Hostinger | Barındırılan alan adları için çekirdek Hostinger domain mapping üzerinden | Evet |
| GoDaddy | Hayır | Hayır |
| ResellerClub | Evet | Hayır |
| NameSilo | Hayır | Hayır |
| Enom | Evet | Hayır |

### Adım 2 — Kimlik bilgilerini girin

Her sağlayıcının farklı kimlik bilgisi alanları vardır:

**OpenSRS** — Kullanıcı adı ve özel anahtar (OpenSRS Reseller Control Panel’den)

**Namecheap** — Kullanıcı adı ve API anahtarı (Account › Tools › API Access’ten)

**HostAfrica** — HostAfrica bayi modülünden Domains Reseller API endpoint’i ve kimlik bilgileri. Şu anda ayrı bir sandbox endpoint’i belgelenmemiştir; canlı kayıtları çalıştırmadan önce güvenli salt okunur kontrollerle test edin.

**Openprovider** — API erişimi etkinleştirilmiş kullanıcı adı ve parola. İsteğe bağlı sandbox modu Openprovider sandbox API’sini kullanır ve isteğe bağlı varsayılan müşteri handle’ı kayıtlar için yeniden kullanılabilir.

**Hostinger** — Çekirdek Hostinger entegrasyonundan paylaşılan Hostinger hPanel API token’ı. Aynı token, çekirdek domain mapping’i ve Domain Seller kayıt işlemlerini çalıştırır.

**GoDaddy** — API anahtarı ve gizli anahtar (developer.godaddy.com’dan)

**ResellerClub** — Bayi ID’si ve API anahtarı (ResellerClub kontrol panelinden)

**NameSilo** — API anahtarı (namesilo.com › Account › API Manager’dan)

**Enom** — Account ID’si ve API token’ı

Canlıya geçmeden önce sağlayıcının test ortamına karşı test etmek için mevcut olduğu yerlerde **Sandbox mode** seçeneğini işaretleyin.

### Adım 3 — Bağlantıyı test edin

**Test Connection** öğesine tıklayın. Sihirbaz, kimlik bilgilerini ve bağlantıyı doğrulamak için hafif bir API çağrısı gönderir. Devam etmeden önce tüm kimlik bilgisi sorunlarını düzeltin.

### Adım 4 — TLD’leri içe aktarın

Bağlı sağlayıcıdan mevcut tüm TLD’leri ve toptan fiyatlandırmayı çekmek için **Import TLDs** öğesine tıklayın. Bu, domain ürünleri tarafından kullanılan TLD listesini doldurur. Büyük TLD kataloglarına sahip sağlayıcılar için içe aktarma 30–60 saniye sürebilir.

TLD’ler ayrıca planlanmış bir cron görevi aracılığıyla günde bir kez otomatik olarak yeniden eşitlenir.

### Adım 5 — Bir domain ürünü oluşturun

Sihirbaz, %10 kâr marjına sahip varsayılan bir tümünü yakala domain ürünü oluşturur. Bu ürünü hemen düzenleyebilir veya atlayıp **Ultimate Multisite › Products** altında ürünleri manuel olarak oluşturabilirsiniz.

Tam ürün yapılandırma kılavuzu için [Domain Ürünleri ve Fiyatlandırma](./domain-products) sayfasına bakın.

---

## Bir sağlayıcıyı yeniden yapılandırma

**Network Admin › Ultimate Multisite › Settings › Domain Seller** bölümüne gidin (veya plugin listesinde **Settings** öğesine tıklayın).

Ayarlar sayfası şunları içerir:

- **Domain satışını etkinleştir** — tüm özelliği açıp kapatır
- **Varsayılan sağlayıcı** — domain aramaları ve yeni ürünler için kullanılan sağlayıcı
- **Arama başına maksimum TLD** — bir müşteri arama yaptığında kaç TLD’nin kontrol edileceği; daha yüksek değerler daha fazla seçenek gösterir ancak daha yavaştır
- **Uygunluk önbelleği süresi** — uygunluk ve fiyatlandırma sonuçlarının ne kadar süre önbelleğe alınacağı; daha düşük değerler daha doğrudur ancak API çağrılarını artırır
- **Domain ürünlerini yönet** — Products listesine hızlı bağlantı
- **Sağlayıcıları yapılandır** — sağlayıcı eklemek veya yeniden yapılandırmak için Integration Wizard’ı açar

### İkinci bir sağlayıcı ekleme

**Configure providers** öğesine tıklayın ve yeni kayıt kuruluşu için sihirbazı tekrar çalıştırın. Aynı anda birden fazla sağlayıcı yapılandırabilirsiniz. Her domain ürününü belirli bir sağlayıcıya atayın veya varsayılanda bırakın.

### TLD’leri manuel olarak eşitleme

Ayarlar sayfasında, en güncel fiyatlandırmayı çekmek için yapılandırılmış herhangi bir sağlayıcının yanındaki **Sync TLDs** öğesine tıklayın. Bu, bir sağlayıcı toptan fiyatlandırmayı güncelledikten veya yeni TLD’ler ekledikten sonra kullanışlıdır.

---

## Günlükler

Her sağlayıcı kendi günlük kanalına yazar. Günlükler **Network Admin › Ultimate Multisite › Logs** altında görüntülenebilir:

| Günlük kanalı | İçerikler |
|---|---|
| `domain-seller-registration` | Tüm kayıt denemeleri (başarılı ve başarısız) |
| `domain-seller-renewal` | Yenileme işi sonuçları |
| `domain-seller-opensrs` | Ham OpenSRS API etkinliği |
| `domain-seller-namecheap` | Ham Namecheap API etkinliği |
| `domain-seller-hostafrica` | Ham HostAfrica API etkinliği |
| `domain-seller-openprovider` | Ham Openprovider API etkinliği |
| `domain-seller-hostinger` | Ham Hostinger API etkinliği |
| `domain-seller-godaddy` | Ham GoDaddy API etkinliği |
| `domain-seller-resellerclub` | Ham ResellerClub API etkinliği |
| `domain-seller-namesilo` | Ham NameSilo API etkinliği |
| `domain-seller-enom` | Ham Enom API etkinliği |

---

## Sağlayıcı yetenek notları

Her kayıt kuruluşu API’si aynı işlemleri sunmaz. Eklenti, desteklenmeyen işlemleri sessizce başarısız olmak yerine yöneticiye yönelik net hatalarla gösterir.

- **HostAfrica**, sorgulama, TLD/fiyatlandırma senkronizasyonu, kayıt, yenileme, transfer, nameserver güncellemeleri, DNS kayıtları, EPP kodları, registrar kilidi ve ID koruması dahil en kapsamlı canlı bayi iş akışını destekler.
- **Openprovider**, bayi fiyatlı TLD senkronizasyonu, kayıt, yenileme, transferler, nameserver güncellemeleri, DNS bölgeleri, EPP kodları, registrar kilidi ve WHOIS gizliliğini destekler. Eklentinin otomatik olarak yenilediği kısa ömürlü bir bearer token ile kimlik doğrular.
- **Hostinger**, paylaşılan hPanel API token aracılığıyla uygunluk araması, kayıt, portföy sorgulama, nameserver güncellemeleri, registrar kilidi ve WHOIS gizliliğini destekler. Hostinger'ın herkese açık Domains API'si bayi/toptan fiyatlandırmayı, gelen transferi, açık yenilemeyi veya EPP kodu almayı sunmaz; yenilemeler yalnızca otomatik yenilemedir.
