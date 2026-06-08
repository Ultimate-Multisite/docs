---
id: wu_mt_provider_log
title: Akce - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log

Spouští se, když poskytovatel (provider) zaznamená zprávu.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $message | `string` | Záznamová zpráva. |
| $level | `string` | Úroveň logování. |
| $context | `array` | Doplňující kontext. |

### Od verze

- 1.0.0
### Zdroj

Definováno v [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) na řádku 400
