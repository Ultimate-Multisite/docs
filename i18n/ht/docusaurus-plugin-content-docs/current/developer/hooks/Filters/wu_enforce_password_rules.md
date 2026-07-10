---
id: wu_enforce_password_rules
title: Filtre - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtre: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filtre si pou aplike règ modpas adisyonèl.

Lè li vre, li aplike egzijans longè minimòm ak karaktè. Li aktive otomatikman pou anviwònman "Super Strong" oswa lè fonksyon Strong Password Defender Pro a aktif.

## Paramèt {#parameters}

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $enforce_rules | `bool` | Si pou aplike règ adisyonèl. |
| $strength_setting | `string` | Valè anviwònman admin lan. |
| $defender_active | `bool` | Si Strong Password Defender Pro aktif. |

### Depi {#since}

- 2.4.0
### Sous {#source}

Defini nan [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) nan liy 531
