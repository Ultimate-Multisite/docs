---
id: move_site
title: פעולה - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

מופעל לאחר שהאתר הועבר לרשת חדשה.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | מזהה האתר שהועבר. |
| $old_network_id | `int` | מזהה הרשת המקורית של האתר. |
| $new_network_id | `int` | מזהה הרשת שאליה הועבר האתר. |

### מאז {#since}

- 1.3.0
### מקור {#source}

מוגדר ב-[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) בשורה 1587
