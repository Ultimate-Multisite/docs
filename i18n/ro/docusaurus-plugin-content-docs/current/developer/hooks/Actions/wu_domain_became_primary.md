---
id: wu_domain_became_primary
title: Acțiune - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Se declanșează când un domeniu devine domeniul principal pentru un site.

Acțiunea este declanșată atunci când flag-ul `primary_domain` al unui domeniu este setat pe `true`, fie la crearea unui domeniu principal nou, fie la actualizarea unui domeniu existent pentru a deveni principal.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domeniul care a devenit principal. |
| $blog_id | `int` | ID-ul blogului site-ului afectat. |
| $was_new | `bool` | Dacă este un domeniu nou creat. |

### Since {#since}

- 2.0.0
### Source {#source}

Definit în [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) la linia 560
