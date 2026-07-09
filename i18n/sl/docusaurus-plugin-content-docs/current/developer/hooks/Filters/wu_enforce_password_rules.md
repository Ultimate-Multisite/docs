---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Filtrirajte, ali naj se uveljavljajo dodatna pravila za geslo.

Ko je true, uveljavlja minimalno dolžino in zahteve glede znakov. Samodejno omogočeno za nastavitev "Super Strong" ali ko je aktivna funkcija Strong Password v Defender Pro.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Ali naj se uveljavljajo dodatna pravila. |
| $strength_setting | `string` | Vrednost nastavitve skrbnika. |
| $defender_active | `bool` | Ali je Strong Password v Defender Pro aktiven. |

### Od različice

- 2.4.0
### Vir

Določeno v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) v vrstici 531
