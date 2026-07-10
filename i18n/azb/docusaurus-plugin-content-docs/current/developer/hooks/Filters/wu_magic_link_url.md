---
id: wu_magic_link_url
title: Filter - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# Filter: wu_magic_link_url {#filter-wumagiclinkurl}

Oluşturulan magic link URL'sini filtreleyerek düzenleyebilirsiniz.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $magic_link | `string` | Oluşturulan magic link URL'sidir. |
| $user_id | `int` | Kullanıcının kimlik numarası (ID). |
| $site_id | `int` | Sitenin kimlik numarası (ID). |
| $redirect_to | `string` | Kullanıcının yönlendirileceği URL. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) dosyasının 148. satırında tanımlanmıştır.
