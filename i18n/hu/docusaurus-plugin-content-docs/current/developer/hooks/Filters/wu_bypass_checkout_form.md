---
id: wu_bypass_checkout_form
title: Szűrő - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# Filter: wu_bypass_checkout_form

A fejlesztőknek engedi, hogy kihagják az alapértelmezett kimenetet, és sajátukat állítsanak be.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $bypass | `string\|bool` | Ha kihagyni kell a checkout formot, vagy egy szöveg (string), amit a form helyett vissza kell adni. |
| $atts | `array` | A checkout blokk/shortcode paraméterei. |

### Forrás {#source}

Meghatározva a [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) fájlban, 327-es sorban.
