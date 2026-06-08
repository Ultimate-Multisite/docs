---
id: move_site
title: Åtgärd - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Utlöses när en sida har flyttats till ett nytt nätverk.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $site_id | `int` | ID för den sida som har flyttats. |
| $old_network_id | `int` | ID för det ursprungliga nätverket för sidan. |
| $new_network_id | `int` | ID för det nätverk som sidan har flyttats till. |

### Sedan

- 1.3.0
### Källa

Definieras i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) på rad 1587
