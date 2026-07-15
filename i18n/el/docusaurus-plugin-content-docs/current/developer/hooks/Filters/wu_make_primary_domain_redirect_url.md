---
id: wu_make_primary_domain_redirect_url
title: Φίλτρο - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Φιλτράρει τη διεύθυνση ανακατεύθυνσης (redirect URL) αφού γίνει ένα domínio κύριο.

Επιτρέπει στους developers να προσαρμόσουν σε ποια διεύθυνση ανακατεύθνονται οι χρήστες αφού καταφέρουν να ορίσουν ένα domínio ως κύριο. Προε default, η ανακατεύθυνση γίνεται στην τρέχουσα URL της κύριας σελίδας, ή στην admin URL της σελίδας που τροποποιείται.

## Παράμετροι {#parameters}

| Όνομα | Τύπος | Περιγραφή |
|------|------|-------------|
| $redirect_url | `string` | Η προεπιλεγμένη διεύθυνση ανακατεύθυνσης. Είτε η τρέχουσα URL (αν πρόκειται για την κύρια σελίδα) είτε η admin URL της τρέχουσας σελίδας. |
| $current_site | `int` | Ο ID της σελίδας του οποίου το domínio γίνεται κύριο. |
| $domain | `\Domain` | Το αντικείμενο domínio που έγινε κύριο. |
| $old_primary_domains | `array` | Πίνακας (array) των IDs των τομέων που ήταν προηγουμένως κύριοι. |

### Από {#since}

- 2.0.0
### Πηγή {#source}

Ορίζεται στο [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) στην γραμμή 639

## Επιστρέφει {#returns}
Τη φιλτραρισμένη διεύθυνση ανακατεύθυνσης.
