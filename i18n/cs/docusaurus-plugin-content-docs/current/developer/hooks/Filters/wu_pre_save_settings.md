---
id: wu_pre_save_settings
title: Filtrační funkce - wu_pre_save_settings
sidebar_label: wu_pre_save_settings
_i18n_hash: 9fe0dc9f71e2d9da3869f40ab53dc453
---
# Filtrační hook: wu_pre_save_settings

Umožňuje vývojářům filtrovat nastavení před uložením pomocí Ultimate Multisite.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $settings | `array` | Nastavení, která mají být uložena. |
| $settings_to_save | `array` | Nová nastavení, která se přidávají. |
| $saved_settings | `array` | Aktuálně uložená nastavení. |

### Od

- 2.0.18
### Zdroj

Definováno v [`inc/class-settings.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-settings.php#L296) na řádku 296
