---
id: wp_ultimo_skip_network_active_check
title: Suodatin - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Suodatin: wp_ultimo_skip_network_active_check

Salli kehittäjien ohittaa verkkoaktivoinnin tarkistus lyhyellä palautuksella.

Tämä on hyödyllistä käytettäessä Composer-pohjaisia ja muita mukautettuja kokoonpanoja, kuten esimerkiksi Bedrockia, joissa pluginien käyttäminen mu-plugins-muodossa on normi.

## Parametrit

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ohitetaanko tarkistus vai ei; oletuksena false. |

### Lähtien

- 2.0.0
### Lähde

Määritelty tiedostossa [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) rivillä 272


## Palauttaa
true, jos haluat ohittaa tarkistuksen, muuten false.
