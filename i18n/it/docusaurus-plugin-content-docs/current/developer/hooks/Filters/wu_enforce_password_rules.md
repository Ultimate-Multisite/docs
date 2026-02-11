---
id: wu_enforce_password_rules
title: Filtro - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filtro: wu_enforce_password_rules

Filtro per verificare se applicare regole aggiuntive alla password.

Se vero, impone requisiti di lunghezza minima e di caratteri. È abilitato automaticamente per l'impostazione "Super Strong" o quando la funzione Strong Password di Defender Pro è attiva.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Se applicare regole aggiuntive. |
| $strength_setting | `string` | Il valore dell'impostazione amministrativa. |
| $defender_active | `bool` | Se la Strong Password di Defender Pro è attiva. |

### Since

- 2.4.0

### Source

Definito in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) alla riga 531
