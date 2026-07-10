---
id: wu_enforce_password_rules
title: Filtru - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

Filtrează dacă trebuie aplicate reguli suplimentare de parolă.

Dacă este setat pe `true`, impune o lungime minimă și cerințe de caractere. Aceasta se activează automat pentru setarea „Super Strong” sau atunci când funcția Strong Password din Defender Pro este activă.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Dacă trebuie aplicate reguli suplimentare. |
| $strength_setting | `string` | Valoarea setării de administrare. |
| $defender_active | `bool` | Dacă funcția Strong Password din Defender Pro este activă. |

### Since {#since}

- 2.4.0
### Source {#source}

Definit în [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) la linia 531
