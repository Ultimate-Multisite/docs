---
id: wu_domain_became_primary
title: Toiming - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Käivitub, kui domeen muutub saidi peamiseks domeeniks.

See action käivitatakse, kui domeeni primary_domain lipp seatakse väärtusele true, kas uue peamise domeeni loomisel või olemasoleva domeeni uuendamisel peamiseks.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | The domain that became primary. |
| $blog_id | `int` | The blog ID of the affected site. |
| $was_new | `bool` | Whether this is a newly created domain. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) real 560
