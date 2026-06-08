---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Εκτελείται αφού καταχωρηθούν τα widgets για αυτή τη σελίδα.

Το δυναμικό μέρος του ονόματος του hook, `$this->id`, αναφέρεται στον ID της σελίδας.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $id | `string` | Ο ID της σελίδας. |
| $page_hook | `string` | Ο hook της σελίδας. |
| $page | `object` | Το αντικείμενο της σελίδας. |

### Από

- 2.4.10
### Πηγή

Ορίζεται στο [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) στην γραμμή 755
