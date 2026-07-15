---
id: wu_page_this-id_load
title: 'Aðgerð - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Leyfa viðbótaforriturum að bæta við viðbótarkrókum á síðurnar okkar.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Auðkenni þessarar síðu. |
| $page_hook | `string` | Síðukrókur þessarar síðu. |
| $admin_page | `self` | Síðutilvikið. |

### Frá útgáfu {#since}

- 1.8.2
- 2.0.4: Bætti við þriðju færibreytunni: síðutilvikinu.
### Uppruni {#source}

Skilgreint í [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) í línu 332
