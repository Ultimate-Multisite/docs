---
id: wu_connector_enforcement_option_keys
title: Filtar - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filtar: wu_connector_enforcement_option_keys

Filtrira popis ključeva opcija AI pružatelja koji se nameću s glavnog web-mjesta.

Dodajte ključeve opcija za prilagođene ili AI provider plugine trećih strana kako bi se njihove postavke također nasljeđivale s glavnog web-mjesta na podweb-mjestima.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $keys | `string[]` | Nazivi ključeva opcija za nametanje (već uključuje dinamički otkrivene ključeve connectora i EXTRA_PROVIDER_OPTIONS). |

### Od verzije {#since}

- 1.2.0
### Izvor {#source}

Definirano u [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) u retku 206
