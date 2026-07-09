---
id: wu_make_primary_domain_redirect_url
title: Penapis - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Memfilter URL pengalihan selepas menjadikan domain sebagai domain utama.

Membenarkan pembangun untuk menyesuaikan ke mana pengguna dialihkan selepas berjaya menetapkan domain sebagai utama. Secara lalai, ia akan dialihkan ke URL semasa di laman utama, atau ke URL pentadbir (admin) bagi laman yang sedang diubah suai.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL pengalihan lalai. Sama ada URL semasa (jika laman utama) atau URL pentadbir bagi laman semasa. |
| $current_site | `int` | ID laman yang domainnya sedang dijadikan utama. |
| $domain | `\Domain` | Objek domain yang telah dijadikan utama. |
| $old_primary_domains | `array` | Array ID domain yang sebelum ini adalah utama. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Ditakrifkan dalam [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) pada baris 639


## Pulangan {#returns}
URL pengalihan yang telah ditapis.
