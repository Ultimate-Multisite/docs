---
title: Hestia Control Panel Integration
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration

Bu rehber, Ultimate Multisite Hestia entegrasyonunu nasıl yapılandıracağınızı anlatıyor. Bu sayede ağınızdaki eşlenmiş (mapped) alan adları, Hestia'da Web Domain Alias olarak otomatik olarak eklenir (veya kaldırılır).

- Hestia CLI referansı: v-add-web-domain-alias / v-delete-web-domain-alias
- Resmi REST API dokümanı: https://hestiacp.com/docs/server-administration/rest-api.html

## Ne İşe Yarar
- Bir alan adı Ultimate Multisite'da eşlendiğinde, entegrasyon şu komutu çalıştırmak için Hestia API'sini kullanır:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Bir alan adı eşlemesi kaldırıldığında ise şunu çalıştırır:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ayrıca, Alan Eşlemesi (Domain Mapping) ayarlarındaki “www alt alan adını otomatik oluştur” ayarınıza bağlı olarak isteğe bağlı olarak `www.` alias'ını ekler/kaldırır.

## Ön Koşullar
- WordPress kurulumunuzu zaten işaret eden mevcut bir Hestia Web Domain'i olmalıdır. Entegrasyon, alias'ları bu temel alan adına ekleyecektir.
- Hestia API erişimi etkinleştirilmiş olmalıdır. Kimlik doğrulaması için ya bir şifre ya da bir API hash/token kullanabilirsiniz.

API erişimini ve kimlik doğrulama detaylarını etkinleştirmek için Hestia'nın REST API dokümanlarına bakın:
https://hestiacp.com/docs/server-administration/rest-api.html

## Yapılandırma (Wizard → Integrations → Hestia)
Aşağıdaki değerleri sağlamanız gerekir:

- `WU_HESTIA_API_URL` (zorunlu)
  - Temel API uç noktasıdır; genellikle `https://your-hestia-host:8083/api/` şeklindedir.
- `WU_HESTIA_API_USER` (zorunlu)
  - API komutları için kullanılan Hestia kullanıcısıdır (genellikle `admin`).
- `WU_HESTIA_API_PASSWORD` veya `WU_HESTIA_API_HASH` (en az biri)
  - Bir kimlik doğrulama yöntemi seçin: şifre veya API hash/token.
- `WU_HESTIA_ACCOUNT` (zorunlu)
  - Hestia'daki Web Domain'in (sahibinin) hesabıdır; bu, CLI'daki ilk argümandır.
- `WU_HESTIA_WEB_DOMAIN` (zorunlu)
  - WordPress'inizi barındıran mevcut Hestia Web Domain'idir (alias'lar buraya eklenecektir).
- `WU_HESTIA_RESTART` (isteğe bağlı; varsayılan `yes`)
  - Alias değişikliklerinden sonra servisleri yeniden başlatılıp başlatılmayacağını belirtir.

Bu sabitleri `wp-config.php` dosyasına enstrüman (inject) etmesini sağlayabilir veya manuel olarak tanımlayabilirsiniz.

## Kurulumu Doğrulama
- Wizard'daki “Testing” adımında, plugin API üzerinden `v-list-web-domains <WU_HESTIA_ACCOUNT> json` komutunu çağırır. Başarılı bir yanıt, bağlantı ve kimlik doğrulamasını onaylar.
- Bir alan adı eşledikten sonra Hestia'da kontrol edin: Web > temel alan adı > Aliases. Yeni alias'ı eklenmiş olmalısınız.

## Notlar ve İpuçları
- `WU_HESTIA_WEB_DOMAIN`'in zaten var olduğundan ve `WU_HESTIA_ACCOUNT` tarafından sahiplenildiğinden emin olun.
- SSL gerekiyorsa, sertifikaları Hestia üzerinden yönetin. Bu entegrasyon şu anda sadece alias'ları yönetir.
- Plugin, Alan Eşlemesi (Domain Mapping) “www alt alan adı” ayarınıza bağlı olarak `www.<domain>` ekleyip/kaldırabilir.

## Örnek API Çağrısı (cURL)
Aşağıda kavramsal bir örnek verilmiştir (kendi ortamınıza göre ayarlayın). Tam parametreler için resmi dokümana bakın.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (veya &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (eklenecek alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Silmek için ise `cmd=v-delete-web-domain-alias` kullanın ve aynı argümanları kullanın.

## Sorun Giderme
- API'den HTTP hatası: `WU_HESTIA_API_URL`'nin erişilebilir olduğundan ve `/api` içerdiğinden emin olun.
- Kimlik doğrulama hataları: `WU_HESTIA_API_USER` ve ya `WU_HESTIA_API_PASSWORD` ya da `WU_HESTIA_API_HASH`'ı kontrol edin.
- Loglarda “Eksik hesap/temel alan adı”: `WU_HESTIA_ACCOUNT` ve `WU_HESTIA_WEB_DOMAIN`'in Hestia'da ayarlanmış ve geçerli olduğundan emin olun.

## Referanslar
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referansı (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
