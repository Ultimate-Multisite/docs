---
id: wu_membership_pre_cancel
title: Akció - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Akció: wu_membership_pre_cancel

Elfoglalja az akciót, mielőtt a tagság lemondásra kerül.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $membership_id | `int` | A tagság azonosítója. |
| $membership | `\WP_Ultimo\Models\Membership` | Tagság objektum. |

### Mivel {#since}

- 2.0
### Forrás {#source}

Meghatározva a [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) fájlban, 2267-sorban.
