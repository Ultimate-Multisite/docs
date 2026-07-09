---
id: wu_make_primary_domain_redirect_url
title: Isihlungi - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Ihlunga i-URL yokuqondisa kabusha ngemva kokwenza i-domain ibe eyinhloko.

Ivumela abathuthukisi ukwenza ngokwezifiso lapho abasebenzisi beqondiswa khona kabusha ngemva kokusetha ngempumelelo i-domain njengeyinhloko. Ngokuzenzakalelayo, iqondisa kabusha ku-URL yamanje kusayithi eyinhloko, noma ku-URL ye-admin yesayithi elishintshwayo.

## Amapharamitha

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $redirect_url | `string` | I-URL yokuqondisa kabusha ezenzakalelayo. Kungaba i-URL yamanje (uma kuyisayithi eyinhloko) noma i-URL ye-admin yesayithi yamanje. |
| $current_site | `int` | I-ID yesayithi i-domain yayo eyenziwa ibe eyinhloko. |
| $domain | `\Domain` | Into ye-domain eyenziwe yaba eyinhloko. |
| $old_primary_domains | `array` | Uhlu lwama-ID ama-domain abekade eyinhloko ngaphambilini. |

### Kusukela

- 2.0.0
### Umthombo

Kuchazwe ku-[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) emugqeni 639


## Okubuyiswayo
I-URL yokuqondisa kabusha ehlungiwe.
