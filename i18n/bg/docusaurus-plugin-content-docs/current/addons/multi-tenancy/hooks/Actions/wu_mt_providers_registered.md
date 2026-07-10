---
id: wu_mt_providers_registered
title: Действие - wu_mt_providers_registered
sidebar_label: wu_mt_providers_registered
_i18n_hash: 20d07d793895ff5da997696e1fc94f5d
---
# Action: wu_mt_providers_registered {#action-wumtprovidersregistered}

Се активира след като стандартните доставчици са регистрирани.

Използвайте този hook, за да регистрирате персонализирани доставчици.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $manager | `\Provider_Manager` | Инстанцията на мениджъра на доставчиците. |

### От {#since}

- 1.0.0
### Източник {#source}

Дефиниран в [`inc/managers/class-provider-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/managers/class-provider-manager.php#L93) на линия 93
