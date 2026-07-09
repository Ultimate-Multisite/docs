---
id: wu_enforce_password_rules
title: Criathrag - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Criathrag: wu_enforce_password_rules

Criathraich am bu chòir riaghailtean facail-fhaire a bharrachd a chur an gnìomh.

Nuair a tha e true, cuiridh e an gnìomh riatanasan faid as lugha agus caractaran. Air a chur an comas gu fèin-obrachail airson an roghainn "Super Strong" no nuair a tha feart Strong Password aig Defender Pro gnìomhach.

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $enforce_rules | `bool` | Am bu chòir riaghailtean a bharrachd a chur an gnìomh. |
| $strength_setting | `string` | Luach roghainn an admin. |
| $defender_active | `bool` | Am bheil Defender Pro Strong Password gnìomhach. |

### Bho

- 2.4.0
### Tùs

Air a mhìneachadh ann an [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) aig loidhne 531
