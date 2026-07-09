---
id: move_site
title: ક્રિયા - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

જ્યારે કોઈ સાઇટને નવા નેટવર્કમાં ખસેડવામાં આવે છે, ત્યારે આ એક્શન ચાલે છે.

## પેરામીટર્સ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | જે સાઇટને ખસેડવામાં આવી છે તેનો ID. |
| $old_network_id | `int` | સાઇટના મૂળ નેટવર્કનો ID. |
| $new_network_id | `int` | જે નેટવર્કમાં સાઇટ ખસેડવામાં આવી છે તેનો ID. |

### ક્યારથી {#since}

- 1.3.0
### સ્ત્રોત {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) માં લાઇન 1587 પર વ્યાખ્યાયિત.
