---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

Aktivieren/Deaktivieren der Cross-Domain-Single-Sign-On-Funktionalität.

Filtert diesen Wert, um Single-Sign-On vollständig auszuschalten oder bedingt zu aktivieren.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $enabled | `bool` | Soll SSO aktiviert sein? True für an, false-ish für aus. |

### Seit {#since}

- 2.0.11

### Quelle {#source}

Definiert in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) in Zeile 110


## Rückgabe {#returns}
Ob SSO aktiviert ist oder nicht.
