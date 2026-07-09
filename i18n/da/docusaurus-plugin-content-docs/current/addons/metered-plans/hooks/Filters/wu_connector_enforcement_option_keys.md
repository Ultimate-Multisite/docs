---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtrer listen over AI-udbyderens indstillingsnøgler, der håndhæves fra hovedwebstedet.

Tilføj indstillingsnøgler for tilpassede AI-udbyderudvidelser eller tredjepartsudvidelser, så deres indstillinger også arves fra hovedwebstedet på underwebsteder.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $keys | `string[]` | Navne på indstillingsnøgler, der skal håndhæves (inkluderer allerede dynamisk fundne connector-nøgler og EXTRA_PROVIDER_OPTIONS). |

### Siden

- 1.2.0
### Kilde

Defineret i [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) på linje 206
