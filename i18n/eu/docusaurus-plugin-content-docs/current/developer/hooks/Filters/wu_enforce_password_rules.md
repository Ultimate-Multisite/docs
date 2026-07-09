---
id: wu_enforce_password_rules
title: Iragazkia - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Iragazkia: wu_enforce_password_rules

Pasahitz-arau gehigarriak ezarri behar diren ala ez iragazi.

Egia denean, gutxieneko luzera eta karaktere-eskakizunak ezartzen ditu. Automatikoki gaitzen da "Super Strong" ezarpenerako edo Defender Pro-ren Strong Password eginbidea aktibo dagoenean.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $enforce_rules | `bool` | Arau gehigarriak ezarri behar diren ala ez. |
| $strength_setting | `string` | Adminaren ezarpen-balioa. |
| $defender_active | `bool` | Defender Pro Strong Password aktibo dagoen ala ez. |

### Noiztik

- 2.4.0
### Iturburua

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) fitxategian definitua, 531. lerroan
