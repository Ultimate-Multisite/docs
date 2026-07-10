---
id: wu_page_this-id_load
title: 'Ekintza - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Eman pluginen garatzaileei gure orrietan hook gehigarriak gehitzeko aukera.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $id | `string` | Orri honen IDa. |
| $page_hook | `string` | Orri honen page hook-a. |
| $admin_page | `self` | Orriaren instantzia. |

### Noiztik {#since}

- 1.8.2
- 2.0.4: Hirugarren parametroa gehituta: orriaren instantzia.
### Iturburua {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) fitxategian definituta, 332. lerroan.
