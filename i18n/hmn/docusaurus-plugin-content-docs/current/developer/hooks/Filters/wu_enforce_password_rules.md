---
id: wu_enforce_password_rules
title: Lim - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filter seb puas yuav yuam siv cov cai password ntxiv.

Thaum yog true, yuam siv qhov ntev tsawg kawg thiab cov kev cai cim. Yuav qhib tau nws tus kheej rau qhov teeb tsa "Super Strong" lossis thaum Defender Pro qhov Strong Password feature tab tom siv.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Seb puas yuav yuam siv cov cai ntxiv. |
| $strength_setting | `string` | Tus nqi teeb tsa ntawm admin. |
| $defender_active | `bool` | Seb Defender Pro Strong Password puas tab tom siv. |

### Txij thaum {#since}

- 2.4.0
### Source {#source}

Teev tseg hauv [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ntawm kab 531
