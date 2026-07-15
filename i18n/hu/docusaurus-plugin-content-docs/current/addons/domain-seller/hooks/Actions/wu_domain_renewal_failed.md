---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Elküldődik, ha egy domain megújítási kísérlet sikertelen.

## Paraméterek {#parameters}

| Neve | Típusa | Leírás |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Az a fizetés, ami a megújítást indította el. |
| $renewal_data | `array&lt;string,mixed&gt;` | Megújítási metadaták (domain_name, years stb.). |
| $error_message | `string` | Olvasható hibaüzenet a regisztrátortól. |

### Mivel {#since}

- 2.0.0
### Forrás {#source}

Meghatározva a [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) fájlban a 630-sorban.
