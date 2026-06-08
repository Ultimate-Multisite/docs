---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Szűrő: get_site_url_for_previewer

Engedélyezi a plugin fejlesztőknek a előnézetben használt URL szűrőzését.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $domain | `string` | A jelenleg használt alapértelmezett tartomány, hasznos manipulációkhoz. |
| $domain_options | `array` | Lista az összes tartomány opcióból, amelyet az Ultimate Multisite Beállítások -> Hálózatbeállítások -> Tartományopciók alatt adtak meg. |

### Since

- 1.7.2
### Source

Definíciója található [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) fájlban, 812-sorban.


## Várható visszaadás
A használni kívánt új tartomány.
