---
id: wu_checkout_form_base_domains
title: Filtre - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtre: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtra els dominis base compartits del formulari de checkout que no s’haurien de convertir en registres de dominis mapats.

Utilitzeu aquest filtre quan una integració proporciona dominis base addicionals per als camps **URL del lloc** del formulari de checkout. Els dominis retornats per aquest filtre es tracten com a amfitrions de registre compartits en lloc de dominis personalitzats per lloc.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $domains | `array` | Dominis base compartits recollits de la configuració del formulari de checkout. |

### Des de {#since}

- 2.13.0

### Font {#source}

Definit a `inc/functions/domain.php`.


## Retorna {#returns}

Array de dominis base normalitzats del formulari de checkout.
