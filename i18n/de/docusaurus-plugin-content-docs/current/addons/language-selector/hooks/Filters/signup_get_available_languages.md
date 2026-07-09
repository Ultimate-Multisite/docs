---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Filtert die Liste der verfügbaren Sprachen für Registrierungen von Front-End-Websites.

Wenn ein leeres Array an diesen Hook übergeben wird, wird die Ausgabe der Einstellung im Registrierungsformular deaktiviert, und beim Erstellen der Website wird die Standardsprache verwendet. Sprachen, die noch nicht installiert sind, werden entfernt.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $available_languages | `array` | Verfügbare Sprachen. |

### Seit

- 4.4.0
### Quelle

Definiert in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) in Zeile 117
