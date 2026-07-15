---
id: wu_pending_network_published
title: Toiminto - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Käynnistyy sen jälkeen, kun odottava verkosto on julkaistu.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Luotu verkosto. |
| $membership | `\WP_Ultimo\Models\Membership` | Jäsenyys. |
| $pending_network | `array` | Alkuperäiset odottavan verkoston tiedot. |

### Lähde {#source}

Määritelty tiedostossa [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) rivillä 1815
