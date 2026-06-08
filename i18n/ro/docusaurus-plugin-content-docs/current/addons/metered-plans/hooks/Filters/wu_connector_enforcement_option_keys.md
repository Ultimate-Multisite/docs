---
id: wu_connector_enforcement_option_keys
title: Filtru - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

Filtrează lista de chei de opțiuni ale furnizorului de AI impuse de pe site-ul principal.

Adaugă chei de opțiuni pentru plugin-uri personalizate sau de terță parte ale furnizorilor de AI, astfel încât și setările acestora să fie moștenite de pe site-ul principal pe subsite-uri.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $keys | `string[]` | Numele cheilor de opțiuni de impus (include deja cheile de conector descoperite dinamic și EXTRA_PROVIDER_OPTIONS). |

### De la

- 1.2.0
### Sursă

Definit în [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) la linia 206
