---
id: add_user_to_blog
title: Δράση - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog {#action-addusertoblog}

Εκτελείται αμέσως μόλις ένας χρήστης προστίθεται σε ένα site.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $user_id | `int` | Αναγνωριστικό χρήστη. |
| $role | `string` | Ρόλος χρήστη. |
| $blog_id | `int` | Αναγνωριστικό blog. |

### Από {#since}

- MU: MU
### Πηγή {#source}

Ορίζεται στο [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) στην γραμμή 174
