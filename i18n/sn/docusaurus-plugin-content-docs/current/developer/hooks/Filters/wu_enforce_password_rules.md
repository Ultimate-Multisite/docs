---
id: wu_enforce_password_rules
title: Sefa - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Sefa kana kumanikidza mitemo yekuwedzera yemapassword.

Kana chiri true, inomanikidza kureba kushoma uye zvinodiwa zvemavara. Inogoneswa otomatiki pakuseta kwe "Super Strong" kana kana chimiro cheStrong Password cheDefender Pro chiri kushanda.

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $enforce_rules | `bool` | Kana kumanikidza mitemo yekuwedzera. |
| $strength_setting | `string` | Kukosha kwekuseta kweadmin. |
| $defender_active | `bool` | Kana Defender Pro Strong Password iri kushanda. |

### Kubva {#since}

- 2.4.0
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) pamutsetse 531
