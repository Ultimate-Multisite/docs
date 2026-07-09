---
id: wu_mt_provider_log
title: Akcja - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log {#action-wumtproviderlog}

Wyzwala się, gdy dostawca (provider) zapisuje wiadomość w dzienniku.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $message | `string` | Wiadomość logowania. |
| $level | `string` | Poziom logowania. |
| $context | `array` | Dodatkowy kontekst. |

### Od wersji {#since}

- 1.0.0
### Źródło {#source}

Zdefiniowane w [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) w linii 400
