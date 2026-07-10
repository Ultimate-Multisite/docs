---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Triggas när ett domän blir det primära domännamnet för en webbplats.

Denna action utlöses när en domäns `primary_domain`-flagga sätts till sant, antingen vid skapandet av ett nytt primärt domännamn eller när ett befintligt domännamn uppdateras för att bli primärt.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Det domän som blev primärt. |
| $blog_id | `int` | Blogg-ID:t för den berörda webbplatsen. |
| $was_new | `bool` | Om det är ett nyskapat domännamn. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) på rad 560
