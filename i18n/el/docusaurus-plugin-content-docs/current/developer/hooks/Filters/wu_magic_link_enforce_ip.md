---
id: wu_magic_link_enforce_ip
title: Φίλτρο - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Ελέγχει αν πρέπει να επιβάλλεται η επαλήθευση της διεύθυνσης IP.

Αν το ρυθμίσετε σε `false`, επιτρέπεται στα tokens να λειτουργούν από διαφορετικά δίκτυα. Αυτό μειώνει την ασφάλεια, αλλά αυξάνει τη χρηστικότητα (π.χ., για χρήστες κινητών που αλλάζουν δίκτυα).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Αν πρέπει να επιβάλλεται η αντιστοίληση της διεύθυνσης IP. |

### Since {#since}

- 2.0.0
### Source {#source}

Ορίζεται στο [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) στην γραμμή 422
