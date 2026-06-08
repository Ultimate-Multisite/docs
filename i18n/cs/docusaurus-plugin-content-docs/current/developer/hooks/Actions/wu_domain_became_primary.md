---
id: wu_domain_became_primary
title: Akce - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Spustí se, když doména získá status primární domény pro web.

Tato akce se spustí, když je nastaveno znaménko `primary_domain` na `true`, ať už při vytváření nové primární domény, nebo při aktualizaci stávající domény, aby se stala primární.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Doména, která se stala primární. |
| $blog_id | `int` | ID blogu dotčeného webu. |
| $was_new | `bool` | Zda se jedná o nově vytvořenou doménu. |

### Since

- 2.0.0
### Source

Definováno v [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) na řádku 560
