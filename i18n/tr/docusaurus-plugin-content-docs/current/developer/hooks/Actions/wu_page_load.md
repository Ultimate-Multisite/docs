---
id: wu_page_load
title: Eylem - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Plugin geliştiricilerinin sayfalarımıza ek kancalar (hooks) eklemesine izin verir.

## Parametreler {#parameters}

| Ad | Tür | Açıklama |
|------|------|-------------|
| $id | `string` | Bu sayfanın kimliği (ID). |
| $page_hook | `string` | Bu sayfanın sayfa kancası (page hook). |
| $admin_page | `self` | Sayfa örneği (page instance). |

### Versiyon {#since}

- 1.8.2
- 2.0.4: Üçüncü parametre eklendi: sayfa örneği.
### Kaynak {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) dosyasının 318. satırında tanımlanmıştır.
