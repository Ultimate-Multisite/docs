---
id: wu_domain_became_primary
title: Akcia - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Spustí sa, keď sa doména stane primárnou doménou pre web.

Táto akcia sa spustí, keď je príznak primary_domain domény nastavený na true, buď pri vytváraní novej primárnej domény, alebo pri aktualizácii existujúcej domény, aby sa stala primárnou.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Doména, ktorá sa stala primárnou. |
| $blog_id | `int` | ID blogu ovplyvneného webu. |
| $was_new | `bool` | Či ide o novo vytvorenú doménu. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) na riadku 560
