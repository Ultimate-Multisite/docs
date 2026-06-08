---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

I-filter ang listahan ng mga option key ng AI provider na ipinapatupad mula sa main site.

Magdagdag ng mga option key para sa custom o third-party AI provider plugins para na-i-inherit din ang kanilang mga settings mula sa main site sa mga subsites.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Mga pangalan ng option key na ipinapatupad (kasama na ang mga dynamically discovered connector keys at EXTRA_PROVIDER_OPTIONS). |

### Since

- 1.2.0
### Source

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
