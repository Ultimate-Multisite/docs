---
title: Başlıq domen axtarışı
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domen Axtarışı

Ultimate Multisite checkout daxilində müştəriyə mövcud domenlər arasından seçim etməyə imkan verən domen axtarışını başladan kiçik header formu istədiyiniz zaman bu quraşdırmadan istifadə edin.

## Tələblər {#requirements}

- Ultimate Multisite şəbəkə üzrə aktiv olmalıdır.
- Multisite Ultimate Domain Seller şəbəkə üzrə aktiv olmalıdır.
- Ən azı bir aktiv domen qeydiyyatı məhsulu olmalıdır və onda:
  - `domain_provider` konfiqurasiya edilmiş provayderə təyin edilməlidir.
  - Dəstəklənən TLD-lər konfiqurasiya edilməlidir, məsələn `com`, `net` və `org`.
- **Domen Seçimi** sahəsini ehtiva edən etibarlı checkout formu.

## Checkout formu {#checkout-form}

1. Qeydiyyat səhifəsində istifadə olunan checkout formunu yaradın və ya redaktə edin.
2. **Username** daxil olmaqla adi tələb olunan checkout/account sahələrini əlavə edin. Yalnız domen sahəsini ehtiva edən checkout formu Ultimate Multisite yoxlaması tərəfindən rədd edilir.
3. **Domen Seçimi** sahəsi əlavə edin.
4. Axın pulsuz subdomenlər və ya mövcud domenlər əvəzinə qeydiyyatdan keçirilən domenlərə fokuslanmalıdırsa, Domain Selection rejimini **Register Only** olaraq təyin edin.
5. Domen qeydiyyatı məhsulunu həmin sahəyə təyin edin.

Qeydiyyat səhifəsi checkout formunu göstərməlidir, məsələn:

```text
[wu_checkout slug="domain-form"]
```

## Header formu {#header-form}

Saytın header hissəsinə daxil edilən axtarış terminini checkout səhifəsinə `domain_name` kimi göndərən kiçik `GET` formu əlavə edin:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Xüsusi header JavaScript-də domeni əvvəlcədən seçməyin. Header yalnız axtarış terminini ötürməlidir. Domain Seller checkout skripti `?domain_name=example` oxuyur, checkout axtarış qutusunu doldurur və əlçatanlıq axtarışını işə salır ki, müştəri qaytarılan domenlər arasından seçim edə bilsin.

## Gözlənilən davranış {#expected-behaviour}

Header-də `example` axtarışı bunu açmalıdır:

```text
/register/?domain_name=example
```

Checkout sonra aşağıdakı kimi seçilə bilən nəticələr göstərməlidir:

- `example.com`
- `example.net`
- `example.org` əlçatan deyil
- provayder tərəfindən dəstəklənən digər TLD-lər

Əlçatan nəticə seçildikdən sonra sifariş xülasəsinə domen qeydiyyatı məhsulu və seçilmiş domen adı daxil olmalıdır.

## Yoxlama {#verification}

1. Ana səhifəni açın.
2. Sadə ad axtarın, məsələn `example`.
3. Checkout URL-nin `?domain_name=example` ehtiva etdiyini təsdiqləyin.
4. Checkout domen sahəsinin `example` ehtiva etdiyini təsdiqləyin.
5. Domen seçimləri siyahısının göründüyünü təsdiqləyin.
6. Əlçatan domen üçün **Seç** düyməsinə klikləyin.
7. Sifariş xülasəsində `Domain Registration - example.com` və ya seçilmiş domenin olduğunu təsdiqləyin.

## Problemlərin həlli {#troubleshooting}

- Siyahı görünmürsə, brauzerin şəbəkə tabında `admin-ajax.php?action=wu_domain_search` üçün yoxlayın və onun boş olmayan `domains` və ya `results` qaytardığını təsdiqləyin.
- Checkout formu yadda saxlanarkən yoxlamadan keçmirsə, **Username** kimi tələb olunan account sahələrini əlavə edin.
- Domen seçimi səbəti yeniləmirsə, `window.wu_checkout_form` mövcud olduğunu və Domain Seller checkout asset-lərinin checkout səhifəsində yükləndiyini təsdiqləyin.
