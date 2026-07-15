---
id: wp_ultimo_skip_network_active_check
title: Filtras - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filtras: wp_ultimo_skip_network_active_check

Leidžia kūrėjams apeiti tinklo aktyvavimo patikrą.

Tai naudinga naudojant composer pagrįstas ir kitas pasirinktines sąrankas, pavyzdžiui, Bedrock, kur pluginų naudojimas kaip mu-plugins yra įprastas.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ar turėtume praleisti patikrą, ar ne; numatytoji reikšmė yra false. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) 272 eilutėje


## Grąžina {#returns}
true, jei norite praleisti patikrą, kitu atveju false.
