---
id: wu_mt_provider_log
title: Akció - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log

Elküldődik, amikor egy szolgáltató üzenetet naplózik.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $message | `string` | A napló üzenete. |
| $level | `string` | A napló szintje. |
| $context | `array` | További kontextus/adatok. |

### Desde {#since}

- 1.0.0
### Forrás {#source}

Definálva a [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) fájlban, 400-sorban.
