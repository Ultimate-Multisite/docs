---
id: wu_mt_provider_log
title: Aksyon - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log

Ito ay tumatakbo kapag naglo-log ng mensahe ang isang provider.

## Mga Parameter {#parameters}

| Name | Type | Deskripsyon |
|------|------|-------------|
| $message | `string` | Ang mensahe na gustong i-log. |
| $level | `string` | Ang antas ng log (hal. error, warning, info). |
| $context | `array` | Mga karagdagang detalye o konteksto. |

### Mula pa noong {#since}

- 1.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) sa linya 400
