---
id: get_site_url_for_previewer
title: Filtr - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtr: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Pozwala deweloperom pluginów na filtrowanie URL używanego w podglądzie (previewer).

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $domain | `string` | Aktualnie używana domena, przydatna do manipulacji |
| $domain_options | `array` | Lista wszystkich opcji domen wprowadzonych w Ustawienia Ultimate Multisite -> Ustawienia sieciowe -> Opcje domen |

### Od {#since}

- 1.7.2
### Źródło {#source}

Zdefiniowane w [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) w linii 812

## Zwraca {#returns}
Nowa domena, która ma być użyta
