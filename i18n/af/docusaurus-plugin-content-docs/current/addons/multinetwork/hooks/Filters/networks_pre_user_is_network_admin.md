---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filter die netwerke waar 'n gebruiker die beheerder is, om die proses te kortsluit.

## Parameters

| Name | Tipe | Beskrywing |
|------|------|-------------|
| $ | `array\|bool\|null` | Lys van netwerk-ID's of vals. Enig wat nie null is nie, sal die proses kortsluit. |
| $ | `int` | Gebruiker-ID vir wie die netwerke geretourneer moet word. |

### Sedert

- 2.0.0
### Bron

Bepaald in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) op lyn 688
