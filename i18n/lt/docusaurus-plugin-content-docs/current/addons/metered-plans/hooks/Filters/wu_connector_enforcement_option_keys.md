---
id: wu_connector_enforcement_option_keys
title: Filtras - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filtras: wu_connector_enforcement_option_keys

Filtruoja AI tiekėjo parinkčių raktų sąrašą, privalomai taikomą iš pagrindinės svetainės.

Pridėkite parinkčių raktus pasirinktiniams arba trečiųjų šalių AI tiekėjo įskiepiams, kad jų nustatymai taip pat būtų paveldimi iš pagrindinės svetainės antrinėse svetainėse.

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $keys | `string[]` | Privalomai taikomų parinkčių raktų pavadinimai (jau apima dinamiškai aptiktus connector raktus ir EXTRA_PROVIDER_OPTIONS). |

### Nuo

- 1.2.0
### Šaltinis

Apibrėžta [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) 206 eilutėje
