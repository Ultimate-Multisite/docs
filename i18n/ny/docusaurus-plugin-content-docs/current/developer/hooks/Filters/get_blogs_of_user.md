---
id: get_blogs_of_user
title: Fyuluta - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Imabwereza WP Filter yoyambirira pano, kuti zikhale bwino.

Imasefa mndandanda wa ma site omwe user ali nawo.

## Ma parameter

| Name | Type | Kufotokozera |
|------|------|-------------|
| $sites | `object[]` | Array ya ma object a site omwe ali a user. |
| $user_id | `int` | ID ya user. |
| $all | `bool` | Kaya array ya ma site yobwezedwa iyenera kukhala ndi ma site onse, kuphatikizapo omwe alembedwa kuti 'deleted', 'archived', kapena 'spam'. Default ndi false. |

### Kuyambira

- 2.0.11
### Gwero

Yafotokozedwa mu [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) pa mzere 851
