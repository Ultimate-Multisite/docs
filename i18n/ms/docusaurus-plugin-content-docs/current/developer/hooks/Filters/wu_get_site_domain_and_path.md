---
id: wu_get_site_domain_and_path
title: Penapis - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Membenarkan pembangun untuk memanipulasi pasangan domain/path.

Ini boleh berguna untuk pelbagai perkara, seperti melaksanakan sejenis penyelesaian staging, pelayan yang berbeza, dan lain-lain.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Objek semasa yang mengandungi kunci domain dan path. |
| $path_or_subdomain | `string` | Path/subdomain asal yang dihantar ke fungsi. |

### Since {#since}

- 2.0.0
### Source {#source}

Ditakrifkan dalam [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) pada baris 235


## Returns {#returns}
Objek yang mengandungi kunci domain dan path.
