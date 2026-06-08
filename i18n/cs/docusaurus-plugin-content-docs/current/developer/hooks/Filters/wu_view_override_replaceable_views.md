---
id: wu_view_override_replaceable_views
title: Filtrační - wu_view_override_replaceable_views
sidebar_label: wu_view_override_replaceable_views
_i18n_hash: 04b3647f9de6bedf22b3533d39f13ecb
---
# Filtrační hook: wu_view_override_replaceable_views

Umožňuje vývojářům přidat další složky do seznamu nahrazitelných (replaceable).

Buďte opatrní, protože povolení dalších složek může způsobit, že se načtou zastaralé kopie namísto verzí Ultimate Multisite.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $replaceable_views | `array` | Seznam povolených složek. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L50) na řádku 50

## Vrátí
