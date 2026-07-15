---
id: wu_post_count_statuses
title: Φίλτρο - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Φίλτρο: wu_post_count_statuses

Επιτρέπει στους developers plugins να αλλάξουν ποια status των posts πρέπει να υπολογίζονται. Προε default, υπολογίζονται τα published και τα private posts.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $post_status | `array` | Η λίστα των post statuses |
| $post_type | `string` | Το post type slug |

### Από {#since}

- 1.9.1
### Πηγή {#source}

Ορίζεται στο [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) στην γραμμή 119


## Επιστρέφει {#returns}
Νέα array με τα post statuses
