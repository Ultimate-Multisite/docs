---
id: wu_connector_enforcement_option_keys
title: Salain - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

I-filter ang listahan ng mga option key ng AI provider na ipinapatupad mula sa pangunahing site.

Magdagdag ng mga option key para sa custom o third-party na mga AI provider plugin upang ang kanilang mga setting ay mamana rin mula sa pangunahing site sa mga subsite.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $keys | `string[]` | Mga pangalan ng option key na ipapatupad (kasama na ang mga dynamic na natuklasang connector key at EXTRA_PROVIDER_OPTIONS). |

### Mula noong

- 1.2.0
### Pinagmulan

Tinukoy sa [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) sa linya 206
