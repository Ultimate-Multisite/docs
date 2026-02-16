---
title: Hestia Kontrol Paneli Entegrasyonu
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Kontrol Paneli Entegrasyonu

Bu rehber, ağınızdaki eşleştirilmiş alan adlarının Hestia'da otomatik olarak Web Domain Alias (web alan adı takma adı) olarak eklenmesi ve kaldırılması için Ultimate Multisite Hestia entegrasyonunu nasıl yapılandıracağınızı açıklar.

- Hestia CLI referansı: v-add-web-domain-alias / v-delete-web-domain-alias
- Resmi REST API dokümanı: https://hestiacp.com/docs/server-administration/rest-api.html

## Ne İşe Yarar
- Ultimate Multisite'ta bir alan adı eşleştirildiğinde, entegrasyon Hestia API'sini çağırarak şu komutu çalıştırır:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Bir alan adı eşleştirmesi kaldırıldığında şu komutu çalıştırır:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping ayarlarındaki "www alt alan adını otomatik oluştur" seçeneğinize bağlı olarak isteğe bağlı şekilde `www.` takma adını ekler veya kaldırır.

## Gereksinimler
- WordPress kurulumunuza zaten bağlı olan mevcut bir Hestia Web Domain. Entegrasyon, takma adları bu temel alan adına ekleyecektir.
- Hestia API erişiminin etkinleştirilmiş olması. Kimlik doğrulaması için şifre veya API hash/token kullanabilirsiniz.

API erişimini etkinleştirme ve kimlik doğrulama detayları için Hestia'nın REST API dokümanlarına bakın:
https://hestiacp.com/docs/server-administration/rest-api.html

## Yapılandırma (Wizard → Integrations → Hestia)
Aşağıdaki değerleri girin:

- `WU_HESTIA_API_URL` (zorunlu)
  - Temel API uç noktası, genellikle `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (zorunlu)
  - API komutları için kullanılan Hestia kullanıcısı (genellikle `admin`).
- `WU_HESTIA_API_PASSWORD` veya `WU_HESTIA_API_HASH` (en az biri)
  - Bir kimlik doğrulama yöntemi seçin: şifre veya API hash/token.
- `WU_HESTIA_ACCOUNT` (zorunlu)
  - Hestia'daki Web Domain'in sahibi olan hesap; CLI'ın ilk argümanıdır.
- `WU_HESTIA_WEB_DOMAIN` (zorunlu)
  - WordPress'inizi sunan mevcut Hestia Web Domain (takma adlar buraya eklenecektir).
- `WU_HESTIA_RESTART` (isteğe bağlı; varsayılan `yes`)
  - Takma ad değişikliklerinden sonra servislerin yeniden başlatılıp/yeniden yüklenmesi gerekip gerekmediği.

Sihirbazın bu sabitleri `wp-config.php` dosyasına eklemesine izin verebilir veya bunları manuel olarak tanımlayabilirsiniz.

## Kurulumu Doğrulama
- Sihirbazın "Testing" adımında, eklenti API üzerinden `v-list-web-domains <WU_HESTIA_ACCOUNT> json` komutunu çağırır. Başarılı bir yanıt, bağlantının ve kimlik doğrulamanın çalıştığını onaylar.
- Bir alan adını eşleştirdikten sonra Hestia'da kontrol edin: Web > temel alan adı > Aliases. Yeni takma adın eklendiğini görmelisiniz.

## Notlar ve İpuçları
- `WU_HESTIA_WEB_DOMAIN` değerinin zaten mevcut olduğundan ve `WU_HESTIA_ACCOUNT` tarafından sahiplenildiğinden emin olun.
- SSL gerekiyorsa, sertifikaları Hestia üzerinden yönetin. Bu entegrasyon şu anda yalnızca takma adları işlemektedir.
- Eklenti, Domain Mapping "www subdomain" ayarınıza bağlı olarak `www.<domain>` takma adını da ekleyebilir veya kaldırabilir.

## Örnek API Çağrısı (cURL)
Aşağıda kavramsal bir örnek verilmiştir (ortamınıza göre düzenleyin). Kesin parametreler için resmi dokümana bakın.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (veya &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (eklenecek takma ad)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Silme işlemi için `cmd=v-delete-web-domain-alias` kullanın ve aynı argümanları girin.

## Sorun Giderme
- API'den HTTP hatası: `WU_HESTIA_API_URL` değerinin erişilebilir olduğunu ve `/api` içerdiğini doğrulayın.
- Kimlik doğrulama hataları: `WU_HESTIA_API_USER` ve `WU_HESTIA_API_PASSWORD` veya `WU_HESTIA_API_HASH` değerlerini kontrol edin.
- Günlüklerde "Missing account/base domain" hatası: `WU_HESTIA_ACCOUNT` ve `WU_HESTIA_WEB_DOMAIN` değerlerinin ayarlandığından ve Hestia'da geçerli olduğundan emin olun.

## Referanslar
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referansı (Takma Adlar): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
