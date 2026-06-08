---
id: add_user_to_blog
title: Δράση - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Εκτελείται αμέσως μόλις ένας χρήστης προστίθεται σε ένα site.

## Παράμετροι

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $user_id | `int` | Αναγνωριστικό χρήστη. |
| $role | `string` | Ρόλος χρήστη. |
| $blog_id | `int` | Αναγνωριστικό blog. |

### Από

- MU: MU
### Πηγή

Ορίζεται στο [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) στην γραμμή 174
