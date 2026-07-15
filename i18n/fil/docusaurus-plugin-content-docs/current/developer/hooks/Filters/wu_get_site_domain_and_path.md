---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Pinapayagan nito ang mga developer na baguhin ang mga pares ng domain at path.

Maaari itong maging kapaki-pakinabang para sa maraming bagay, tulad ng pagpapatupad ng isang uri ng staging solution, paggamit ng iba't ibang server, at iba pa.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Ang kasalukuyang object na naglalaman ng mga key para sa domain at path. |
| $path_or_subdomain | `string` | Ang orihinal na path/subdomain na ipinasa sa function. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns {#returns}
Isang object na naglalaman ng mga key para sa domain at path.
