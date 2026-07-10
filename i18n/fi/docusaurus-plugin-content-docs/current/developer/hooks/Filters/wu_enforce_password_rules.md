---
id: wu_enforce_password_rules
title: Suodatin - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Suodata, pakotetaanko lisäsalasanasääntöjä.

Kun arvo on true, pakottaa vähimmäispituuden ja merkkivaatimukset. Otetaan automaattisesti käyttöön "Super Strong" -asetuksella tai kun Defender Pro:n Strong Password -ominaisuus on aktiivinen.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Pakotetaanko lisäsääntöjä. |
| $strength_setting | `string` | Ylläpitäjän asetuksen arvo. |
| $defender_active | `bool` | Onko Defender Pro Strong Password aktiivinen. |

### Alkaen {#since}

- 2.4.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) rivillä 531
