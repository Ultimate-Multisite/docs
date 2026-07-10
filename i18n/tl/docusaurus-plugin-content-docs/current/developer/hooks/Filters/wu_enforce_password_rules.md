---
id: wu_enforce_password_rules
title: Salain - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

I-filter kung ipatutupad ang mga karagdagang patakaran sa password.

Kapag true, ipinatutupad ang minimum na haba at mga kinakailangan sa character. Awtomatikong naka-enable para sa setting na "Super Strong" o kapag aktibo ang feature na Strong Password ng Defender Pro.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $enforce_rules | `bool` | Kung ipatutupad ang mga karagdagang patakaran. |
| $strength_setting | `string` | Ang halaga ng setting ng admin. |
| $defender_active | `bool` | Kung aktibo ang Defender Pro Strong Password. |

### Mula noong {#since}

- 2.4.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) sa linya 531
