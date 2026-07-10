---
id: move_site
title: عمل - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

وروسته له هغه فعالېږي چې یو سایټ یوې نوې شبکې ته لېږدول شوی وي.

## پارامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $site_id | `int` | د هغه سایټ ID چې لېږدول شوی دی. |
| $old_network_id | `int` | د سایټ د اصلي شبکې ID. |
| $new_network_id | `int` | د هغې شبکې ID چې سایټ ورته لېږدول شوی دی. |

### له نسخې راهیسې {#since}

- 1.3.0
### سرچینه {#source}

په [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) کې په 1587 کرښه تعریف شوی.
