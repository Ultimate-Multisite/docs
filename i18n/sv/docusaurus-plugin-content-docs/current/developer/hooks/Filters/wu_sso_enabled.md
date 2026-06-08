---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Aktiverar/inaktiverar möjligheten till single sign-on över domäner.

Du kan filtrera detta värde för att stänga av single sign-on helt, eller för att aktivera det villkorligt istället.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $enabled | `bool` | Ska SSO vara aktiverat? `True` för på, `false` för av. |

### Sedan

- 2.0.11
### Källa

Definieras i [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) på rad 110


## Returnerar
Om SSO är aktiverat eller inte.
