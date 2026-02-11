---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Filter: signup_get_available_languages

Filtert die Liste der verfügbaren Sprachen für Front-End-Site-Anmeldungen.

Durch Übergeben eines leeren Arrays an diesen Hook wird die Ausgabe der Einstellung im Anmeldeformular deaktiviert, und die Standardsprache wird beim Erstellen der Site verwendet. Sprachen, die noch nicht installiert sind, werden entfernt.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $available_languages | `array` | Verfügbare Sprachen. |

### Seit

- 4.4.0

### Quelle

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) at line 125
