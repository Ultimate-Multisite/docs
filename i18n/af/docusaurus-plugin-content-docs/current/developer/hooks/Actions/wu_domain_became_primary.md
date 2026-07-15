---
id: wu_domain_became_primary
title: Aksie - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Aksie: wu_domain_became_primary

Word geaktiveer wanneer 'n domein die primêre domein vir 'n webwerf word.

Hierdie aksie word geaktiveer wanneer die `primary_domain` vlag van 'n domein op waar gestel word, of dit nou is wanneer 'n nuwe primêre domein geskep word of wanneer 'n bestaande domein primêr opgedateer word.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Die domein wat primêr geword het. |
| $blog_id | `int` | Die blog-ID van die webwerf wat betref. |
| $was_new | `bool` | Of dit 'n nuut geskepde domein is. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Benoem in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) op lyn 560
