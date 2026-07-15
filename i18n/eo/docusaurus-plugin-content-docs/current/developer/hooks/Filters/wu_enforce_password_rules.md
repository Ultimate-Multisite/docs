---
id: wu_enforce_password_rules
title: Filtrilo - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtrilo: wu_enforce_password_rules

Filtras ĉu devigi aldonajn pasvortajn regulojn.

Kiam vera, devigas minimuman longon kaj signajn postulojn. Aŭtomate ebligita por la agordo "Super Strong" aŭ kiam la trajto Strong Password de Defender Pro estas aktiva.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $enforce_rules | `bool` | Ĉu devigi aldonajn regulojn. |
| $strength_setting | `string` | La administra agorda valoro. |
| $defender_active | `bool` | Ĉu Defender Pro Strong Password estas aktiva. |

### Ekde {#since}

- 2.4.0
### Fonto {#source}

Difinita en [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ĉe linio 531
