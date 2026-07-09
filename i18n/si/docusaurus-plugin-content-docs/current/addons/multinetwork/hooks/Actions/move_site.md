---
id: move_site
title: ක්‍රියාව - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# ක්‍රියාව: move_site {#action-movesite}

site එක නව ජාලයකට ගෙන ගිය පසු ක්‍රියාත්මක වේ.

## පරාමිතීන් {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ගෙන ගිය site එකේ ID. |
| $old_network_id | `int` | site එක සඳහා වූ මුල් ජාලයේ ID. |
| $new_network_id | `int` | site එක ගෙන ගිය ජාලයේ ID. |

### සිට {#since}

- 1.3.0
### මූලාශ්‍රය {#source}

1587 වන පේළියේ [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) තුළ අර්ථ දක්වා ඇත.
