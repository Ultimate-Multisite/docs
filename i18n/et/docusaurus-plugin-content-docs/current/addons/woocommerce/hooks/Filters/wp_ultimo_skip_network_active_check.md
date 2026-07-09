---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Võimaldab arendajatel võrgu aktiveerimise kontrollist mööda minna.

See on kasulik composeripõhiste ja muude kohandatud seadistuste kasutamisel, näiteks Bedrocki puhul, kus pluginate kasutamine mu-pluginsina on tavapärane.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Kas peaksime kontrolli vahele jätma või mitte; vaikimisi false. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) real 272


## Tagastab
true, kui soovid kontrolli vahele jätta, vastasel juhul false.
