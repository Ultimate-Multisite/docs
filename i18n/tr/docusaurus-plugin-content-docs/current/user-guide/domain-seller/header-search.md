---
title: Üstbilgi Alan Adı Araması
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Ultimate Multisite checkout içinde müşterinin uygun domainlerden seçim yapmasına izin verdikten sonra domain araması başlatan küçük bir header formu istediğinizde bu kurulumu kullanın.

## Gereksinimler {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Şunlara sahip en az bir aktif domain kayıt ürünü:
  - `domain_provider` yapılandırılmış bir sağlayıcıya ayarlanmış.
  - Desteklenen TLD’ler yapılandırılmış, örneğin `com`, `net` ve `org`.
- **Domain Selection** alanını içeren geçerli bir checkout formu.

## Checkout formu {#checkout-form}

1. Kayıt sayfası tarafından kullanılan checkout formunu oluşturun veya düzenleyin.
2. **Username** dahil olmak üzere normal gerekli checkout/account alanlarını ekleyin. Yalnızca domain alanını içeren bir checkout formu, Ultimate Multisite doğrulaması tarafından reddedilir.
3. Bir **Domain Selection** alanı ekleyin.
4. Akış ücretsiz subdomainler veya mevcut domainler yerine kayıtlı domainlere odaklanmalıysa Domain Selection modunu **Register Only** olarak ayarlayın.
5. Domain kayıt ürününü bu alana atayın.

Kayıt sayfası checkout formunu oluşturmalıdır, örneğin:

```text
[wu_checkout slug="domain-form"]
```

## Header formu {#header-form}

Site header bölümüne, girilen arama terimini `domain_name` olarak checkout sayfasına gönderen küçük bir `GET` formu ekleyin:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Özel header JavaScript içinde bir domaini önceden seçmeyin. Header yalnızca arama terimini iletmelidir. Domain Seller checkout script’i `?domain_name=example` değerini okur, checkout arama kutusunu doldurur ve uygunluk aramasını çalıştırır; böylece müşteri dönen domainler arasından seçim yapabilir.

## Beklenen davranış {#expected-behaviour}

Header’da `example` araması şunu açmalıdır:

```text
/register/?domain_name=example
```

Checkout ardından şu gibi seçilebilir sonuçları göstermelidir:

- `example.com`
- `example.net`
- `example.org` uygun değil
- sağlayıcı tarafından desteklenen diğer TLD’ler

Uygun bir sonuç seçildikten sonra, sipariş özeti domain kayıt ürününü ve seçilen domain adını içermelidir.

## Doğrulama {#verification}

1. Ana sayfayı açın.
2. Çıplak bir ad arayın, örneğin `example`.
3. Checkout URL’sinin `?domain_name=example` içerdiğini doğrulayın.
4. Checkout domain alanının `example` içerdiğini doğrulayın.
5. Domain seçenekleri listesinin göründüğünü doğrulayın.
6. Uygun bir domain için **Select**’e tıklayın.
7. Sipariş özetinin `Domain Registration - example.com` veya seçilen domaini içerdiğini doğrulayın.

## Sorun giderme {#troubleshooting}

- Hiç liste görünmüyorsa, tarayıcı network sekmesinde `admin-ajax.php?action=wu_domain_search` isteğini kontrol edin ve boş olmayan `domains` veya `results` döndürdüğünü doğrulayın.
- Checkout formu kaydedilirken doğrulamada başarısız olursa, **Username** gibi gerekli account alanlarını ekleyin.
- Bir domain seçmek sepeti güncellemiyorsa, `window.wu_checkout_form` öğesinin mevcut olduğunu ve Domain Seller checkout varlıklarının checkout sayfasında yüklendiğini doğrulayın.
