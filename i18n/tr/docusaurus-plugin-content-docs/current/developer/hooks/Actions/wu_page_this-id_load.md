---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load {#action-wupagethis-idload}

Eklenti geliştiricilerinin sayfalara ek hook'lar eklemesine olanak tanır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Bu sayfanın kimliği (ID). |
| $page_hook | `string` | Bu sayfanın sayfa hook'u. |
| $admin_page | `self` | Sayfa örneği (instance). |

### Since {#since}

- 1.8.2
- 2.0.4: Üçüncü parametre eklendi: sayfa örneği.
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) dosyasının 332. satırında tanımlanmıştır.
