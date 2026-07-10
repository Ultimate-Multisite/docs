---
id: wu_mt_provider_log
title: Handling - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log {#action-wumtproviderlog}

Utløses når en leverandør logger en melding.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $message | `string` | Loggmeldingen. |
| $level | `string` | Loggnivået. |
| $context | `array` | Ytterligere kontekst. |

### Siden {#since}

- 1.0.0
### Kilde {#source}

Definert i [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) på linje 400
