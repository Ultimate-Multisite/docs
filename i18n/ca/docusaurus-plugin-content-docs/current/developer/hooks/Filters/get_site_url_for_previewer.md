---
id: get_site_url_for_previewer
title: Filtre - obtenir_get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtre: get_site_url_for_previewer

Permet als desenvolupadors de plugins filtrar la URL que utilitza el previewer.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| `$domain` | `string` | El domini predefinit que s'estia utilitzant ara, útil per manipulacions |
| `$domain_options` | `array` | Llista de totes les opcions de domini introduïdes en Ultimate Multisite Settings -> Network Settings -> Domain Options |

### Desde {#since}

- 1.7.2
### Font {#source}

Definid a [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) a la línia 812

## Retorns {#returns}
Nou domini que s'ha de utilitzar
