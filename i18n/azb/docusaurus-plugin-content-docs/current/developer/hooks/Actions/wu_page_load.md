---
id: wu_page_load
title: Aksiyon - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Eklenti geliştiricilerinin sayfalarımıza ek hook'lar eklemesine izin verir.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Bu sayfanın kimliği (ID). |
| $page_hook | `string` | Bu sayfanın sayfa hook'u. |
| $admin_page | `self` | Sayfa örneği (instance). |

### Ne Zaman {#since}

- 1.8.2
- 2.0.4: Üçüncü parametre eklendi: sayfa örneği.
### Kaynak {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) dosyasında 318. satırda tanımlanmıştır.
