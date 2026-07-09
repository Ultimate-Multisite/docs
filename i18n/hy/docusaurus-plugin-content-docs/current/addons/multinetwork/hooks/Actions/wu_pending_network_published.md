---
id: wu_pending_network_published
title: Գործողություն - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Գործողություն՝ wu_pending_network_published

Գործարկվում է այն բանից հետո, երբ սպասող ցանցը հրապարակվում է։

## Պարամետրեր

| Անուն | Տիպ | Նկարագրություն |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Ստեղծված ցանցը։ |
| $membership | `\WP_Ultimo\Models\Membership` | Անդամակցությունը։ |
| $pending_network | `array` | Սկզբնական սպասող ցանցի տվյալները։ |

### Աղբյուր

Սահմանված է [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815)-ում՝ 1815-րդ տողում
